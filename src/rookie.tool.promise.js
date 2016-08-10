/**
 * Copyright (c) 2016, 王磊 <rookielei@gameil.com>.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * https://raw.githubusercontent.com/rookieking/js-tool/master/LICENSE file.
 */
(function (UNDEFINED) {
    "use strict";
    //跟rookie.tool.js重复
    var globalScope = typeof global !== "undefined" ? global : window,
        FALSE = !1,
        TRUE = !0,
        PROTO = "prototype",
        APPLY = "apply",
        BIND = "bind",
        LEN = "length",
        arrayProto = [],
        applyConcat = uncurryApply(arrayProto.concat),
        callSlice = uncurryCall(arrayProto.slice);
    
    var IS_FUNCTION = isFunction,
        pending = "pending",
        resolved = "resolved",
        rejected = "rejected",
        psKey = "[[PromiseStatus]]",
        pvKey = "[[PromiseValue]]",
        PromiseStatus = {};
    PromiseStatus[pending] = pending;
    PromiseStatus[resolved] = resolved;
    PromiseStatus[rejected] = rejected;
    function nextTickWrap(fn) {
        return function () {
            nextTick(fn[BIND][APPLY](fn, applyConcat([UNDEFINED], [callSlice(arguments)])));
        };
    }
    function Promise(resolver) {
        if (!IS_FUNCTION(resolver)) throw TypeError("Promise resolver " + resolver + " is not a function");
        var notCalled = TRUE, self = new P(), uncaught = {}, queue = [];
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
            this[psKey] = PromiseStatus[pending];
            this[pvKey] = UNDEFINED;
        }
        P[PROTO].catch = function (onRejected) {
            return this.then(UNDEFINED, onRejected);
        };
        P[PROTO].then = function (onFulfilled, onRejected) {
            onFulfilled = IS_FUNCTION(onFulfilled) ? onFulfilled : function (PromiseValue) {
                return PromiseValue;
            };
            onRejected = IS_FUNCTION(onRejected) ? onRejected : function (PromiseValue) {
                throw uncaught;
            };
            return new Promise(function (resolve, reject) {
                var pv = self[pvKey];
                switch (self[psKey]) {
                    case PromiseStatus[resolved]:
                        _onFulfilled(pv, onFulfilled, onRejected, resolve, reject);
                        break;
                    case PromiseStatus[rejected]:
                        _onRejected(pv, onFulfilled, onRejected, resolve, reject);
                        break;
                    default:
                        queue.push([onFulfilled, onRejected, resolve, reject]);
                        break;
                }
            });
        };
        nextTick(function () {
            resolver(nextTickWrap(function (PromiseValue) {
                if (notCalled) {
                    notCalled = FALSE;
                    self[psKey] = PromiseStatus[resolved];
                    self[pvKey] = PromiseValue;
                    while (queue[LEN]) {
                        (function (arg) {
                            nextTick(function () {
                                _onFulfilled[APPLY](UNDEFINED, applyConcat([PromiseValue], arg));
                            });
                        })(queue.shift());
                    }
                }
            }), nextTickWrap(function (PromiseValue) {
                if (notCalled) {
                    notCalled = FALSE;
                    self[psKey] = PromiseStatus[rejected];
                    self[pvKey] = PromiseValue;
                    if (!queue[LEN]) throw "(in promise) " + PromiseValue;
                    while (queue[LEN]) {
                        (function (arg) {
                            nextTick(function () {
                                _onRejected[APPLY](UNDEFINED, applyConcat([PromiseValue], arg));
                            });
                        })(queue.shift());
                    }
                }
            }));
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
                eachAsync(promiseArr, function (next, promise, i) {
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
            return new Promise(function (resolve, reject) {
                resolve(value);
            });
        },
        reject: function (value) {
            return new Promise(function (resolve, reject) {
                reject(value);
            });
        }
    });
    globalScope.Promise__ = Promise;
    if (!globalScope.Promise) globalScope.Promise = Promise;
})();