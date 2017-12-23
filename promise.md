# `Promise__` 与 `Google Chrome` 中 `Promise` 的异同

以下比较结果在 `Google Chrome 52.0.2743.116 m` 中得出。

- 不同处

``` javascript
var p1 = new Promise(function () { });
console.log(p1 instanceof Promise); //true
console.log('then' in Promise.prototype); //true
console.log('catch' in Promise.prototype); //true
var p2 = Promise(function(){ }); //TypeError
//可以直接在控制台观察 p1 的状态
p1;

var p1_ = new Promise__(function () { });
console.log(p1 instanceof Promise__); //false
console.log('then' in Promise__.prototype); //false
console.log('catch' in Promise__.prototype); //false
var p2_ = Promise__(function () { }); //ok
//需要调用方法来获得当前状态
p1_.getPromiseStatus();
p1_.getPromiseValue();


var p3 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('p3');
    }, 1000);
});
var p4 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('p4');
    }, 1000);
});
//对象可以冒充
p3.then.call(p4, function (result) {
    console.log(result); //打印 p4
});

var p3_ = new Promise__(function (resolve) {
    setTimeout(function () {
        resolve('p3_');
    }, 1000);
});
var p4_ = new Promise__(function (resolve) {
    setTimeout(function () {
        resolve('p4_');
    }, 1000);
});
//对象不可以冒充
p3_.then.call(p4_, function (result) {
    console.log(result); //打印 p3_
});


var p5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('p5');
    }, 1000);
});
var p6 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('p6');
    }, 1000);
});
//对象可以冒充
p5.catch.call(p6, function (result) {
    console.log(result);
});
//p5 异常未捕获
//打印 p6

var p5_ = new Promise__(function (resolve, reject) {
    setTimeout(function () {
        reject('p5_');
    }, 1000);
});
var p6_ = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('p6_');
    }, 1000);
});
//对象不可以冒充
p5_.catch.call(p6_, function (result) {
    console.log(result);
});
//p6 异常未捕获
//打印 p5
```

- 相同处

## 异步 `resolve` 后绑定 `then`

``` javascript
var p = new Promise__(function (resolve, reject) {
    setTimeout(function () {
        resolve(1);
    }, 1000);
});
console.log(1);
p.then(function (v) {
    console.log('t1:' + v);
    return ++v;
}).then(function (v) {
    console.log('t1:' + v);
    return ++v;
});
console.log(2);
p.then(function (v) {
    console.log('t2:' + v);
}).then(function (v) {
    console.log('t2:' + v);
});
console.log(3);
//打印
//1
//2
//3
//一秒后打印
//t1:1
//t2:1
//t1:2
//t2:undefined
```

## 同步 `resolve` 后绑定 `then`

``` javascript
var p = new Promise__(function (resolve, reject) {
    resolve(1);
});
console.log(1);
p.then(function (v) {
    console.log('t1:' + v);
    return ++v;
}).then(function (v) {
    console.log('t1:' + v);
    return ++v;
});
console.log(2);
p.then(function (v) {
    console.log('t2:' + v);
}).then(function (v) {
    console.log('t2:' + v);
});
console.log(3);
//打印
//1
//2
//3
//t1:1
//t2:1
//t1:2
//t2:undefined
```

## 异步 `resolve` 先绑定 `then`

``` javascript
new Promise__(function (resolve) {
    setTimeout(function () {
        resolve(1);
    }, 1000);
}).then(function (v) {
    console.log(v);
    return ++v;
}).then(function (v) {
    console.log(v);
    return ++v;
});
//一秒后打印
//1
//2
```

## 同步 `resolve` 先绑定 `then`

``` javascript
var p = new Promise__(function (resolve) {
    resolve(1);
}).then(function (v) {
    console.log(v);
    return ++v;
}).then(function (v) {
    console.log(v);
    return ++v;
});
//打印
//1
//2
```

## `Promise.resolve`

``` javascript
Promise__.resolve(1).then(function (v) {
    console.log(v);
    return ++v;
}).then(function (v) {
    console.log(v);
    return ++v;
});
//打印
//1
//2
```

## `Promise.reject`

``` javascript
Promise__.reject(1).then(null, function (e) {
    console.log(e);
    return e;
});
Promise__.reject(1).catch(function (e) {
    console.log(e);
    return e;
});
```

## `Promise.all`
所有的都 `resolve` 则 `onFulfilled` 所有结果的数组，如有一个 `reject` 则 `onRejected`

``` javascript
Promise__.all([
    new Promise__(function (resolve, reject) {
        setTimeout(function () {
            resolve(1);
        }, 1000);
    }),
    new Promise__(function (resolve, reject) {
        setTimeout(function () {
            resolve(2);
        }, 3000);
    }),
    new Promise__(function (resolve, reject) {
        setTimeout(function () {
            resolve(3);
        }, 2000);
    })
]).then(function (arr) {
    console.log('result:' + arr);
}, function (err) {
    console.log('err:' + err);
});
```

## `Promise.race`
不分 `onFulfilled` 与 `onRejected` ，最先响应的 `Promise` 进入 `then` 链。

``` javascript
Promise__.race([
    new Promise__(function (resolve, reject) {
        setTimeout(function () {
            resolve(1);
        }, 1000);
    }),
    new Promise__(function (resolve, reject) {
        setTimeout(function () {
            resolve(2);
        }, 3000);
    }),
    new Promise__(function (resolve, reject) {
        setTimeout(function () {
            reject(3);
        }, 2000);
    })
]).then(function (arr) {
    console.log('result:' + arr);
}, function (err) {
    console.log('err:' + err);
});
```