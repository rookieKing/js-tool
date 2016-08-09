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
                ret.done ? rs(ret.value) : ret.value.then(onFulfilled, function (err) {
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
        eachGen: function eachGen(obj, gen) {
            return go(regeneratorRuntime.mark(function _callee() {
                var i, l, key;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!IS_ARRAY(obj)) {
                                    _context.next = 15;
                                    break;
                                }

                                i = 0, l = obj[LEN];

                            case 2:
                                _context.t0 = i < l;

                                if (!_context.t0) {
                                    _context.next = 9;
                                    break;
                                }

                                _context.next = 6;
                                return go(gen, obj[i], i);

                            case 6:
                                _context.t1 = _context.sent;
                                _context.t2 = TRUE;
                                _context.t0 = _context.t1 !== _context.t2;

                            case 9:
                                if (!_context.t0) {
                                    _context.next = 13;
                                    break;
                                }

                            case 10:
                                i++;
                                _context.next = 2;
                                break;

                            case 13:
                                _context.next = 26;
                                break;

                            case 15:
                                _context.t3 = regeneratorRuntime.keys(obj);

                            case 16:
                                if ((_context.t4 = _context.t3()).done) {
                                    _context.next = 26;
                                    break;
                                }

                                key = _context.t4.value;
                                _context.next = 20;
                                return go(gen, obj[key], key);

                            case 20:
                                _context.t5 = _context.sent;
                                _context.t6 = TRUE;

                                if (!(_context.t5 === _context.t6)) {
                                    _context.next = 24;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 24:
                                _context.next = 16;
                                break;

                            case 26:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        },
        retry: function retry(retryFn, stopGenFn) {
            return go(regeneratorRuntime.mark(function _callee2() {
                var err, result, count;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                count = 0;

                            case 1:
                                err = result = UNDEFINED;
                                _context2.next = 4;
                                return new Promise(function (rs) {
                                    go(retryFn).then(function (res) {
                                        result = res;
                                        rs();
                                    }, function (e) {
                                        err = e;
                                        rs();
                                    });
                                });

                            case 4:
                                _context2.next = 6;
                                return go(stopGenFn, err, result, ++count);

                            case 6:
                                _context2.t0 = _context2.sent;
                                _context2.t1 = TRUE;

                                if (_context2.t0 !== _context2.t1) {
                                    _context2.next = 1;
                                    break;
                                }

                            case 9:
                                return _context2.abrupt("return", result);

                            case 10:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    });
})();