(function (UNDEFINED) {
    "use strict";
    var deadLoop = "dead loop",
        globalScope = typeof global !== "undefined" ? global : window,
        FALSE = !1,
        TRUE = !0,
        NULL = null,
        PROTO = "prototype",
        CALL = "call",
        APPLY = "apply",
        BIND = "bind",
        LEN = "length",
        arrayProto = [],
        stringProto = String[PROTO],
        regExpProto = RegExp[PROTO],
        shortFun = Function,
        applyPush = uncurryApply(arrayProto.push),
        applyConcat = uncurryApply(arrayProto.concat),
        callSlice = uncurryCall(arrayProto.slice),
        callExec = uncurryCall(regExpProto.exec),
        callToString = uncurryCall({}.toString),
        format,
        formatString,
        formatDate;
    each("Null,Undefined,Boolean,RegExp,Function,Array,Object,Number,String,Date".split(","), function (dataType) {
        globalScope["is" + dataType] = function (obj) {
            return callToString(obj) === "[object " + dataType + "]";
        };
    });
    var IS_FUNCTION = isFunction,
        IS_ARRAY = isArray,
        IS_OBJECT = isObject,
        IS_STRING = isString,
        IS_Number = isNumber,
        IS_DATE = isDate;
    if (!shortFun[PROTO][BIND]) shortFun[PROTO][BIND] = function (obj) {
        var self = this,
            args = callSlice(arguments, 1);
        return function () {
            return self[APPLY](obj, applyConcat(args, callSlice(arguments)));
        };
    };
    function nextTick(fn) {
        setTimeout(fn, 0);
    }
    function likeObj(obj) {
        return IS_ARRAY(obj) || IS_OBJECT(obj);
    }
    function uncurryCall(fn) {
        return function () {
            return shortFun[CALL][APPLY](fn, arguments);
        };
    }
    function uncurryApply(fn) {
        return function () {
            return shortFun[APPLY][APPLY](fn, arguments);
        };
    }
    function getFirstDefined() {
        var ret;
        each(arguments, function (v, i) {
            return v !== UNDEFINED ? (ret = v, TRUE) : UNDEFINED;
        });
        return ret;
    }
    function each(obj, iterator) {
        if (callToString(obj) === "[object Array]") {
            for (var i = 0, l = obj[LEN]; i < l && iterator(obj[i], i) !== TRUE; i++);
        } else {
            for (var key in obj) {
                if (iterator(obj[key], key) === TRUE) return;
            }
        }
    }
    function any(obj, predicate) {
        var flag = FALSE;
        each(obj, function (v) {
            return flag = predicate(v);
        });
        return flag;
    }
    function extend(obj) {
        each(callSlice(arguments, 1), function (arg) {
            for (var key in arg) {
                obj[key] = arg[key];
            }
        });
        return obj;
    }
    function map(obj, iterator) {
        var ret = IS_ARRAY(obj) ? [] : {};
        each(obj, function (val, key) {
            ret[key] = iterator(val, key, obj);
        });
        return ret;
    }
    function clone(obj) {
        var ret;
        if (IS_ARRAY(obj)) {
            ret = [];
        } else if (IS_OBJECT(obj)) {
            ret = {};
        } else {
            return obj;
        }
        return map(obj, function (v, key) {
            return likeObj(v) ? clone(v) : v;
        });
    }
    function createArr(len) {
        return map(new Array(len), function (v, i) {
            return i;
        });
    }
    function onceFn(fn) {
        var notRun = TRUE;
        return function () {
            if (notRun) {
                notRun = UNDEFINED;
                fn[APPLY](UNDEFINED, callSlice(arguments));
            }
        };
    }
    function strFill(number, len, fill) {
        for (var ret = "",
            len = getFirstDefined(len, 2),
            fill = getFirstDefined(fill, "0"),
            i = len; i--; ret += fill);
        return (ret + number).slice(-len);
    }
    function formatMoney(str, len, separator) {
        if (IS_STRING(len)) {
            separator = len;
            len = 3;
        }
        return str.toString().replace(/([^.]+)/, function (x, l) {
            return l.reverse().replace(new RegExp(format("\\d{{0}}(?=\\d)", len || 3), "g"), function (n) {
                return n + (separator || ",");
            }).reverse();
        });
    }
    regExpProto.run = function (str, iterator) {
        if (!this.global) throw deadLoop;
        for (var match, count = 0; (match = callExec(this, str)) && iterator[APPLY](this, match.concat(++count)) !== TRUE;);
    };
    regExpProto.exec = function (str, iterator) {
        if (!IS_FUNCTION(iterator)) {
            return callExec(this, str);
        } else {
            if (!this.global) throw deadLoop;
            for (var match, count = 0; (match = callExec(this, str)) && iterator[CALL](this, match, ++count) !== TRUE;);
        }
    };
    Date[PROTO].format = function (str) {
        var date = this,
            hour = date.getHours(),
            millisecond = date.getMilliseconds(),
            longDate = {
                MM: date.getMonth() + 1,
                dd: date.getDate(),
                HH: hour,
                hh: hour % 12 || 12,
                mm: date.getMinutes(),
                ss: date.getSeconds()
            };
        return format((str || "yyyy-MM-dd").replace(/(yyyy|MM|M|dd|d|HH|H|hh|h|tt|mm|m|ss|s|fff|f)/g, "{$1}"), extend({
            yyyy: date.getFullYear(),
            M: longDate.MM,
            H: hour,
            d: longDate.dd,
            h: longDate.hh,
            m: longDate.mm,
            s: longDate.ss,
            f: millisecond,
            fff: strFill(millisecond, 3),
            tt: hour < 12 ? "AM" : "PM"
        }, map(longDate, function (val) {
            return strFill(val);
        })));
    };
    stringProto.format = function (arg) {
        return this.replace(likeObj(arg) ? /{(.+?)}/g : (arg = callSlice(arguments), /{(\d+)}/g), function ($, $1) {
            return getFirstDefined(arg[$1], $);
        });
    };
    stringProto.reverse = function () {
        return this.split("").reverse().join("");
    };
    stringProto.formatMoney = Number[PROTO].formatMoney = function () {
        return formatMoney[APPLY](UNDEFINED, applyConcat([this], arguments));
    };
    format = formatString = formatDate = function (obj) {
        return obj.format[APPLY](obj, callSlice(arguments, 1));
    };
    extend(globalScope, {
        eachAsync: function (arr, iterator, count, callback) {
            if (IS_FUNCTION(count)) {
                callback = count;
                count = arr[LEN];
            }
            if (count === UNDEFINED) count = arr[LEN];
            for (var queue = createArr(arr[LEN]).reverse(),
                i = 0,
                callNextCount = 0,
                callNextBackCount = 0,
                constructor = iterator.constructor,
                constructorName = constructor.name || constructor.displayName,
                isGenerator = constructorName == "GeneratorFunction",
                _stopInfo; i < count && i < arr[LEN]; i++) {
                next(queue.pop());
            }
            function next(i) {
                callNextCount++;
                var args = [onceFn(function (stopInfo) {
                    callNextBackCount++;
                    _stopInfo = stopInfo || _stopInfo;
                    if (_stopInfo) {
                        queue = [];
                    } else if (queue[LEN]) {
                        next(queue.pop());
                    }
                    !queue[LEN] && callNextCount == callNextBackCount && callback && callback(_stopInfo);
                }), arr[i], i, arr];
                nextTick(function () {
                    isGenerator
                        ? go[APPLY](UNDEFINED, applyConcat([iterator], args)).catch(callback)
                        : iterator[APPLY](UNDEFINED, args);
                });
            }
        },
        uniq: function (arr) {
            var ret = [];
            each(arr, function (v) {
                if (!any(ret, function (val) {
                    return val === v;
                })) {
                    ret.push(v);
                }
            });
            return ret;
        },
        range: function (min, max) {
            min > max && (min ^= max, max ^= min, min ^= max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        safeHTML: function (str) {
            return str.replace(/[&<>"`']/g, function ($1) {
                return "&#x" + $1.charCodeAt(0).toString(16) + ";";
            });
        },
        processor: function (fn, callback, milliseconds) {
            if (!IS_FUNCTION(callback)) {
                milliseconds = callback;
            }
            var timeoutId;
            var process = function () {
                clearTimeout(timeoutId);
                var args = arguments;
                timeoutId = setTimeout(function () {
                    IS_FUNCTION(callback)
                        ? callback(fn[APPLY](UNDEFINED, args))
                        : fn[APPLY](UNDEFINED, args);
                }, milliseconds || 400);
            }
            return function () {
                process[APPLY](UNDEFINED, arguments);
            };
        },
        getObj: function (obj, str) {
            var ret = obj;
            if (likeObj(obj)) {
                /[^.]+/g.run(str, function (item) {
                    return likeObj(ret) && item in ret
                        ? (ret = ret[item], FALSE)
                        : (ret = NULL, TRUE);
                });
            }
            return ret === obj ? NULL : ret;
        },
        setObj: function (obj, str, val) {
            var ret;
            if (likeObj(obj)) {
                /([^.]+)(?=\.([^.]+)|$)/g.run(str, function (match, child, grandson) {
                    if (grandson) {
                        if (!likeObj(obj[child])) {
                            obj[child] = {};
                        }
                        obj = obj[child];
                    } else {
                        ret = obj[child] = val;
                    }
                });
                return ret;
            } else {
                throw "is not Object: " + obj;
            }
        },
        curry: function (fn) {
            var args = [],
                _curry = function () {
                    if (arguments[LEN]) {
                        applyPush(args, arguments);
                        return _curry;
                    } else {
                        return fn[APPLY](UNDEFINED, args);
                    }
                };
            _curry.clear = function () {
                args = [];
            };
            return _curry;
        },
        defaults: function (obj) {
            each(callSlice(arguments, 1), function (arg) {
                each(arg, function (v, key) {
                    obj[key] = getFirstDefined(obj[key], v);
                });
            });
            return obj;
        },
        keys: function (obj) {
            var arr = [];
            each(obj, function (v, key) {
                arr.push(key);
            });
            return arr;
        },
        delay: function (fff) {
            return new Promise(function (rs) {
                setTimeout(rs, fff);
            });
        },
        promiseify: function (fn, isMulti) {
            return function () {
                var args = callSlice(arguments);
                return new Promise(function (rs, rj) {
                    args.push(function (err, res) {
                        err
                            ? rj(err)
                            : isMulti
                                ? rs(callSlice(arguments, 1))
                                : rs(res);
                    });
                    fn[APPLY](UNDEFINED, args);
                });
            };
        },
        unpromiseify: function (promise) {
            return function () {
                var args = callSlice(arguments),
                    callback = args.pop();
                promise[APPLY](UNDEFINED, args).then(function (result) {
                    callback(UNDEFINED, result);
                }, callback);
            };
        },
        nextTick: nextTick,
        createArr: createArr,
        onceFn: onceFn,
        callSlice: callSlice,
        likeObj: likeObj,
        getFirstDefined: getFirstDefined,
        each: each,
        any: any,
        extend: extend,
        map: map,
        clone: clone,
        uncurryCall: uncurryCall,
        uncurryApply: uncurryApply,
        format: format,
        formatString: formatString,
        formatDate: formatDate,
        formatMoney: formatMoney,
        strFill: strFill
    });
})();