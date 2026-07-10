// ==UserScript==
// @name        myanimelist-userscript
// @description MyAnimeList improver.
// @version     1.0.143
// @author      wilx
// @homepage    https://github.com/wilx/myanimelist-userscript
// @supportURL  https://github.com/wilx/myanimelist-userscript/issues
// @match       https://myanimelist.net/*
// @downloadURL https://github.com/wilx/myanimelist-userscript/raw/master/output/index.user.js
// @grant       GM.cookie
// @grant       GM.info
// @namespace   https://github.com/wilx/myanimelist-userscript
// @run-at      document-end
// @updateURL   https://github.com/wilx/myanimelist-userscript/raw/master/output/index.user.js
// ==/UserScript==

(() => {
    "use strict";
    var __webpack_modules__ = {
        9306(module, __unused_webpack_exports, __webpack_require__) {
            var isCallable = __webpack_require__(4901), tryToString = __webpack_require__(6823), $TypeError = TypeError;
            module.exports = function(argument) {
                if (isCallable(argument)) return argument;
                throw new $TypeError(tryToString(argument) + " is not a function");
            };
        },
        679(module, __unused_webpack_exports, __webpack_require__) {
            var isPrototypeOf = __webpack_require__(1625), $TypeError = TypeError;
            module.exports = function(it, Prototype) {
                if (isPrototypeOf(Prototype, it)) return it;
                throw new $TypeError("Incorrect invocation");
            };
        },
        8551(module, __unused_webpack_exports, __webpack_require__) {
            var isObject = __webpack_require__(34), $String = String, $TypeError = TypeError;
            module.exports = function(argument) {
                if (isObject(argument)) return argument;
                throw new $TypeError($String(argument) + " is not an object");
            };
        },
        9617(module, __unused_webpack_exports, __webpack_require__) {
            var toIndexedObject = __webpack_require__(5397), toAbsoluteIndex = __webpack_require__(5610), lengthOfArrayLike = __webpack_require__(6198), createMethod = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIndexedObject($this), length = lengthOfArrayLike(O);
                    if (0 === length) return !IS_INCLUDES && -1;
                    var value, index = toAbsoluteIndex(fromIndex, length);
                    if (IS_INCLUDES && el != el) {
                        for (;length > index; ) if ((value = O[index++]) != value) return !0;
                    } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                    return !IS_INCLUDES && -1;
                };
            };
            module.exports = {
                includes: createMethod(!0),
                indexOf: createMethod(!1)
            };
        },
        4527(module, __unused_webpack_exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(3724), isArray = __webpack_require__(4376), $TypeError = TypeError, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
                if (void 0 !== this) return !0;
                try {
                    Object.defineProperty([], "length", {
                        writable: !1
                    }).length = 1;
                } catch (error) {
                    return error instanceof TypeError;
                }
            }();
            module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
                if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) throw new $TypeError("Cannot set read only .length");
                return O.length = length;
            } : function(O, length) {
                return O.length = length;
            };
        },
        7680(module, __unused_webpack_exports, __webpack_require__) {
            var uncurryThis = __webpack_require__(9504);
            module.exports = uncurryThis([].slice);
        },
        772(module, __unused_webpack_exports, __webpack_require__) {
            var call = __webpack_require__(9565), anObject = __webpack_require__(8551), getBuiltIn = __webpack_require__(7751), getMethod = __webpack_require__(5966);
            module.exports = function(iterator, method, argument, reject) {
                try {
                    var returnMethod = getMethod(iterator, "return");
                    if (returnMethod) return getBuiltIn("Promise").resolve(call(returnMethod, iterator)).then(function(result) {
                        try {
                            method !== reject && anObject(result);
                        } catch (error3) {
                            return void reject(error3);
                        }
                        method(argument);
                    }, function(error) {
                        method === reject ? method(argument) : reject(error);
                    });
                } catch (error2) {
                    return reject(method === reject ? argument : error2);
                }
                method(argument);
            };
        },
        6639(module, __unused_webpack_exports, __webpack_require__) {
            var call = __webpack_require__(9565), aCallable = __webpack_require__(9306), anObject = __webpack_require__(8551), isObject = __webpack_require__(34), doesNotExceedSafeInteger = __webpack_require__(6837), getBuiltIn = __webpack_require__(7751), createProperty = __webpack_require__(4659), setArrayLength = __webpack_require__(4527), getIteratorDirect = __webpack_require__(1767), closeAsyncIteration = __webpack_require__(772), createMethod = function(TYPE) {
                var IS_TO_ARRAY = 0 === TYPE, IS_FOR_EACH = 1 === TYPE, IS_EVERY = 2 === TYPE, IS_SOME = 3 === TYPE;
                return function(object, fn, target) {
                    anObject(object);
                    var MAPPING = void 0 !== fn;
                    !MAPPING && IS_TO_ARRAY || aCallable(fn);
                    var record = getIteratorDirect(object), Promise = getBuiltIn("Promise"), iterator = record.iterator, next = record.next, counter = 0;
                    return new Promise(function(resolve, reject) {
                        var ifAbruptCloseAsyncIterator = function(error) {
                            closeAsyncIteration(iterator, reject, error, reject);
                        }, loop = function() {
                            try {
                                try {
                                    doesNotExceedSafeInteger(counter);
                                } catch (error5) {
                                    return ifAbruptCloseAsyncIterator(error5);
                                }
                                Promise.resolve(anObject(call(next, iterator))).then(function(step) {
                                    try {
                                        if (anObject(step).done) IS_TO_ARRAY ? (setArrayLength(target, counter), resolve(target)) : resolve(!IS_SOME && (IS_EVERY || void 0)); else {
                                            var value = step.value;
                                            try {
                                                if (MAPPING) {
                                                    var index = counter++, result = fn(value, index), handler = function($result) {
                                                        if (IS_FOR_EACH) loop(); else if (IS_EVERY) $result ? loop() : closeAsyncIteration(iterator, resolve, !1, reject); else if (IS_TO_ARRAY) try {
                                                            createProperty(target, index, $result), loop();
                                                        } catch (error4) {
                                                            ifAbruptCloseAsyncIterator(error4);
                                                        } else $result ? closeAsyncIteration(iterator, resolve, IS_SOME || value, reject) : loop();
                                                    };
                                                    isObject(result) ? Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator) : handler(result);
                                                } else createProperty(target, counter++, value), loop();
                                            } catch (error3) {
                                                ifAbruptCloseAsyncIterator(error3);
                                            }
                                        }
                                    } catch (error2) {
                                        reject(error2);
                                    }
                                }, reject);
                            } catch (error) {
                                reject(error);
                            }
                        };
                        loop();
                    });
                };
            };
            module.exports = {
                toArray: createMethod(0),
                forEach: createMethod(1),
                every: createMethod(2),
                some: createMethod(3),
                find: createMethod(4)
            };
        },
        3982(module, __unused_webpack_exports, __webpack_require__) {
            var AsyncIteratorPrototype, prototype, globalThis = __webpack_require__(4576), shared = __webpack_require__(7629), isCallable = __webpack_require__(4901), create = __webpack_require__(2360), getPrototypeOf = __webpack_require__(2787), defineBuiltIn = __webpack_require__(6840), wellKnownSymbol = __webpack_require__(8227), IS_PURE = __webpack_require__(6395), ASYNC_ITERATOR = wellKnownSymbol("asyncIterator"), AsyncIterator = globalThis.AsyncIterator, PassedAsyncIteratorPrototype = shared.AsyncIteratorPrototype;
            if (PassedAsyncIteratorPrototype) AsyncIteratorPrototype = PassedAsyncIteratorPrototype; else if (isCallable(AsyncIterator)) AsyncIteratorPrototype = AsyncIterator.prototype; else if (shared.USE_FUNCTION_CONSTRUCTOR || globalThis.USE_FUNCTION_CONSTRUCTOR) try {
                prototype = getPrototypeOf(getPrototypeOf(getPrototypeOf(Function("return async function*(){}()")()))), 
                getPrototypeOf(prototype) === Object.prototype && (AsyncIteratorPrototype = prototype);
            } catch (error) {}
            AsyncIteratorPrototype ? IS_PURE && (AsyncIteratorPrototype = create(AsyncIteratorPrototype)) : AsyncIteratorPrototype = {}, 
            isCallable(AsyncIteratorPrototype[ASYNC_ITERATOR]) || defineBuiltIn(AsyncIteratorPrototype, ASYNC_ITERATOR, function() {
                return this;
            }), module.exports = AsyncIteratorPrototype;
        },
        2195(module, __unused_webpack_exports, __webpack_require__) {
            var uncurryThis = __webpack_require__(9504), toString = uncurryThis({}.toString), stringSlice = uncurryThis("".slice);
            module.exports = function(it) {
                return stringSlice(toString(it), 8, -1);
            };
        },
        6955(module, __unused_webpack_exports, __webpack_require__) {
            var TO_STRING_TAG_SUPPORT = __webpack_require__(2140), isCallable = __webpack_require__(4901), classofRaw = __webpack_require__(2195), TO_STRING_TAG = __webpack_require__(8227)("toStringTag"), $Object = Object, CORRECT_ARGUMENTS = "Arguments" === classofRaw(function() {
                return arguments;
            }());
            module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
                var O, tag, result;
                return void 0 === it ? "Undefined" : null === it ? "Null" : "string" == typeof (tag = function(it, key) {
                    try {
                        return it[key];
                    } catch (error) {}
                }(O = $Object(it), TO_STRING_TAG)) ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : "Object" === (result = classofRaw(O)) && isCallable(O.callee) ? "Arguments" : result;
            };
        },
        7740(module, __unused_webpack_exports, __webpack_require__) {
            var hasOwn = __webpack_require__(9297), ownKeys = __webpack_require__(5031), getOwnPropertyDescriptorModule = __webpack_require__(7347), definePropertyModule = __webpack_require__(4913);
            module.exports = function(target, source, exceptions) {
                for (var keys = ownKeys(source), defineProperty = definePropertyModule.f, getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f, i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    hasOwn(target, key) || exceptions && hasOwn(exceptions, key) || defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
            };
        },
        2211(module, __unused_webpack_exports, __webpack_require__) {
            var fails = __webpack_require__(9039);
            module.exports = !fails(function() {
                function F() {}
                return F.prototype.constructor = null, Object.getPrototypeOf(new F) !== F.prototype;
            });
        },
        2529(module) {
            module.exports = function(value, done) {
                return {
                    value,
                    done
                };
            };
        },
        6699(module, __unused_webpack_exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(3724), definePropertyModule = __webpack_require__(4913), createPropertyDescriptor = __webpack_require__(6980);
            module.exports = DESCRIPTORS ? function(object, key, value) {
                return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
            } : function(object, key, value) {
                return object[key] = value, object;
            };
        },
        6980(module) {
            module.exports = function(bitmap, value) {
                return {
                    enumerable: !(1 & bitmap),
                    configurable: !(2 & bitmap),
                    writable: !(4 & bitmap),
                    value
                };
            };
        },
        4659(module, __unused_webpack_exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(3724), definePropertyModule = __webpack_require__(4913), createPropertyDescriptor = __webpack_require__(6980);
            module.exports = function(object, key, value) {
                DESCRIPTORS ? definePropertyModule.f(object, key, createPropertyDescriptor(0, value)) : object[key] = value;
            };
        },
        2106(module, __unused_webpack_exports, __webpack_require__) {
            var makeBuiltIn = __webpack_require__(283), defineProperty = __webpack_require__(4913);
            module.exports = function(target, name, descriptor) {
                return descriptor.get && makeBuiltIn(descriptor.get, name, {
                    getter: !0
                }), descriptor.set && makeBuiltIn(descriptor.set, name, {
                    setter: !0
                }), defineProperty.f(target, name, descriptor);
            };
        },
        6840(module, __unused_webpack_exports, __webpack_require__) {
            var isCallable = __webpack_require__(4901), definePropertyModule = __webpack_require__(4913), makeBuiltIn = __webpack_require__(283), defineGlobalProperty = __webpack_require__(9433);
            module.exports = function(O, key, value, options) {
                options || (options = {});
                var simple = options.enumerable, name = void 0 !== options.name ? options.name : key;
                if (isCallable(value) && makeBuiltIn(value, name, options), options.global) simple ? O[key] = value : defineGlobalProperty(key, value); else {
                    try {
                        options.unsafe ? O[key] && (simple = !0) : delete O[key];
                    } catch (error) {}
                    simple ? O[key] = value : definePropertyModule.f(O, key, {
                        value,
                        enumerable: !1,
                        configurable: !options.nonConfigurable,
                        writable: !options.nonWritable
                    });
                }
                return O;
            };
        },
        6279(module, __unused_webpack_exports, __webpack_require__) {
            var defineBuiltIn = __webpack_require__(6840);
            module.exports = function(target, src, options) {
                for (var key in src) defineBuiltIn(target, key, src[key], options);
                return target;
            };
        },
        9433(module, __unused_webpack_exports, __webpack_require__) {
            var globalThis = __webpack_require__(4576), defineProperty = Object.defineProperty;
            module.exports = function(key, value) {
                try {
                    defineProperty(globalThis, key, {
                        value,
                        configurable: !0,
                        writable: !0
                    });
                } catch (error) {
                    globalThis[key] = value;
                }
                return value;
            };
        },
        3724(module, __unused_webpack_exports, __webpack_require__) {
            var fails = __webpack_require__(9039);
            module.exports = !fails(function() {
                return 7 !== Object.defineProperty({}, 1, {
                    get: function() {
                        return 7;
                    }
                })[1];
            });
        },
        4055(module, __unused_webpack_exports, __webpack_require__) {
            var globalThis = __webpack_require__(4576), isObject = __webpack_require__(34), document = globalThis.document, EXISTS = isObject(document) && isObject(document.createElement);
            module.exports = function(it) {
                return EXISTS ? document.createElement(it) : {};
            };
        },
        6837(module) {
            var $TypeError = TypeError;
            module.exports = function(it) {
                if (it > 9007199254740991) throw new $TypeError("Maximum allowed index exceeded");
                return it;
            };
        },
        8727(module) {
            module.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
        },
        2839(module, __unused_webpack_exports, __webpack_require__) {
            var navigator = __webpack_require__(4576).navigator, userAgent = navigator && navigator.userAgent;
            module.exports = userAgent ? String(userAgent) : "";
        },
        9519(module, __unused_webpack_exports, __webpack_require__) {
            var match, version, globalThis = __webpack_require__(4576), userAgent = __webpack_require__(2839), process = globalThis.process, Deno = globalThis.Deno, versions = process && process.versions || Deno && Deno.version, v8 = versions && versions.v8;
            v8 && (version = (match = v8.split("."))[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1])), 
            !version && userAgent && (!(match = userAgent.match(/Edge\/(\d+)/)) || match[1] >= 74) && (match = userAgent.match(/Chrome\/(\d+)/)) && (version = +match[1]), 
            module.exports = version;
        },
        6518(module, __unused_webpack_exports, __webpack_require__) {
            var globalThis = __webpack_require__(4576), getOwnPropertyDescriptor = __webpack_require__(7347).f, createNonEnumerableProperty = __webpack_require__(6699), defineBuiltIn = __webpack_require__(6840), defineGlobalProperty = __webpack_require__(9433), copyConstructorProperties = __webpack_require__(7740), isForced = __webpack_require__(2796);
            module.exports = function(options, source) {
                var target, key, targetProperty, sourceProperty, descriptor, TARGET = options.target, GLOBAL = options.global, STATIC = options.stat;
                if (target = GLOBAL ? globalThis : STATIC ? globalThis[TARGET] || defineGlobalProperty(TARGET, {}) : globalThis[TARGET] && globalThis[TARGET].prototype) for (key in source) {
                    if (sourceProperty = source[key], targetProperty = options.dontCallGetSet ? (descriptor = getOwnPropertyDescriptor(target, key)) && descriptor.value : target[key], 
                    !isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced) && void 0 !== targetProperty) {
                        if (typeof sourceProperty == typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    (options.sham || targetProperty && targetProperty.sham) && createNonEnumerableProperty(sourceProperty, "sham", !0), 
                    defineBuiltIn(target, key, sourceProperty, options);
                }
            };
        },
        9039(module) {
            module.exports = function(exec) {
                try {
                    return !!exec();
                } catch (error) {
                    return !0;
                }
            };
        },
        8745(module, __unused_webpack_exports, __webpack_require__) {
            var NATIVE_BIND = __webpack_require__(616), FunctionPrototype = Function.prototype, apply = FunctionPrototype.apply, call = FunctionPrototype.call;
            module.exports = "object" == typeof Reflect && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
                return call.apply(apply, arguments);
            });
        },
        6080(module, __unused_webpack_exports, __webpack_require__) {
            var uncurryThis = __webpack_require__(7476), aCallable = __webpack_require__(9306), NATIVE_BIND = __webpack_require__(616), bind = uncurryThis(uncurryThis.bind);
            module.exports = function(fn, that) {
                return aCallable(fn), void 0 === that ? fn : NATIVE_BIND ? bind(fn, that) : function() {
                    return fn.apply(that, arguments);
                };
            };
        },
        616(module, __unused_webpack_exports, __webpack_require__) {
            var fails = __webpack_require__(9039);
            module.exports = !fails(function() {
                var test = function() {}.bind();
                return "function" != typeof test || test.hasOwnProperty("prototype");
            });
        },
        9565(module, __unused_webpack_exports, __webpack_require__) {
            var NATIVE_BIND = __webpack_require__(616), call = Function.prototype.call;
            module.exports = NATIVE_BIND ? call.bind(call) : function() {
                return call.apply(call, arguments);
            };
        },
        350(module, __unused_webpack_exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(3724), hasOwn = __webpack_require__(9297), FunctionPrototype = Function.prototype, getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor, EXISTS = hasOwn(FunctionPrototype, "name"), PROPER = EXISTS && "something" === function() {}.name, CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
            module.exports = {
                EXISTS,
                PROPER,
                CONFIGURABLE
            };
        },
        7476(module, __unused_webpack_exports, __webpack_require__) {
            var classofRaw = __webpack_require__(2195), uncurryThis = __webpack_require__(9504);
            module.exports = function(fn) {
                if ("Function" === classofRaw(fn)) return uncurryThis(fn);
            };
        },
        9504(module, __unused_webpack_exports, __webpack_require__) {
            var NATIVE_BIND = __webpack_require__(616), FunctionPrototype = Function.prototype, call = FunctionPrototype.call, uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
            module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
                return function() {
                    return call.apply(fn, arguments);
                };
            };
        },
        7751(module, __unused_webpack_exports, __webpack_require__) {
            var globalThis = __webpack_require__(4576), isCallable = __webpack_require__(4901);
            module.exports = function(namespace, method) {
                return arguments.length < 2 ? (argument = globalThis[namespace], isCallable(argument) ? argument : void 0) : globalThis[namespace] && globalThis[namespace][method];
                var argument;
            };
        },
        1767(module) {
            module.exports = function(obj) {
                return {
                    iterator: obj,
                    next: obj.next,
                    done: !1
                };
            };
        },
        8646(module, __unused_webpack_exports, __webpack_require__) {
            var call = __webpack_require__(9565), anObject = __webpack_require__(8551), getIteratorDirect = __webpack_require__(1767), getIteratorMethod = __webpack_require__(851);
            module.exports = function(obj, stringHandling) {
                stringHandling && "string" == typeof obj || anObject(obj);
                var method = getIteratorMethod(obj);
                return getIteratorDirect(anObject(void 0 !== method ? call(method, obj) : obj));
            };
        },
        851(module, __unused_webpack_exports, __webpack_require__) {
            var classof = __webpack_require__(6955), getMethod = __webpack_require__(5966), isNullOrUndefined = __webpack_require__(4117), Iterators = __webpack_require__(6269), ITERATOR = __webpack_require__(8227)("iterator");
            module.exports = function(it) {
                if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
            };
        },
        81(module, __unused_webpack_exports, __webpack_require__) {
            var call = __webpack_require__(9565), aCallable = __webpack_require__(9306), anObject = __webpack_require__(8551), tryToString = __webpack_require__(6823), getIteratorMethod = __webpack_require__(851), $TypeError = TypeError;
            module.exports = function(argument, usingIterator) {
                var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
                if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
                throw new $TypeError(tryToString(argument) + " is not iterable");
            };
        },
        5966(module, __unused_webpack_exports, __webpack_require__) {
            var aCallable = __webpack_require__(9306), isNullOrUndefined = __webpack_require__(4117);
            module.exports = function(V, P) {
                var func = V[P];
                return isNullOrUndefined(func) ? void 0 : aCallable(func);
            };
        },
        4576(module) {
            var check = function(it) {
                return it && it.Math === Math && it;
            };
            module.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof globalThis && globalThis) || check("object" == typeof this && this) || function() {
                return this;
            }() || Function("return this")();
        },
        9297(module, __unused_webpack_exports, __webpack_require__) {
            var uncurryThis = __webpack_require__(9504), toObject = __webpack_require__(8981), hasOwnProperty = uncurryThis({}.hasOwnProperty);
            module.exports = Object.hasOwn || function(it, key) {
                return hasOwnProperty(toObject(it), key);
            };
        },
        421(module) {
            module.exports = {};
        },
        397(module, __unused_webpack_exports, __webpack_require__) {
            var getBuiltIn = __webpack_require__(7751);
            module.exports = getBuiltIn("document", "documentElement");
        },
        5917(module, __unused_webpack_exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(3724), fails = __webpack_require__(9039), createElement = __webpack_require__(4055);
            module.exports = !DESCRIPTORS && !fails(function() {
                return 7 !== Object.defineProperty(createElement("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            });
        },
        7055(module, __unused_webpack_exports, __webpack_require__) {
            var uncurryThis = __webpack_require__(9504), fails = __webpack_require__(9039), classof = __webpack_require__(2195), $Object = Object, split = uncurryThis("".split);
            module.exports = fails(function() {
                return !$Object("z").propertyIsEnumerable(0);
            }) ? function(it) {
                return "String" === classof(it) ? split(it, "") : $Object(it);
            } : $Object;
        },
        3706(module, __unused_webpack_exports, __webpack_require__) {
            var uncurryThis = __webpack_require__(9504), isCallable = __webpack_require__(4901), store = __webpack_require__(7629), functionToString = uncurryThis(Function.toString);
            isCallable(store.inspectSource) || (store.inspectSource = function(it) {
                return functionToString(it);
            }), module.exports = store.inspectSource;
        },
        1181(module, __unused_webpack_exports, __webpack_require__) {
            var set, get, has, NATIVE_WEAK_MAP = __webpack_require__(8622), globalThis = __webpack_require__(4576), isObject = __webpack_require__(34), createNonEnumerableProperty = __webpack_require__(6699), hasOwn = __webpack_require__(9297), shared = __webpack_require__(7629), sharedKey = __webpack_require__(6119), hiddenKeys = __webpack_require__(421), TypeError = globalThis.TypeError, WeakMap = globalThis.WeakMap;
            if (NATIVE_WEAK_MAP || shared.state) {
                var store = shared.state || (shared.state = new WeakMap);
                store.get = store.get, store.has = store.has, store.set = store.set, set = function(it, metadata) {
                    if (store.has(it)) throw new TypeError("Object already initialized");
                    return metadata.facade = it, store.set(it, metadata), metadata;
                }, get = function(it) {
                    return store.get(it) || {};
                }, has = function(it) {
                    return store.has(it);
                };
            } else {
                var STATE = sharedKey("state");
                hiddenKeys[STATE] = !0, set = function(it, metadata) {
                    if (hasOwn(it, STATE)) throw new TypeError("Object already initialized");
                    return metadata.facade = it, createNonEnumerableProperty(it, STATE, metadata), metadata;
                }, get = function(it) {
                    return hasOwn(it, STATE) ? it[STATE] : {};
                }, has = function(it) {
                    return hasOwn(it, STATE);
                };
            }
            module.exports = {
                set,
                get,
                has,
                enforce: function(it) {
                    return has(it) ? get(it) : set(it, {});
                },
                getterFor: function(TYPE) {
                    return function(it) {
                        var state;
                        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
                        return state;
                    };
                }
            };
        },
        4209(module, __unused_webpack_exports, __webpack_require__) {
            var wellKnownSymbol = __webpack_require__(8227), Iterators = __webpack_require__(6269), ITERATOR = wellKnownSymbol("iterator"), ArrayPrototype = Array.prototype;
            module.exports = function(it) {
                return void 0 !== it && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
            };
        },
        4376(module, __unused_webpack_exports, __webpack_require__) {
            var classof = __webpack_require__(2195);
            module.exports = Array.isArray || function(argument) {
                return "Array" === classof(argument);
            };
        },
        4901(module) {
            var documentAll = "object" == typeof document && document.all;
            module.exports = void 0 === documentAll && void 0 !== documentAll ? function(argument) {
                return "function" == typeof argument || argument === documentAll;
            } : function(argument) {
                return "function" == typeof argument;
            };
        },
        2796(module, __unused_webpack_exports, __webpack_require__) {
            var fails = __webpack_require__(9039), isCallable = __webpack_require__(4901), replacement = /#|\.prototype\./, isForced = function(feature, detection) {
                var value = data[normalize(feature)];
                return value === POLYFILL || value !== NATIVE && (isCallable(detection) ? fails(detection) : !!detection);
            }, normalize = isForced.normalize = function(string) {
                return String(string).replace(replacement, ".").toLowerCase();
            }, data = isForced.data = {}, NATIVE = isForced.NATIVE = "N", POLYFILL = isForced.POLYFILL = "P";
            module.exports = isForced;
        },
        4117(module) {
            module.exports = function(it) {
                return null == it;
            };
        },
        34(module, __unused_webpack_exports, __webpack_require__) {
            var isCallable = __webpack_require__(4901);
            module.exports = function(it) {
                return "object" == typeof it ? null !== it : isCallable(it);
            };
        },
        6395(module) {
            module.exports = !1;
        },
        5810(module, __unused_webpack_exports, __webpack_require__) {
            var isObject = __webpack_require__(34), getInternalState = __webpack_require__(1181).get;
            module.exports = function(O) {
                if (!isObject(O)) return !1;
                var state = getInternalState(O);
                return !!state && "RawJSON" === state.type;
            };
        },
        757(module, __unused_webpack_exports, __webpack_require__) {
            var getBuiltIn = __webpack_require__(7751), isCallable = __webpack_require__(4901), isPrototypeOf = __webpack_require__(1625), USE_SYMBOL_AS_UID = __webpack_require__(7040), $Object = Object;
            module.exports = USE_SYMBOL_AS_UID ? function(it) {
                return "symbol" == typeof it;
            } : function(it) {
                var $Symbol = getBuiltIn("Symbol");
                return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
            };
        },
        2652(module, __unused_webpack_exports, __webpack_require__) {
            var bind = __webpack_require__(6080), call = __webpack_require__(9565), anObject = __webpack_require__(8551), tryToString = __webpack_require__(6823), isArrayIteratorMethod = __webpack_require__(4209), lengthOfArrayLike = __webpack_require__(6198), isPrototypeOf = __webpack_require__(1625), getIterator = __webpack_require__(81), getIteratorMethod = __webpack_require__(851), iteratorClose = __webpack_require__(9539), $TypeError = TypeError, Result = function(stopped, result) {
                this.stopped = stopped, this.result = result;
            }, ResultPrototype = Result.prototype;
            module.exports = function(iterable, unboundFunction, options) {
                var iterator, iterFn, index, length, result, next, step, that = options && options.that, AS_ENTRIES = !(!options || !options.AS_ENTRIES), IS_RECORD = !(!options || !options.IS_RECORD), IS_ITERATOR = !(!options || !options.IS_ITERATOR), INTERRUPTED = !(!options || !options.INTERRUPTED), fn = bind(unboundFunction, that), stop = function(condition) {
                    var $iterator = iterator;
                    return iterator = void 0, $iterator && iteratorClose($iterator, "normal"), new Result(!0, condition);
                }, callFn = function(value) {
                    return AS_ENTRIES ? (anObject(value), INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1])) : INTERRUPTED ? fn(value, stop) : fn(value);
                };
                if (IS_RECORD) iterator = iterable.iterator; else if (IS_ITERATOR) iterator = iterable; else {
                    if (!(iterFn = getIteratorMethod(iterable))) throw new $TypeError(tryToString(iterable) + " is not iterable");
                    if (isArrayIteratorMethod(iterFn)) {
                        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) if ((result = callFn(iterable[index])) && isPrototypeOf(ResultPrototype, result)) return result;
                        return new Result(!1);
                    }
                    iterator = getIterator(iterable, iterFn);
                }
                for (next = IS_RECORD ? iterable.next : iterator.next; !(step = call(next, iterator)).done; ) {
                    var value = step.value;
                    try {
                        result = callFn(value);
                    } catch (error) {
                        if (!iterator) throw error;
                        iteratorClose(iterator, "throw", error);
                    }
                    if ("object" == typeof result && result && isPrototypeOf(ResultPrototype, result)) return result;
                }
                return new Result(!1);
            };
        },
        1385(module, __unused_webpack_exports, __webpack_require__) {
            var iteratorClose = __webpack_require__(9539);
            module.exports = function(iters, kind, value) {
                for (var i = iters.length - 1; i >= 0; i--) if (void 0 !== iters[i]) try {
                    value = iteratorClose(iters[i].iterator, kind, value);
                } catch (error) {
                    kind = "throw", value = error;
                }
                if ("throw" === kind) throw value;
                return value;
            };
        },
        9539(module, __unused_webpack_exports, __webpack_require__) {
            var call = __webpack_require__(9565), anObject = __webpack_require__(8551), getMethod = __webpack_require__(5966);
            module.exports = function(iterator, kind, value) {
                var innerResult, innerError;
                anObject(iterator);
                try {
                    if (!(innerResult = getMethod(iterator, "return"))) {
                        if ("throw" === kind) throw value;
                        return value;
                    }
                    innerResult = call(innerResult, iterator);
                } catch (error) {
                    innerError = !0, innerResult = error;
                }
                if ("throw" === kind) throw value;
                if (innerError) throw innerResult;
                return anObject(innerResult), value;
            };
        },
        9462(module, __unused_webpack_exports, __webpack_require__) {
            var call = __webpack_require__(9565), create = __webpack_require__(2360), createNonEnumerableProperty = __webpack_require__(6699), defineBuiltIns = __webpack_require__(6279), wellKnownSymbol = __webpack_require__(8227), InternalStateModule = __webpack_require__(1181), getMethod = __webpack_require__(5966), IteratorPrototype = __webpack_require__(7657).IteratorPrototype, createIterResultObject = __webpack_require__(2529), iteratorClose = __webpack_require__(9539), iteratorCloseAll = __webpack_require__(1385), TO_STRING_TAG = wellKnownSymbol("toStringTag"), setInternalState = InternalStateModule.set, createIteratorProxyPrototype = function(IS_ITERATOR) {
                var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? "WrapForValidIterator" : "IteratorHelper");
                return defineBuiltIns(create(IteratorPrototype), {
                    next: function() {
                        var state = getInternalState(this);
                        if (IS_ITERATOR) return state.nextHandler();
                        if (state.done) return createIterResultObject(void 0, !0);
                        try {
                            var result = state.nextHandler();
                            return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
                        } catch (error) {
                            throw state.done = !0, error;
                        }
                    },
                    return: function() {
                        var state = getInternalState(this), iterator = state.iterator, done = state.done;
                        if (state.done = !0, IS_ITERATOR) {
                            var returnMethod = getMethod(iterator, "return");
                            return returnMethod ? call(returnMethod, iterator) : createIterResultObject(void 0, !0);
                        }
                        if (done) return createIterResultObject(void 0, !0);
                        if (state.inner) try {
                            iteratorClose(state.inner.iterator, "normal");
                        } catch (error) {
                            return iteratorClose(iterator, "throw", error);
                        }
                        if (state.openIters) try {
                            iteratorCloseAll(state.openIters, "normal");
                        } catch (error) {
                            if (iterator) return iteratorClose(iterator, "throw", error);
                            throw error;
                        }
                        return iterator && iteratorClose(iterator, "normal"), createIterResultObject(void 0, !0);
                    }
                });
            }, WrapForValidIteratorPrototype = createIteratorProxyPrototype(!0), IteratorHelperPrototype = createIteratorProxyPrototype(!1);
            createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper"), 
            module.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
                var IteratorProxy = function(record, state) {
                    state ? (state.iterator = record.iterator, state.next = record.next) : state = record, 
                    state.type = IS_ITERATOR ? "WrapForValidIterator" : "IteratorHelper", state.returnHandlerResult = !!RETURN_HANDLER_RESULT, 
                    state.nextHandler = nextHandler, state.counter = 0, state.done = !1, setInternalState(this, state);
                };
                return IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype, 
                IteratorProxy;
            };
        },
        4549(module, __unused_webpack_exports, __webpack_require__) {
            var globalThis = __webpack_require__(4576);
            module.exports = function(METHOD_NAME, ExpectedError) {
                var Iterator = globalThis.Iterator, IteratorPrototype = Iterator && Iterator.prototype, method = IteratorPrototype && IteratorPrototype[METHOD_NAME], CLOSED = !1;
                if (method) try {
                    method.call({
                        next: function() {
                            return {
                                done: !0
                            };
                        },
                        return: function() {
                            CLOSED = !0;
                        }
                    }, -1);
                } catch (error) {
                    error instanceof ExpectedError || (CLOSED = !1);
                }
                if (!CLOSED) return method;
            };
        },
        7657(module, __unused_webpack_exports, __webpack_require__) {
            var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator, fails = __webpack_require__(9039), isCallable = __webpack_require__(4901), isObject = __webpack_require__(34), create = __webpack_require__(2360), getPrototypeOf = __webpack_require__(2787), defineBuiltIn = __webpack_require__(6840), wellKnownSymbol = __webpack_require__(8227), IS_PURE = __webpack_require__(6395), ITERATOR = wellKnownSymbol("iterator"), BUGGY_SAFARI_ITERATORS = !1;
            [].keys && ("next" in (arrayIterator = [].keys()) ? (PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator))) !== Object.prototype && (IteratorPrototype = PrototypeOfArrayIteratorPrototype) : BUGGY_SAFARI_ITERATORS = !0), 
            !isObject(IteratorPrototype) || fails(function() {
                var test = {};
                return IteratorPrototype[ITERATOR].call(test) !== test;
            }) ? IteratorPrototype = {} : IS_PURE && (IteratorPrototype = create(IteratorPrototype)), 
            isCallable(IteratorPrototype[ITERATOR]) || defineBuiltIn(IteratorPrototype, ITERATOR, function() {
                return this;
            }), module.exports = {
                IteratorPrototype,
                BUGGY_SAFARI_ITERATORS
            };
        },
        6269(module) {
            module.exports = {};
        },
        6198(module, __unused_webpack_exports, __webpack_require__) {
            var toLength = __webpack_require__(8014);
            module.exports = function(obj) {
                return toLength(obj.length);
            };
        },
        283(module, __unused_webpack_exports, __webpack_require__) {
            var uncurryThis = __webpack_require__(9504), fails = __webpack_require__(9039), isCallable = __webpack_require__(4901), hasOwn = __webpack_require__(9297), DESCRIPTORS = __webpack_require__(3724), CONFIGURABLE_FUNCTION_NAME = __webpack_require__(350).CONFIGURABLE, inspectSource = __webpack_require__(3706), InternalStateModule = __webpack_require__(1181), enforceInternalState = InternalStateModule.enforce, getInternalState = InternalStateModule.get, $String = String, defineProperty = Object.defineProperty, stringSlice = uncurryThis("".slice), replace = uncurryThis("".replace), join = uncurryThis([].join), CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
                return 8 !== defineProperty(function() {}, "length", {
                    value: 8
                }).length;
            }), TEMPLATE = String(String).split("String"), makeBuiltIn = module.exports = function(value, name, options) {
                "Symbol(" === stringSlice($String(name), 0, 7) && (name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), 
                options && options.getter && (name = "get " + name), options && options.setter && (name = "set " + name), 
                (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) && (DESCRIPTORS ? defineProperty(value, "name", {
                    value: name,
                    configurable: !0
                }) : value.name = name), CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity && defineProperty(value, "length", {
                    value: options.arity
                });
                try {
                    options && hasOwn(options, "constructor") && options.constructor ? DESCRIPTORS && defineProperty(value, "prototype", {
                        writable: !1
                    }) : value.prototype && (value.prototype = void 0);
                } catch (error) {}
                var state = enforceInternalState(value);
                return hasOwn(state, "source") || (state.source = join(TEMPLATE, "string" == typeof name ? name : "")), 
                value;
            };
            Function.prototype.toString = makeBuiltIn(function() {
                return isCallable(this) && getInternalState(this).source || inspectSource(this);
            }, "toString");
        },
        741(module) {
            var ceil = Math.ceil, floor = Math.floor;
            module.exports = Math.trunc || function(x) {
                var n = +x;
                return (n > 0 ? floor : ceil)(n);
            };
        },
        7819(module, __unused_webpack_exports, __webpack_require__) {
            var fails = __webpack_require__(9039);
            module.exports = !fails(function() {
                var raw = JSON.rawJSON("9007199254740993");
                return !JSON.isRawJSON(raw) || "9007199254740993" !== JSON.stringify(raw);
            });
        },
        2360(module, __unused_webpack_exports, __webpack_require__) {
            var activeXDocument, anObject = __webpack_require__(8551), definePropertiesModule = __webpack_require__(6801), enumBugKeys = __webpack_require__(8727), hiddenKeys = __webpack_require__(421), html = __webpack_require__(397), documentCreateElement = __webpack_require__(4055), sharedKey = __webpack_require__(6119), IE_PROTO = sharedKey("IE_PROTO"), EmptyConstructor = function() {}, scriptTag = function(content) {
                return "<script>" + content + "<\/script>";
            }, NullProtoObjectViaActiveX = function(activeXDocument) {
                activeXDocument.write(scriptTag("")), activeXDocument.close();
                var temp = activeXDocument.parentWindow.Object;
                return activeXDocument = null, temp;
            }, NullProtoObject = function() {
                try {
                    activeXDocument = new ActiveXObject("htmlfile");
                } catch (error) {}
                var iframeDocument, iframe;
                NullProtoObject = "undefined" != typeof document ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : ((iframe = documentCreateElement("iframe")).style.display = "none", 
                html.appendChild(iframe), iframe.src = String("javascript:"), (iframeDocument = iframe.contentWindow.document).open(), 
                iframeDocument.write(scriptTag("document.F=Object")), iframeDocument.close(), iframeDocument.F) : NullProtoObjectViaActiveX(activeXDocument);
                for (var length = enumBugKeys.length; length--; ) delete NullProtoObject.prototype[enumBugKeys[length]];
                return NullProtoObject();
            };
            hiddenKeys[IE_PROTO] = !0, module.exports = Object.create || function(O, Properties) {
                var result;
                return null !== O ? (EmptyConstructor.prototype = anObject(O), result = new EmptyConstructor, 
                EmptyConstructor.prototype = null, result[IE_PROTO] = O) : result = NullProtoObject(), 
                void 0 === Properties ? result : definePropertiesModule.f(result, Properties);
            };
        },
        6801(__unused_webpack_module, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(3724), V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686), definePropertyModule = __webpack_require__(4913), anObject = __webpack_require__(8551), toIndexedObject = __webpack_require__(5397), objectKeys = __webpack_require__(1072);
            exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function(O, Properties) {
                anObject(O);
                for (var key, props = toIndexedObject(Properties), keys = objectKeys(Properties), length = keys.length, index = 0; length > index; ) definePropertyModule.f(O, key = keys[index++], props[key]);
                return O;
            };
        },
        4913(__unused_webpack_module, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(3724), IE8_DOM_DEFINE = __webpack_require__(5917), V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686), anObject = __webpack_require__(8551), toPropertyKey = __webpack_require__(6969), $TypeError = TypeError, $defineProperty = Object.defineProperty, $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function(O, P, Attributes) {
                if (anObject(O), P = toPropertyKey(P), anObject(Attributes), "function" == typeof O && "prototype" === P && "value" in Attributes && "writable" in Attributes && !Attributes.writable) {
                    var current = $getOwnPropertyDescriptor(O, P);
                    current && current.writable && (O[P] = Attributes.value, Attributes = {
                        configurable: "configurable" in Attributes ? Attributes.configurable : current.configurable,
                        enumerable: "enumerable" in Attributes ? Attributes.enumerable : current.enumerable,
                        writable: !1
                    });
                }
                return $defineProperty(O, P, Attributes);
            } : $defineProperty : function(O, P, Attributes) {
                if (anObject(O), P = toPropertyKey(P), anObject(Attributes), IE8_DOM_DEFINE) try {
                    return $defineProperty(O, P, Attributes);
                } catch (error) {}
                if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
                return "value" in Attributes && (O[P] = Attributes.value), O;
            };
        },
        7347(__unused_webpack_module, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(3724), call = __webpack_require__(9565), propertyIsEnumerableModule = __webpack_require__(8773), createPropertyDescriptor = __webpack_require__(6980), toIndexedObject = __webpack_require__(5397), toPropertyKey = __webpack_require__(6969), hasOwn = __webpack_require__(9297), IE8_DOM_DEFINE = __webpack_require__(5917), $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function(O, P) {
                if (O = toIndexedObject(O), P = toPropertyKey(P), IE8_DOM_DEFINE) try {
                    return $getOwnPropertyDescriptor(O, P);
                } catch (error) {}
                if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
            };
        },
        8480(__unused_webpack_module, exports, __webpack_require__) {
            var internalObjectKeys = __webpack_require__(1828), hiddenKeys = __webpack_require__(8727).concat("length", "prototype");
            exports.f = Object.getOwnPropertyNames || function(O) {
                return internalObjectKeys(O, hiddenKeys);
            };
        },
        3717(__unused_webpack_module, exports) {
            exports.f = Object.getOwnPropertySymbols;
        },
        2787(module, __unused_webpack_exports, __webpack_require__) {
            var hasOwn = __webpack_require__(9297), isCallable = __webpack_require__(4901), toObject = __webpack_require__(8981), sharedKey = __webpack_require__(6119), CORRECT_PROTOTYPE_GETTER = __webpack_require__(2211), IE_PROTO = sharedKey("IE_PROTO"), $Object = Object, ObjectPrototype = $Object.prototype;
            module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
                var object = toObject(O);
                if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
                var constructor = object.constructor;
                return isCallable(constructor) && object instanceof constructor ? constructor.prototype : object instanceof $Object ? ObjectPrototype : null;
            };
        },
        1625(module, __unused_webpack_exports, __webpack_require__) {
            var uncurryThis = __webpack_require__(9504);
            module.exports = uncurryThis({}.isPrototypeOf);
        },
        1828(module, __unused_webpack_exports, __webpack_require__) {
            var uncurryThis = __webpack_require__(9504), hasOwn = __webpack_require__(9297), toIndexedObject = __webpack_require__(5397), indexOf = __webpack_require__(9617).indexOf, hiddenKeys = __webpack_require__(421), push = uncurryThis([].push);
            module.exports = function(object, names) {
                var key, O = toIndexedObject(object), i = 0, result = [];
                for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
                for (;names.length > i; ) hasOwn(O, key = names[i++]) && (~indexOf(result, key) || push(result, key));
                return result;
            };
        },
        1072(module, __unused_webpack_exports, __webpack_require__) {
            var internalObjectKeys = __webpack_require__(1828), enumBugKeys = __webpack_require__(8727);
            module.exports = Object.keys || function(O) {
                return internalObjectKeys(O, enumBugKeys);
            };
        },
        8773(__unused_webpack_module, exports) {
            var $propertyIsEnumerable = {}.propertyIsEnumerable, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
                1: 2
            }, 1);
            exports.f = NASHORN_BUG ? function(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
            } : $propertyIsEnumerable;
        },
        4270(module, __unused_webpack_exports, __webpack_require__) {
            var call = __webpack_require__(9565), isCallable = __webpack_require__(4901), isObject = __webpack_require__(34), $TypeError = TypeError;
            module.exports = function(input, pref) {
                var fn, val;
                if ("string" === pref && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
                if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
                if ("string" !== pref && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
                throw new $TypeError("Can't convert object to primitive value");
            };
        },
        5031(module, __unused_webpack_exports, __webpack_require__) {
            var getBuiltIn = __webpack_require__(7751), uncurryThis = __webpack_require__(9504), getOwnPropertyNamesModule = __webpack_require__(8480), getOwnPropertySymbolsModule = __webpack_require__(3717), anObject = __webpack_require__(8551), concat = uncurryThis([].concat);
            module.exports = getBuiltIn("Reflect", "ownKeys") || function(it) {
                var keys = getOwnPropertyNamesModule.f(anObject(it)), getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
            };
        },
        8235(module, __unused_webpack_exports, __webpack_require__) {
            var uncurryThis = __webpack_require__(9504), hasOwn = __webpack_require__(9297), $SyntaxError = SyntaxError, $parseInt = parseInt, fromCharCode = String.fromCharCode, at = uncurryThis("".charAt), slice = uncurryThis("".slice), exec = uncurryThis(/./.exec), codePoints = {
                '\\"': '"',
                "\\\\": "\\",
                "\\/": "/",
                "\\b": "\b",
                "\\f": "\f",
                "\\n": "\n",
                "\\r": "\r",
                "\\t": "\t"
            }, IS_4_HEX_DIGITS = /^[\da-f]{4}$/i, IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;
            module.exports = function(source, i) {
                for (var unterminated = !0, value = ""; i < source.length; ) {
                    var chr = at(source, i);
                    if ("\\" === chr) {
                        var twoChars = slice(source, i, i + 2);
                        if (hasOwn(codePoints, twoChars)) value += codePoints[twoChars], i += 2; else {
                            if ("\\u" !== twoChars) throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
                            var fourHexDigits = slice(source, i += 2, i + 4);
                            if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError("Bad Unicode escape at: " + i);
                            value += fromCharCode($parseInt(fourHexDigits, 16)), i += 4;
                        }
                    } else {
                        if ('"' === chr) {
                            unterminated = !1, i++;
                            break;
                        }
                        if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError("Bad control character in string literal at: " + i);
                        value += chr, i++;
                    }
                }
                if (unterminated) throw new $SyntaxError("Unterminated string at: " + i);
                return {
                    value,
                    end: i
                };
            };
        },
        7750(module, __unused_webpack_exports, __webpack_require__) {
            var isNullOrUndefined = __webpack_require__(4117), $TypeError = TypeError;
            module.exports = function(it) {
                if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
                return it;
            };
        },
        6119(module, __unused_webpack_exports, __webpack_require__) {
            var shared = __webpack_require__(5745), uid = __webpack_require__(3392), keys = shared("keys");
            module.exports = function(key) {
                return keys[key] || (keys[key] = uid(key));
            };
        },
        7629(module, __unused_webpack_exports, __webpack_require__) {
            var IS_PURE = __webpack_require__(6395), globalThis = __webpack_require__(4576), defineGlobalProperty = __webpack_require__(9433), store = module.exports = globalThis["__core-js_shared__"] || defineGlobalProperty("__core-js_shared__", {});
            (store.versions || (store.versions = [])).push({
                version: "3.49.0",
                mode: IS_PURE ? "pure" : "global",
                copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
                license: "https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            });
        },
        5745(module, __unused_webpack_exports, __webpack_require__) {
            var store = __webpack_require__(7629);
            module.exports = function(key, value) {
                return store[key] || (store[key] = value || {});
            };
        },
        4495(module, __unused_webpack_exports, __webpack_require__) {
            var V8_VERSION = __webpack_require__(9519), fails = __webpack_require__(9039), $String = __webpack_require__(4576).String;
            module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
                var symbol = Symbol("symbol detection");
                return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
            });
        },
        5610(module, __unused_webpack_exports, __webpack_require__) {
            var toIntegerOrInfinity = __webpack_require__(1291), max = Math.max, min = Math.min;
            module.exports = function(index, length) {
                var integer = toIntegerOrInfinity(index);
                return integer < 0 ? max(integer + length, 0) : min(integer, length);
            };
        },
        5397(module, __unused_webpack_exports, __webpack_require__) {
            var IndexedObject = __webpack_require__(7055), requireObjectCoercible = __webpack_require__(7750);
            module.exports = function(it) {
                return IndexedObject(requireObjectCoercible(it));
            };
        },
        1291(module, __unused_webpack_exports, __webpack_require__) {
            var trunc = __webpack_require__(741);
            module.exports = function(argument) {
                var number = +argument;
                return number != number || 0 === number ? 0 : trunc(number);
            };
        },
        8014(module, __unused_webpack_exports, __webpack_require__) {
            var toIntegerOrInfinity = __webpack_require__(1291), min = Math.min;
            module.exports = function(argument) {
                var len = toIntegerOrInfinity(argument);
                return len > 0 ? min(len, 9007199254740991) : 0;
            };
        },
        8981(module, __unused_webpack_exports, __webpack_require__) {
            var requireObjectCoercible = __webpack_require__(7750), $Object = Object;
            module.exports = function(argument) {
                return $Object(requireObjectCoercible(argument));
            };
        },
        2777(module, __unused_webpack_exports, __webpack_require__) {
            var call = __webpack_require__(9565), isObject = __webpack_require__(34), isSymbol = __webpack_require__(757), getMethod = __webpack_require__(5966), ordinaryToPrimitive = __webpack_require__(4270), wellKnownSymbol = __webpack_require__(8227), $TypeError = TypeError, TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
            module.exports = function(input, pref) {
                if (!isObject(input) || isSymbol(input)) return input;
                var result, exoticToPrim = getMethod(input, TO_PRIMITIVE);
                if (exoticToPrim) {
                    if (void 0 === pref && (pref = "default"), result = call(exoticToPrim, input, pref), 
                    !isObject(result) || isSymbol(result)) return result;
                    throw new $TypeError("Can't convert object to primitive value");
                }
                return void 0 === pref && (pref = "number"), ordinaryToPrimitive(input, pref);
            };
        },
        6969(module, __unused_webpack_exports, __webpack_require__) {
            var toPrimitive = __webpack_require__(2777), isSymbol = __webpack_require__(757);
            module.exports = function(argument) {
                var key = toPrimitive(argument, "string");
                return isSymbol(key) ? key : key + "";
            };
        },
        2140(module, __unused_webpack_exports, __webpack_require__) {
            var test = {};
            test[__webpack_require__(8227)("toStringTag")] = "z", module.exports = "[object z]" === String(test);
        },
        655(module, __unused_webpack_exports, __webpack_require__) {
            var classof = __webpack_require__(6955), $String = String;
            module.exports = function(argument) {
                if ("Symbol" === classof(argument)) throw new TypeError("Cannot convert a Symbol value to a string");
                return $String(argument);
            };
        },
        6823(module) {
            var $String = String;
            module.exports = function(argument) {
                try {
                    return $String(argument);
                } catch (error) {
                    return "Object";
                }
            };
        },
        3392(module, __unused_webpack_exports, __webpack_require__) {
            var uncurryThis = __webpack_require__(9504), id = 0, postfix = Math.random(), toString = uncurryThis(1.1.toString);
            module.exports = function(key) {
                return "Symbol(" + (void 0 === key ? "" : key) + ")_" + toString(++id + postfix, 36);
            };
        },
        7040(module, __unused_webpack_exports, __webpack_require__) {
            var NATIVE_SYMBOL = __webpack_require__(4495);
            module.exports = NATIVE_SYMBOL && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        8686(module, __unused_webpack_exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(3724), fails = __webpack_require__(9039);
            module.exports = DESCRIPTORS && fails(function() {
                return 42 !== Object.defineProperty(function() {}, "prototype", {
                    value: 42,
                    writable: !1
                }).prototype;
            });
        },
        8622(module, __unused_webpack_exports, __webpack_require__) {
            var globalThis = __webpack_require__(4576), isCallable = __webpack_require__(4901), WeakMap = globalThis.WeakMap;
            module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
        },
        8227(module, __unused_webpack_exports, __webpack_require__) {
            var globalThis = __webpack_require__(4576), shared = __webpack_require__(5745), hasOwn = __webpack_require__(9297), uid = __webpack_require__(3392), NATIVE_SYMBOL = __webpack_require__(4495), USE_SYMBOL_AS_UID = __webpack_require__(7040), Symbol = globalThis.Symbol, WellKnownSymbolsStore = shared("wks"), createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol.for || Symbol : Symbol && Symbol.withoutSetter || uid;
            module.exports = function(name) {
                return hasOwn(WellKnownSymbolsStore, name) || (WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name)), 
                WellKnownSymbolsStore[name];
            };
        },
        8111(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
            var $ = __webpack_require__(6518), globalThis = __webpack_require__(4576), anInstance = __webpack_require__(679), anObject = __webpack_require__(8551), isCallable = __webpack_require__(4901), getPrototypeOf = __webpack_require__(2787), defineBuiltInAccessor = __webpack_require__(2106), createProperty = __webpack_require__(4659), fails = __webpack_require__(9039), hasOwn = __webpack_require__(9297), wellKnownSymbol = __webpack_require__(8227), IteratorPrototype = __webpack_require__(7657).IteratorPrototype, DESCRIPTORS = __webpack_require__(3724), IS_PURE = __webpack_require__(6395), TO_STRING_TAG = wellKnownSymbol("toStringTag"), $TypeError = TypeError, NativeIterator = globalThis.Iterator, FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
                NativeIterator({});
            }), IteratorConstructor = function() {
                if (anInstance(this, IteratorPrototype), getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
            }, defineIteratorPrototypeAccessor = function(key, value) {
                DESCRIPTORS ? defineBuiltInAccessor(IteratorPrototype, key, {
                    configurable: !0,
                    get: function() {
                        return value;
                    },
                    set: function(replacement) {
                        if (anObject(this), this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
                        hasOwn(this, key) ? this[key] = replacement : createProperty(this, key, replacement);
                    }
                }) : IteratorPrototype[key] = value;
            };
            hasOwn(IteratorPrototype, TO_STRING_TAG) || defineIteratorPrototypeAccessor(TO_STRING_TAG, "Iterator"), 
            !FORCED && hasOwn(IteratorPrototype, "constructor") && IteratorPrototype.constructor !== Object || defineIteratorPrototypeAccessor("constructor", IteratorConstructor), 
            IteratorConstructor.prototype = IteratorPrototype, $({
                global: !0,
                constructor: !0,
                forced: FORCED
            }, {
                Iterator: IteratorConstructor
            });
        },
        7588(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
            var $ = __webpack_require__(6518), call = __webpack_require__(9565), iterate = __webpack_require__(2652), aCallable = __webpack_require__(9306), anObject = __webpack_require__(8551), getIteratorDirect = __webpack_require__(1767), iteratorClose = __webpack_require__(9539), forEachWithoutClosingOnEarlyError = __webpack_require__(4549)("forEach", TypeError);
            $({
                target: "Iterator",
                proto: !0,
                real: !0,
                forced: forEachWithoutClosingOnEarlyError
            }, {
                forEach: function(fn) {
                    anObject(this);
                    try {
                        aCallable(fn);
                    } catch (error) {
                        iteratorClose(this, "throw", error);
                    }
                    if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);
                    var record = getIteratorDirect(this), counter = 0;
                    iterate(record, function(value) {
                        fn(value, counter++);
                    }, {
                        IS_RECORD: !0
                    });
                }
            });
        },
        9603(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
            var $ = __webpack_require__(6518), call = __webpack_require__(9565), toObject = __webpack_require__(8981), isPrototypeOf = __webpack_require__(1625), IteratorPrototype = __webpack_require__(7657).IteratorPrototype, createIteratorProxy = __webpack_require__(9462), getIteratorFlattenable = __webpack_require__(8646), FORCED = __webpack_require__(6395) || function() {
                try {
                    Iterator.from({
                        return: null
                    }).return();
                } catch (error) {
                    return !0;
                }
            }(), IteratorProxy = createIteratorProxy(function() {
                return call(this.next, this.iterator);
            }, !0);
            $({
                target: "Iterator",
                stat: !0,
                forced: FORCED
            }, {
                from: function(O) {
                    var iteratorRecord = getIteratorFlattenable("string" == typeof O ? toObject(O) : O, !0);
                    return isPrototypeOf(IteratorPrototype, iteratorRecord.iterator) ? iteratorRecord.iterator : new IteratorProxy(iteratorRecord);
                }
            });
        },
        1806(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
            var $ = __webpack_require__(6518), anObject = __webpack_require__(8551), createProperty = __webpack_require__(4659), iterate = __webpack_require__(2652), getIteratorDirect = __webpack_require__(1767);
            $({
                target: "Iterator",
                proto: !0,
                real: !0
            }, {
                toArray: function() {
                    var result = [], index = 0;
                    return iterate(getIteratorDirect(anObject(this)), function(element) {
                        createProperty(result, index++, element);
                    }, {
                        IS_RECORD: !0
                    }), result;
                }
            });
        },
        9112(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
            var $ = __webpack_require__(6518), DESCRIPTORS = __webpack_require__(3724), globalThis = __webpack_require__(4576), getBuiltIn = __webpack_require__(7751), uncurryThis = __webpack_require__(9504), call = __webpack_require__(9565), isCallable = __webpack_require__(4901), isObject = __webpack_require__(34), isArray = __webpack_require__(4376), hasOwn = __webpack_require__(9297), toString = __webpack_require__(655), lengthOfArrayLike = __webpack_require__(6198), createProperty = __webpack_require__(4659), fails = __webpack_require__(9039), parseJSONString = __webpack_require__(8235), NATIVE_SYMBOL = __webpack_require__(4495), JSON = globalThis.JSON, Number = globalThis.Number, SyntaxError = globalThis.SyntaxError, nativeParse = JSON && JSON.parse, enumerableOwnProperties = getBuiltIn("Object", "keys"), getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, at = uncurryThis("".charAt), slice = uncurryThis("".slice), exec = uncurryThis(/./.exec), push = uncurryThis([].push), IS_DIGIT = /^\d$/, IS_NON_ZERO_DIGIT = /^[1-9]$/, IS_NUMBER_START = /^[\d-]$/, IS_WHITESPACE = /^[\t\n\r ]$/, internalize = function(holder, name, reviver, node) {
                var elementRecordsLen, keys, len, i, P, val = holder[name], unmodified = node && val === node.value, context = unmodified && "string" == typeof node.source ? {
                    source: node.source
                } : {};
                if (isObject(val)) {
                    var nodeIsArray = isArray(val), nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
                    if (nodeIsArray) for (elementRecordsLen = nodes.length, len = lengthOfArrayLike(val), 
                    i = 0; i < len; i++) internalizeProperty(val, i, internalize(val, "" + i, reviver, i < elementRecordsLen ? nodes[i] : void 0)); else for (keys = enumerableOwnProperties(val), 
                    len = lengthOfArrayLike(keys), i = 0; i < len; i++) P = keys[i], internalizeProperty(val, P, internalize(val, P, reviver, hasOwn(nodes, P) ? nodes[P] : void 0));
                }
                return call(reviver, holder, name, val, context);
            }, internalizeProperty = function(object, key, value) {
                if (DESCRIPTORS) {
                    var descriptor = getOwnPropertyDescriptor(object, key);
                    if (descriptor && !descriptor.configurable) return;
                }
                void 0 === value ? delete object[key] : createProperty(object, key, value);
            }, Node = function(value, end, source, nodes) {
                this.value = value, this.end = end, this.source = source, this.nodes = nodes;
            }, Context = function(source, index) {
                this.source = source, this.index = index;
            };
            Context.prototype = {
                fork: function(nextIndex) {
                    return new Context(this.source, nextIndex);
                },
                parse: function() {
                    var source = this.source, i = this.skip(IS_WHITESPACE, this.index), fork = this.fork(i), chr = at(source, i);
                    if (exec(IS_NUMBER_START, chr)) return fork.number();
                    switch (chr) {
                      case "{":
                        return fork.object();

                      case "[":
                        return fork.array();

                      case '"':
                        return fork.string();

                      case "t":
                        return fork.keyword(!0);

                      case "f":
                        return fork.keyword(!1);

                      case "n":
                        return fork.keyword(null);
                    }
                    throw new SyntaxError('Unexpected character: "' + chr + '" at: ' + i);
                },
                node: function(type, value, start, end, nodes) {
                    return new Node(value, end, type ? null : slice(this.source, start, end), nodes);
                },
                object: function() {
                    for (var source = this.source, i = this.index + 1, expectKeypair = !1, object = {}, nodes = {}, closed = !1; i < source.length; ) {
                        if (i = this.until([ '"', "}" ], i), "}" === at(source, i) && !expectKeypair) {
                            i++, closed = !0;
                            break;
                        }
                        var result = this.fork(i).string(), key = result.value;
                        i = result.end, i = this.until([ ":" ], i) + 1, i = this.skip(IS_WHITESPACE, i), 
                        result = this.fork(i).parse(), createProperty(nodes, key, result), createProperty(object, key, result.value), 
                        i = this.until([ ",", "}" ], result.end);
                        var chr = at(source, i);
                        if ("," === chr) expectKeypair = !0, i++; else if ("}" === chr) {
                            i++, closed = !0;
                            break;
                        }
                    }
                    if (!closed) throw new SyntaxError("Unterminated object at: " + i);
                    return this.node(1, object, this.index, i, nodes);
                },
                array: function() {
                    for (var source = this.source, i = this.index + 1, expectElement = !1, array = [], nodes = [], closed = !1; i < source.length; ) {
                        if (i = this.skip(IS_WHITESPACE, i), "]" === at(source, i) && !expectElement) {
                            i++, closed = !0;
                            break;
                        }
                        var result = this.fork(i).parse();
                        if (push(nodes, result), push(array, result.value), i = this.until([ ",", "]" ], result.end), 
                        "," === at(source, i)) expectElement = !0, i++; else if ("]" === at(source, i)) {
                            i++, closed = !0;
                            break;
                        }
                    }
                    if (!closed) throw new SyntaxError("Unterminated array at: " + i);
                    return this.node(1, array, this.index, i, nodes);
                },
                string: function() {
                    var index = this.index, parsed = parseJSONString(this.source, this.index + 1);
                    return this.node(0, parsed.value, index, parsed.end);
                },
                number: function() {
                    var source = this.source, startIndex = this.index, i = startIndex;
                    if ("-" === at(source, i) && i++, "0" === at(source, i)) i++; else {
                        if (!exec(IS_NON_ZERO_DIGIT, at(source, i))) throw new SyntaxError("Failed to parse number at: " + i);
                        i = this.skip(IS_DIGIT, i + 1);
                    }
                    if ("." === at(source, i)) {
                        var fractionStartIndex = i + 1;
                        if (fractionStartIndex === (i = this.skip(IS_DIGIT, fractionStartIndex))) throw new SyntaxError("Failed to parse number's fraction at: " + i);
                    }
                    if (("e" === at(source, i) || "E" === at(source, i)) && (i++, "+" !== at(source, i) && "-" !== at(source, i) || i++, 
                    i === (i = this.skip(IS_DIGIT, i)))) throw new SyntaxError("Failed to parse number's exponent value at: " + i);
                    return this.node(0, Number(slice(source, startIndex, i)), startIndex, i);
                },
                keyword: function(value) {
                    var keyword = "" + value, index = this.index, endIndex = index + keyword.length;
                    if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError("Failed to parse value at: " + index);
                    return this.node(0, value, index, endIndex);
                },
                skip: function(regex, i) {
                    for (var source = this.source; i < source.length && exec(regex, at(source, i)); i++) ;
                    return i;
                },
                until: function(array, i) {
                    i = this.skip(IS_WHITESPACE, i);
                    for (var chr = at(this.source, i), j = 0; j < array.length; j++) if (array[j] === chr) return i;
                    throw new SyntaxError('Unexpected character: "' + chr + '" at: ' + i);
                }
            };
            var NO_SOURCE_SUPPORT = fails(function() {
                var source;
                return nativeParse("9007199254740993", function(key, value, context) {
                    source = context.source;
                }), "9007199254740993" !== source;
            }), PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails(function() {
                return 1 / nativeParse("-0 \t") != -1 / 0;
            });
            $({
                target: "JSON",
                stat: !0,
                forced: NO_SOURCE_SUPPORT
            }, {
                parse: function(text, reviver) {
                    return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : function(source, reviver) {
                        source = toString(source);
                        var context = new Context(source, 0, ""), root = context.parse(), value = root.value, endIndex = context.skip(IS_WHITESPACE, root.end);
                        if (endIndex < source.length) throw new SyntaxError('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
                        return isCallable(reviver) ? internalize({
                            "": value
                        }, "", reviver, root) : value;
                    }(text, reviver);
                }
            });
        },
        3110(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
            var $ = __webpack_require__(6518), getBuiltIn = __webpack_require__(7751), apply = __webpack_require__(8745), call = __webpack_require__(9565), uncurryThis = __webpack_require__(9504), fails = __webpack_require__(9039), isArray = __webpack_require__(4376), isCallable = __webpack_require__(4901), isRawJSON = __webpack_require__(5810), isSymbol = __webpack_require__(757), classof = __webpack_require__(2195), toString = __webpack_require__(655), arraySlice = __webpack_require__(7680), parseJSONString = __webpack_require__(8235), uid = __webpack_require__(3392), NATIVE_SYMBOL = __webpack_require__(4495), NATIVE_RAW_JSON = __webpack_require__(7819), $String = String, $stringify = getBuiltIn("JSON", "stringify"), exec = uncurryThis(/./.exec), charAt = uncurryThis("".charAt), charCodeAt = uncurryThis("".charCodeAt), replace = uncurryThis("".replace), slice = uncurryThis("".slice), push = uncurryThis([].push), numberToString = uncurryThis(1.1.toString), surrogates = /[\uD800-\uDFFF]/g, leadingSurrogates = /^[\uD800-\uDBFF]$/, trailingSurrogates = /^[\uDC00-\uDFFF]$/, MARK = uid(), MARK_LENGTH = MARK.length, WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
                var symbol = getBuiltIn("Symbol")("stringify detection");
                return "[null]" !== $stringify([ symbol ]) || "{}" !== $stringify({
                    a: symbol
                }) || "{}" !== $stringify(Object(symbol));
            }), ILL_FORMED_UNICODE = fails(function() {
                return '"\\udf06\\ud834"' !== $stringify("\udf06\ud834") || '"\\udead"' !== $stringify("\udead");
            }), stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function(it, replacer) {
                var args = arraySlice(arguments), $replacer = getReplacerFunction(replacer);
                if (isCallable($replacer) || void 0 !== it && !isSymbol(it)) return args[1] = function(key, value) {
                    if (isCallable($replacer) && (value = call($replacer, this, $String(key), value)), 
                    !isSymbol(value)) return value;
                }, apply($stringify, null, args);
            } : $stringify, fixIllFormedJSON = function(match, offset, string) {
                var prev = charAt(string, offset - 1), next = charAt(string, offset + 1);
                return exec(leadingSurrogates, match) && !exec(trailingSurrogates, next) || exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev) ? "\\u" + numberToString(charCodeAt(match, 0), 16) : match;
            }, getReplacerFunction = function(replacer) {
                if (isCallable(replacer)) return replacer;
                if (isArray(replacer)) {
                    for (var rawLength = replacer.length, keys = [], i = 0; i < rawLength; i++) {
                        var element = replacer[i];
                        "string" == typeof element ? push(keys, element) : "number" != typeof element && "Number" !== classof(element) && "String" !== classof(element) || push(keys, toString(element));
                    }
                    var keysLength = keys.length, root = !0;
                    return function(key, value) {
                        if (root) return root = !1, value;
                        if (isArray(this)) return value;
                        for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
                    };
                }
            };
            $stringify && $({
                target: "JSON",
                stat: !0,
                arity: 3,
                forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON
            }, {
                stringify: function(text, replacer, space) {
                    var replacerFunction = getReplacerFunction(replacer), rawStrings = [], json = stringifyWithProperSymbolsConversion(text, function(key, value) {
                        var v = isCallable(replacerFunction) ? call(replacerFunction, this, $String(key), value) : value;
                        return !NATIVE_RAW_JSON && isRawJSON(v) ? MARK + (push(rawStrings, v.rawJSON) - 1) : v;
                    }, space);
                    if ("string" != typeof json) return json;
                    if (ILL_FORMED_UNICODE && (json = replace(json, surrogates, fixIllFormedJSON)), 
                    NATIVE_RAW_JSON) return json;
                    for (var result = "", length = json.length, i = 0; i < length; i++) {
                        var chr = charAt(json, i);
                        if ('"' === chr) {
                            var end = parseJSONString(json, ++i).end - 1, string = slice(json, i, end);
                            result += slice(string, 0, MARK_LENGTH) === MARK ? rawStrings[slice(string, MARK_LENGTH)] : '"' + string + '"', 
                            i = end;
                        } else result += chr;
                    }
                    return result;
                }
            });
        },
        3811(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
            var $ = __webpack_require__(6518), anInstance = __webpack_require__(679), getPrototypeOf = __webpack_require__(2787), createNonEnumerableProperty = __webpack_require__(6699), hasOwn = __webpack_require__(9297), wellKnownSymbol = __webpack_require__(8227), AsyncIteratorPrototype = __webpack_require__(3982), IS_PURE = __webpack_require__(6395), TO_STRING_TAG = wellKnownSymbol("toStringTag"), $TypeError = TypeError, AsyncIteratorConstructor = function() {
                if (anInstance(this, AsyncIteratorPrototype), getPrototypeOf(this) === AsyncIteratorPrototype) throw new $TypeError("Abstract class AsyncIterator not directly constructable");
            };
            AsyncIteratorConstructor.prototype = AsyncIteratorPrototype, hasOwn(AsyncIteratorPrototype, TO_STRING_TAG) || createNonEnumerableProperty(AsyncIteratorPrototype, TO_STRING_TAG, "AsyncIterator"), 
            !IS_PURE && hasOwn(AsyncIteratorPrototype, "constructor") && AsyncIteratorPrototype.constructor !== Object || createNonEnumerableProperty(AsyncIteratorPrototype, "constructor", AsyncIteratorConstructor), 
            $({
                global: !0,
                constructor: !0,
                forced: IS_PURE
            }, {
                AsyncIterator: AsyncIteratorConstructor
            });
        },
        6994(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
            var $ = __webpack_require__(6518), $toArray = __webpack_require__(6639).toArray;
            $({
                target: "AsyncIterator",
                proto: !0,
                real: !0,
                forced: !0
            }, {
                toArray: function() {
                    return $toArray(this, void 0, []);
                }
            });
        }
    };
    const __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        const cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        const module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        return __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.exports;
    }
    __webpack_require__(8111), __webpack_require__(7588), __webpack_require__(9603), 
    __webpack_require__(1806), __webpack_require__(9112), __webpack_require__(3110), 
    __webpack_require__(3811), __webpack_require__(6994);
    const isff = "undefined" != typeof navigator && navigator.userAgent.toLowerCase().indexOf("firefox") > 0;
    function addEvent(object, event, method, useCapture) {
        object.addEventListener ? object.addEventListener(event, method, useCapture) : object.attachEvent && object.attachEvent(`on${event}`, method);
    }
    function removeEvent(object, event, method, useCapture) {
        object && (object.removeEventListener ? object.removeEventListener(event, method, useCapture) : object.detachEvent && object.detachEvent(`on${event}`, method));
    }
    function getMods(modifier, key) {
        const modsKeys = key.slice(0, key.length - 1), modsCodes = [];
        for (let i = 0; i < modsKeys.length; i++) modsCodes.push(modifier[modsKeys[i].toLowerCase()]);
        return modsCodes;
    }
    function getKeys(key) {
        "string" != typeof key && (key = "");
        const keys = (key = key.replace(/\s/g, "")).split(",");
        let index = keys.lastIndexOf("");
        for (;index >= 0; ) keys[index - 1] += ",", keys.splice(index, 1), index = keys.lastIndexOf("");
        return keys;
    }
    function getLayoutIndependentKeyCode(event) {
        let key = event.keyCode || event.which || event.charCode;
        return event.key && /^[a-z]$/i.test(event.key) ? event.key.toUpperCase().charCodeAt(0) : (event.code && /^Key[A-Z]$/.test(event.code) && (key = event.code.charCodeAt(3)), 
        key);
    }
    const _keyMap = {
        backspace: 8,
        "⌫": 8,
        tab: 9,
        clear: 12,
        enter: 13,
        "↩": 13,
        return: 13,
        esc: 27,
        escape: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        arrowup: 38,
        arrowdown: 40,
        arrowleft: 37,
        arrowright: 39,
        del: 46,
        delete: 46,
        ins: 45,
        insert: 45,
        home: 36,
        end: 35,
        pageup: 33,
        pagedown: 34,
        capslock: 20,
        num_0: 96,
        num_1: 97,
        num_2: 98,
        num_3: 99,
        num_4: 100,
        num_5: 101,
        num_6: 102,
        num_7: 103,
        num_8: 104,
        num_9: 105,
        num_multiply: 106,
        num_add: 107,
        num_enter: 108,
        num_subtract: 109,
        num_decimal: 110,
        num_divide: 111,
        "⇪": 20,
        ",": 188,
        ".": 190,
        "/": 191,
        "`": 192,
        "-": isff ? 173 : 189,
        "=": isff ? 61 : 187,
        ";": isff ? 59 : 186,
        "'": 222,
        "{": 219,
        "}": 221,
        "[": 219,
        "]": 221,
        "\\": 220
    }, _modifier = {
        "⇧": 16,
        shift: 16,
        "⌥": 18,
        alt: 18,
        option: 18,
        "⌃": 17,
        ctrl: 17,
        control: 17,
        "⌘": 91,
        cmd: 91,
        meta: 91,
        command: 91
    }, modifierMap = {
        16: "shiftKey",
        18: "altKey",
        17: "ctrlKey",
        91: "metaKey",
        shiftKey: 16,
        ctrlKey: 17,
        altKey: 18,
        metaKey: 91
    }, _mods = {
        16: !1,
        18: !1,
        17: !1,
        91: !1
    }, _handlers = {};
    for (let k = 1; k < 20; k++) _keyMap[`f${k}`] = 111 + k;
    let _downKeys = [], winListendFocus = null, winListendFullscreen = null, _scope = "all";
    const elementEventMap = new Map, code = x => _keyMap[x.toLowerCase()] || _modifier[x.toLowerCase()] || x.toUpperCase().charCodeAt(0), setScope = scope => {
        _scope = scope || "all";
    }, getScope = () => _scope || "all", filter = event => {
        const target = event.target || event.srcElement, {tagName} = target;
        let flag = !0;
        const isInput = "INPUT" === tagName && ![ "checkbox", "radio", "range", "button", "file", "reset", "submit", "color" ].includes(target.type);
        return (target.isContentEditable || (isInput || "TEXTAREA" === tagName || "SELECT" === tagName) && !target.readOnly) && (flag = !1), 
        flag;
    };
    const unbind = (keysInfo, ...args) => {
        if (void 0 === keysInfo) Object.keys(_handlers).forEach(key => {
            Array.isArray(_handlers[key]) && _handlers[key].forEach(info => eachUnbind(info)), 
            delete _handlers[key];
        }), removeKeyEvent(null); else if (Array.isArray(keysInfo)) keysInfo.forEach(info => {
            info.key && eachUnbind(info);
        }); else if ("object" == typeof keysInfo) keysInfo.key && eachUnbind(keysInfo); else if ("string" == typeof keysInfo) {
            let [scope, method] = args;
            "function" == typeof scope && (method = scope, scope = ""), eachUnbind({
                key: keysInfo,
                scope,
                method,
                splitKey: "+"
            });
        }
    }, eachUnbind = ({key, scope, method, splitKey = "+"}) => {
        getKeys(key).forEach(originKey => {
            const unbindKeys = originKey.split(splitKey), len = unbindKeys.length, lastKey = unbindKeys[len - 1], keyCode = "*" === lastKey ? "*" : code(lastKey);
            if (!_handlers[keyCode]) return;
            scope || (scope = getScope());
            const mods = len > 1 ? getMods(_modifier, unbindKeys) : [], unbindElements = [];
            _handlers[keyCode] = _handlers[keyCode].filter(record => {
                const isUnbind = (!method || record.method === method) && record.scope === scope && function(a1, a2) {
                    const arr1 = a1.length >= a2.length ? a1 : a2, arr2 = a1.length >= a2.length ? a2 : a1;
                    let isIndex = !0;
                    for (let i = 0; i < arr1.length; i++) -1 === arr2.indexOf(arr1[i]) && (isIndex = !1);
                    return isIndex;
                }(record.mods, mods);
                return isUnbind && unbindElements.push(record.element), !isUnbind;
            }), unbindElements.forEach(element => removeKeyEvent(element));
        });
    };
    function eventHandler(event, handler, scope, element) {
        if (handler.element !== element) return;
        let modifiersMatch;
        if (handler.scope === scope || "all" === handler.scope) {
            modifiersMatch = handler.mods.length > 0;
            for (const y in _mods) Object.prototype.hasOwnProperty.call(_mods, y) && (!_mods[y] && handler.mods.indexOf(+y) > -1 || _mods[y] && -1 === handler.mods.indexOf(+y)) && (modifiersMatch = !1);
            (0 !== handler.mods.length || _mods[16] || _mods[18] || _mods[17] || _mods[91]) && !modifiersMatch && "*" !== handler.shortcut || (handler.keys = [], 
            handler.keys = handler.keys.concat(_downKeys), !1 === handler.method(event, handler) && (event.preventDefault ? event.preventDefault() : event.returnValue = !1, 
            event.stopPropagation && event.stopPropagation(), event.cancelBubble && (event.cancelBubble = !0)));
        }
    }
    function dispatch(event, element) {
        const asterisk = _handlers["*"];
        let key = getLayoutIndependentKeyCode(event);
        if (event.key && "capslock" === event.key.toLowerCase()) return;
        if (!(hotkeys.filter || filter).call(this, event)) return;
        if (93 !== key && 224 !== key || (key = 91), -1 === _downKeys.indexOf(key) && 229 !== key && _downKeys.push(key), 
        [ "metaKey", "ctrlKey", "altKey", "shiftKey" ].forEach(keyName => {
            const keyNum = modifierMap[keyName];
            event[keyName] && -1 === _downKeys.indexOf(keyNum) ? _downKeys.push(keyNum) : !event[keyName] && _downKeys.indexOf(keyNum) > -1 ? _downKeys.splice(_downKeys.indexOf(keyNum), 1) : "metaKey" === keyName && event[keyName] && (_downKeys = _downKeys.filter(k => k in modifierMap || k === key));
        }), key in _mods) {
            _mods[key] = !0;
            for (const k in _modifier) if (Object.prototype.hasOwnProperty.call(_modifier, k)) {
                const eventKey = modifierMap[_modifier[k]];
                hotkeys[k] = event[eventKey];
            }
            if (!asterisk) return;
        }
        for (const e in _mods) Object.prototype.hasOwnProperty.call(_mods, e) && (_mods[e] = event[modifierMap[e]]);
        event.getModifierState && (!event.altKey || event.ctrlKey) && event.getModifierState("AltGraph") && (-1 === _downKeys.indexOf(17) && _downKeys.push(17), 
        -1 === _downKeys.indexOf(18) && _downKeys.push(18), _mods[17] = !0, _mods[18] = !0);
        const scope = getScope();
        if (asterisk) for (let i = 0; i < asterisk.length; i++) asterisk[i].scope === scope && ("keydown" === event.type && asterisk[i].keydown || "keyup" === event.type && asterisk[i].keyup) && eventHandler(event, asterisk[i], scope, element);
        if (!(key in _handlers)) return;
        const handlerKey = _handlers[key], keyLen = handlerKey.length;
        for (let i = 0; i < keyLen; i++) if (("keydown" === event.type && handlerKey[i].keydown || "keyup" === event.type && handlerKey[i].keyup) && handlerKey[i].key) {
            const record = handlerKey[i], {splitKey} = record, keyShortcut = record.key.split(splitKey), _downKeysCurrent = [];
            for (let a = 0; a < keyShortcut.length; a++) _downKeysCurrent.push(code(keyShortcut[a]));
            _downKeysCurrent.sort().join("") === _downKeys.sort().join("") && eventHandler(event, record, scope, element);
        }
    }
    const hotkeys = function hotkeys2(key, option, method) {
        _downKeys = [];
        const keys = getKeys(key);
        let mods = [], scope = "all", element = document, i = 0, keyup = !1, keydown = !0, splitKey = "+", capture = !1, single = !1;
        if (void 0 === method && "function" == typeof option && (method = option), "[object Object]" === Object.prototype.toString.call(option)) {
            const opts = option;
            opts.scope && (scope = opts.scope), opts.element && (element = opts.element), opts.keyup && (keyup = opts.keyup), 
            void 0 !== opts.keydown && (keydown = opts.keydown), void 0 !== opts.capture && (capture = opts.capture), 
            "string" == typeof opts.splitKey && (splitKey = opts.splitKey), !0 === opts.single && (single = !0);
        }
        for ("string" == typeof option && (scope = option), single && unbind(key, scope); i < keys.length; i++) {
            const currentKey = keys[i].split(splitKey);
            mods = [], currentKey.length > 1 && (mods = getMods(_modifier, currentKey));
            let finalKey = currentKey[currentKey.length - 1];
            finalKey = "*" === finalKey ? "*" : code(finalKey), finalKey in _handlers || (_handlers[finalKey] = []), 
            _handlers[finalKey].push({
                keyup,
                keydown,
                scope,
                mods,
                shortcut: keys[i],
                method,
                key: keys[i],
                splitKey,
                element
            });
        }
        if (void 0 !== element && "undefined" != typeof window) {
            if (!elementEventMap.has(element)) {
                const keydownListener = (event = window.event) => dispatch(event, element), keyupListenr = (event = window.event) => {
                    dispatch(event, element), function(event) {
                        let key = getLayoutIndependentKeyCode(event);
                        event.key && "capslock" === event.key.toLowerCase() && (key = code(event.key));
                        const i = _downKeys.indexOf(key);
                        if (i >= 0 && _downKeys.splice(i, 1), event.key && "meta" === event.key.toLowerCase() && _downKeys.splice(0, _downKeys.length), 
                        93 !== key && 224 !== key || (key = 91), key in _mods) {
                            _mods[key] = !1;
                            for (const k in _modifier) _modifier[k] === key && (hotkeys[k] = !1);
                        }
                    }(event);
                };
                elementEventMap.set(element, {
                    keydownListener,
                    keyupListenr,
                    capture
                }), addEvent(element, "keydown", keydownListener, capture), addEvent(element, "keyup", keyupListenr, capture);
            }
            if (!winListendFocus) {
                const listener = () => {
                    _downKeys = [];
                };
                winListendFocus = {
                    listener,
                    capture
                }, addEvent(window, "focus", listener, capture);
            }
            if (!winListendFullscreen && "undefined" != typeof document) {
                const onFullscreenChange = () => {
                    _downKeys = [];
                    for (const k in _mods) _mods[k] = !1;
                    for (const k in _modifier) hotkeys2[k] = !1;
                }, fullscreenListener = onFullscreenChange, webkitListener = onFullscreenChange;
                document.addEventListener("fullscreenchange", fullscreenListener), document.addEventListener("webkitfullscreenchange", webkitListener), 
                winListendFullscreen = {
                    fullscreen: fullscreenListener,
                    webkit: webkitListener
                };
            }
        }
    };
    function removeKeyEvent(element) {
        const values = Object.values(_handlers).flat();
        if (values.findIndex(({element: el}) => el === element) < 0 && element) {
            const {keydownListener, keyupListenr, capture} = elementEventMap.get(element) || {};
            keydownListener && keyupListenr && (removeEvent(element, "keyup", keyupListenr, capture), 
            removeEvent(element, "keydown", keydownListener, capture), elementEventMap.delete(element));
        }
        if (values.length <= 0 || elementEventMap.size <= 0) {
            if (Array.from(elementEventMap.keys()).forEach(el => {
                const {keydownListener, keyupListenr, capture} = elementEventMap.get(el) || {};
                keydownListener && keyupListenr && (removeEvent(el, "keyup", keyupListenr, capture), 
                removeEvent(el, "keydown", keydownListener, capture), elementEventMap.delete(el));
            }), elementEventMap.clear(), Object.keys(_handlers).forEach(key => delete _handlers[key]), 
            winListendFocus) {
                const {listener, capture} = winListendFocus;
                removeEvent(window, "focus", listener, capture), winListendFocus = null;
            }
            winListendFullscreen && "undefined" != typeof document && (document.removeEventListener("fullscreenchange", winListendFullscreen.fullscreen), 
            document.removeEventListener("webkitfullscreenchange", winListendFullscreen.webkit), 
            winListendFullscreen = null);
        }
    }
    const _api = {
        getPressedKeyString: () => _downKeys.map(c => {
            return x = c, Object.keys(_keyMap).find(k => _keyMap[k] === x) || (x => Object.keys(_modifier).find(k => _modifier[k] === x))(c) || String.fromCharCode(c);
            var x;
        }),
        setScope,
        getScope,
        deleteScope: (scope, newScope) => {
            let handlers, i;
            scope || (scope = getScope());
            for (const key in _handlers) if (Object.prototype.hasOwnProperty.call(_handlers, key)) for (handlers = _handlers[key], 
            i = 0; i < handlers.length; ) if (handlers[i].scope === scope) {
                handlers.splice(i, 1).forEach(({element}) => removeKeyEvent(element));
            } else i++;
            getScope() === scope && setScope(newScope || "all");
        },
        getPressedKeyCodes: () => _downKeys.slice(0),
        getAllKeyCodes: () => {
            const result = [];
            return Object.keys(_handlers).forEach(k => {
                _handlers[k].forEach(({key, scope, mods, shortcut}) => {
                    result.push({
                        scope,
                        shortcut,
                        mods,
                        keys: key.split("+").map(v => code(v))
                    });
                });
            }), result;
        },
        isPressed: keyCode => ("string" == typeof keyCode && (keyCode = code(keyCode)), 
        -1 !== _downKeys.indexOf(keyCode)),
        filter,
        trigger: function(shortcut, scope = "all") {
            Object.keys(_handlers).forEach(key => {
                _handlers[key].filter(item => item.scope === scope && item.shortcut === shortcut).forEach(data => {
                    data && data.method && data.method({}, data);
                });
            });
        },
        unbind,
        keyMap: _keyMap,
        modifier: _modifier,
        modifierMap
    };
    for (const a in _api) {
        const key = a;
        Object.prototype.hasOwnProperty.call(_api, key) && (hotkeys[key] = _api[key]);
    }
    if ("undefined" != typeof window) {
        const _hotkeys = window.hotkeys;
        hotkeys.noConflict = deep => (deep && window.hotkeys === hotkeys && (window.hotkeys = _hotkeys), 
        hotkeys), window.hotkeys = hotkeys;
    }
    const evaluator = new XPathEvaluator;
    function onReviewsClick(reviewNode) {
        console.log("Clicked the Reviews"), reviewNode.dataset.sanifier ??= "{}";
        const sanifier = JSON.parse(reviewNode.dataset.sanifier), nodes = function(reviewNode) {
            return Iterator.from(function*(expression, contextNode, resultType) {
                const result = expression.evaluate(contextNode, resultType);
                for (let node; null !== (node = result.iterateNext()); ) yield node;
            }(reviewElementsXpath, reviewNode, XPathResult.ORDERED_NODE_ITERATOR_TYPE)).toArray();
        }(reviewNode);
        sanifier.isHidden ? (sanifier.isHidden = !1, nodes.forEach(node => {
            !function(node) {
                node.style.display = node.dataset.sanifierDisplay;
            }(node);
        })) : (sanifier.isHidden = !0, nodes.forEach(node => {
            !function(node) {
                node.dataset.sanifierDisplay = node.style.display, node.style.display = "none";
            }(node);
        })), reviewNode.dataset.sanifier = JSON.stringify(sanifier);
    }
    const reviewElementsXpath = evaluator.createExpression('./following-sibling::div[contains(concat(" ", normalize-space(@class), " "), " review-element ")]');
    const reviewsH2Xpath = evaluator.createExpression('//div[@id="content"]//h2[text()="Reviews"]'), topSearchXpath = evaluator.createExpression('//input[@id="topSearchText"]'), animeListLinkXpath = evaluator.createExpression('//div[contains(concat(" ", normalize-space(@class), " "), " header-menu-dropdown ")]/ul/li/a[text()="Anime List"]');
    null != globalThis.GM?.info && async function() {
        console.log("MyAnimeList sanifier enabled.");
        const reviewNode = reviewsH2Xpath.evaluate(document, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
        null !== reviewNode && (reviewNode.addEventListener("click", () => onReviewsClick(reviewNode)), 
        onReviewsClick(reviewNode)), hotkeys("ctrl+/", () => {
            console.log("Got search request");
            const searchInput = topSearchXpath.evaluate(document, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
            null !== searchInput && (searchInput.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            }), searchInput.focus({
                focusVisible: !0
            }));
        }), hotkeys("l", () => {
            const linkNode = animeListLinkXpath.evaluate(document, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
            if (null != linkNode) {
                const link = linkNode?.attributes?.href?.value;
                console.log(`link: ${link}`), null != link && (document.location.href = link);
            }
        });
    }();
})();
//# sourceMappingURL=index.js.map