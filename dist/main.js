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

/***/ "./src/Builder.js":
/*!************************!*\
  !*** ./src/Builder.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var constructor_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constructor-decorator */ \"./node_modules/constructor-decorator/index.js\");\n\n\nclass Builder extends constructor_decorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get args() {\n    return {\n      Grid: Function,\n      Word: Function,\n      Crossword: Function\n    };\n  }\n\n  constructor() {\n    super(...arguments);\n    this.crossword = null;\n  }\n\n  createCrossword(grid) {\n    this.crossword = new this.Crossword(grid);\n  }\n\n  createGrid(...args) {\n    return new this.Grid(...args);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Builder);\n\n//# sourceURL=webpack:///./src/Builder.js?");

/***/ }),

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var constructor_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constructor-decorator */ \"./node_modules/constructor-decorator/index.js\");\n\n\nclass Cell extends constructor_decorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get args() {\n    return {\n      x: Number,\n      y: Number\n    };\n  } // constructor (...args) {\n  //   super(...args)\n  // }\n\n\n  toString() {\n    return `${this.x}:${this.y}`;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);\n\n//# sourceURL=webpack:///./src/Cell.js?");

/***/ }),

/***/ "./src/Crossword.js":
/*!**************************!*\
  !*** ./src/Crossword.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var constructor_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constructor-decorator */ \"./node_modules/constructor-decorator/index.js\");\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ \"./src/Grid.js\");\n\n\n\nclass Crossword extends constructor_decorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get args() {\n    return {\n      grid: _Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    };\n  }\n\n  constructor() {\n    super(...arguments);\n    this.mode = 'grid';\n  }\n\n  get horizontalWords() {\n    return this.createWordsMap(this.grid.words.filter(({\n      isVertical\n    }) => !isVertical));\n  }\n\n  get verticalWords() {\n    return this.createWordsMap(this.grid.words.filter(({\n      isVertical\n    }) => isVertical));\n  }\n\n  toggleMode() {\n    this.mode = this.mode === 'grid' ? 'fill' : 'grid';\n  }\n\n  createWordsMap(words) {\n    return new Map(words.map(word => [word.index, word]));\n  }\n\n  inputLetter({\n    x,\n    y,\n    value\n  }) {\n    this.letters[`${x}:${y}`] = value;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Crossword);\n\n//# sourceURL=webpack:///./src/Crossword.js?");

/***/ }),

/***/ "./src/Grid.js":
/*!*********************!*\
  !*** ./src/Grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var constructor_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constructor-decorator */ \"./node_modules/constructor-decorator/index.js\");\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Word */ \"./src/Word.js\");\n\n\n\n\nclass Grid extends constructor_decorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get args() {\n    return {\n      width: Number,\n      height: Number,\n      blanks: Array,\n      name: String\n    };\n  }\n\n  constructor(width, height, blanks, name) {\n    super(width, height, blanks, name);\n    this.cells = this.rebuildCells();\n    this.blanks = new Set(this.blanks);\n    this.symmetry = {\n      horizontal: true,\n      vertical: true,\n      diagonal: true\n    };\n  }\n\n  addBlanks(...ids) {\n    ids.forEach(id => {\n      this.blanks.add(id);\n    });\n  }\n\n  removeBlanks(...ids) {\n    ids.forEach(id => {\n      this.blanks.delete(id);\n    });\n  }\n\n  toggleBlank(id) {\n    const [x, y] = id.split(':');\n    const verticalId = `${this.width - x + 1}:${y}`;\n    const horizontalId = `${x}:${this.height - y + 1}`;\n    const diagonalId = `${this.width - x + 1}:${this.height - y + 1}`;\n\n    if (this.blanks.has(id)) {\n      this.blanks.delete(id);\n\n      if (this.symmetry.vertical) {\n        this.blanks.delete(verticalId);\n      }\n\n      if (this.symmetry.horizontal) {\n        this.blanks.delete(horizontalId);\n      }\n\n      if (this.symmetry.diagonal) {\n        this.blanks.delete(diagonalId);\n      }\n\n      return;\n    }\n\n    this.blanks.add(id);\n\n    if (this.symmetry.vertical) {\n      this.blanks.add(verticalId);\n    }\n\n    if (this.symmetry.horizontal) {\n      this.blanks.add(horizontalId);\n    }\n\n    if (this.symmetry.diagonal) {\n      this.blanks.add(diagonalId);\n    }\n  }\n\n  rebuildGrid({\n    width,\n    height\n  }) {\n    this.blanks.clear();\n    this.width = width;\n    this.height = height;\n    this.cells = this.rebuildCells();\n  }\n\n  rebuildCells() {\n    return new Map(Array.from({\n      length: this.height\n    }, (col, idx) => idx + 1).flatMap(col => Array.from({\n      length: this.width\n    }, (row, idx) => [`${idx + 1}:${col}`, new _Cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"](idx + 1, col)])));\n  }\n\n  changeSize({\n    width,\n    height\n  }) {\n    if (width && this.width !== width) {\n      this.width = width;\n    }\n\n    if (height && this.height !== height) {\n      this.height = height;\n    }\n  }\n\n  generateGrid(hSym, vSym, blankProb) {\n    this.blanks.clear();\n    let fillWidth;\n    let fillHeight;\n\n    if (hSym && vSym) {\n      fillWidth = Math.round(this.width / 2);\n      fillHeight = Math.round(this.height / 2);\n    } else {\n      fillWidth = hSym ? this.width : Math.round(this.width / 2);\n      fillHeight = vSym ? this.height : Math.round(this.height / 2);\n    }\n\n    for (let x = 1; x <= fillWidth; x += 1) {\n      for (let y = 1; y <= fillHeight; y += 1) {\n        if (Math.random() > blankProb) {\n          continue;\n        }\n\n        this.toggleBlank(`${x}:${y}`);\n      }\n    }\n  }\n\n  singleDirectionWords(isVertical = false) {\n    const words = [];\n    let row = 1;\n\n    for (row; row <= (isVertical ? this.width : this.height); row += 1) {\n      const rowBlankCells = [...this.blanks] // eslint-disable-next-line no-loop-func\n      .filter(cell => Number(cell.split(':')[isVertical ? 0 : 1]) === row).map(cell => Number(cell.split(':')[isVertical ? 1 : 0]));\n\n      if (rowBlankCells.length > 0) {\n        const cols = Array.from({\n          length: isVertical ? this.height : this.width\n        }).map((el, idx) => idx + 1);\n\n        if (cols) {\n          `:${cols.join('::')}:`.split(new RegExp(`:${rowBlankCells.join(':|:')}:`)).filter(word => {\n            const match = word.match(/:\\d+:/g);\n            return match ? match.length > 1 : false;\n          }) // eslint-disable-next-line no-loop-func\n          .forEach(word => {\n            const match = word.match(/:\\d+:/g);\n            const length = match ? match.length : 0;\n            const x = Number(word.match(/^:(\\d+)/)[1]);\n            words.push([isVertical ? row : x, isVertical ? x : row, length, isVertical]);\n          });\n        }\n      } else {\n        words.push([isVertical ? row : 1, isVertical ? 1 : row, isVertical ? this.height : this.width, isVertical]);\n      }\n    }\n\n    return words;\n  }\n\n  get words() {\n    return this.addIndexes([...this.singleDirectionWords(true), ...this.singleDirectionWords(false)]).map(arr => new _Word__WEBPACK_IMPORTED_MODULE_2__[\"default\"](...arr));\n  }\n\n  addIndexes(words) {\n    return words.map(word => {\n      const {\n        index\n      } = this.startCells(words).find(({\n        x,\n        y\n      }) => word[0] === x && word[1] === y);\n      return [...word, index];\n    });\n  }\n\n  startCells(words) {\n    return [...new Set(words.map(([x, y]) => ({\n      x,\n      y\n    })))].sort((a, b) => a.y === b.y ? a.x - b.x : a.y - b.y).map((word, index) => ({ ...word,\n      index: index + 1\n    }));\n  } // letterCells () {\n  //   const cells = []\n  //   let col = 1\n  //   for (col; col <= this.width; col += 1) {\n  //     let row = 1\n  //     for (row; row <= this.height; row += 1) {\n  //       if (this.blanks.includes(`${col}:${row}`)) {\n  //         continue\n  //       }\n  //       cells.push({ x: col, y: row })\n  //     }\n  //   }\n  //   return cells.reduce((acc, { x, y }) => {\n  //     acc[`${x}:${y}`] = ''\n  //     return acc\n  //   }, {})\n  // }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./src/Grid.js?");

/***/ }),

/***/ "./src/Word.js":
/*!*********************!*\
  !*** ./src/Word.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var constructor_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constructor-decorator */ \"./node_modules/constructor-decorator/index.js\");\n\n\nconst getWordCells = ({\n  length,\n  x,\n  y,\n  isVertical\n}) => Array.from({\n  length\n}).map((letter, idx) => isVertical ? `${x}:${y + idx}` : `${x + idx}:${y}`);\n\nclass Word extends constructor_decorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get args() {\n    return {\n      x: Number,\n      y: Number,\n      length: Number,\n      isVertical: Boolean,\n      index: Number\n    };\n  }\n\n  constructor(...args) {\n    super(...args);\n    this.clues = [];\n    this.word = '';\n  }\n\n  get cells() {\n    return getWordCells(this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Word);\n\n//# sourceURL=webpack:///./src/Word.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ \"./src/Grid.js\");\n/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Word */ \"./src/Word.js\");\n/* harmony import */ var _Builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Builder */ \"./src/Builder.js\");\n/* harmony import */ var _Crossword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Crossword */ \"./src/Crossword.js\");\n\n\n\n\n\nconst X = {\n  Cell: _Cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Grid: _Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Word: _Word__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Builder: _Builder__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  Crossword: _Crossword__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n};\n\nif (window) {\n  window.X = X;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (X);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });