# 这是什么？

这是一个可以在 **浏览器** 或 **nodejs** 中使用的工具类库。
所有的方法直接绑定到全局变量 **window** 或 **global** 中。
for...in 迭代未做 hasOwnProperty 判断，
不能在 Object.prototype 被污染的环境中正常使用。

其中提供的 **function** 或者说污染的 **全局变量** 有：
[isSth](#issth)

[eachAsync](#eachasync)

[uniq](#uniq)

[range](#range)

[safeHTML](#safehtml)

[processor](#processor)

[getObj](#getobj)

[setObj](#setobj)

[curry](#curry)

[defaults](#defaults)

[keys](#keys)

[delay](#delay)

[promiseify](#promiseify)

[unpromiseify](#unpromiseify)

[createArr](#createarr)

[onceFn](#oncefn)

[callSlice](#callslice)

[likeObj](#likeobj)

[getFirstDefined](#getFirstdefined)

[each](#each)

[any](#any)

[extend](#extend)

[map](#map)

[clone](#clone)

[uncurryCall](#uncurrycall)

[uncurryApply](#uncurryapply)

[format](#format)

[formatString](#formatstring)

[formatDate](#formatdate)

[strFill](#strfill)

[formatMoney](#formatmoney)

[nextTick](#nexttick)

[Promise](#promise)

[Promise__](#promise__)

[go](#go)

[eachGen](#eachgen)

[retry](#retry)

其中污染的 **prototype** 有：
[RegExp.prototype.run](#regexpprototyperun)

[RegExp.prototype.exec](#eegexpprototypeexec)

[Date.prototype.format](#dateprototypeformat)

[Function.prototype.bind](#functionprototypebind)

[String.prototype.format](#stringprototypeformat)

[String.prototype.reverse](#stringprototypereverse)

[String.prototype.formatMoney](#stringprototypeformatmoney)

[Number.prototype.formatMoney](#numberprototypeformatmoney)

# 这有什么用？ DEMO

## isSth
包括
isNull,
isUndefined,
isBoolean,
isRegExp,
isFunction,
isArray,
isObject,
isNumber,
isString,
isDate
使用 Object.prototype.toString.call() 判断

``` javascript
isBoolean(true);
//返回 true
isBoolean(1);
//返回 false
```

## eachAsync
``` javascript
eachAsync([1, 2, 3, 4, 5, 6, 7, 8], function (next, value, key, arr) {
    setTimeout(function () {
        console.log(value);
        next();
    }, 1000);
}, 3, function () {
    console.log('done');
});
//1秒后输出 1 2 3
//再1秒后输出 4 5 6
//再1秒后输出 7 8 done

//eachAsync(Array, function|function*[, limit], function);
//其中第二个参数可以为Generator Function
//其中第三个参数可以省略，默认值为第一个参数的长度
```

## uniq
返回没有重复值的新数组

``` javascript
uniq([1, 1, 2, 3, 5, 6, 3]);
//返回 [1, 2, 3, 5, 6]
```

## range
``` javascript
range(-10, 10);
//返回-10至10之间的随机整数，包括-10与10
```

## safeHTML
``` javascript
//对输入的字符串中的 &<>"`\' 进行转义，
safeHTML('&<script>"`\'');
//返回 "&#x26;&#x3c;script&#x3e;&#x22;&#x60;&#x27;"
```

## processor
``` javascript
window.onresize = processor(function () {
    console.log('onresize');
    return 'done';
}, function (result) {
    console.log(result);
}, 300);
//改变窗口大小时不会迅速的打印onresize

//processor(function[, function], milliseconds)
//第二个回调函数是可选的
//偷懒的毫秒数默认为400ms
```

## getObj
``` javascript
var obj = {
    attr: {
        attr1: 'attr1 value'
    },
    attr2: 'attr2 value',
    arr: ['a', 'b']
};
getObj(obj, 'attr.attr1');
//返回 "attr1 value"
getObj(obj, 'attr2.attr3');
//返回 null
getObj(obj, 'arr.1');
//返回 "b"

//安全的取出属性值
//注意：如果取数组下标不需要加[]
```

## setObj
``` javascript
var obj = {};
setObj(obj, 'rookieking.github.io', 'welcome');
console.log(obj.rookieking.github.io);
//输出 welcome
```

## curry
柯里化

``` javascript
function sum() {
    for (var i = 0, len = arguments.length, _sum = 0; i < len; i++) {
        _sum += arguments[i];
    }
    return _sum;
}
var currySum = curry(sum);
currySum(1)(2)(3, 4)
currySum();
currySum(5);
currySum(6, 7)();
currySum.clear(); //注意清理内存！
```

## defaults
``` javascript
var setting = {
    option1: true,
    option2: true
};
var setting1 = {
    option1: false
};
var setting2 = {
    option3: false
};
defaults(setting, setting1, setting2);
setting.option1; //返回 true
setting.option3; //返回 false
```

## keys
``` javascript
keys(['a', 'b', 'c']);
//返回 [0, 1, 2]
keys({
    a: 1,
    b: 2,
    c: 3
});
//返回 ["a", "b", "c"]
```

## delay
返回 Promise

``` javascript
delay(1000);
//返回 Promise 对象， 1000 毫秒后执行 resolve
delay(1000).then(function () {
    console.log('delay done');
});
//注意：如果没有 Promise 时调用将报错
```

## promiseify
返回 Promise

``` javascript
//例一
function getData(url, callback) {
    setTimeout(function () {
        callback(null, ['a', 'b']);
    }, 1000);
}
var getDataYield = promiseify(getData);
getDataYield('url').then(function (result) {
    console.log(result);
});
//例二
function getData2(url, callback) {
    setTimeout(function () {
        callback(null, 'a', 'b');
    }, 1000);
}
var getDataYield2 = promiseify(getData2, true);
getDataYield2('url').then(function (result) {
    console.log(result);
});
//注意：如果没有 Promise 时调用将报错
```

## unpromiseify
``` javascript
function getDatePromise(url) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            url === 'url'
                ? resolve(['a', 'b'])
                : reject('err');
        }, 1000);
    });
}
var getData = unpromiseify(getDatePromise);
function callback(err, result) {
    console.log(err);
    console.log(result);
}
getData('url', callback);
getData('url2', callback);
//注意：如果没有 Promise 时调用将报错
```

## go
**Generator** 函数执行器，只支持 yield Promise
返回 Promise

``` javascript
function getData(url, callback) {
    if (url === 'url3') {
        throw Error('err3'); //在 go 中可以捕获
    }
    setTimeout(function () {
        switch(url) {
            case 'url1':
                callback(null, ['a', 'b']);
                break;
            case 'url2':
                callback('err2');
                break;
            case 'url4':
                //注意！异步函数异常需要异步函数自行处理
                throw Error('err4');
                break;
            case 'url5':
                //注意！异步函数异常需要异步函数自行处理 示范：
                try {
                    throw Error('err5');
                } catch(e) {
                    callback(e);
                }
                break;
        }
    }, 1000);
}
var getDataYield = promiseify(getData);
//
go(function* () {
    try {
        var url1Result = yield getDataYield('url1');
        console.log(url1Result);
        //go 本身返回 Promise 可以嵌套使用
        var result = yield go(function* () {
            return yield getDataYield('url1');
        });
        console.log(result);
        var url3Result = yield getDataYield('url3');
        console.log(url3Result);
    } catch (e) {
        console.log(e);
    }
});
//缺省异常处理示例
go(function* () {
    var url1Result = yield getDataYield('url1');
    console.log(url1Result);
    var url2Result = yield getDataYield('url2');
    console.log(url2Result);
}).catch(function (err) {
    //缺省异常处理
    console.log(err);
});
//不能捕获的异常示例
go(function* () {
    try {
        var url4Result = yield getDataYield('url4');
        console.log(url4Result);
    } catch (e) {
        //不能抓到异常
        console.log(e);
    }
}).catch(function (err) {
    //也不能抓到异常
    console.log(err);
});
//注意：如果没有 Promise 时调用将报错
```

## createArr
``` javascript
createArr(5);
//返回 [0, 1, 2, 3, 4]
```

## onceFn
``` javascript
var onlyOne = onceFn(function (arg) {
    console.log('called:' + arg);
});
onlyOne(1);
onlyOne(2);
onlyOne(3);
onlyOne(4);
//只会打印 called:1
```

## callSlice
``` javascript
callSlice({0: 'a', 1: 'b', 2: 'c', length: 3});
//返回 ["a", "b", "c"]
callSlice({0: 'a', 1: 'b', 2: 'c', length: 3}, 1);
//返回 ["b", "c"]
callSlice(['a', 'b', 'c'], 1);
//返回 ["b", "c"]

//等同于 Array.prototype.slice.call
```

## likeObj
``` javascript
likeObj([]);
//返回 true
likeObj({});
//返回 true
```

## getFirstDefined
返回第一个非 undefined 的值

``` javascript
getFirstDefined(undefined, null, 1);
//返回 null
getFirstDefined(1, null);
//返回 1
getFirstDefined(undefined, false, 1);
//返回 false
getFirstDefined(undefined);
//返回 undefined
```

## each
``` javascript
function iterator (value, key) {
    if (key === 3) return true; //return true 则跳出跌代
    console.log('key:' + key + ', value:' + value);
}
each(['a', 'b'], iterator);
each({a: 1, b: 2}, iterator);
each(['a', 'b', 'c'], iterator);
```

## any
按条件搜索，如果条件返回 true 则 any 返回 true

``` javascript
if (any(['a', 'b'], function (value, key) {
    if (value === 'b') return true;
})) {
    console.log('exist b');
} else {
    console.log('b does not exist');
}
```

## extend
未加 **hasOwnProperty** 处理
如果可以的话，建议使用 **Object.assign** 代替

``` javascript
var setting = {
    option1: 1,
    option2: 2,
    option3: 3
};
extend(setting, {
    option1: 4,
    option2: 5
}, {
    option1: 6,
    option4: 7
});
console.log(setting);
```

## map
``` javascript
map([1, 2], function (value, key) {
    return value * 2;
});
//返回新的数组 [2, 4]
map({a: 1, b: 2}, function (value, key) {
    return value * 2;
});
//返回新的对象 {a: 2, b: 4}
```

## clone
``` javascript
var obj = {a: 1, b: {b1: 2}};
var newObj = clone(obj);
newObj.b.b1 = 3;
console.log(obj.b.b1);
console.log(newObj.b.b1);
//注意！不要尝试对类似下面的结构进行 clone
var stackMax = {};
stackMax.attr = stackMax;
clone(stackMax);
```

## uncurryCall
``` javascript
var slice = uncurryCall([].slice);
slice([1, 2, 3], 1);
//返回 [2, 3]
var callConcat = uncurryCall([].concat);
callConcat([1], 2, 3);
//返回 [1, 2, 3]
```

## uncurryApply
``` javascript
var applyConcat = uncurryApply([].concat);
applyConcat([1], [2, 3]);
//返回 [1, 2, 3]
```

## format
format(String|Date)

如果第一个参数是 **Date** 实例 则相当于 [formatDate](#formatDate)

如果第一个参数是 **String** 类型 则相当于 [formatString](#formatString)

## formatString
``` javascript
var persons = [
    {name: 'jim', age: 20, sex: 1},
    {name: 'lucy', age: 21, sex: 0},
    {name: 'tom', age: 22, sex: 1},
    {name: 'lily', age: 19, sex: 0}
];
var template = '\
\n<tr>\
\n  <td>{name}</td>\
\n  <td>{age}</td>\
\n  <td>{sex}</td>\
\n</tr>';
var lines = map(map(persons, function (person) {
    person.sex = person.sex ? 'Mr.' : 'Ms.';
    return person;
}), function (person) {
    return format(template, person);
});
console.log(lines.join(''));
//打印：
//
//<tr>
//  <td>jim</td>
//  <td>20</td>
//  <td>Mr.</td>
//</tr>
//<tr>
//  <td>lucy</td>
//  <td>21</td>
//  <td>Ms.</td>
//</tr>
//<tr>
//  <td>tom</td>
//  <td>22</td>
//  <td>Mr.</td>
//</tr>
//<tr>
//  <td>lily</td>
//  <td>19</td>
//  <td>Ms.</td>
//</tr>

console.log(format('{0}--{1}', ['a', 'b']));
//打印 a--b
console.log(format('{0}--{1}', 'a', 'b'));
//打印 a--b
console.log(format('{a}--{b}', {a: 1, b: 2}));
//打印 1--2
console.log(format('{a}--{b}--{c}', {a: 1, b: 2, d: 4}));
//打印 1--2--{c}

//ES6中建议使用
var obj = {a: 1, b: 2, d: 4};
console.log(`--${obj.a}---${obj.b}--`);
```

## formatDate
``` javascript
format(new Date(1470383919783));
format(new Date(), 'yyyy-MM-dd HH:mm:ss.fff tt');
//  第二个参数的默认值为 ’yyyy-MM-dd‘
//  转换的字符列表
//    yyyy	年
//    MM	月 不足两位数补0
//    M		月
//    dd	日 不足两位数补0
//    d		日
//    HH	时 24小时制 不足两位数补0
//    H		时 24小时制
//    hh	时 12小时制 不足两位数补0
//    h		时 12小时制
//    tt	12点之前AM 12点之后PM
//    mm	分 不足两位数补0
//    m		分
//    ss	秒 不足两位数补0
//    s		秒
//    fff	毫秒 不足三位数补0
//    f		毫秒
```

## strFill
``` javascript
strFill(1);
//返回 "00"
strFill(1, 5);
//返回 "00001"
strFill(1, 5, '-');
//返回 "----1"
```

## formatMoney
注意：只转换小数点之前的

``` javascript
formatMoney(123456789.56);
formatMoney('123456789.56');
//返回 "123,456,789.56"
formatMoney(123456789.56, 4);
formatMoney('123456789.56', 4);
//返回 "1,2345,6789.56"
formatMoney(123456789.56, 4, '`');
formatMoney('123456789.56', 4, '`');
//返回 "1`2345`6789.56"
```

## eachGen
返回 Promise

``` javascript
eachGen([1, 2, 3], function* (value, key) {
    console.log(value);
    yield delay(1000);
}).then(function () {
    console.log('done');
});
//注意：如果没有 Promise 时调用将报错
```

## retry
返回 Promise

``` javascript
var getData = (function () {
    var sum = 0;
    return function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (++sum < 5) {
                    reject('就是不对：' + sum);
                } else if (sum < 10) {
                    resolve(['b', 'b']);
                } else {
                    sum = 0;
                    resolve(['a', 'b']);
                }
            }, 1000);
        });
    }
})();

retry(function* () {
    return yield getData();
}, function* (err, result, count) {
    //注意：只有该函数 return true 才会停止上面的函数继续执行
    //否则就是死循环
    console.log('已经尝试{0}次'.format(count));
    if (err) {
        console.log(err);
    } else if (getObj(result, '0') === 'a') {
        return true;
    } else {
        console.log('不是期望的结果：' + result);
    }
    if (count > 20) {
        console.log('尝试次数过多');
        return true;
    }
    yield delay(1000); //延时1秒再时行尝试
}).then(function (result) {
    console.log(result);
});
//注意：如果没有 Promise 时调用将报错
```

## RegExp.prototype.run
``` javascript
'a11111/bb2222/ccc333/dddd44/eeeee5'.replace(/([a-z]+)(\d+)/g, function ($0, $1, $2) {
    console.log('{0}:{1}-{2}'.format($0, $1, $2));
    return $0;
});
//打印
//a11111:a-11111
//bb2222:bb-2222
//ccc333:ccc-333
//dddd44:dddd-44
//eeeee5:eeeee-5

//比 replace 多了一个计数器并绑定了 this
/([a-z]+)(\d+)/g.run('a11111/bb2222/ccc333/dddd44/eeeee5', function ($0, $1, $2, count) {
    console.log('{0}:{1}-{2}|{3} {4}'.format($0, $1, $2, count, this.lastIndex));
});
//打印
//a11111:a-11111|1 6
//bb2222:bb-2222|2 13
//ccc333:ccc-333|3 20
//dddd44:dddd-44|4 27
//eeeee5:eeeee-5|5 34
```

## RegExp.prototype.exec
在 global 模式下增加了一个迭代函数
与 [RegExp.prototype.run](#RegExp.prototype.run) 不同的是 这里的match没有展开

``` javascript
/([a-z]+)(\d+)/g.exec('a11111/bb2222/ccc333/dddd44/eeeee5', function (match, count) {
    console.log('{0}:{1}-{2}|{3} {4}'.format(match[0], match[1], match[2], count, this.lastIndex));
});
//打印
//a11111:a-11111|1 6
//bb2222:bb-2222|2 13
//ccc333:ccc-333|3 20
//dddd44:dddd-44|4 27
//eeeee5:eeeee-5|5 34
```

## Date.prototype.format
请参照 [formatDate](#formatDate)

``` javascript
new Date().format('yyyy-MM-dd HH:mm:ss.fff tt');
```
## Function.prototype.bind
如果运行环境不存该函数时才新建该函数

``` javascript
var obj = {
    attr: 'jim'
};
function Test(arg1, arg2) {
    console.log(this.attr);
    console.log(callSlice(arguments));
}
var test = Test.bind(obj, 'a', 'b');
test('c', 'd');
//打印：
//jim
//["a", "b", "c", "d"]
```

## String.prototype.format
请参照 [formatString](#formatString)

``` javascript
'{0}--{1}'.format('a', 'b');
```

## String.prototype.reverse
``` javascript
"abc".reverse();
//返回 "cba"
```

## String.prototype.formatMoney
请参照 [formatMoney](#formatMoney)

``` javascript
'123456789.56'.formatMoney();
```

## Number.prototype.formatMoney
请参照 [formatMoney](#formatMoney)

``` javascript
(123456789.56).formatMoney();
```

## Promise
不会覆盖当前环境中已经存在的Promise。

## Promise__
不管当前环境中存不存在 **Promise** 都会创建 **Promise__**
该实现与 **Chrome** 的实现是绝大部分一致的，这个之后我会专门写一些例子来比较 


# 该怎么引用？

由于没有找到压缩ES6代码的工具，现在真是一个尴尬期。

包含 **Promise go eachGen retry** 但需要环境支持 **Generator Function**
[rookie.tool.js](https://raw.githubusercontent.com/rookieking/js-tool/src/rookie.tool.js)

不包含 **Promise go eachGen retry**

[rookie.tool.base.js](https://raw.githubusercontent.com/rookieking/js-tool/src/rookie.tool.base.js)

[rookie.tool.base.js](https://raw.githubusercontent.com/rookieking/js-tool/min/rookie.tool.base.js) 压缩版

包含 **Promise** 依赖 **rookie.tool.base.js**

[rookie.tool.promise.js](https://raw.githubusercontent.com/rookieking/js-tool/src/rookie.tool.promise.js)

[rookie.tool.promise.js](https://raw.githubusercontent.com/rookieking/js-tool/min/rookie.tool.promise.js) 压缩版

包含 **go eachGen retry** 依赖 **rookie.tool.base.js** 需要环境支持 **Generator Function**

[rookie.tool.generator.js](https://raw.githubusercontent.com/rookieking/js-tool/src/rookie.tool.generator.js)

包含 **Promise go eachGen retry** ，不需要环境支持 **Generator Function** ，需要引用 **runtime.js** 再通过 **babel** 转码来使用 **Generator Function**

[rookie.tool.babel.js](https://raw.githubusercontent.com/rookieking/js-tool/src/rookie.tool.babel.js)

[rookie.tool.babel.js](https://raw.githubusercontent.com/rookieking/js-tool/min/rookie.tool.babel.js) 压缩版

[runtime.js](https://raw.githubusercontent.com/rookieking/js-tool/src/runtime.js)

[runtime.js](https://raw.githubusercontent.com/rookieking/js-tool/min/runtime.js) 压缩版
