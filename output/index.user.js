// ==UserScript==
// @name        myanimelist-userscript
// @description MyAnimeList improver.
// @version     1.0.150
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
        529(module) {
            module.exports = function(value, done) {
                return {
                    value,
                    done
                };
            };
        },
        117(module) {
            module.exports = function(it) {
                return null == it;
            };
        },
        859(module) {
            module.exports = function(state) {
                state.iterator = state.next = state.nextHandler = state.mapper = state.predicate = state.inner = state.iterables = state.iters = state.openIters = state.padding = state.finishResults = state.buffer = null;
            };
        },
        269(module) {
            module.exports = Object.create ? Object.create(null) : {};
        },
        741(module) {
            var ceil = Math.ceil, floor = Math.floor;
            module.exports = Math.trunc || function(x) {
                var n = +x;
                return (n > 0 ? floor : ceil)(n);
            };
        },
        717(__unused_webpack_module, exports) {
            exports.f = Object.getOwnPropertySymbols;
        },
        750(module, __unused_webpack_exports, __webpack_require__) {
            var isNullOrUndefined = __webpack_require__(117), $TypeError = TypeError;
            module.exports = function(it) {
                if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
                return it;
            };
        },
        291(module, __unused_webpack_exports, __webpack_require__) {
            var trunc = __webpack_require__(741);
            module.exports = function(argument) {
                var number = +argument;
                return number != number || 0 === number ? 0 : trunc(number);
            };
        },
        14(module, __unused_webpack_exports, __webpack_require__) {
            var toIntegerOrInfinity = __webpack_require__(291), min = Math.min;
            module.exports = function(argument) {
                var len = toIntegerOrInfinity(argument);
                return len > 0 ? min(len, 9007199254740991) : 0;
            };
        },
        981(module, __unused_webpack_exports, __webpack_require__) {
            var requireObjectCoercible = __webpack_require__(750), $Object = Object;
            module.exports = function(argument) {
                return $Object(requireObjectCoercible(argument));
            };
        },
        823(module) {
            var $String = String;
            module.exports = function(argument) {
                try {
                    return $String(argument);
                } catch (error) {
                    return "Object";
                }
            };
        }
    };
    const __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        const cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        const module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        return __webpack_modules__[moduleId](module, module.exports, __webpack_require__), 
        module.exports;
    }
    __webpack_require__.cw = body => {
        var mod;
        return () => {
            if (body) {
                var fn = body;
                body = 0, mod = {
                    exports: {}
                }, fn.call(mod.exports, mod, mod.exports);
            }
            return mod.exports;
        };
    };
    var a_callable_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var isCallable = is_callable_namespaceFn(), tryToString = try_to_string_namespaceFn(), $TypeError = TypeError;
        module.exports = function(argument) {
            if (isCallable(argument)) return argument;
            throw new $TypeError(tryToString(argument) + " is not a function");
        };
    }), an_instance_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var isPrototypeOf = object_is_prototype_of_namespaceFn(), $TypeError = TypeError;
        module.exports = function(it, Prototype) {
            if (isPrototypeOf(Prototype, it)) return it;
            throw new $TypeError("Incorrect invocation");
        };
    }), an_object_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var isObject = is_object_namespaceFn(), $String = String, $TypeError = TypeError;
        module.exports = function(argument) {
            if (isObject(argument)) return argument;
            throw new $TypeError($String(argument) + " is not an object");
        };
    }), array_includes_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var toIndexedObject = to_indexed_object_namespaceFn(), toAbsoluteIndex = to_absolute_index_namespaceFn(), lengthOfArrayLike = length_of_array_like_namespaceFn(), createMethod = function(IS_INCLUDES) {
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
            m: createMethod(!0),
            q: createMethod(!1)
        };
    }), array_set_length_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var DESCRIPTORS = descriptors_namespaceFn(), isArray = is_array_namespaceFn(), $TypeError = TypeError, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
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
    }), async_iterator_close_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var call = function_call_namespaceFn(), anObject = an_object_namespaceFn(), getBuiltIn = get_built_in_namespaceFn(), getMethod = get_method_namespaceFn();
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
    }), async_iterator_iteration_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var call = function_call_namespaceFn(), aCallable = a_callable_namespaceFn(), anObject = an_object_namespaceFn(), isObject = is_object_namespaceFn(), doesNotExceedSafeInteger = does_not_exceed_safe_integer_namespaceFn(), getBuiltIn = get_built_in_namespaceFn(), createProperty = create_property_namespaceFn(), setArrayLength = array_set_length_namespaceFn(), getIteratorDirect = get_iterator_direct_namespaceFn(), closeAsyncIteration = async_iterator_close_namespaceFn(), createMethod = function(TYPE) {
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
            $r: createMethod(0),
            ...void createMethod(1),
            ...void createMethod(2),
            ...void createMethod(3),
            ...void createMethod(4)
        };
    }), async_iterator_prototype_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var AsyncIteratorPrototype, prototype, globalThis = global_this_namespaceFn(), shared = shared_store_namespaceFn(), isCallable = is_callable_namespaceFn(), create = object_create_namespaceFn(), getPrototypeOf = object_get_prototype_of_namespaceFn(), defineBuiltIn = define_built_in_namespaceFn(), wellKnownSymbol = well_known_symbol_namespaceFn(), IS_PURE = is_pure_namespaceFn(), ASYNC_ITERATOR = wellKnownSymbol("asyncIterator"), AsyncIterator = globalThis.AsyncIterator, PassedAsyncIteratorPrototype = shared.AsyncIteratorPrototype;
        if (PassedAsyncIteratorPrototype) AsyncIteratorPrototype = PassedAsyncIteratorPrototype; else if (isCallable(AsyncIterator)) AsyncIteratorPrototype = AsyncIterator.prototype; else if (shared.USE_FUNCTION_CONSTRUCTOR || globalThis.USE_FUNCTION_CONSTRUCTOR) try {
            prototype = getPrototypeOf(getPrototypeOf(getPrototypeOf(Function("return async function*(){}()")()))), 
            getPrototypeOf(prototype) === Object.prototype && (AsyncIteratorPrototype = prototype);
        } catch (error) {}
        AsyncIteratorPrototype ? IS_PURE && (AsyncIteratorPrototype = create(AsyncIteratorPrototype)) : AsyncIteratorPrototype = {}, 
        isCallable(AsyncIteratorPrototype[ASYNC_ITERATOR]) || defineBuiltIn(AsyncIteratorPrototype, ASYNC_ITERATOR, function() {
            return this;
        }), module.exports = AsyncIteratorPrototype;
    }), classof_raw_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var uncurryThis = function_uncurry_this_namespaceFn(), toString = uncurryThis({}.toString), stringSlice = uncurryThis("".slice);
        module.exports = function(it) {
            return stringSlice(toString(it), 8, -1);
        };
    }), classof_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var TO_STRING_TAG_SUPPORT = to_string_tag_support_namespaceFn(), isCallable = is_callable_namespaceFn(), classofRaw = classof_raw_namespaceFn(), TO_STRING_TAG = well_known_symbol_namespaceFn()("toStringTag"), $Object = Object, CORRECT_ARGUMENTS = "Arguments" === classofRaw(function() {
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
    }), copy_constructor_properties_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var hasOwn = has_own_property_namespaceFn(), ownKeys = own_keys_namespaceFn(), getOwnPropertyDescriptorModule = object_get_own_property_descriptor_namespaceFn(), definePropertyModule = object_define_property_namespaceFn();
        module.exports = function(target, source, exceptions) {
            for (var keys = ownKeys(source), defineProperty = definePropertyModule.f, getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f, i = 0; i < keys.length; i++) {
                var key = keys[i];
                hasOwn(target, key) || exceptions && hasOwn(exceptions, key) || defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
        };
    }), correct_prototype_getter_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var fails = fails_namespaceFn();
        module.exports = !fails(function() {
            function F() {}
            return F.prototype.constructor = null, Object.getPrototypeOf(new F) !== F.prototype;
        });
    }), create_non_enumerable_property_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var DESCRIPTORS = descriptors_namespaceFn(), definePropertyModule = object_define_property_namespaceFn(), createPropertyDescriptor = create_property_descriptor_namespaceFn();
        module.exports = DESCRIPTORS ? function(object, key, value) {
            return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
        } : function(object, key, value) {
            return object[key] = value, object;
        };
    }), create_property_descriptor_namespaceFn = __webpack_require__.cw(function(module, exports) {
        module.exports = function(bitmap, value) {
            return {
                enumerable: !(1 & bitmap),
                configurable: !(2 & bitmap),
                writable: !(4 & bitmap),
                value
            };
        };
    }), create_property_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var DESCRIPTORS = descriptors_namespaceFn(), definePropertyModule = object_define_property_namespaceFn(), createPropertyDescriptor = create_property_descriptor_namespaceFn();
        module.exports = function(object, key, value) {
            DESCRIPTORS ? definePropertyModule.f(object, key, createPropertyDescriptor(0, value)) : object[key] = value;
        };
    }), define_built_in_accessor_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var makeBuiltIn = make_built_in_namespaceFn(), defineProperty = object_define_property_namespaceFn();
        module.exports = function(target, name, descriptor) {
            return descriptor.get && makeBuiltIn(descriptor.get, name, {
                getter: !0
            }), descriptor.set && makeBuiltIn(descriptor.set, name, {
                setter: !0
            }), defineProperty.f(target, name, descriptor);
        };
    }), define_built_in_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var isCallable = is_callable_namespaceFn(), definePropertyModule = object_define_property_namespaceFn(), makeBuiltIn = make_built_in_namespaceFn(), defineGlobalProperty = define_global_property_namespaceFn();
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
    }), define_built_ins_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var defineBuiltIn = define_built_in_namespaceFn();
        module.exports = function(target, src, options) {
            for (var key in src) defineBuiltIn(target, key, src[key], options);
            return target;
        };
    }), define_global_property_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var globalThis = global_this_namespaceFn(), defineProperty = Object.defineProperty;
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
    }), descriptors_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var fails = fails_namespaceFn();
        module.exports = !fails(function() {
            return 7 !== Object.defineProperty({}, 1, {
                get: function() {
                    return 7;
                }
            })[1];
        });
    }), document_create_element_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var globalThis = global_this_namespaceFn(), isObject = is_object_namespaceFn(), document = globalThis.document, EXISTS = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return EXISTS ? document.createElement(it) : {};
        };
    }), does_not_exceed_safe_integer_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var $TypeError = TypeError;
        module.exports = function(it) {
            if (it > 9007199254740991) throw new $TypeError("Maximum allowed index exceeded");
            return it;
        };
    }), enum_bug_keys_namespaceFn = __webpack_require__.cw(function(module, exports) {
        module.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
    }), environment_user_agent_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var navigator = global_this_namespaceFn().navigator, userAgent = navigator && navigator.userAgent;
        module.exports = userAgent ? String(userAgent) : "";
    }), environment_v8_version_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var match, version, globalThis = global_this_namespaceFn(), userAgent = environment_user_agent_namespaceFn(), process = globalThis.process, Deno = globalThis.Deno, versions = process && process.versions || Deno && Deno.version, v8 = versions && versions.v8;
        v8 && (version = (match = v8.split("."))[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1])), 
        !version && userAgent && (!(match = userAgent.match(/Edge\/(\d+)/)) || match[1] >= 74) && (match = userAgent.match(/Chrome\/(\d+)/)) && (version = +match[1]), 
        module.exports = version;
    }), export_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var globalThis = global_this_namespaceFn(), getOwnPropertyDescriptor = object_get_own_property_descriptor_namespaceFn().f, createNonEnumerableProperty = create_non_enumerable_property_namespaceFn(), defineBuiltIn = define_built_in_namespaceFn(), defineGlobalProperty = define_global_property_namespaceFn(), copyConstructorProperties = copy_constructor_properties_namespaceFn(), isForced = is_forced_namespaceFn();
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
    }), fails_namespaceFn = __webpack_require__.cw(function(module, exports) {
        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (error) {
                return !0;
            }
        };
    }), function_bind_context_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var uncurryThis = function_uncurry_this_clause_namespaceFn(), aCallable = a_callable_namespaceFn(), NATIVE_BIND = function_bind_native_namespaceFn(), bind = uncurryThis(uncurryThis.bind);
        module.exports = function(fn, that) {
            return aCallable(fn), void 0 === that ? fn : NATIVE_BIND ? bind(fn, that) : function() {
                return fn.apply(that, arguments);
            };
        };
    }), function_bind_native_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var fails = fails_namespaceFn();
        module.exports = !fails(function() {
            var test = function() {}.bind();
            return "function" != typeof test || test.hasOwnProperty("prototype");
        });
    }), function_call_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var NATIVE_BIND = function_bind_native_namespaceFn(), call = Function.prototype.call;
        module.exports = NATIVE_BIND ? call.bind(call) : function() {
            return call.apply(call, arguments);
        };
    }), function_name_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var DESCRIPTORS = descriptors_namespaceFn(), hasOwn = has_own_property_namespaceFn(), FunctionPrototype = Function.prototype, getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor, EXISTS = hasOwn(FunctionPrototype, "name"), CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
        module.exports = {
            i2: CONFIGURABLE
        };
    }), function_uncurry_this_clause_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var classofRaw = classof_raw_namespaceFn(), uncurryThis = function_uncurry_this_namespaceFn();
        module.exports = function(fn) {
            if ("Function" === classofRaw(fn)) return uncurryThis(fn);
        };
    }), function_uncurry_this_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var NATIVE_BIND = function_bind_native_namespaceFn(), FunctionPrototype = Function.prototype, call = FunctionPrototype.call, uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
        module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
            return function() {
                return call.apply(fn, arguments);
            };
        };
    }), get_built_in_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var globalThis = global_this_namespaceFn(), isCallable = is_callable_namespaceFn();
        module.exports = function(namespace, method) {
            return arguments.length < 2 ? (argument = globalThis[namespace], isCallable(argument) ? argument : void 0) : globalThis[namespace] && globalThis[namespace][method];
            var argument;
        };
    }), get_iterator_direct_namespaceFn = __webpack_require__.cw(function(module, exports) {
        module.exports = function(obj) {
            return {
                iterator: obj,
                next: obj.next,
                done: !1
            };
        };
    }), get_iterator_flattenable_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var call = function_call_namespaceFn(), anObject = an_object_namespaceFn(), getIteratorDirect = get_iterator_direct_namespaceFn(), getIteratorMethod = get_iterator_method_internal_namespaceFn();
        module.exports = function(obj, stringHandling) {
            stringHandling && "string" == typeof obj || anObject(obj);
            var method = getIteratorMethod(obj);
            return getIteratorDirect(anObject(void 0 !== method ? call(method, obj) : obj));
        };
    }), get_iterator_internal_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var call = function_call_namespaceFn(), isCallable = is_callable_namespaceFn(), anObject = an_object_namespaceFn(), tryToString = try_to_string_namespaceFn(), getIteratorMethod = get_iterator_method_internal_namespaceFn(), $TypeError = TypeError;
        module.exports = function(argument, usingIterator) {
            var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
            if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
            throw new $TypeError(tryToString(argument) + " is not iterable");
        };
    }), get_iterator_method_internal_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var classof = classof_raw_namespaceFn(), isNullOrUndefined = is_null_or_undefined_namespaceFn(), getMethod = get_method_namespaceFn(), ITERATOR = well_known_symbol_namespaceFn()("iterator"), ArrayPrototype = Array.prototype;
        module.exports = function(it) {
            if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || ("Arguments" === classof(it) ? ArrayPrototype[ITERATOR] : void 0);
        };
    }), get_method_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var aCallable = a_callable_namespaceFn(), isNullOrUndefined = is_null_or_undefined_namespaceFn();
        module.exports = function(V, P) {
            var func = V[P];
            return isNullOrUndefined(func) ? void 0 : aCallable(func);
        };
    }), global_this_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var check = function(it) {
            return it && it.Math === Math && it;
        };
        module.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof globalThis && globalThis) || check("object" == typeof this && this) || function() {
            return this;
        }() || Function("return this")();
    }), has_own_property_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var uncurryThis = function_uncurry_this_namespaceFn(), toObject = to_object_namespaceFn(), hasOwnProperty = uncurryThis({}.hasOwnProperty);
        module.exports = Object.hasOwn || function(it, key) {
            return hasOwnProperty(toObject(it), key);
        };
    }), hidden_keys_namespaceFn = __webpack_require__.cw(function(module, exports) {
        module.exports = {};
    }), html_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var getBuiltIn = get_built_in_namespaceFn();
        module.exports = getBuiltIn("document", "documentElement");
    }), ie8_dom_define_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var DESCRIPTORS = descriptors_namespaceFn(), fails = fails_namespaceFn(), createElement = document_create_element_namespaceFn();
        module.exports = !DESCRIPTORS && !fails(function() {
            return 7 !== Object.defineProperty(createElement("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }), indexed_object_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var uncurryThis = function_uncurry_this_namespaceFn(), fails = fails_namespaceFn(), classof = classof_raw_namespaceFn(), $Object = Object, split = uncurryThis("".split);
        module.exports = fails(function() {
            return !$Object("z").propertyIsEnumerable(0);
        }) ? function(it) {
            return "String" === classof(it) ? split(it, "") : $Object(it);
        } : $Object;
    }), inspect_source_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var uncurryThis = function_uncurry_this_namespaceFn(), isCallable = is_callable_namespaceFn(), store = shared_store_namespaceFn(), functionToString = uncurryThis(Function.toString);
        isCallable(store.inspectSource) || (store.inspectSource = function(it) {
            return functionToString(it);
        }), module.exports = store.inspectSource;
    }), internal_state_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var set, get, has, NATIVE_WEAK_MAP = weak_map_basic_detection_namespaceFn(), globalThis = global_this_namespaceFn(), isObject = is_object_namespaceFn(), createNonEnumerableProperty = create_non_enumerable_property_namespaceFn(), hasOwn = has_own_property_namespaceFn(), shared = shared_store_namespaceFn(), sharedKey = shared_key_namespaceFn(), hiddenKeys = hidden_keys_namespaceFn(), TypeError = globalThis.TypeError, WeakMap = globalThis.WeakMap;
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
    }), is_array_iterator_method_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var wellKnownSymbol = well_known_symbol_namespaceFn(), Iterators = iterators_namespaceFn(), ITERATOR = wellKnownSymbol("iterator"), ArrayPrototype = Array.prototype;
        module.exports = function(it) {
            return void 0 !== it && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };
    }), is_array_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var classof = classof_raw_namespaceFn();
        module.exports = Array.isArray || function(argument) {
            return "Array" === classof(argument);
        };
    }), is_callable_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var documentAll = "object" == typeof document && document.all;
        module.exports = void 0 === documentAll && void 0 !== documentAll ? function(argument) {
            return "function" == typeof argument || argument === documentAll;
        } : function(argument) {
            return "function" == typeof argument;
        };
    }), is_forced_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var fails = fails_namespaceFn(), isCallable = is_callable_namespaceFn(), replacement = /#|\.prototype\./, isForced = function(feature, detection) {
            var value = data[normalize(feature)];
            return value === POLYFILL || value !== NATIVE && (isCallable(detection) ? fails(detection) : !!detection);
        }, normalize = isForced.normalize = function(string) {
            return String(string).replace(replacement, ".").toLowerCase();
        }, data = isForced.data = {}, NATIVE = isForced.NATIVE = "N", POLYFILL = isForced.POLYFILL = "P";
        module.exports = isForced;
    }), is_null_or_undefined_namespaceFn = () => __webpack_require__(117), is_object_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var isCallable = is_callable_namespaceFn();
        module.exports = function(it) {
            return "object" == typeof it ? null !== it : isCallable(it);
        };
    }), is_pure_namespaceFn = __webpack_require__.cw(function(module, exports) {
        module.exports = !1;
    }), is_raw_json_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var isObject = is_object_namespaceFn(), getInternalState = internal_state_namespaceFn().get;
        module.exports = function(O) {
            if (!isObject(O)) return !1;
            var state = getInternalState(O);
            return !!state && "RawJSON" === state.type;
        };
    }), is_symbol_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var getBuiltIn = get_built_in_namespaceFn(), isCallable = is_callable_namespaceFn(), isPrototypeOf = object_is_prototype_of_namespaceFn(), USE_SYMBOL_AS_UID = use_symbol_as_uid_namespaceFn(), $Object = Object;
        module.exports = USE_SYMBOL_AS_UID ? function(it) {
            return "symbol" == typeof it;
        } : function(it) {
            var $Symbol = getBuiltIn("Symbol");
            return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
        };
    }), iterate_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var bind = function_bind_context_namespaceFn(), call = function_call_namespaceFn(), anObject = an_object_namespaceFn(), tryToString = try_to_string_namespaceFn(), isArrayIteratorMethod = is_array_iterator_method_namespaceFn(), lengthOfArrayLike = length_of_array_like_namespaceFn(), isPrototypeOf = object_is_prototype_of_namespaceFn(), getIterator = get_iterator_internal_namespaceFn(), getIteratorMethod = get_iterator_method_internal_namespaceFn(), iteratorClose = iterator_close_namespaceFn(), $TypeError = TypeError, Result = function(stopped, result) {
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
    }), iterator_close_all_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var iteratorClose = iterator_close_namespaceFn();
        module.exports = function(iters, kind, value) {
            for (var i = iters.length - 1; i >= 0; i--) if (void 0 !== iters[i]) try {
                value = iteratorClose(iters[i].iterator, kind, value);
            } catch (error) {
                kind = "throw", value = error;
            }
            if ("throw" === kind) throw value;
            return value;
        };
    }), iterator_close_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var call = function_call_namespaceFn(), anObject = an_object_namespaceFn(), getMethod = get_method_namespaceFn();
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
    }), iterator_create_proxy_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var call = function_call_namespaceFn(), create = object_create_namespaceFn(), createNonEnumerableProperty = create_non_enumerable_property_namespaceFn(), defineBuiltIns = define_built_ins_namespaceFn(), wellKnownSymbol = well_known_symbol_namespaceFn(), InternalStateModule = internal_state_namespaceFn(), getMethod = get_method_namespaceFn(), IteratorPrototype = iterators_core_namespaceFn().H, createIterResultObject = __webpack_require__(529), iteratorClose = iterator_close_namespaceFn(), iteratorCloseAll = iterator_close_all_namespaceFn(), cleanupState = __webpack_require__(859), TO_STRING_TAG = wellKnownSymbol("toStringTag"), setInternalState = InternalStateModule.set, createIteratorProxyPrototype = function(IS_ITERATOR) {
            var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? "WrapForValidIterator" : "IteratorHelper");
            return defineBuiltIns(create(IteratorPrototype), {
                next: function() {
                    var state = getInternalState(this);
                    if (IS_ITERATOR) return state.nextHandler();
                    if (state.done) return createIterResultObject(void 0, !0);
                    try {
                        var result = state.nextHandler();
                        return state.done && cleanupState(state), state.returnHandlerResult ? result : createIterResultObject(result, state.done);
                    } catch (error) {
                        throw state.done = !0, cleanupState(state), error;
                    }
                },
                return: function() {
                    var state = getInternalState(this), iterator = state.iterator, inner = state.inner, openIters = state.openIters, done = state.done;
                    if (state.done = !0, IS_ITERATOR) {
                        var returnMethod = getMethod(iterator, "return");
                        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(void 0, !0);
                    }
                    if (cleanupState(state), done) return createIterResultObject(void 0, !0);
                    if (inner) try {
                        iteratorClose(inner.iterator, "normal");
                    } catch (error) {
                        return iteratorClose(iterator, "throw", error);
                    }
                    if (openIters) try {
                        iteratorCloseAll(openIters, "normal");
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
    }), iterator_helper_without_closing_on_early_error_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var globalThis = global_this_namespaceFn();
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
    }), iterators_core_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator, fails = fails_namespaceFn(), isCallable = is_callable_namespaceFn(), isObject = is_object_namespaceFn(), create = object_create_namespaceFn(), getPrototypeOf = object_get_prototype_of_namespaceFn(), defineBuiltIn = define_built_in_namespaceFn(), wellKnownSymbol = well_known_symbol_namespaceFn(), IS_PURE = is_pure_namespaceFn(), ITERATOR = wellKnownSymbol("iterator");
        [].keys && ("next" in (arrayIterator = [].keys()) && ((PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator))) !== Object.prototype && (IteratorPrototype = PrototypeOfArrayIteratorPrototype))), 
        !isObject(IteratorPrototype) || fails(function() {
            var test = {};
            return IteratorPrototype[ITERATOR].call(test) !== test;
        }) ? IteratorPrototype = {} : IS_PURE && (IteratorPrototype = create(IteratorPrototype)), 
        isCallable(IteratorPrototype[ITERATOR]) || defineBuiltIn(IteratorPrototype, ITERATOR, function() {
            return this;
        }), module.exports = {
            H: IteratorPrototype
        };
    }), iterators_namespaceFn = () => __webpack_require__(269), length_of_array_like_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var toLength = to_length_namespaceFn();
        module.exports = function(obj) {
            return toLength(obj.length);
        };
    }), make_built_in_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var uncurryThis = function_uncurry_this_namespaceFn(), fails = fails_namespaceFn(), isCallable = is_callable_namespaceFn(), hasOwn = has_own_property_namespaceFn(), DESCRIPTORS = descriptors_namespaceFn(), CONFIGURABLE_FUNCTION_NAME = function_name_namespaceFn().i2, inspectSource = inspect_source_namespaceFn(), InternalStateModule = internal_state_namespaceFn(), enforceInternalState = InternalStateModule.enforce, getInternalState = InternalStateModule.get, $String = String, defineProperty = Object.defineProperty, stringSlice = uncurryThis("".slice), replace = uncurryThis("".replace), join = uncurryThis([].join), CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
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
    }), native_raw_json_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var fails = fails_namespaceFn();
        module.exports = !fails(function() {
            var raw = JSON.rawJSON("9007199254740993");
            return !JSON.isRawJSON(raw) || "9007199254740993" !== JSON.stringify(raw);
        });
    }), object_create_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var activeXDocument, anObject = an_object_namespaceFn(), definePropertiesModule = object_define_properties_namespaceFn(), enumBugKeys = enum_bug_keys_namespaceFn(), hiddenKeys = hidden_keys_namespaceFn(), html = html_namespaceFn(), documentCreateElement = document_create_element_namespaceFn(), sharedKey = shared_key_namespaceFn(), IE_PROTO = sharedKey("IE_PROTO"), EmptyConstructor = function() {}, scriptTag = function(content) {
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
    }), object_define_properties_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var DESCRIPTORS = descriptors_namespaceFn(), V8_PROTOTYPE_DEFINE_BUG = v8_prototype_define_bug_namespaceFn(), definePropertyModule = object_define_property_namespaceFn(), anObject = an_object_namespaceFn(), toIndexedObject = to_indexed_object_namespaceFn(), objectKeys = object_keys_namespaceFn();
        exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function(O, Properties) {
            anObject(O);
            for (var key, props = toIndexedObject(Properties), keys = objectKeys(Properties), length = keys.length, index = 0; length > index; ) definePropertyModule.f(O, key = keys[index++], props[key]);
            return O;
        };
    }), object_define_property_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var DESCRIPTORS = descriptors_namespaceFn(), IE8_DOM_DEFINE = ie8_dom_define_namespaceFn(), V8_PROTOTYPE_DEFINE_BUG = v8_prototype_define_bug_namespaceFn(), anObject = an_object_namespaceFn(), toPropertyKey = to_property_key_namespaceFn(), $TypeError = TypeError, $defineProperty = Object.defineProperty, $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
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
    }), object_get_own_property_descriptor_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var DESCRIPTORS = descriptors_namespaceFn(), call = function_call_namespaceFn(), propertyIsEnumerableModule = object_property_is_enumerable_namespaceFn(), createPropertyDescriptor = create_property_descriptor_namespaceFn(), toIndexedObject = to_indexed_object_namespaceFn(), toPropertyKey = to_property_key_namespaceFn(), hasOwn = has_own_property_namespaceFn(), IE8_DOM_DEFINE = ie8_dom_define_namespaceFn(), $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function(O, P) {
            if (O = toIndexedObject(O), P = toPropertyKey(P), IE8_DOM_DEFINE) try {
                return $getOwnPropertyDescriptor(O, P);
            } catch (error) {}
            if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
        };
    }), object_get_own_property_names_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var internalObjectKeys = object_keys_internal_namespaceFn(), hiddenKeys = enum_bug_keys_namespaceFn().concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function(O) {
            return internalObjectKeys(O, hiddenKeys);
        };
    }), object_get_prototype_of_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var hasOwn = has_own_property_namespaceFn(), isCallable = is_callable_namespaceFn(), toObject = to_object_namespaceFn(), sharedKey = shared_key_namespaceFn(), CORRECT_PROTOTYPE_GETTER = correct_prototype_getter_namespaceFn(), IE_PROTO = sharedKey("IE_PROTO"), $Object = Object, ObjectPrototype = $Object.prototype;
        module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
            var object = toObject(O);
            if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
            var constructor = object.constructor;
            return isCallable(constructor) && object instanceof constructor ? constructor.prototype : object instanceof $Object ? ObjectPrototype : null;
        };
    }), object_is_prototype_of_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var uncurryThis = function_uncurry_this_namespaceFn();
        module.exports = uncurryThis({}.isPrototypeOf);
    }), object_keys_internal_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var uncurryThis = function_uncurry_this_namespaceFn(), hasOwn = has_own_property_namespaceFn(), toIndexedObject = to_indexed_object_namespaceFn(), indexOf = array_includes_namespaceFn().q, hiddenKeys = hidden_keys_namespaceFn(), push = uncurryThis([].push);
        module.exports = function(object, names) {
            var key, O = toIndexedObject(object), i = 0, result = [];
            for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
            for (;names.length > i; ) hasOwn(O, key = names[i++]) && (~indexOf(result, key) || push(result, key));
            return result;
        };
    }), object_keys_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var internalObjectKeys = object_keys_internal_namespaceFn(), enumBugKeys = enum_bug_keys_namespaceFn();
        module.exports = Object.keys || function(O) {
            return internalObjectKeys(O, enumBugKeys);
        };
    }), object_property_is_enumerable_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var $propertyIsEnumerable = {}.propertyIsEnumerable, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
            1: 2
        }, 1);
        exports.f = NASHORN_BUG ? function(V) {
            var descriptor = getOwnPropertyDescriptor(this, V);
            return !!descriptor && descriptor.enumerable;
        } : $propertyIsEnumerable;
    }), ordinary_to_primitive_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var call = function_call_namespaceFn(), isCallable = is_callable_namespaceFn(), isObject = is_object_namespaceFn(), $TypeError = TypeError;
        module.exports = function(input, pref) {
            var fn, val;
            if ("string" === pref && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
            if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
            if ("string" !== pref && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
            throw new $TypeError("Can't convert object to primitive value");
        };
    }), own_keys_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var getBuiltIn = get_built_in_namespaceFn(), uncurryThis = function_uncurry_this_namespaceFn(), getOwnPropertyNamesModule = object_get_own_property_names_namespaceFn(), getOwnPropertySymbolsModule = __webpack_require__(717), anObject = an_object_namespaceFn(), concat = uncurryThis([].concat);
        module.exports = getBuiltIn("Reflect", "ownKeys") || function(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it)), getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
        };
    }), parse_json_string_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var uncurryThis = function_uncurry_this_namespaceFn(), hasOwn = has_own_property_namespaceFn(), $SyntaxError = SyntaxError, $parseInt = parseInt, fromCharCode = String.fromCharCode, at = uncurryThis("".charAt), slice = uncurryThis("".slice), exec = uncurryThis(/./.exec), codePoints = {
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
    }), shared_key_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var shared = shared_namespaceFn(), uid = uid_namespaceFn(), keys = shared("keys");
        module.exports = function(key) {
            return keys[key] || (keys[key] = uid(key));
        };
    }), shared_store_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var IS_PURE = is_pure_namespaceFn(), globalThis = global_this_namespaceFn(), defineGlobalProperty = define_global_property_namespaceFn(), store = module.exports = globalThis["__core-js_shared__"] || defineGlobalProperty("__core-js_shared__", {});
        (store.versions || (store.versions = [])).push({
            version: "3.50.0",
            mode: IS_PURE ? "pure" : "global",
            copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
            license: "https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",
            source: "https://github.com/zloirock/core-js"
        });
    }), shared_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var store = shared_store_namespaceFn(), create = Object.create || Object;
        module.exports = function(key, value) {
            return store[key] || (store[key] = value || create(null));
        };
    }), symbol_constructor_detection_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var V8_VERSION = environment_v8_version_namespaceFn(), fails = fails_namespaceFn(), $String = global_this_namespaceFn().String;
        module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
            var symbol = Symbol("symbol detection");
            return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
        });
    }), this_number_value_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var uncurryThis = function_uncurry_this_namespaceFn();
        module.exports = uncurryThis(1.1.valueOf);
    }), to_absolute_index_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var toIntegerOrInfinity = to_integer_or_infinity_namespaceFn(), max = Math.max, min = Math.min;
        module.exports = function(index, length) {
            var integer = toIntegerOrInfinity(index);
            return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };
    }), to_indexed_object_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var IndexedObject = indexed_object_namespaceFn(), requireObjectCoercible = __webpack_require__(750);
        module.exports = function(it) {
            return IndexedObject(requireObjectCoercible(it));
        };
    }), to_integer_or_infinity_namespaceFn = () => __webpack_require__(291), to_length_namespaceFn = () => __webpack_require__(14), to_object_namespaceFn = () => __webpack_require__(981), to_primitive_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var call = function_call_namespaceFn(), isObject = is_object_namespaceFn(), isSymbol = is_symbol_namespaceFn(), getMethod = get_method_namespaceFn(), ordinaryToPrimitive = ordinary_to_primitive_namespaceFn(), wellKnownSymbol = well_known_symbol_namespaceFn(), $TypeError = TypeError, TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
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
    }), to_property_key_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var toPrimitive = to_primitive_namespaceFn(), isSymbol = is_symbol_namespaceFn();
        module.exports = function(argument) {
            var key = toPrimitive(argument, "string");
            return isSymbol(key) ? key : key + "";
        };
    }), to_string_tag_support_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var test = {};
        test[well_known_symbol_namespaceFn()("toStringTag")] = "z", module.exports = "[object z]" === String(test);
    }), to_string_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var classof = classof_namespaceFn(), $String = String;
        module.exports = function(argument) {
            if ("Symbol" === classof(argument)) throw new TypeError("Cannot convert a Symbol value to a string");
            return $String(argument);
        };
    }), try_to_string_namespaceFn = () => __webpack_require__(823), uid_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var uncurryThis = function_uncurry_this_namespaceFn(), id = 0, postfix = Math.random(), toString = uncurryThis(1.1.toString);
        module.exports = function(key) {
            return "Symbol(" + (void 0 === key ? "" : key) + ")_" + toString(++id + postfix, 36);
        };
    }), use_symbol_as_uid_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var NATIVE_SYMBOL = symbol_constructor_detection_namespaceFn();
        module.exports = NATIVE_SYMBOL && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    }), v8_prototype_define_bug_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var DESCRIPTORS = descriptors_namespaceFn(), fails = fails_namespaceFn();
        module.exports = DESCRIPTORS && fails(function() {
            return 42 !== Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype;
        });
    }), weak_map_basic_detection_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var globalThis = global_this_namespaceFn(), isCallable = is_callable_namespaceFn(), WeakMap = globalThis.WeakMap;
        module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
    }), well_known_symbol_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var globalThis = global_this_namespaceFn(), shared = shared_namespaceFn(), hasOwn = has_own_property_namespaceFn(), uid = uid_namespaceFn(), NATIVE_SYMBOL = symbol_constructor_detection_namespaceFn(), USE_SYMBOL_AS_UID = use_symbol_as_uid_namespaceFn(), Symbol = globalThis.Symbol, WellKnownSymbolsStore = shared("wks"), createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol.for || Symbol : Symbol && Symbol.withoutSetter || uid;
        module.exports = function(name) {
            return hasOwn(WellKnownSymbolsStore, name) || (WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name)), 
            WellKnownSymbolsStore[name];
        };
    }), es_iterator_constructor_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var $ = export_namespaceFn(), globalThis = global_this_namespaceFn(), anInstance = an_instance_namespaceFn(), anObject = an_object_namespaceFn(), isCallable = is_callable_namespaceFn(), getPrototypeOf = object_get_prototype_of_namespaceFn(), defineBuiltInAccessor = define_built_in_accessor_namespaceFn(), createProperty = create_property_namespaceFn(), fails = fails_namespaceFn(), hasOwn = has_own_property_namespaceFn(), wellKnownSymbol = well_known_symbol_namespaceFn(), IteratorPrototype = iterators_core_namespaceFn().H, DESCRIPTORS = descriptors_namespaceFn(), IS_PURE = is_pure_namespaceFn(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), $TypeError = TypeError, NativeIterator = globalThis.Iterator, FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
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
    }), es_iterator_for_each_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var $ = export_namespaceFn(), call = function_call_namespaceFn(), iterate = iterate_namespaceFn(), aCallable = a_callable_namespaceFn(), anObject = an_object_namespaceFn(), getIteratorDirect = get_iterator_direct_namespaceFn(), iteratorClose = iterator_close_namespaceFn(), forEachWithoutClosingOnEarlyError = iterator_helper_without_closing_on_early_error_namespaceFn()("forEach", TypeError);
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
    }), es_iterator_from_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var $ = export_namespaceFn(), call = function_call_namespaceFn(), toObject = to_object_namespaceFn(), isPrototypeOf = object_is_prototype_of_namespaceFn(), IteratorPrototype = iterators_core_namespaceFn().H, createIteratorProxy = iterator_create_proxy_namespaceFn(), getIteratorFlattenable = get_iterator_flattenable_namespaceFn(), FORCED = is_pure_namespaceFn() || function() {
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
    }), es_iterator_to_array_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var $ = export_namespaceFn(), anObject = an_object_namespaceFn(), createProperty = create_property_namespaceFn(), iterate = iterate_namespaceFn(), getIteratorDirect = get_iterator_direct_namespaceFn();
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
    }), es_json_parse_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var $ = export_namespaceFn(), DESCRIPTORS = descriptors_namespaceFn(), globalThis = global_this_namespaceFn(), getBuiltIn = get_built_in_namespaceFn(), uncurryThis = function_uncurry_this_namespaceFn(), call = function_call_namespaceFn(), isCallable = is_callable_namespaceFn(), isObject = is_object_namespaceFn(), isArray = is_array_namespaceFn(), hasOwn = has_own_property_namespaceFn(), toString = to_string_namespaceFn(), lengthOfArrayLike = length_of_array_like_namespaceFn(), createProperty = create_property_namespaceFn(), fails = fails_namespaceFn(), parseJSONString = parse_json_string_namespaceFn(), NATIVE_SYMBOL = symbol_constructor_detection_namespaceFn(), JSON = globalThis.JSON, Number = globalThis.Number, SyntaxError = globalThis.SyntaxError, nativeParse = JSON && JSON.parse, enumerableOwnProperties = getBuiltIn("Object", "keys"), getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, at = uncurryThis("".charAt), slice = uncurryThis("".slice), exec = uncurryThis(/./.exec), push = uncurryThis([].push), IS_DIGIT = /^\d$/, IS_NON_ZERO_DIGIT = /^[1-9]$/, IS_NUMBER_START = /^[\d-]$/, IS_WHITESPACE = /^[\t\n\r ]$/, internalize = function(holder, name, reviver, node) {
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
                    var context = new Context(source, 0), root = context.parse(), value = root.value, endIndex = context.skip(IS_WHITESPACE, root.end);
                    if (endIndex < source.length) throw new SyntaxError('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
                    return isCallable(reviver) ? internalize({
                        "": value
                    }, "", reviver, root) : value;
                }(text, reviver);
            }
        });
    }), es_json_stringify_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var $ = export_namespaceFn(), getBuiltIn = get_built_in_namespaceFn(), call = function_call_namespaceFn(), uncurryThis = function_uncurry_this_namespaceFn(), fails = fails_namespaceFn(), isArray = is_array_namespaceFn(), isCallable = is_callable_namespaceFn(), isObject = is_object_namespaceFn(), create = object_create_namespaceFn(), isRawJSON = is_raw_json_namespaceFn(), isSymbol = is_symbol_namespaceFn(), classof = classof_raw_namespaceFn(), thisNumberValue = this_number_value_namespaceFn(), includes = array_includes_namespaceFn().m, hasOwn = has_own_property_namespaceFn(), toString = to_string_namespaceFn(), parseJSONString = parse_json_string_namespaceFn(), uid = uid_namespaceFn(), NATIVE_SYMBOL = symbol_constructor_detection_namespaceFn(), NATIVE_RAW_JSON = native_raw_json_namespaceFn(), $String = String, $TypeError = TypeError, $stringify = getBuiltIn("JSON", "stringify"), $BigInt = getBuiltIn("BigInt"), stringValueOf = uncurryThis("".valueOf), booleanValueOf = uncurryThis((!0).valueOf), bigIntValueOf = $BigInt && uncurryThis($BigInt.prototype.valueOf), exec = uncurryThis(/./.exec), charAt = uncurryThis("".charAt), charCodeAt = uncurryThis("".charCodeAt), replace = uncurryThis("".replace), slice = uncurryThis("".slice), push = uncurryThis([].push), pop = uncurryThis([].pop), numberToString = uncurryThis(1.1.toString), surrogates = /[\uD800-\uDFFF]/g, leadingSurrogates = /^[\uD800-\uDBFF]$/, trailingSurrogates = /^[\uDC00-\uDFFF]$/, digits = /^\d+$/, RAW_MARK = uid(), KEY_MARK = uid(), END_MARK = uid(), RAW_MARK_LENGTH = RAW_MARK.length, KEY_MARK_LENGTH = KEY_MARK.length, WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
            var symbol = getBuiltIn("Symbol")("stringify detection");
            return "[null]" !== $stringify([ symbol ]) || "{}" !== $stringify({
                a: symbol
            }) || "{}" !== $stringify(Object(symbol));
        }), ILL_FORMED_UNICODE = fails(function() {
            return '"\\udf06\\ud834"' !== $stringify("\udf06\ud834") || '"\\udead"' !== $stringify("\udead");
        }), isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn("JSON", "isRawJSON") : isRawJSON, stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function(it, replacer, space) {
            return $stringify(it, function(key, value) {
                var replaced = call(replacer, this, key, value);
                if (!isSymbol(replaced)) return replaced;
            }, space);
        } : $stringify, fixIllFormedJSON = function(match, offset, string) {
            var prev = charAt(string, offset - 1), next = charAt(string, offset + 1);
            return exec(leadingSurrogates, match) && !exec(trailingSurrogates, next) || exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev) ? "\\u" + numberToString(charCodeAt(match, 0), 16) : match;
        }, hasInternalSlot = function(valueOf, it) {
            try {
                return valueOf(it), !0;
            } catch (error) {
                return !1;
            }
        }, isSerializedAsObject = function(it) {
            if (!isObject(it) || isCallable(it) || isArray(it)) return !1;
            try {
                return !function(it) {
                    var kind = classof(it);
                    return "Number" === kind && hasInternalSlot(thisNumberValue, it) || "String" === kind && hasInternalSlot(stringValueOf, it) || "Boolean" === kind && hasInternalSlot(booleanValueOf, it) || !!bigIntValueOf && "BigInt" === kind && hasInternalSlot(bigIntValueOf, it);
                }(it);
            } catch (error) {
                return !0;
            }
        }, createElementHolder = function(holder, key) {
            return {
                toJSON: function() {
                    var element = holder[key];
                    if (isObject(element) || "bigint" == typeof element) {
                        var elementToJSON = element.toJSON;
                        isCallable(elementToJSON) && (element = call(elementToJSON, element, key));
                    }
                    return element;
                }
            };
        };
        $stringify && $({
            target: "JSON",
            stat: !0,
            arity: 3,
            forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON
        }, {
            stringify: function(text, replacer, space) {
                var currentOrdered, replacerFunction = isCallable(replacer) ? replacer : void 0, propertyList = replacerFunction ? void 0 : function(replacer) {
                    if (isArray(replacer)) {
                        for (var rawLength = replacer.length, propertyList = [], addedKeys = create(null), i = 0; i < rawLength; i++) {
                            var key, element = replacer[i];
                            if ("string" == typeof element) key = element; else {
                                if ("number" != typeof element && "Number" !== classof(element) && "String" !== classof(element)) continue;
                                key = toString(element);
                            }
                            hasOwn(addedKeys, key) || (addedKeys[key] = !0, push(propertyList, key));
                        }
                        return propertyList;
                    }
                }(replacer), keyPrefix = propertyList && function(propertyList) {
                    for (var i = 0, length = propertyList.length; i < length; i++) if (exec(digits, propertyList[i])) return KEY_MARK;
                    return "";
                }(propertyList), rawStrings = [], openObjects = [], parentOrdered = [], marked = !1, root = !0, json = stringifyWithProperSymbolsConversion(text, function(key, value) {
                    if (key = $String(key), propertyList) {
                        if (key === END_MARK) return pop(openObjects), void (currentOrdered = pop(parentOrdered));
                        if (root) root = !1; else if (this !== currentOrdered && !isArray(this) && !includes(propertyList, key)) return;
                    } else replacerFunction && (value = call(replacerFunction, this, key, value));
                    if (isRawJSONValue(value)) return NATIVE_RAW_JSON ? value : (marked = !0, RAW_MARK + (push(rawStrings, value.rawJSON) - 1));
                    if (propertyList && isSerializedAsObject(value)) {
                        if (includes(openObjects, value)) throw new $TypeError("Converting circular structure to JSON");
                        var ordered = function(value, propertyList, keyPrefix) {
                            for (var ordered = create(null), i = 0, length = propertyList.length; i < length; i++) {
                                var key = propertyList[i];
                                ordered[keyPrefix + key] = createElementHolder(value, key);
                            }
                            return ordered[END_MARK] = null, ordered;
                        }(value, propertyList, keyPrefix);
                        return push(openObjects, value), push(parentOrdered, currentOrdered), currentOrdered = ordered, 
                        keyPrefix && (marked = !0), ordered;
                    }
                    return value;
                }, space);
                if ("string" != typeof json) return json;
                if (ILL_FORMED_UNICODE && (json = replace(json, surrogates, fixIllFormedJSON)), 
                !marked) return json;
                for (var result = "", length = json.length, i = 0; i < length; i++) {
                    var chr = charAt(json, i);
                    if ('"' === chr) {
                        var end = parseJSONString(json, ++i).end - 1, string = slice(json, i, end);
                        slice(string, 0, RAW_MARK_LENGTH) === RAW_MARK ? result += rawStrings[slice(string, RAW_MARK_LENGTH)] : slice(string, 0, KEY_MARK_LENGTH) === KEY_MARK ? result += '"' + slice(string, KEY_MARK_LENGTH) + '"' : result += '"' + string + '"', 
                        i = end;
                    } else result += chr;
                }
                return result;
            }
        });
    }), esnext_async_iterator_constructor_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var $ = export_namespaceFn(), anInstance = an_instance_namespaceFn(), getPrototypeOf = object_get_prototype_of_namespaceFn(), createNonEnumerableProperty = create_non_enumerable_property_namespaceFn(), hasOwn = has_own_property_namespaceFn(), wellKnownSymbol = well_known_symbol_namespaceFn(), AsyncIteratorPrototype = async_iterator_prototype_namespaceFn(), IS_PURE = is_pure_namespaceFn(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), $TypeError = TypeError, AsyncIteratorConstructor = function() {
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
    }), esnext_async_iterator_to_array_namespaceFn = __webpack_require__.cw(function(module, exports) {
        var $ = export_namespaceFn(), $toArray = async_iterator_iteration_namespaceFn().$r;
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
    });
    es_iterator_constructor_namespaceFn(), es_iterator_for_each_namespaceFn(), es_iterator_from_namespaceFn(), 
    es_iterator_to_array_namespaceFn(), es_json_parse_namespaceFn(), es_json_stringify_namespaceFn(), 
    esnext_async_iterator_constructor_namespaceFn(), esnext_async_iterator_to_array_namespaceFn();
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
    function getLayoutIndependentKeyCode(event, keyMap, modifierMap2) {
        let key = event.keyCode || event.which || event.charCode;
        if (event.key) {
            const eventKey = event.key.toLowerCase();
            if (eventKey in keyMap) return keyMap[eventKey];
            if (eventKey in modifierMap2) return modifierMap2[eventKey];
            if (/^[0-9]$/.test(event.key)) return event.key.charCodeAt(0);
            if (/^[a-z]$/i.test(event.key)) return event.key.toUpperCase().charCodeAt(0);
        }
        return event.code && /^Key[A-Z]$/.test(event.code) && (key = event.code.charCodeAt(3)), 
        key;
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
    const elementEventMap = new Map, hotkeys_js_code = x => _keyMap[x.toLowerCase()] || _modifier[x.toLowerCase()] || x.toUpperCase().charCodeAt(0), setScope = scope => {
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
            const unbindKeys = originKey.split(splitKey), len = unbindKeys.length, lastKey = unbindKeys[len - 1], keyCode = "*" === lastKey ? "*" : hotkeys_js_code(lastKey);
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
        let key = getLayoutIndependentKeyCode(event, _keyMap, _modifier);
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
            for (let a = 0; a < keyShortcut.length; a++) _downKeysCurrent.push(hotkeys_js_code(keyShortcut[a]));
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
            finalKey = "*" === finalKey ? "*" : hotkeys_js_code(finalKey), finalKey in _handlers || (_handlers[finalKey] = []), 
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
                        let key = getLayoutIndependentKeyCode(event, _keyMap, _modifier);
                        event.key && "capslock" === event.key.toLowerCase() && (key = hotkeys_js_code(event.key));
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
                        keys: key.split("+").map(v => hotkeys_js_code(v))
                    });
                });
            }), result;
        },
        isPressed: keyCode => ("string" == typeof keyCode && (keyCode = hotkeys_js_code(keyCode)), 
        -1 !== _downKeys.indexOf(keyCode)),
        filter,
        trigger: function(shortcut, scope = "all") {
            Object.keys(_handlers).forEach(key => {
                _handlers[key].filter(item => item.scope === scope && (item.shortcut === shortcut || "*" === item.shortcut)).forEach(data => {
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
    "undefined" != typeof GM && void 0 !== GM?.info ? async function() {
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
    }() : console.warn("MyAnimeList sanifier startup skipped: GM or GM.info is unavailable.");
})();
//# sourceMappingURL=index.js.map