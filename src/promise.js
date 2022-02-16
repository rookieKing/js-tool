
/**
 * Promise 实现
 */

var IS_FUNCTION = isFunction,
  TRUE = true,
  PROTO = "prototype";
var pending = "pending",
  resolved = "fulfilled",
  rejected = "rejected";
function Promise(resolver) {
  if (!IS_FUNCTION(resolver)) throw TypeError("Promise resolver " + resolver + " is not a function");
  var notCalled = TRUE,
    self = new P(),
    uncaught = {},
    _ps = pending,
    _pv,
    _queue = [];
  function _onFulfilled(PromiseValue, onFulfilled, onRejected, resolve, reject) {
    var result;
    try {
      result = onFulfilled(PromiseValue);
    } catch (e) {
      reject(e);
    }
    resolve(result);
  }
  function _onRejected(PromiseValue, onFulfilled, onRejected, resolve, reject) {
    var result;
    try {
      result = onRejected(PromiseValue);
    } catch (e) {
      if (e === uncaught) {
        reject(PromiseValue);
      } else {
        reject(e);
      }
    }
    resolve(result);
  }
  function P() {
    this.getPromiseStatus = function () { return _ps; };
    this.getPromiseValue = function () { return _pv; };
  }
  P[PROTO].catch = function (onRejected) {
    return P[PROTO].then(UNDEFINED, onRejected);
  };
  P[PROTO].then = function (onFulfilled, onRejected) {
    onFulfilled = IS_FUNCTION(onFulfilled) ? onFulfilled : function (PromiseValue) {
      return PromiseValue;
    };
    onRejected = IS_FUNCTION(onRejected) ? onRejected : function () {
      throw uncaught;
    };
    return new Promise(function (resolve, reject) {
      switch (_ps) {
        case resolved:
          _onFulfilled(_pv, onFulfilled, onRejected, resolve, reject);
          break;
        case rejected:
          _onRejected(_pv, onFulfilled, onRejected, resolve, reject);
          break;
        default:
          _queue.push([onFulfilled, onRejected, resolve, reject]);
          break;
      }
    });
  };
  function createCallback(callback, is_onRejected) {
    return function () {
      function fn(PromiseValue) {
        if (notCalled) {
          notCalled = FALSE;
          _ps = is_onRejected ? rejected : resolved;
          _pv = PromiseValue;
          if (is_onRejected && !_queue[LEN]) throw "(in promise) " + PromiseValue;
          while (_queue[LEN]) {
            (function (arg) {
              nextTick(function () {
                callback[APPLY](UNDEFINED, applyConcat([PromiseValue], arg));
              });
            })(_queue.shift());
          }
        }
      }
      nextTick(fn[BIND][APPLY](fn, applyConcat([UNDEFINED], [callSlice(arguments)])));
    };
  }
  nextTick(function () {
    resolver(createCallback(_onFulfilled), createCallback(_onRejected, TRUE));
  });
  return self;
}
extend(Promise, {
  all: function (promiseArr) {
    return new Promise(function (resolve, reject) {
      var resultArr = [];
      eachAsync(promiseArr, function (next, promise, i) {
        promise.then(function (result) {
          resultArr[i] = result;
          next();
        }, function (err) {
          next(err);
        });
      }, function (err) {
        err ? reject(err) : resolve(resultArr);
      });
    });
  },
  race: function (promiseArr) {
    return new Promise(function (resolve, reject) {
      eachAsync(promiseArr, function (next, promise) {
        promise.then(function (result) {
          next(TRUE);
          resolve(result);
        }, function (err) {
          next(TRUE);
          reject(err);
        });
      });
    });
  },
  resolve: function (value) {
    return new Promise(function (resolve) {
      resolve(value);
    });
  },
  reject: function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  }
});

export default Promise;
