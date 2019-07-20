/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/constructor-decorator/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/constructor-decorator/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass BaseClass {\n  constructor (...args) {\n    const keys = Object.keys(this.args)\n\n    if (args.length < keys.length) {\n      throw new Error(`The ${this.constructor.name} constructor must receive at least ${keys.length} argument${keys.length > 1 && 's'}!!!`)\n    }\n\n    const validateType = (arg, key, idx, value) => {\n      const type = value && value.name ? value.name.toLowerCase() : 'object'\n\n      switch (typeof arg) {\n        case 'object':\n          if (!(arg instanceof value || arg.constructor.name === value.name)) {\n            throw new TypeError(`The argument ${idx + 1} ('${key}') must be '${value.name}' type!!!`)\n          }\n          break\n\n        case 'string':\n        case 'number':\n        case 'boolean':\n          if (typeof arg !== type) {\n            throw new TypeError(`The argument ${idx + 1} ('${key}') must be '${value && value.name}' type!!!`)\n          }\n          break\n\n        default:\n      }\n    }\n\n    Object.assign(this, args.reduce((acc, arg, idx) => {\n      const key = keys[idx]\n\n      if (typeof key !== 'undefined') {\n        const value = this.args[key]\n\n        if (typeof value === 'function') {\n          validateType(arg, key, idx, value)\n        }\n\n        if (Array.isArray(value)) {\n          let pass = false\n          let err = null\n\n          value.forEach((inst) => {\n            try {\n              validateType(arg, key, idx, inst)\n              pass = true\n            }\n            catch (error) {\n              err = error\n            }\n          })\n\n          if (!pass) {\n            throw err\n          }\n        }\n\n        acc[key] = arg\n      }\n      else {\n        acc[idx] = arg\n      }\n\n      return acc\n    }, {}))\n  }\n\n  get args () {\n    return {}\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseClass);\n\n\n//# sourceURL=webpack:///./node_modules/constructor-decorator/index.js?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction $getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return $getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = $getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  var args = [];\n  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    ReflectApply(this.listener, this.target, args);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ }),

/***/ "./src/Builder.js":
/*!************************!*\
  !*** ./src/Builder.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var constructor_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constructor-decorator */ \"./node_modules/constructor-decorator/index.js\");\n\n\nclass Builder extends constructor_decorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get args() {\n    return {\n      Grid: Function,\n      Word: Function,\n      Crossword: Function\n    };\n  }\n\n  constructor() {\n    super(...arguments);\n    this.crossword = null;\n  }\n\n  createCrossword(grid) {\n    this.crossword = new this.Crossword(grid);\n  }\n\n  createGrid(...args) {\n    return new this.Grid(...args);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Builder);\n\n//# sourceURL=webpack:///./src/Builder.js?");

/***/ }),

/***/ "./src/Bus.js":
/*!********************!*\
  !*** ./src/Bus.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Bus extends events__WEBPACK_IMPORTED_MODULE_0___default.a {}\n\nconst bus = new Bus();\n/* harmony default export */ __webpack_exports__[\"default\"] = (bus);\n\n//# sourceURL=webpack:///./src/Bus.js?");

/***/ }),

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var constructor_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constructor-decorator */ \"./node_modules/constructor-decorator/index.js\");\n\n\nclass Cell extends constructor_decorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get args() {\n    return {\n      x: Number,\n      y: Number\n    };\n  }\n\n  constructor(...args) {\n    super(...args);\n    this.letter = '';\n  }\n\n  toString() {\n    return `${this.x}:${this.y}`;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);\n\n//# sourceURL=webpack:///./src/Cell.js?");

/***/ }),

/***/ "./src/Crossword.js":
/*!**************************!*\
  !*** ./src/Crossword.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var constructor_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constructor-decorator */ \"./node_modules/constructor-decorator/index.js\");\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ \"./src/Grid.js\");\n\n\n\nclass Crossword extends constructor_decorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get args() {\n    return {\n      grid: _Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    };\n  }\n\n  constructor() {\n    super(...arguments);\n    this.mode = 'grid';\n  }\n\n  get horizontalWords() {\n    return this.createWordsMap(this.grid.words.filter(({\n      isVertical\n    }) => !isVertical));\n  }\n\n  get verticalWords() {\n    return this.createWordsMap(this.grid.words.filter(({\n      isVertical\n    }) => isVertical));\n  }\n\n  toggleMode() {\n    this.mode = this.mode === 'grid' ? 'fill' : 'grid';\n  }\n\n  createWordsMap(words) {\n    return new Map(words.map(word => [word.index, word]));\n  }\n\n  setLetter(x, y, value) {\n    if (typeof value === 'undefined') {\n      if (typeof x === 'string' && x.split(':').length === 2 && typeof y === 'string') {\n        value = y;\n        y = x.split(':')[1];\n        x = x.split(':')[0];\n      }\n    }\n\n    this.grid.cells.get(`${x}:${y}`).letter = value;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Crossword);\n\n//# sourceURL=webpack:///./src/Crossword.js?");

/***/ }),

/***/ "./src/Grid.js":
/*!*********************!*\
  !*** ./src/Grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var constructor_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constructor-decorator */ \"./node_modules/constructor-decorator/index.js\");\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Word */ \"./src/Word.js\");\n\n\n\n\nclass Grid extends constructor_decorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get args() {\n    return {\n      width: Number,\n      height: Number,\n      blanks: Array,\n      name: String\n    };\n  }\n\n  constructor(width, height, blanks, name) {\n    super(width, height, blanks, name);\n    this.cells = this.rebuildCells();\n    this.blanks = new Set(this.blanks);\n    this.symmetry = {\n      horizontal: true,\n      vertical: true,\n      diagonal: true\n    };\n  }\n\n  addBlanks(...ids) {\n    ids.forEach(id => {\n      this.blanks.add(id);\n    });\n  }\n\n  removeBlanks(...ids) {\n    ids.forEach(id => {\n      this.blanks.delete(id);\n    });\n  }\n\n  toggleBlank(id) {\n    const [x, y] = id.split(':');\n    const verticalId = `${this.width - x + 1}:${y}`;\n    const horizontalId = `${x}:${this.height - y + 1}`;\n    const diagonalId = `${this.width - x + 1}:${this.height - y + 1}`;\n\n    if (this.blanks.has(id)) {\n      this.blanks.delete(id);\n\n      if (this.symmetry.vertical) {\n        this.blanks.delete(verticalId);\n      }\n\n      if (this.symmetry.horizontal) {\n        this.blanks.delete(horizontalId);\n      }\n\n      if (this.symmetry.diagonal) {\n        this.blanks.delete(diagonalId);\n      }\n\n      return;\n    }\n\n    this.blanks.add(id);\n\n    if (this.symmetry.vertical) {\n      this.blanks.add(verticalId);\n    }\n\n    if (this.symmetry.horizontal) {\n      this.blanks.add(horizontalId);\n    }\n\n    if (this.symmetry.diagonal) {\n      this.blanks.add(diagonalId);\n    }\n  }\n\n  rebuildGrid({\n    width,\n    height\n  }) {\n    this.blanks.clear();\n    this.width = width;\n    this.height = height;\n    this.cells = this.rebuildCells();\n  }\n\n  rebuildCells() {\n    return new Map(Array.from({\n      length: this.height\n    }, (col, idx) => idx + 1).flatMap(col => Array.from({\n      length: this.width\n    }, (row, idx) => [`${idx + 1}:${col}`, new _Cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"](idx + 1, col)])));\n  }\n\n  changeSize({\n    width,\n    height\n  }) {\n    if (width && this.width !== width) {\n      this.width = width;\n    }\n\n    if (height && this.height !== height) {\n      this.height = height;\n    }\n  }\n\n  generateGrid(hSym, vSym, blankProb) {\n    this.blanks.clear();\n    let fillWidth;\n    let fillHeight;\n\n    if (hSym && vSym) {\n      fillWidth = Math.round(this.width / 2);\n      fillHeight = Math.round(this.height / 2);\n    } else {\n      fillWidth = hSym ? this.width : Math.round(this.width / 2);\n      fillHeight = vSym ? this.height : Math.round(this.height / 2);\n    }\n\n    for (let x = 1; x <= fillWidth; x += 1) {\n      for (let y = 1; y <= fillHeight; y += 1) {\n        if (Math.random() > blankProb) {\n          continue;\n        }\n\n        this.toggleBlank(`${x}:${y}`);\n      }\n    }\n  }\n\n  singleDirectionWords(isVertical = false) {\n    const words = [];\n    let row = 1;\n\n    for (row; row <= (isVertical ? this.width : this.height); row += 1) {\n      const rowBlankCells = [...this.blanks] // eslint-disable-next-line no-loop-func\n      .filter(cell => Number(cell.split(':')[isVertical ? 0 : 1]) === row).map(cell => Number(cell.split(':')[isVertical ? 1 : 0]));\n\n      if (rowBlankCells.length > 0) {\n        const cols = Array.from({\n          length: isVertical ? this.height : this.width\n        }).map((el, idx) => idx + 1);\n\n        if (cols) {\n          `:${cols.join('::')}:`.split(new RegExp(`:${rowBlankCells.join(':|:')}:`)).filter(word => {\n            const match = word.match(/:\\d+:/g);\n            return match ? match.length > 1 : false;\n          }) // eslint-disable-next-line no-loop-func\n          .forEach(word => {\n            const match = word.match(/:\\d+:/g);\n            const length = match ? match.length : 0;\n            const x = Number(word.match(/^:(\\d+)/)[1]);\n            words.push([isVertical ? row : x, isVertical ? x : row, length, isVertical]);\n          });\n        }\n      } else {\n        words.push([isVertical ? row : 1, isVertical ? 1 : row, isVertical ? this.height : this.width, isVertical]);\n      }\n    }\n\n    return words;\n  }\n\n  get words() {\n    return this.addIndexes([...this.singleDirectionWords(true), ...this.singleDirectionWords(false)]).map(arr => {\n      const id = `${arr[0]}:${arr[1]}`;\n      const word = new _Word__WEBPACK_IMPORTED_MODULE_2__[\"default\"](...arr);\n      word.letters.set(id, word.letters.get(id));\n      return word;\n    });\n  }\n\n  addIndexes(words) {\n    return words.map(word => {\n      const {\n        index\n      } = this.startCells(words).find(({\n        x,\n        y\n      }) => word[0] === x && word[1] === y);\n      return [...word, index];\n    });\n  }\n\n  startCells(words) {\n    return [...new Set(words.map(([x, y]) => ({\n      x,\n      y\n    })))].sort((a, b) => a.y === b.y ? a.x - b.x : a.y - b.y).map((word, index) => ({ ...word,\n      index: index + 1\n    }));\n  } // letterCells () {\n  //   const cells = []\n  //   let col = 1\n  //   for (col; col <= this.width; col += 1) {\n  //     let row = 1\n  //     for (row; row <= this.height; row += 1) {\n  //       if (this.blanks.includes(`${col}:${row}`)) {\n  //         continue\n  //       }\n  //       cells.push({ x: col, y: row })\n  //     }\n  //   }\n  //   return cells.reduce((acc, { x, y }) => {\n  //     acc[`${x}:${y}`] = ''\n  //     return acc\n  //   }, {})\n  // }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./src/Grid.js?");

/***/ }),

/***/ "./src/Word.js":
/*!*********************!*\
  !*** ./src/Word.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var constructor_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constructor-decorator */ \"./node_modules/constructor-decorator/index.js\");\n\n\nconst getWordCells = ({\n  length,\n  x,\n  y,\n  isVertical\n}) => Array.from({\n  length\n}).map((letter, idx) => isVertical ? `${x}:${y + idx}` : `${x + idx}:${y}`);\n\nclass Word extends constructor_decorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get args() {\n    return {\n      x: Number,\n      y: Number,\n      length: Number,\n      isVertical: Boolean,\n      index: Number\n    };\n  }\n\n  constructor(...args) {\n    super(...args);\n    this.clues = [];\n    this.letters = new Map(this.cells.map((id, idx) => [id, '_']));\n  }\n\n  get cells() {\n    return getWordCells(this);\n  }\n\n  get word() {\n    return [...this.letters.values()].join('');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Word);\n\n//# sourceURL=webpack:///./src/Word.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bus */ \"./src/Bus.js\");\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ \"./src/Grid.js\");\n/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Word */ \"./src/Word.js\");\n/* harmony import */ var _Builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Builder */ \"./src/Builder.js\");\n/* harmony import */ var _Crossword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Crossword */ \"./src/Crossword.js\");\n\n\n\n\n\n\nconst X = {\n  bus: _Bus__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Cell: _Cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Grid: _Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Word: _Word__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  Builder: _Builder__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  Crossword: _Crossword__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n};\n\nif (window) {\n  window.X = X;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (X);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });