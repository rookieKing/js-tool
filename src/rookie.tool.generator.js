(function (UNDEFINED) {
    "use strict";
    //跟rookie.tool.js重复
    var globalScope = typeof global !== "undefined" ? global : window,
        IS_ARRAY = isArray;
    
    function go(genFn) {
        return new Promise(function (rs, rj) {
            var gen = genFn[APPLY](this, callSlice(arguments, 1));
            function onFulfilled(res) {
                try {
                    next(gen.next(res));
                } catch (e) {
                    rj(e);
                }
            }
            function next(ret) {
                ret.done
                    ? rs(ret.value)
                    : ret.value.then(onFulfilled, function (err) {
                        try {
                            next(gen.throw(err));
                        } catch (e) {
                            rj(e);
                        }
                    });
            }
            onFulfilled();
        });
    }
    extend(globalScope, {
        go: go,
        eachGen: function (obj, gen) {
            return go(function* () {
                if (IS_ARRAY(obj)) {
                    for (var i = 0, l = obj[LEN]; i < l && (yield go(gen, obj[i], i)) !== TRUE; i++);
                } else {
                    for (var key in obj) {
                        if ((yield go(gen, obj[key], key)) === TRUE) return;
                    }
                }
            });
        },
        retry: function (retryFn, stopGenFn) {
            return go(function* () {
                var err, result, count = 0;
                do {
                    err = result = UNDEFINED;
                    yield new Promise(function (rs) {
                        go(retryFn).then(function (res) {
                            result = res;
                            rs();
                        }, function (e) {
                            err = e;
                            rs();
                        });
                    });
                } while ((yield go(stopGenFn, err, result, ++count)) !== TRUE);
                return result;
            });
        }
    });
})();