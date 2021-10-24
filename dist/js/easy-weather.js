/**
 * Easy Weather is a A JavaScript plugin for getting Weather information
 * @version 1.0.0
 * @author Amit Chauhan
 * @email chauhanammy@gmail.com
 * @license The MIT License (MIT)
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.EasyWeather = factory());
}(this, (function () { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var asyncToGenerator = createCommonjsModule(function (module) {
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	module.exports = _asyncToGenerator;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _asyncToGenerator = unwrapExports(asyncToGenerator);

	var classCallCheck = createCommonjsModule(function (module) {
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	module.exports = _classCallCheck;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var createClass = createCommonjsModule(function (module) {
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	module.exports = _createClass;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _createClass = unwrapExports(createClass);

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(setPrototypeOf);

	var inherits = createCommonjsModule(function (module) {
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	module.exports = _inherits;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _inherits = unwrapExports(inherits);

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return typeof obj;
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _typeof = unwrapExports(_typeof_1);

	var assertThisInitialized = createCommonjsModule(function (module) {
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	module.exports = _assertThisInitialized;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _assertThisInitialized = unwrapExports(assertThisInitialized);

	var possibleConstructorReturn = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];



	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return assertThisInitialized(self);
	}

	module.exports = _possibleConstructorReturn;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _getPrototypeOf = unwrapExports(getPrototypeOf);

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  define(Gp, "constructor", GeneratorFunctionPrototype);
	  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  });
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  define(Gp, iteratorSymbol, function() {
	    return this;
	  });

	  define(Gp, "toString", function() {
	    return "[object Generator]";
	  });

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, in modern engines
	  // we can explicitly access globalThis. In older engines we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}
	});

	var regenerator = runtime_1;

	var defaults = {
	  key: null,
	  lang: 'en',
	  code: null,
	  location: null,
	  template: null,
	  iconStyle: 'flat',
	  description: false,
	  icon: true,
	  iconPath: 'images/icons/',
	  iconAnimation: false,
	  sunTime: false,
	  today: true,
	  details: false,
	  forecast: false,
	  quarterly: false,
	  units: {
	    temp: 'c',
	    wind: 'mps',
	    visibility: 'km'
	  },
	  title: {
	    maxTemp: 'Max',
	    minTemp: 'Min',
	    forecast: 'Forecast',
	    quarterly: 'Quarterly',
	    details: 'Details'
	  },
	  customTemplate: function customTemplate(weather) {}
	};

	var defineProperty = createCommonjsModule(function (module) {
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	module.exports = _defineProperty;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _defineProperty = unwrapExports(defineProperty);

	var Dom = function Dom() {
	  var _this = this;

	  _classCallCheck(this, Dom);

	  _defineProperty(this, "isElement", function (obj) {
	    if (!obj || _typeof(obj) !== 'object') {
	      return false;
	    }

	    if (typeof obj.jquery !== 'undefined') {
	      obj = obj[0];
	    }

	    return typeof obj.nodeType !== 'undefined';
	  });

	  _defineProperty(this, "getElement", function (obj) {
	    if (_this.isElement(obj)) {
	      return obj.jquery ? obj[0] : obj;
	    }

	    if (typeof obj === 'string' && obj.length > 0) {
	      return document.querySelector(obj);
	    }

	    return null;
	  });
	};

	function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var Helper = /*#__PURE__*/function (_Dom) {
	  _inherits(Helper, _Dom);

	  var _super = _createSuper$5(Helper);

	  function Helper() {
	    var _this;

	    _classCallCheck(this, Helper);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(args));

	    _defineProperty(_assertThisInitialized(_this), "apiWeatherData", {});

	    _defineProperty(_assertThisInitialized(_this), "apiUrl", '');

	    _defineProperty(_assertThisInitialized(_this), "successCode", 200);

	    _defineProperty(_assertThisInitialized(_this), "options", {});

	    _defineProperty(_assertThisInitialized(_this), "weather", {});

	    _defineProperty(_assertThisInitialized(_this), "element", void 0);

	    _defineProperty(_assertThisInitialized(_this), "days", ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

	    _defineProperty(_assertThisInitialized(_this), "months", ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

	    _defineProperty(_assertThisInitialized(_this), "iconIds", {
	      day: 'd',
	      night: 'n',
	      one: '01',
	      two: '02',
	      three: '03',
	      four: '04',
	      nine: '09',
	      ten: '10',
	      eleven: '11',
	      thirteen: '13',
	      fifty: '50'
	    });

	    _defineProperty(_assertThisInitialized(_this), "iconDirectories", {
	      common: 'common',
	      day: 'day',
	      night: 'night'
	    });

	    _defineProperty(_assertThisInitialized(_this), "iconFiles", {
	      clear: 'clear',
	      cloud: 'cloud',
	      mist: 'mist',
	      rain: 'rain',
	      snow: 'snow',
	      storm: 'storm'
	    });

	    return _this;
	  }

	  _createClass(Helper, [{
	    key: "weatherTemp",
	    value: function weatherTemp(temp) {
	      return {
	        current: this.tempFormat(temp.temp),
	        min: this.tempFormat(temp.temp_min),
	        max: this.tempFormat(temp.temp_max)
	      };
	    }
	  }, {
	    key: "tempFormat",
	    value: function tempFormat(temp) {
	      if (this.options.units.temp.toLowerCase() === 'f') {
	        return Math.round((temp - 273.15) * 1.8 + 32) + '°F';
	      } else if (this.options.units.temp.toLowerCase() === 'c') {
	        return Math.round(temp - 273.15) + '°C';
	      } else {
	        return Math.round(temp) + 'K';
	      }
	    }
	  }, {
	    key: "windFormat",
	    value: function windFormat(wind) {
	      if (this.options.units.wind.toLowerCase() === 'km/h') {
	        return "".concat(wind.speed * 3.6, " ").concat(this.options.units.wind);
	      } else {
	        return "".concat(wind.speed, " ").concat(this.options.units.wind);
	      }
	    }
	  }, {
	    key: "visibilityFormat",
	    value: function visibilityFormat(visibility) {
	      var digit = this.options.units.visibility.toLowerCase() === 'km' ? visibility / 1000.0 : visibility * 0.00062137;
	      digit = this.isFloat(digit) ? digit.toFixed(2) : digit;
	      return "".concat(digit, " ").concat(this.options.units.visibility);
	    }
	  }, {
	    key: "isFloat",
	    value: function isFloat(num) {
	      return Number(num) === num && num % 1 !== 0;
	    }
	  }, {
	    key: "getToday",
	    value: function getToday() {
	      var date = new Date();
	      var month = this.months[date.getMonth()].substring(0, 3);
	      var day = this.numberSuffix(date.getDate());
	      return "".concat(month, " ").concat(day);
	    }
	  }, {
	    key: "dateFormat",
	    value: function dateFormat(dateString) {
	      var today = new Date();
	      var date = new Date(dateString);

	      if (today.getDate() === date.getDate()) {
	        return 'Today';
	      } else {
	        return this.days[date.getDay()];
	      }
	    }
	  }, {
	    key: "numberSuffix",
	    value: function numberSuffix(number) {
	      var singleNumber = number % 10;
	      var doubleNumber = number % 100;

	      if (singleNumber === 1 && doubleNumber === 11) {
	        return "".concat(number, "st");
	      } else if (singleNumber === 2 && doubleNumber === 12) {
	        return "".concat(number, "nd");
	      } else if (singleNumber === 3 && doubleNumber === 13) {
	        return "".concat(number, "rd");
	      } else {
	        return "".concat(number, "th");
	      }
	    }
	  }, {
	    key: "timeFormat",
	    value: function timeFormat(time) {
	      var timeFormat = 12;

	      if (typeof time === 'string' || time instanceof String) {
	        var hours = parseInt(time.split(':')[0]);

	        if (hours === 0) {
	          return '12 AM';
	        } else if (timeFormat === hours) {
	          return '12 PM';
	        } else if (timeFormat < hours) {
	          return "".concat(('0' + (hours - timeFormat)).slice(-2), " PM");
	        } else {
	          return "".concat(('0' + hours).slice(-2), " AM");
	        }
	      } else {
	        var ms = time * 1000;
	        var date = new Date(ms);

	        var _hours = date.getHours();

	        if (_hours > timeFormat) {
	          var hoursRemaining = 24 - _hours;
	          _hours = timeFormat - hoursRemaining;
	        }

	        var minutes = date.getMinutes();
	        minutes = minutes.toString();
	        _hours = ('0' + _hours).slice(-2);
	        minutes = ('0' + minutes).slice(-2);
	        return "".concat(_hours, ":").concat(minutes);
	      }
	    }
	  }, {
	    key: "isRightTime",
	    value: function isRightTime(timeString) {
	      var currentTime = new Date().getTime();
	      var weatherTime = new Date(timeString).getTime();

	      if (weatherTime >= currentTime) {
	        return true;
	      }
	    }
	  }, {
	    key: "indexOfTime",
	    value: function indexOfTime(list) {
	      for (var item = 0; item < list.length; item++) {
	        if (this.isRightTime(list[item].dt_txt)) {
	          return item;
	        }
	      }
	    }
	  }]);

	  return Helper;
	}(Dom);

	function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var Icon = /*#__PURE__*/function (_Helper) {
	  _inherits(Icon, _Helper);

	  var _super = _createSuper$4(Icon);

	  function Icon() {
	    var _this;

	    _classCallCheck(this, Icon);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(args));

	    _defineProperty(_assertThisInitialized(_this), "path", '');

	    return _this;
	  }

	  _createClass(Icon, [{
	    key: "getSvgCode",
	    value: function getSvgCode() {
	      return fetch(this.path).then(function (data) {
	        return data.text();
	      }).then(function (markup) {
	        return markup;
	      });
	    }
	  }, {
	    key: "getIcon",
	    value: function getIcon(iconId) {
	      this.path = '';
	      this.path += this.options.iconPath + this.options.iconStyle + '/';

	      if (iconId.indexOf(this.iconIds.eleven) !== -1 || iconId.indexOf(this.iconIds.fifty) !== -1) {
	        this.path += this.iconDirectories.common + '/';
	        iconId.indexOf(this.iconIds.eleven) !== -1 ? this.path += this.iconFiles.storm : this.path += this.iconFiles.mist;
	      } else {
	        iconId.indexOf(this.iconIds.day) !== -1 ? this.path += this.iconDirectories.day + '/' : this.path += this.iconDirectories.night + '/';
	      }

	      if (iconId.indexOf(this.iconIds.one) !== -1) {
	        this.path += this.iconFiles.clear;
	      } else if (iconId.indexOf(this.iconIds.two) !== -1 || iconId.indexOf(this.iconIds.three) !== -1 || iconId.indexOf(this.iconIds.four) !== -1) {
	        this.path += this.iconFiles.cloud;
	      } else if (iconId.indexOf(this.iconIds.nine) !== -1 || iconId.indexOf(this.iconIds.ten) !== -1) {
	        this.path += this.iconFiles.rain;
	      } else if (iconId.indexOf(this.iconIds.thirteen) !== -1) {
	        this.path += this.iconFiles.snow;
	      }

	      this.path += '.svg';
	      return this.getSvgCode().then(function (svg) {
	        return svg;
	      });
	    }
	  }]);

	  return Icon;
	}(Helper);

	var root = "src";
	var output = "dist";
	var prefix = "ew";
	var debug = false;
	var assets = [
	  "images",
	  "html"
	];
	var es6 = {
	  format: "umd",
	  module: "EasyWeather"
	};
	var files = {
	  styles: {
	    src: "{$config.root}/scss/styles.scss",
	    output: "{$config.output}/css/styles.css"
	  },
	  scripts: {
	    src: "{$config.root}/js/core.js",
	    output: "{$config.output}/js/easy-weather.js"
	  },
	  images: {
	    src: "{$config.root}/images/**/*",
	    output: "{$config.output}/images/"
	  },
	  html: {
	    src: "{$config.root}/**/*.html",
	    output: "{$config.output}/"
	  }
	};
	var config = {
	  root: root,
	  output: output,
	  prefix: prefix,
	  debug: debug,
	  assets: assets,
	  es6: es6,
	  files: files
	};

	function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var Template = /*#__PURE__*/function (_Icon) {
	  _inherits(Template, _Icon);

	  var _super = _createSuper$3(Template);

	  function Template() {
	    var _this;

	    _classCallCheck(this, Template);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(args));

	    _defineProperty(_assertThisInitialized(_this), "weatherHTML", void 0);

	    _defineProperty(_assertThisInitialized(_this), "prefix", config.prefix + '-');

	    _defineProperty(_assertThisInitialized(_this), "templates", {
	      card: 'card',
	      classic: 'classic',
	      compact: 'compact',
	      full: 'full',
	      minimal: 'minimal'
	    });

	    _defineProperty(_assertThisInitialized(_this), "classes", {
	      animate: _this.prefix + 'animate',
	      content: _this.prefix + 'content',
	      weather: _this.prefix + 'weather',
	      card: _this.prefix + _this.templates.card,
	      classic: _this.prefix + _this.templates.classic,
	      compact: _this.prefix + _this.templates.compact,
	      full: _this.prefix + _this.templates.full,
	      minimal: _this.prefix + _this.templates.minimal
	    });

	    return _this;
	  }

	  _createClass(Template, [{
	    key: "getTemplate",
	    value: function getTemplate() {
	      var html = document.createElement('div');
	      var classes = this.classes.weather;
	      classes += this.options.iconAnimation ? ' ' + this.classes.animate : '';
	      console.log('Weather data: ', this.weather);

	      switch (this.options.template) {
	        case this.templates.card:
	          classes += ' ' + this.classes.card + this.getBgClass();
	          html.innerHTML = this.cardTemplate();
	          break;

	        case this.templates.classic:
	          classes += ' ' + this.classes.classic;
	          html.innerHTML = this.classicTemplate();
	          break;

	        case this.templates.compact:
	          classes += ' ' + this.classes.compact;
	          html.innerHTML = this.compactTemplate();
	          break;

	        case this.templates.full:
	          classes += ' ' + this.classes.full + this.getBgClass();
	          html.innerHTML = this.fullTemplate();
	          break;

	        case this.templates.minimal:
	          classes += ' ' + this.classes.minimal + this.getBgClass();
	          html.innerHTML = this.minimalTemplate();
	          break;

	        default:
	          classes += ' ' + this.classes.content;
	          html.innerHTML = this.defaultTemplate();
	          break;
	      }

	      html.classList = classes;
	      this.element.appendChild(html);
	      this.tabClickEvent();
	    }
	  }, {
	    key: "cardTemplate",
	    value: function cardTemplate() {
	      var html = "<div class=\"".concat(this.classes.card, "__item\">\n            <div class=\"").concat(this.classes.card, "__col\">\n                ").concat(this.getIconTemplate(), "\n                ").concat(this.getTempDescription(), "\n            </div>\n            <div class=\"").concat(this.classes.card, "__col\">\n                ").concat(this.getTempLocDate(), "\n            </div>\n        </div>");

	      if (this.options.quarterly) {
	        html += "<div class=\"".concat(this.classes.card, "__item\">\n                <span class=\"").concat(this.prefix, "title\">").concat(this.options.title.quarterly, "</span>\n                ").concat(this.getQuarterlyTemplate(), "\n            </div>");
	      }

	      if (this.options.forecast) {
	        html += "<div class=\"".concat(this.classes.card, "__item\">\n                <span class=\"").concat(this.prefix, "title\">").concat(this.options.title.forecast, "</span>\n                ").concat(this.getForecastTemplate(), "\n            </div>");
	      }

	      if (this.options.details) {
	        html += "<div class=\"".concat(this.classes.card, "__item\">\n                <span class=\"").concat(this.prefix, "title\">").concat(this.options.title.details, "</span>\n                ").concat(this.getTempTemplate(), "\n                ").concat(this.getDetailsTemplate(), "\n            </div>");
	      }

	      return html;
	    }
	  }, {
	    key: "classicTemplate",
	    value: function classicTemplate() {
	      var html = "<div class=\"".concat(this.classes.classic, "__body\">\n            ").concat(this.getIconTemplate(), "\n            ").concat(this.getTempTemplate(), "\n            ").concat(this.getTempDescription(), "\n        <div class=\"").concat(this.classes.classic, "__body__date\">").concat(this.getTempLocDate(), "</div>");

	      if (this.options.details) {
	        html += "".concat(this.getDetailsTemplate(), "</div>");
	      } else {
	        html += "</div>";
	      }

	      if (this.options.quarterly || this.options.forecast) {
	        html += "<div class=\"".concat(this.classes.classic, "__foot\">\n                ").concat(this.getTempTabs(), "\n            </div>");
	      }

	      return html;
	    }
	  }, {
	    key: "compactTemplate",
	    value: function compactTemplate() {
	      var html = "<div class=\"".concat(this.classes.compact, "__main\">\n            <div class=\"").concat(this.classes.compact, "__main__head\">\n                <span class=\"").concat(this.prefix, "date\">").concat(this.weather.today, "</span>\n                ").concat(this.getIconTemplate(), "\n            </div>\n            ").concat(this.getTempDescription(), "\n            ").concat(this.getTempTemplate());

	      if (this.options.details) {
	        html += "".concat(this.getDetailsTemplate(), "</div>");
	      } else {
	        html += "</div>";
	      }

	      if (this.options.quarterly || this.options.forecast) {
	        html += "<div class=\"".concat(this.classes.compact, "__details\">\n                ").concat(this.getTempTabs(), "\n            </div>");
	      }

	      return html;
	    }
	  }, {
	    key: "fullTemplate",
	    value: function fullTemplate() {
	      var html = "<div class=\"".concat(this.classes.full, "__main\">\n            ").concat(this.getIconTemplate(), "\n            ").concat(this.getTempDescription(), "\n            ").concat(this.getTempTemplate(), "\n            <div class=\"").concat(this.classes.full, "__main__date\">").concat(this.getTempLocDate(), "</div>\n        </div>");

	      if (this.options.quarterly || this.options.forecast || this.options.details) {
	        html += "<div class=\"".concat(this.classes.full, "__details\">");

	        if (this.options.quarterly) {
	          html += "<div class=\"".concat(this.classes.full, "__details__item\">\n                    <span class=\"").concat(this.prefix, "title\">").concat(this.options.title.quarterly, "</span>\n                    ").concat(this.getQuarterlyTemplate(), "\n                </div>");
	        }

	        if (this.options.forecast) {
	          html += "<div class=\"".concat(this.classes.full, "__details__item\">\n                    <span class=\"").concat(this.prefix, "title\">").concat(this.options.title.forecast, "</span>\n                    ").concat(this.getForecastTemplate(), "\n                </div>");
	        }

	        if (this.options.details) {
	          html += "<div class=\"".concat(this.classes.full, "__details__item\">\n                    <span class=\"").concat(this.prefix, "title\">").concat(this.options.title.details, "</span>\n                    ").concat(this.getDetailsTemplate(), "\n                </div>");
	        }

	        html += "</div>";
	      }

	      return html;
	    }
	  }, {
	    key: "minimalTemplate",
	    value: function minimalTemplate() {
	      var html = "<div class=\"".concat(this.classes.minimal, "__main\">\n            <span class=\"").concat(this.prefix, "date\">").concat(this.weather.today, "</span>\n            <span class=\"").concat(this.prefix, "temp\">").concat(this.weather.temp.current, "</span>\n            ").concat(this.getTempDescription(), "\n            ").concat(this.getTempTemplate(), "\n            ").concat(this.getDetailsTemplate(), "\n        </div>");

	      if (this.options.quarterly || this.options.forecast) {
	        html += "<div class=\"".concat(this.classes.minimal, "__details\">\n                ").concat(this.getTempTabs(), "\n            </div>");
	      }

	      return html;
	    }
	  }, {
	    key: "defaultTemplate",
	    value: function defaultTemplate() {
	      var html = "<span>".concat(this.weather.today, "</span>");
	      html += this.options.icon ? "&nbsp;".concat(this.weather.icon) : "&nbsp;,";
	      html += "&nbsp;<span>".concat(this.weather.temp.current, " ").concat(this.weather.location, "</span>");
	      return html;
	    }
	  }, {
	    key: "getTempDescription",
	    value: function getTempDescription() {
	      return this.options.description ? "<span class=\"".concat(this.prefix, "description\">").concat(this.weather.description, "</span>") : "";
	    }
	  }, {
	    key: "getTempLocDate",
	    value: function getTempLocDate() {
	      return "<span class=\"".concat(this.prefix, "date\">").concat(this.weather.today, "</span>\n        <span class=\"").concat(this.prefix, "location\">").concat(this.weather.location, "</span>");
	    }
	  }, {
	    key: "getIconTemplate",
	    value: function getIconTemplate() {
	      return "<div class=\"".concat(this.prefix, "main-icon\">\n            <span class=\"").concat(this.prefix, "temp\">").concat(this.weather.temp.current, "</span>\n            ").concat(this.options.icon ? "<span class=\"".concat(this.prefix, "temp\">").concat(this.weather.icon, "</span>") : "", "\n        </div>");
	    }
	  }, {
	    key: "getTempTemplate",
	    value: function getTempTemplate() {
	      return "<div class=\"".concat(this.prefix, "temp-list\">\n            <div class=\"").concat(this.prefix, "temp-list__item\">\n                <span class=\"").concat(this.prefix, "temp-list__item__text\">").concat(this.options.title.maxTemp, "</span>\n                <span class=\"").concat(this.prefix, "temp-list__item__title\">").concat(this.weather.temp.max, "</span>\n            </div>\n            <div class=\"").concat(this.prefix, "temp-list__item\">\n                <span class=\"").concat(this.prefix, "temp-list__item__text\">").concat(this.options.title.minTemp, "</span>\n                <span class=\"").concat(this.prefix, "temp-list__item__title\">").concat(this.weather.temp.min, "</span>\n            </div>\n        </div>");
	    }
	  }, {
	    key: "getTempTabs",
	    value: function getTempTabs() {
	      var html = "<div class=\"".concat(this.prefix, "tab\">");
	      html += this.options.quarterly ? "<a href=\"javascript:void(0);\" class=\"".concat(this.prefix, "tab__link\" data-tab=\"").concat(config.prefix, "_quarterly\">").concat(this.options.title.quarterly, "</a>") : "";
	      html += this.options.forecast ? "<a href=\"javascript:void(0);\" class=\"".concat(this.prefix, "tab__link\" data-tab=\"").concat(config.prefix, "_forecast\">").concat(this.options.title.forecast, "</a>") : "";
	      html += "</div>\n        <div class=\"".concat(this.prefix, "tab-content\">");
	      html += this.options.quarterly ? "<div id=\"".concat(config.prefix, "_quarterly\" class=\"").concat(this.prefix, "tab-data\">\n                ").concat(this.getQuarterlyTemplate(), "\n            </div>") : "";
	      html += this.options.forecast ? "<div id=\"".concat(config.prefix, "_forecast\" class=\"").concat(this.prefix, "tab-data\">\n                ").concat(this.getForecastTemplate(), "\n            </div>\n        </div>") : "";
	      return html;
	    }
	  }, {
	    key: "getQuarterlyTemplate",
	    value: function getQuarterlyTemplate() {
	      var html = "<div class=\"".concat(this.prefix, "temp-data\">");

	      var _iterator = _createForOfIteratorHelper(this.weather.quarterly),
	          _step;

	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var quarter = _step.value;
	          html += "<div class=\"".concat(this.prefix, "temp-data__item\">\n                <div class=\"").concat(this.prefix, "temp-data__card\">\n                    <span class=\"").concat(this.prefix, "temp-data__time\">").concat(quarter.time, "</span>\n                    <span class=\"").concat(this.prefix, "temp-data__icon\">").concat(quarter.icon, "</span>\n                    <span class=\"").concat(this.prefix, "temp-data__temp\">").concat(quarter.temp.current, "</span>\n                </div>\n            </div>");
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }

	      html += "</div>";
	      return html;
	    }
	  }, {
	    key: "getForecastTemplate",
	    value: function getForecastTemplate() {
	      var html = "<div class=\"".concat(this.prefix, "temp-data\">");

	      var _iterator2 = _createForOfIteratorHelper(this.weather.forecast),
	          _step2;

	      try {
	        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	          var forecast = _step2.value;
	          html += "<div class=\"".concat(this.prefix, "temp-data__item\">\n                <div class=\"").concat(this.prefix, "temp-data__card\">\n                    <span class=\"").concat(this.prefix, "temp-data__day\">").concat(forecast.day, "</span>\n                    <span class=\"").concat(this.prefix, "temp-data__icon\">").concat(forecast.icon, "</span>\n                    <span class=\"").concat(this.prefix, "temp-data__temp\">").concat(forecast.temp.current, "</span>\n                </div>\n            </div>");
	        }
	      } catch (err) {
	        _iterator2.e(err);
	      } finally {
	        _iterator2.f();
	      }

	      html += "</div>";
	      return html;
	    }
	  }, {
	    key: "getDetailsTemplate",
	    value: function getDetailsTemplate() {
	      return "<div class=\"".concat(this.prefix, "temp-detail\">\n            <div class=\"").concat(this.prefix, "temp-detail__item\">\n                <span class=\"").concat(this.prefix, "temp-detail__title\">Wind speed</span>\n                <span class=\"").concat(this.prefix, "temp-detail__text\">").concat(this.weather.wind, "</span>\n            </div>\n            <div class=\"").concat(this.prefix, "temp-detail__item\">\n                <span class=\"").concat(this.prefix, "temp-detail__title\">Humidity</span>\n                <span class=\"").concat(this.prefix, "temp-detail__text\">").concat(this.weather.humidity, "</span>\n            </div>\n            <div class=\"").concat(this.prefix, "temp-detail__item\">\n                <span class=\"").concat(this.prefix, "temp-detail__title\">Visibility</span>\n                <span class=\"").concat(this.prefix, "temp-detail__text\">").concat(this.weather.visibility, "</span>\n            </div>\n            <div class=\"").concat(this.prefix, "temp-detail__item\">\n                <span class=\"").concat(this.prefix, "temp-detail__title\">Pressure</span>\n                <span class=\"").concat(this.prefix, "temp-detail__text\">").concat(this.weather.pressure, "</span>\n            </div>\n        </div>");
	    }
	  }, {
	    key: "getBgClass",
	    value: function getBgClass() {
	      var iconId = this.apiWeatherData.weather[0].icon;
	      var className = ' ' + this.prefix;

	      if (iconId.indexOf(this.iconIds.eleven) !== -1) {
	        className += this.iconFiles.storm;
	      } else if (iconId.indexOf(this.iconIds.fifty) !== -1) {
	        className += this.iconFiles.mist;
	      } else if (iconId.indexOf(this.iconIds.day) !== -1) {
	        className += this.iconDirectories.day + '-';
	      } else {
	        className += this.iconDirectories.night + '-';
	      }

	      if (iconId.indexOf(this.iconIds.one) !== -1) {
	        className += this.iconFiles.clear;
	      } else if (iconId.indexOf(this.iconIds.two) !== -1 || iconId.indexOf(this.iconIds.three) !== -1 || iconId.indexOf(this.iconIds.four) !== -1) {
	        className += this.iconFiles.cloud;
	      } else if (iconId.indexOf(this.iconIds.nine) !== -1 || iconId.indexOf(this.iconIds.ten) !== -1) {
	        className += this.iconFiles.rain;
	      } else if (iconId.indexOf(this.iconIds.thirteen) !== -1) {
	        className += this.iconFiles.snow;
	      }

	      return className;
	    }
	  }, {
	    key: "tabClickEvent",
	    value: function tabClickEvent() {
	      var links = document.querySelectorAll('.' + this.prefix + 'tab__link');
	      var tabs = document.querySelectorAll('.' + this.prefix + 'tab-data');
	      var active = 'active';
	      var show = 'show';

	      if (links.length) {
	        var id = links[0].getAttribute('data-tab');
	        var tab = document.querySelector('#' + id);
	        links[0].classList.add(active);
	        tab.classList.add(show);
	        links.forEach(function (link) {
	          link.addEventListener('click', function () {
	            if (!link.classList.contains(active)) {
	              links.forEach(function (item) {
	                item.classList.remove(active);
	              });
	              tabs.forEach(function (tab) {
	                tab.classList.remove(show);
	              });

	              var _id = link.getAttribute('data-tab');

	              var _tab = document.querySelector('#' + _id);

	              link.classList.add(active);

	              _tab.classList.add(show);
	            }
	          });
	        });
	      }
	    }
	  }]);

	  return Template;
	}(Icon);

	function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var Weather = /*#__PURE__*/function (_Template) {
	  _inherits(Weather, _Template);

	  var _super = _createSuper$2(Weather);

	  function Weather() {
	    _classCallCheck(this, Weather);

	    return _super.apply(this, arguments);
	  }

	  _createClass(Weather, [{
	    key: "initWeatherDate",
	    value: function () {
	      var _initWeatherDate = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return this.todayWeatherData();

	              case 2:
	                if (!this.apiWeatherData.list) {
	                  _context.next = 9;
	                  break;
	                }

	                if (!this.options.forecast) {
	                  _context.next = 6;
	                  break;
	                }

	                _context.next = 6;
	                return this.forecastWeatherData();

	              case 6:
	                if (!this.options.quarterly) {
	                  _context.next = 9;
	                  break;
	                }

	                _context.next = 9;
	                return this.quarterlyWeatherData();

	              case 9:
	                if (this.options.template) {
	                  this.getTemplate();
	                } else {
	                  this.options.customTemplate(this.weather);
	                }

	              case 10:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function initWeatherDate() {
	        return _initWeatherDate.apply(this, arguments);
	      }

	      return initWeatherDate;
	    }()
	  }, {
	    key: "todayWeatherData",
	    value: function () {
	      var _todayWeatherData = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
	        return regenerator.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.next = 2;
	                return this.weatherData(this.apiWeatherData);

	              case 2:
	                this.weather = _context2.sent;
	                this.weather.location = "".concat(this.apiWeatherData.name, ", ").concat(this.apiWeatherData.sys.country);

	                if (this.options.today) {
	                  this.weather.today = this.getToday();
	                }

	                if (this.options.sunTime && this.apiWeatherData.sys.sunrise && this.apiWeatherData.sys.sunset) {
	                  this.weather.sunrise = "".concat(this.timeFormat(this.apiWeatherData.sys.sunrise), " AM");
	                  this.weather.sunset = "".concat(this.timeFormat(this.apiWeatherData.sys.sunset), " PM");
	                }

	                if (this.options.details) {
	                  this.weather.wind = this.windFormat(this.apiWeatherData.wind), this.weather.humidity = "".concat(this.apiWeatherData.main.humidity, "%"), this.weather.pressure = "".concat(this.apiWeatherData.main.pressure, " hPa"), this.weather.visibility = this.visibilityFormat(this.apiWeatherData.visibility);
	                }

	              case 7:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));

	      function todayWeatherData() {
	        return _todayWeatherData.apply(this, arguments);
	      }

	      return todayWeatherData;
	    }()
	  }, {
	    key: "forecastWeatherData",
	    value: function () {
	      var _forecastWeatherData = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
	        var forecastList, index, item, forecastData, date;
	        return regenerator.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                forecastList = this.apiWeatherData.list;
	                index = this.indexOfTime(forecastList);
	                this.weather.forecast = [];
	                item = index;

	              case 4:
	                if (!(item < forecastList.length)) {
	                  _context3.next = 14;
	                  break;
	                }

	                _context3.next = 7;
	                return this.weatherData(forecastList[item]);

	              case 7:
	                forecastData = _context3.sent;
	                date = forecastList[item].dt_txt.split(' ')[0];
	                forecastData.day = this.dateFormat(date);
	                this.weather.forecast.push(forecastData);

	              case 11:
	                item += 8;
	                _context3.next = 4;
	                break;

	              case 14:
	              case "end":
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));

	      function forecastWeatherData() {
	        return _forecastWeatherData.apply(this, arguments);
	      }

	      return forecastWeatherData;
	    }()
	  }, {
	    key: "quarterlyWeatherData",
	    value: function () {
	      var _quarterlyWeatherData = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4() {
	        var forecastList, index, length, item, quarterlyData, time;
	        return regenerator.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                forecastList = this.apiWeatherData.list;
	                index = this.indexOfTime(forecastList);
	                length = index + 8;
	                this.weather.quarterly = [];
	                item = index;

	              case 5:
	                if (!(item < length)) {
	                  _context4.next = 15;
	                  break;
	                }

	                _context4.next = 8;
	                return this.weatherData(forecastList[item]);

	              case 8:
	                quarterlyData = _context4.sent;
	                time = forecastList[item].dt_txt.split(' ')[1];
	                quarterlyData.time = this.timeFormat(time);
	                this.weather.quarterly.push(quarterlyData);

	              case 12:
	                item++;
	                _context4.next = 5;
	                break;

	              case 15:
	              case "end":
	                return _context4.stop();
	            }
	          }
	        }, _callee4, this);
	      }));

	      function quarterlyWeatherData() {
	        return _quarterlyWeatherData.apply(this, arguments);
	      }

	      return quarterlyWeatherData;
	    }()
	  }, {
	    key: "weatherData",
	    value: function () {
	      var _weatherData = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(data) {
	        var weather;
	        return regenerator.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                weather = {};
	                weather.temp = this.weatherTemp(data.main);

	                if (this.options.description) {
	                  weather.description = "".concat(data.weather[0].description.charAt(0).toUpperCase()).concat(data.weather[0].description.slice(1));
	                }

	                if (!this.options.icon) {
	                  _context5.next = 6;
	                  break;
	                }

	                _context5.next = 6;
	                return this.getIcon(data.weather[0].icon).then(function (svgCode) {
	                  weather.icon = svgCode;
	                });

	              case 6:
	                return _context5.abrupt("return", weather);

	              case 7:
	              case "end":
	                return _context5.stop();
	            }
	          }
	        }, _callee5, this);
	      }));

	      function weatherData(_x) {
	        return _weatherData.apply(this, arguments);
	      }

	      return weatherData;
	    }()
	  }]);

	  return Weather;
	}(Template);

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var Api = /*#__PURE__*/function (_Weather) {
	  _inherits(Api, _Weather);

	  var _super = _createSuper$1(Api);

	  function Api() {
	    _classCallCheck(this, Api);

	    return _super.apply(this, arguments);
	  }

	  _createClass(Api, [{
	    key: "weatherApiUrl",
	    value: function weatherApiUrl() {
	      var forecast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	      this.apiUrl = 'https://api.openweathermap.org/data/2.5/';
	      this.apiUrl += forecast ? 'forecast' : 'weather';
	      this.apiUrl += '?lang=' + this.options.lang;

	      if (this.options.code) {
	        this.apiUrl += '&id=' + this.options.code;
	      } else if (this.options.location) {
	        this.apiUrl += '&q=' + this.options.location;
	      } else if (this.options.lat && this.options.lng) {
	        this.apiURL += '&lat=' + this.options.lat + '&lon=' + this.options.lng;
	      }

	      if (this.options.key) {
	        this.apiUrl += '&appid=' + this.options.key;
	      }
	    }
	  }, {
	    key: "getTodayWeather",
	    value: function () {
	      var _getTodayWeather = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var _this = this;

	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                this.weatherApiUrl();
	                fetch(this.apiUrl).then(function (response) {
	                  return response.json();
	                }).then(function (data) {
	                  if (parseInt(data.cod) === _this.successCode) {
	                    _this.apiWeatherData = data;

	                    if (_this.options.forecast || _this.options.quarterly) {
	                      _this.getForecastWeather();
	                    }
	                  } else {
	                    alert('Message: ', data.message);
	                  }
	                });

	              case 2:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function getTodayWeather() {
	        return _getTodayWeather.apply(this, arguments);
	      }

	      return getTodayWeather;
	    }()
	  }, {
	    key: "getForecastWeather",
	    value: function () {
	      var _getForecastWeather = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
	        var _this2 = this;

	        return regenerator.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                this.weatherApiUrl(true);
	                fetch(this.apiUrl).then(function (response) {
	                  return response.json();
	                }).then(function (data) {
	                  if (parseInt(data.cod) === _this2.successCode) {
	                    _this2.apiWeatherData.list = data.list;

	                    _this2.initWeatherDate();
	                  } else {
	                    alert('Message: ', data.message);
	                  }
	                });

	              case 2:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));

	      function getForecastWeather() {
	        return _getForecastWeather.apply(this, arguments);
	      }

	      return getForecastWeather;
	    }()
	  }]);

	  return Api;
	}(Weather);

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var EasyWeather = /*#__PURE__*/function (_Api) {
	  _inherits(EasyWeather, _Api);

	  var _super = _createSuper(EasyWeather);

	  function EasyWeather(element) {
	    var _this;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, EasyWeather);

	    _this = _super.call(this);
	    _this.element = _this.getElement(element);

	    if (!_this.element) {
	      return _possibleConstructorReturn(_this, false);
	    }

	    _this.options = EasyWeather.extend(defaults, options);

	    _this.init();

	    return _this;
	  }

	  _createClass(EasyWeather, [{
	    key: "init",
	    value: function () {
	      var _init = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return this.getTodayWeather();

	              case 2:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function init() {
	        return _init.apply(this, arguments);
	      }

	      return init;
	    }()
	  }], [{
	    key: "extend",
	    value: function extend(defaults, options) {
	      var results = {};

	      for (var key in defaults) {
	        'undefined' !== typeof options[key] ? results[key] = options[key] : results[key] = defaults[key];
	      }

	      return results;
	    }
	  }]);

	  return EasyWeather;
	}(Api);

	return EasyWeather;

})));
//# sourceMappingURL=easy-weather.js.map
