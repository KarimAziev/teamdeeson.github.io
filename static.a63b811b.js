(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _slices = __webpack_require__(7);

var _slices2 = _interopRequireDefault(_slices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
    var page = _ref.page;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_slices2.default, { slices: page.slices, page: page })
    );
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Slices;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hero = __webpack_require__(24);

var _hero2 = _interopRequireDefault(_hero);

var _textBlock = __webpack_require__(26);

var _textBlock2 = _interopRequireDefault(_textBlock);

var _caseStudyList = __webpack_require__(28);

var _caseStudyList2 = _interopRequireDefault(_caseStudyList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processHero(slice, page) {
    return _react2.default.createElement(_hero2.default, { title: slice.title });
}

function processTextBlock(slice, page) {
    return _react2.default.createElement(_textBlock2.default, { text: slice.text, center: true });
}

function processCaseStudies(slice, page) {
    return _react2.default.createElement(_caseStudyList2.default, { caseStudies: slice.caseStudies });
}

/**
 *
 * @param props.key int
 *   Slice iterator number
 * @param props.slice
 *   Data object representing the slice
 * @param props.page
 *   Data object representing the whole page
 */
function ProcessSlice(props) {
    if (props.slice.type === 'hero') {
        return processHero(props.slice, props.page);
    } else if (props.slice.type === 'text_block') {
        return processTextBlock(props.slice, props.page);
    } else if (props.slice.type === 'case_studies') {
        return processCaseStudies(props.slice, props.page);
    }

    return _react2.default.createElement(
        'h1',
        null,
        'No template for slice type: ',
        props.slice.slice_type
    );
}

function Slices(props) {
    var slices = props.slices.map(function (slice, key) {
        return _react2.default.createElement(ProcessSlice, { key: key, slice: slice, page: props.page });
    });

    return _react2.default.createElement(
        'div',
        null,
        slices
    );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _slices = __webpack_require__(7);

var _slices2 = _interopRequireDefault(_slices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
    var page = _ref.page;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_slices2.default, { slices: page.slices, page: page })
    );
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
    var content = _ref.content;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'It\'s blog time.'
        ),
        _react2.default.createElement('br', null)
    );
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
    var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
    var render = function render(Comp) {
        renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
    };

    // Render!
    render(_App2.default);
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactHotLoader = __webpack_require__(14);

var _reactStaticRoutes = __webpack_require__(15);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _header = __webpack_require__(38);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(41);

var _footer2 = _interopRequireDefault(_footer);

__webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      { className: 'site-wrapper' },
      _react2.default.createElement(_header2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      ),
      _react2.default.createElement(_footer2.default, null)
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(16);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(17);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(18);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

var _reactUniversalComponent = __webpack_require__(20);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/case_study',
  file: '/app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/containers/case_study', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/case_study');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/containers/case_study';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/landing_page',
  file: '/app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/landing_page', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/landing_page');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/landing_page';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/labs',
  file: '/app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/labs', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/labs');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/labs';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 3

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(21);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(22);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(23);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(4);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Hero;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeroTag(_ref) {
    var tag = _ref.tag;

    if (tag) {
        return _react2.default.createElement(
            "div",
            { className: "hero__tag" },
            tag
        );
    }
    return '';
}

function HeroTitle(_ref2) {
    var title = _ref2.title;

    return _react2.default.createElement(
        "header",
        { className: "hero__header" },
        _react2.default.createElement(
            "h1",
            { className: "hero__title" },
            title
        )
    );
}

function HeroAuthor(_ref3) {
    var author = _ref3.author;

    if (author) {
        return _react2.default.createElement(
            "div",
            { className: "hero__author" },
            author
        );
    }
    return '';
}

/**
 * @param department
 * @returns {null}
 */
function HeroDepartment(_ref4) {
    var department = _ref4.department;

    return department ? _react2.default.createElement(
        "div",
        { className: "hero__department" },
        department
    ) : null;
}

/**
 * @param tag string
 *   Top line of text
 * @param title string
 *   Main title of text
 * @param string author
 *   Small line of text below the title (used for the content author)
 * @param department string
 *   Text beneath the author, usually for the author's job title.
 */
function Hero(_ref5) {
    var tag = _ref5.tag,
        title = _ref5.title,
        author = _ref5.author,
        department = _ref5.department;

    return _react2.default.createElement(
        "div",
        { className: "hero" },
        _react2.default.createElement(HeroTag, { tag: tag }),
        _react2.default.createElement(HeroTitle, { title: title }),
        _react2.default.createElement(HeroAuthor, { author: author }),
        _react2.default.createElement(HeroDepartment, { department: department })
    );
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\n  @include media(\"md-up\") {\n    [styles for tablets and larger]\n  }\n  @include media(\"sm-down\") {\n    [styles for portrait tablets and smaller]\n  }\n*/\n.hero {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 600px;\n  width: calc(100% - (20px * 2));\n  font-family: \"MaisonNeue-Book\", Helvetica, Arial;\n  margin-bottom: 32px;\n  text-align: center; }\n  .hero__header {\n    font-family: \"CircularStd-Bold\", Helvetica, Arial;\n    font-weight: normal;\n    font-size: 38px;\n    line-height: 1.3;\n    text-align: center;\n    border-color: #40b09b; }\n    .hero__header::after {\n      content: '';\n      display: block;\n      border-top: solid 6px;\n      border-color: inherit;\n      margin-left: auto;\n      margin-right: auto;\n      width: 128px; }\n      @media only screen and (min-width: 769px) {\n        .hero__header::after {\n          width: 128px; } }\n  .hero__title {\n    margin-bottom: 32px; }\n  .hero__tag {\n    font-size: 12px;\n    line-height: 1.5;\n    color: #53585e;\n    margin-bottom: 20px; }\n  .hero__author {\n    font-size: 16px;\n    color: #000000;\n    margin-top: 20px; }\n  .hero__department {\n    font-size: 12px;\n    line-height: 1.33;\n    color: #53585e;\n    margin-top: 10px; }\n", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextBlock;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @todo make this work
function addCodeHighlights() {
  const codeInstances = document.querySelectorAll('.text-block pre');
  if (codeInstances.length) {
    import ('highlight.js/styles/vs2015.css');
    import ('highlight.js').then((hljs) => {
      [...codeInstances].forEach(element => {
        hljs.highlightBlock(element);
      });
    });
  }
}**/

/**
 *
 * @param props.center boolean
 *   Set to true to add a center alignment class.
 * @param props.text HTML
 *   A rich HTML block.
 *
 * @returns {*}
 * @constructor
 */
function TextBlock(props) {
  var textClass = 'text-block';

  if (props.center) {
    textClass += ' text-block--center';
  }

  return _react2.default.createElement('div', { className: textClass, dangerouslySetInnerHTML: { __html: props.text } });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*\n  @include media(\"md-up\") {\n    [styles for tablets and larger]\n  }\n  @include media(\"sm-down\") {\n    [styles for portrait tablets and smaller]\n  }\n*/\n.text-block {\n  color: #000000;\n  font-family: \"MaisonNeue-Book\", Helvetica, Arial;\n  font-size: 15px;\n  line-height: 1.5;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 600px;\n  width: calc(100% - (20px * 2));\n  padding-bottom: calc(10px * 1.5); }\n  @media only screen and (min-width: 769px) {\n    .text-block {\n      font-size: 16px; } }\n  .text-block--center {\n    text-align: center; }\n  .text-block p strong,\n  .text-block ul strong,\n  .text-block ol strong,\n  .text-block label strong,\n  .text-block p b,\n  .text-block ul b,\n  .text-block ol b,\n  .text-block label b {\n    font-family: \"MaisonNeue-Bold\", Helvetica, Arial; }\n  .text-block a:not([class^=\"btn\"]) {\n    color: #000000;\n    font-family: \"MaisonNeue-Bold\", Helvetica, Arial;\n    font-weight: normal;\n    -webkit-transition: -webkit-text-decoration 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: -webkit-text-decoration 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: text-decoration 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: text-decoration 0.2s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-text-decoration 0.2s cubic-bezier(0.165, 0.84, 0.44, 1); }\n    .text-block a:not([class^=\"btn\"]):hover, .text-block a:not([class^=\"btn\"]):focus {\n      color: #000000;\n      -webkit-text-decoration-color: #ff0046;\n              text-decoration-color: #ff0046; }\n  .text-block p {\n    margin-bottom: 20px; }\n  .text-block ul {\n    list-style: none;\n    margin-bottom: 40px; }\n    .text-block ul li {\n      position: relative;\n      padding-left: 35px; }\n      .text-block ul li + li {\n        margin-top: 10px; }\n      @media only screen and (min-width: 501px) {\n        .text-block ul li {\n          padding-left: 30px; } }\n      .text-block ul li::before {\n        content: '\\2022';\n        font-size: 40px;\n        position: absolute;\n        line-height: 15px;\n        left: 0;\n        top: 7px; }\n        @media only screen and (min-width: 501px) {\n          .text-block ul li::before {\n            font-size: 30px;\n            line-height: 16px;\n            top: 5px; } }\n  .text-block ol {\n    list-style: none;\n    margin-bottom: 40px; }\n    .text-block ol li {\n      counter-increment: step-counter;\n      margin-bottom: 10px;\n      position: relative;\n      padding-left: 35px; }\n      @media only screen and (min-width: 501px) {\n        .text-block ol li {\n          padding-left: 30px; } }\n      .text-block ol li::before {\n        content: counter(step-counter) \".\";\n        font-family: \"MaisonNeue-Bold\", Helvetica, Arial;\n        line-height: 1;\n        position: absolute;\n        left: 0;\n        top: 3px; }\n  .text-block code {\n    color: #404348;\n    font-size: 15px;\n    font-weight: bold; }\n  .text-block pre {\n    border-top: solid 4px #43bda6;\n    font-size: 13px;\n    margin-bottom: 32px; }\n  .text-block .hljs-string,\n  .text-block .hljs-meta-string {\n    color: #bcd5ec; }\n  .text-block .hljs-comment,\n  .text-block .hljs-doctag {\n    color: #43bda6; }\n  .text-block .hljs-keyword,\n  .text-block .hljs-literal,\n  .text-block .hljs-symbol,\n  .text-block .hljs-name {\n    color: #5595d2; }\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(29);

var _caseStudyCard = __webpack_require__(30);

var _caseStudyCard2 = _interopRequireDefault(_caseStudyCard);

var _imagesloaded = __webpack_require__(35);

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

var _inView = __webpack_require__(36);

var _inView2 = _interopRequireDefault(_inView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @todo - code split?


/**
 * @param this.props.caseStudies Object[]
 *     An array of objects which define a caseStudyCard
 */
var CaseStudyList = function (_React$Component) {
    _inherits(CaseStudyList, _React$Component);

    function CaseStudyList() {
        _classCallCheck(this, CaseStudyList);

        return _possibleConstructorReturn(this, (CaseStudyList.__proto__ || Object.getPrototypeOf(CaseStudyList)).apply(this, arguments));
    }

    _createClass(CaseStudyList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            var grid = document.querySelector('.js-case-study-list');
            var headerCtaBlock = document.querySelector('.header-cta-block');

            // @todo - something else that can be code split?
            var Isotope = __webpack_require__(37);

            if (!grid) return;

            (0, _inView2.default)('.js-case-study-card').on('enter', function (card) {
                card.classList.add('is-visible');
            });

            (0, _imagesloaded2.default)('.js-case-study-list', function () {

                var offsetSecondBlock = function offsetSecondBlock() {
                    var cards = Array.from(document.querySelectorAll('.js-case-study-card'));
                    var cardOffset = cards[0].clientHeight / 2 + 'px';
                    var secondCard = cards[1];
                    secondCard.style.marginTop = cardOffset;
                };

                if (!headerCtaBlock) {
                    offsetSecondBlock();
                }

                var layout = new Isotope(grid, {
                    itemSelector: '.js-case-study-card'
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var colors = ["rgb(207, 198, 204)", "rgb(64, 176, 155)", "rgb(248, 248, 246)", "rgb(85, 149, 210)"];

            var cards = this.props.caseStudies.map(function (card, key) {
                return _react2.default.createElement(_caseStudyCard2.default, _extends({ key: key, triangleCornerTop: key % 2 === 1, backgroundColor: colors[key % 4] }, card));
            });

            return _react2.default.createElement(
                'section',
                { className: 'case-study-list js-case-study-list' },
                cards
            );
        }
    }]);

    return CaseStudyList;
}(_react2.default.Component);

exports.default = CaseStudyList;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\n  @include media(\"md-up\") {\n    [styles for tablets and larger]\n  }\n  @include media(\"sm-down\") {\n    [styles for portrait tablets and smaller]\n  }\n*/\n.case-study-list {\n  position: relative;\n  margin-bottom: 65px; }\n  @media only screen and (min-width: 501px) {\n    .case-study-list {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; } }\n  .case-study-list .case-study-card {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n    -webkit-transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); }\n    .case-study-list .case-study-card.is-visible {\n      opacity: 1;\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n    @media only screen and (min-width: 501px) {\n      .case-study-list .case-study-card {\n        margin-bottom: 0; } }\n    .case-study-list .case-study-card:nth-child(2) {\n      margin-top: 25%; }\n      @media only screen and (max-width: 500px) {\n        .case-study-list .case-study-card:nth-child(2) {\n          margin-top: 0 !important; } }\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CaseStudyCard;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(31);

__webpack_require__(32);

var _buttonLink = __webpack_require__(33);

var _buttonLink2 = _interopRequireDefault(_buttonLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CaseStudyCardDescription(props) {
    if (props.description) {
        return _react2.default.createElement(
            'p',
            { className: 'case-study-card__intro' },
            props.description
        );
    }
    return '';
}

// @todo - this should optionally link to the case study.
function CaseStudyCardClientName(props) {
    if (props.clientName) {
        return _react2.default.createElement(
            'h3',
            { className: 'case-study-card__heading' },
            props.clientName
        );
    }
    return '';
}

// @todo - image should be wrapped in an optional link to the case study.
function CaseStudyImage(props) {
    var altText = props.clientName ? props.clientName : '';

    if (props.imgSrc) {
        return _react2.default.createElement('img', { className: 'case-study-card__image', src: props.imgSrc, alt: altText });
    }
    return '';
}

function CaseStudyProjectSummary(props) {
    if (props.summary) {
        return _react2.default.createElement('div', { className: 'case-study-card__summary', dangerouslySetInnerHTML: { __html: props.summary } });
    }
    return '';
}

function CaseStudyButton(props) {
    if (props.link) {
        return _react2.default.createElement(_buttonLink2.default, { link: props.link, text: props.isExternalLink ? 'Visit the site' : 'View case study', arrowClass: true });
    }
    return '';
}

/**
 * @param props.triangleCornerTop boolean
 *   True puts the white triangle corner in the top left.
 * @param props.backgroundColor string
 *   Color of the background - e.g. 'rgb(248, 248, 246)'
 * @param props.description string
 *   Short by line at the top of the card - e.g. 'Exploring conflict from WW1 to the present day.'
 * @param props.clientName string
 *   The name of the client - e.g. 'Imperial War Museums.'
 * @param props.imgSrc string
 *   URL to an image
 * @param props.summary string
 *   The summary paragraph of text.
 * @param props.link string
 *   A URL to the page the case study is about
 * @param props.isExternalLink boolean
 *   Mark if this is outside the website. We use different button label for external.
 */
function CaseStudyCard(props) {
    var triangleClass = props.triangleCornerTop ? 'case-study-card-triangle--top-left' : 'case-study-card-triangle--bottom-left';
    var outerClasses = 'case-study-card ' + triangleClass + ' js-case-study-card';

    return _react2.default.createElement(
        'div',
        { className: outerClasses, style: { backgroundColor: props.backgroundColor } },
        _react2.default.createElement(
            'div',
            { className: 'case-study-card__body' },
            _react2.default.createElement(CaseStudyCardDescription, { description: props.description }),
            _react2.default.createElement(CaseStudyCardClientName, { clientName: props.clientName, link: props.link }),
            _react2.default.createElement(CaseStudyImage, { imgSrc: props.imgSrc, clientName: props.clientName, link: props.link }),
            _react2.default.createElement(CaseStudyProjectSummary, { summary: props.summary }),
            _react2.default.createElement(CaseStudyButton, { link: props.link, isExternalLink: props.isExternalLink })
        )
    );
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\n  @include media(\"md-up\") {\n    [styles for tablets and larger]\n  }\n  @include media(\"sm-down\") {\n    [styles for portrait tablets and smaller]\n  }\n*/\n.case-study-card {\n  margin-bottom: 20px;\n  padding: 32px;\n  position: relative;\n  text-align: center; }\n  @media only screen and (min-width: 501px) {\n    .case-study-card {\n      width: 50%; } }\n  .case-study-card__body {\n    position: relative;\n    margin: 0 auto;\n    z-index: 1; }\n    @media only screen and (min-width: 501px) {\n      .case-study-card__body {\n        max-width: 320px; } }\n  .case-study-card__heading {\n    font-family: \"CircularStd-Bold\", Helvetica, Arial;\n    font-weight: normal;\n    color: #000000;\n    font-size: 28px;\n    line-height: 1.3;\n    margin-bottom: 20px;\n    text-align: left;\n    margin-bottom: 20px;\n    text-align: center; }\n    .case-study-card__heading a {\n      color: #000000;\n      text-decoration: none; }\n  .case-study-card__image {\n    margin-bottom: 10px; }\n  .case-study-card__intro {\n    color: #53585e;\n    font-size: 15px;\n    margin-bottom: 5px; }\n    @media only screen and (min-width: 501px) {\n      .case-study-card__intro {\n        font-size: 14px; } }\n  .case-study-card__summary {\n    font-size: 18px;\n    margin-bottom: 20px; }\n    @media only screen and (min-width: 501px) {\n      .case-study-card__summary {\n        font-size: 14px; } }\n  .case-study-card-triangle--top-left::after {\n    content: '';\n    height: 100%;\n    width: 100%;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none' fill='%23ffffff'%3E %3Ctitle%3Etriangle%3C/title%3E %3Cg id='triangle' transform='translate(50.000000, 50.000000) scale(-1, -1) translate(-50.000000, -50.000000) ' fill-rule='nonzero'%3E %3Cpolygon id='Shape' points='100 100 100 0 0 100'/%3E %3C/g%3E %3C/svg%3E\");\n    background-size: 100% 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0; }\n  .case-study-card-triangle--top-right::after {\n    content: '';\n    height: 100%;\n    width: 100%;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none' fill='%23ffffff'%3E %3Ctitle%3Etriangle%3C/title%3E %3Cg id='triangle' transform='translate(50.000000, 50.000000) scale(-1, 1) translate(-50.000000, -50.000000) ' fill-rule='nonzero'%3E %3Cg transform='translate(50.000000, 50.000000) rotate(180.000000) translate(-50.000000, -50.000000) ' id='Shape'%3E %3Cpolygon points='100 100 100 0 0 100'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E\");\n    background-size: 100% 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0; }\n  .case-study-card-triangle--bottom-left::after {\n    content: '';\n    height: 100%;\n    width: 100%;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none' fill='%23ffffff'%3E %3Ctitle%3Etriangle%3C/title%3E %3Cg transform='translate(50.000000, 50.000000) rotate(180.000000) translate(-50.000000, -50.000000) ' id='Shape'%3E %3Cpolygon transform='translate(50.000000, 50.000000) scale(1, -1) translate(-50.000000, -50.000000) ' points='100 100 100 0 0 100'/%3E %3C/g%3E %3C/svg%3E\");\n    background-size: 100% 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0; }\n  .case-study-card-triangle--bottom-right::after {\n    content: '';\n    height: 100%;\n    width: 100%;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none' fill='%23ffffff'%3E %3Ctitle%3Etriangle%3C/title%3E %3Cg id='triangle' transform='translate(50.000000, 50.000000) scale(-1, -1) translate(-50.000000, -50.000000) ' fill-rule='nonzero'%3E %3Cg transform='translate(50.000000, 50.000000) rotate(180.000000) translate(-50.000000, -50.000000) ' id='Shape'%3E %3Cpolygon points='100 100 100 0 0 100'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E\");\n    background-size: 100% 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0; }\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/screen.953f0ee2.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonLink;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param props.type string
 *   A modifier class to apply to the button.
 * @param props.arrowClass boolean
 *   True to include the arrow.
 * @param props.link string
 *   URL to link to
 * @param props.text
 *   The text of the button.
 */
function ButtonLink(props) {
  var classNames = 'btn btn--center ' + (props.type ? 'btn--' + props.type : '') + ' ' + (props.arrowClass ? 'btn--arrow' : '');
  return _react2.default.createElement(
    'a',
    { href: props.link, className: classNames },
    props.text
  );
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\n  @include media(\"md-up\") {\n    [styles for tablets and larger]\n  }\n  @include media(\"sm-down\") {\n    [styles for portrait tablets and smaller]\n  }\n*/\n.btn {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  background-color: transparent;\n  border: solid 4px #000000;\n  color: #000000;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  padding: 12px 28px;\n  text-decoration: none;\n  -webkit-transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }\n  @media only screen and (min-width: 501px) {\n    .btn {\n      border: solid 3px #000000;\n      font-size: 16px;\n      padding: 10px 24px; } }\n  .btn:hover, .btn:focus {\n    background-color: #000000;\n    border-color: #000000;\n    color: #ffffff;\n    -webkit-box-shadow: 4px 4px 0px rgba(3, 4, 3, 0.2);\n            box-shadow: 4px 4px 0px rgba(3, 4, 3, 0.2);\n    -webkit-transform: translateY(-4px);\n            transform: translateY(-4px); }\n  .btn:active {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    -webkit-box-shadow: 0px 0px 0px rgba(3, 4, 3, 0.15);\n            box-shadow: 0px 0px 0px rgba(3, 4, 3, 0.15); }\n\n.btn--invert {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  background-color: transparent;\n  border: solid 4px #ffffff;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  padding: 12px 28px;\n  text-decoration: none;\n  -webkit-transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }\n  @media only screen and (min-width: 501px) {\n    .btn--invert {\n      border: solid 3px #ffffff;\n      font-size: 16px;\n      padding: 10px 24px; } }\n  .btn--invert:hover, .btn--invert:focus {\n    background-color: #ffffff;\n    border-color: #ffffff;\n    color: #000000;\n    -webkit-box-shadow: 4px 4px 0px rgba(3, 4, 3, 0.2);\n            box-shadow: 4px 4px 0px rgba(3, 4, 3, 0.2);\n    -webkit-transform: translateY(-4px);\n            transform: translateY(-4px); }\n  .btn--invert:active {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    -webkit-box-shadow: 0px 0px 0px rgba(3, 4, 3, 0.15);\n            box-shadow: 0px 0px 0px rgba(3, 4, 3, 0.15); }\n\n.btn--standout {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  background-color: #ff0046;\n  border: solid 4px #ff0046;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  padding: 12px 28px;\n  text-decoration: none;\n  -webkit-transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='17' fill='%23ffffff'%3E %3Cpath fill-rule='evenodd' d='M24.736 10.246v6.351l16.4-8.347-16.4-8.099v6.085H.541v4.01h24.195z'/%3E %3C/svg%3E\");\n  background-position: right 32px center;\n  background-repeat: no-repeat;\n  background-size: 31px 12px;\n  padding-right: 80px; }\n  @media only screen and (min-width: 501px) {\n    .btn--standout {\n      border: solid 3px #ff0046;\n      font-size: 16px;\n      padding: 10px 24px; } }\n  @media only screen and (min-width: 501px) {\n    .btn--standout {\n      background-position: right 24px center;\n      background-size: 20px 9px;\n      padding-right: 58px; } }\n  .btn--standout:hover, .btn--standout:focus {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='17' fill='%23ffffff'%3E %3Cpath fill-rule='evenodd' d='M24.736 10.246v6.351l16.4-8.347-16.4-8.099v6.085H.541v4.01h24.195z'/%3E %3C/svg%3E\"); }\n  .btn--standout:hover, .btn--standout:focus {\n    background-color: #40b09b;\n    border-color: #40b09b;\n    color: #ffffff;\n    -webkit-box-shadow: 4px 4px 0px rgba(3, 4, 3, 0.2);\n            box-shadow: 4px 4px 0px rgba(3, 4, 3, 0.2);\n    -webkit-transform: translateY(-4px);\n            transform: translateY(-4px); }\n  .btn--standout:active {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    -webkit-box-shadow: 0px 0px 0px rgba(3, 4, 3, 0.15);\n            box-shadow: 0px 0px 0px rgba(3, 4, 3, 0.15); }\n  .btn--standout--wide {\n    padding-right: 24px;\n    width: 100%; }\n\n.btn--arrow {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='17' fill='%23000000'%3E %3Cpath fill-rule='evenodd' d='M24.736 10.246v6.351l16.4-8.347-16.4-8.099v6.085H.541v4.01h24.195z'/%3E %3C/svg%3E\");\n  background-position: right 32px center;\n  background-repeat: no-repeat;\n  background-size: 31px 12px;\n  padding-right: 80px; }\n  @media only screen and (min-width: 501px) {\n    .btn--arrow {\n      background-position: right 24px center;\n      background-size: 20px 9px;\n      padding-right: 58px; } }\n  .btn--arrow:hover, .btn--arrow:focus {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='17' fill='%23ffffff'%3E %3Cpath fill-rule='evenodd' d='M24.736 10.246v6.351l16.4-8.347-16.4-8.099v6.085H.541v4.01h24.195z'/%3E %3C/svg%3E\"); }\n", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("imagesloaded");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("in-view");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("isotope-layout");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(39);

var _logo = __webpack_require__(40);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(props) {
  return _react2.default.createElement(
    'header',
    { className: 'header' },
    _react2.default.createElement(
      'div',
      { className: 'header__container' },
      _react2.default.createElement(
        'div',
        { className: 'header__logo--mobile' },
        _react2.default.createElement(
          'a',
          { href: '/' },
          _react2.default.createElement('img', { src: _logo2.default, className: 'header__logo-img', alt: 'Deeson' })
        )
      ),
      _react2.default.createElement(
        'nav',
        { className: 'header__nav' },
        _react2.default.createElement(
          'ul',
          { className: 'header__nav__list' },
          _react2.default.createElement(
            'li',
            { className: 'header__nav__logo' },
            _react2.default.createElement(
              'a',
              { href: '/', className: 'header__nav__logo-link js-header-nav-link' },
              _react2.default.createElement('img', { src: _logo2.default, className: 'header__logo-img', alt: 'Deeson', width: '138', height: '25' })
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'header__nav__item' },
            _react2.default.createElement(
              'a',
              { href: '/work', className: 'header__nav__link js-header-nav-link header__nav__link--active' },
              'Work'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'header__nav__item' },
            _react2.default.createElement(
              'a',
              { href: '/about', className: 'header__nav__link js-header-nav-link' },
              'About'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'header__nav__item' },
            _react2.default.createElement(
              'a',
              { href: '/services', className: 'header__nav__link js-header-nav-link' },
              'Services'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'header__nav__item' },
            _react2.default.createElement(
              'a',
              { href: '/careers', className: 'header__nav__link js-header-nav-link' },
              'Careers'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'header__nav__item' },
            _react2.default.createElement(
              'a',
              { href: '/blog', className: 'header__nav__link js-header-nav-link' },
              'Blog'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'header__nav__item' },
            _react2.default.createElement(
              'a',
              { href: '/contact', className: 'header__nav__link js-header-nav-link' },
              'Contact'
            )
          )
        )
      ),
      _react2.default.createElement(
        'a',
        { href: '#', className: 'header__nav-icon js-toggle-mobile-menu' },
        'menu',
        _react2.default.createElement('span', null),
        _react2.default.createElement('span', null),
        _react2.default.createElement('span', null),
        _react2.default.createElement('span', null)
      )
    )
  );
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\n  @include media(\"md-up\") {\n    [styles for tablets and larger]\n  }\n  @include media(\"sm-down\") {\n    [styles for portrait tablets and smaller]\n  }\n*/\n.header {\n  width: 100%;\n  height: 89px;\n  background-color: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 52px; }\n  .header__container {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 960px;\n    width: calc(100% - (20px * 2)); }\n    @media only screen and (min-width: 769px) {\n      .header__container {\n        text-align: center; } }\n  .header__logo--mobile {\n    display: inline-block;\n    z-index: 5; }\n    @media only screen and (min-width: 1025px) {\n      .header__logo--mobile {\n        display: none; } }\n    .header__logo--mobile a {\n      display: block; }\n    .header__logo--mobile img {\n      width: 137.5px;\n      height: 25px; }\n  .header__nav-icon {\n    display: none;\n    width: 38px;\n    height: 32px;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    overflow: hidden;\n    text-indent: 100%;\n    white-space: nowrap; }\n    .header__nav-icon span {\n      display: block;\n      position: absolute;\n      height: 6px;\n      width: 100%;\n      background: #000000;\n      border-radius: 10px;\n      opacity: 1;\n      left: 0;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n      -webkit-transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n      transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n      -webkit-transform-origin: left center;\n              transform-origin: left center; }\n      .header__nav-icon span:first-child {\n        top: 0; }\n      .header__nav-icon span:nth-child(2) {\n        top: 11px; }\n      .header__nav-icon span:nth-child(3) {\n        top: 22px;\n        width: 30px; }\n      .header__nav-icon span:last-child {\n        top: 22px;\n        right: 0;\n        left: inherit;\n        width: 6px; }\n    .header__nav-icon--active {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg); }\n      .header__nav-icon--active span:first-child {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n        top: -1px;\n        left: 5px; }\n      .header__nav-icon--active span:nth-child(2) {\n        width: 6px;\n        top: 0;\n        left: 28px; }\n      .header__nav-icon--active span:nth-child(3) {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        top: 25px;\n        left: 5px;\n        width: calc(100% - 7px); }\n      .header__nav-icon--active span:last-child {\n        width: 0;\n        opacity: 0; }\n    @media only screen and (max-width: 1024px) {\n      .header__nav-icon {\n        display: inline-block;\n        position: absolute;\n        right: 20px; } }\n  .header__nav {\n    width: 100%; }\n    @media only screen and (max-width: 1024px) {\n      .header__nav {\n        background-color: #ffffff;\n        position: absolute;\n        -webkit-transform: translateY(54px);\n                transform: translateY(54px);\n        top: 0;\n        right: 20px;\n        opacity: 0;\n        width: 50%;\n        visibility: hidden; } }\n    @media only screen and (max-width: 768px) {\n      .header__nav {\n        left: 20px;\n        right: 20px;\n        width: calc(100% - 40px); } }\n    .header__nav__list {\n      display: block;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      text-align: center; }\n      @media only screen and (min-width: 1025px) {\n        .header__nav__list {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; } }\n    .header__nav__logo {\n      display: none;\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1;\n      position: relative; }\n      .header__nav__logo img {\n        display: block; }\n      @media only screen and (min-width: 1025px) {\n        .header__nav__logo {\n          display: inline-block;\n          -webkit-box-ordinal-group: 5;\n              -ms-flex-order: 4;\n                  order: 4; } }\n    .header__nav__item {\n      display: block; }\n      @media only screen and (min-width: 1025px) {\n        .header__nav__item {\n          display: inline-block; } }\n      @media only screen and (min-width: 1025px) {\n        .header__nav__item:nth-child(2) {\n          -webkit-box-ordinal-group: 2;\n              -ms-flex-order: 1;\n                  order: 1; } }\n      @media only screen and (min-width: 1025px) {\n        .header__nav__item:nth-child(3) {\n          -webkit-box-ordinal-group: 3;\n              -ms-flex-order: 2;\n                  order: 2; } }\n      @media only screen and (min-width: 1025px) {\n        .header__nav__item:nth-child(4) {\n          -webkit-box-ordinal-group: 4;\n              -ms-flex-order: 3;\n                  order: 3; } }\n      @media only screen and (min-width: 1025px) {\n        .header__nav__item:nth-child(5) {\n          -webkit-box-ordinal-group: 5;\n              -ms-flex-order: 4;\n                  order: 4; } }\n      @media only screen and (min-width: 1025px) {\n        .header__nav__item:nth-child(6) {\n          -webkit-box-ordinal-group: 6;\n              -ms-flex-order: 5;\n                  order: 5; } }\n      @media only screen and (min-width: 1025px) {\n        .header__nav__item:nth-child(7) {\n          -webkit-box-ordinal-group: 7;\n              -ms-flex-order: 6;\n                  order: 6; } }\n    .header__nav__link {\n      font-family: \"CircularStd-Bold\", Helvetica, Arial;\n      font-weight: normal;\n      color: #000000;\n      font-size: 17px;\n      line-height: 1.3;\n      text-align: left;\n      display: inline-block;\n      position: relative;\n      text-decoration: none;\n      text-transform: lowercase;\n      -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }\n      @media only screen and (min-width: 1025px) {\n        .header__nav__link--active::after {\n          content: '';\n          height: 2px;\n          width: 100%;\n          position: absolute;\n          top: 55px;\n          left: 0;\n          background-color: #ff0046;\n          z-index: 2; } }\n      @media only screen and (max-width: 1024px) {\n        .header__nav__link--active {\n          background-color: #ff0046;\n          color: #ffffff; } }\n      @media only screen and (max-width: 1024px) {\n        .header__nav__link {\n          border-bottom: solid 1px #edeee9;\n          display: block;\n          padding: 15px;\n          text-align: center; } }\n      .header__nav__link:hover:not(.header__nav__link--active), .header__nav__link:focus:not(.header__nav__link--active) {\n        color: #ff0046; }\n        @media only screen and (min-width: 1025px) {\n          .header__nav__link:hover:not(.header__nav__link--active), .header__nav__link:focus:not(.header__nav__link--active) {\n            -webkit-transform: translateY(-2px);\n                    transform: translateY(-2px); } }\n      @media only screen and (min-width: 1025px) {\n        .header__nav__link:active:not(.header__nav__link--active) {\n          -webkit-transform: translateY(0);\n                  transform: translateY(0); } }\n      .header__nav__link:active {\n        -webkit-transform: translateY(0);\n                transform: translateY(0); }\n    @media only screen and (max-width: 1024px) {\n      .header__nav--show {\n        opacity: 1;\n        -webkit-transform: translateY(calc(89px + 20px));\n                transform: translateY(calc(89px + 20px));\n        -webkit-transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n        transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n        visibility: visible;\n        z-index: 5; } }\n", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzUiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAyNzUgNTAiPgogICAgPHBhdGggZmlsbD0iI0ZGMDA0NiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjYuMjIyLS4wMDdjMTQuNTg2IDAgMjMuODk3IDcuOTk5IDIzLjg5NyAyNC4xNTZ2LjE1NGMwIDE3Ljc3LTEwLjI0MiAyNC44NDktMjUuMzcyIDI0Ljg0OUgtLjAwMnYtNS45MjVoMS43ODVjMi43MTUgMCA0LjAzMy0uNjE1IDQuMDMzLTQuMDc3VjEwLjMwMmMwLTMuNDYzLTEuMzE4LTQuMDc4LTQuMDMzLTQuMDc4SC0uMDAyVi0uMDA3aDI2LjIyNHptLTIuMzI2IDQyLjkyNmM5Ljc3NSAwIDEyLjg4MS01LjQ2MSAxMi44ODEtMTcuMDc3di0zLjkyNWMwLTEwLjE1NC0yLjcxNS0xNS4xNTQtMTEuMzI3LTE1LjE1NGgtNi45MDh2MzYuMTU2aDUuMzU0ek02Ni4xOCAzMi4yMjZjLjM4OSA3Ljc3MSA0LjE5IDEwLjQ2MyAxMS44NzEgMTAuNDYzIDQuMTEyIDAgNy44MzgtMS4wNzkgMTAuMjQxLTIuMjMydjQuNDYyYy0xLjg2MSAyLjM4NS02Ljk4MiA1LjA3Ni0xNC40MzEgNS4wNzYtMTIuNzI1IDAtMjAuNDA2LTYuOTIzLTIwLjQwNi0xOS42OTJ2LS4wNzZjMC0xMi40NjQgOC40NTctMTkuNjk0IDE5LjMyLTE5LjY5NCAxMS40MDUgMCAxNy4zMDIgNi4zODQgMTcuMzAyIDE1Ljc3MiAwIDIuODQ2LS41NDQgNC4zODMtMS4xNjMgNS45MjJINjYuMTh2LS4wMDF6bTAtNS4yMzFoMTIuNjQ3di0uNjE2YzAtNy4zMS0xLjkzOS0xMC4yMzEtNS44Mi0xMC4yMzEtNC4yNjcgMC02LjU5MyAzLjAwMS02LjgyNyAxMC44NDd6bTM5LjcyNCA1LjIzMWMuMzg5IDcuNzcxIDQuMTg5IDEwLjQ2MyAxMS44NzEgMTAuNDYzIDQuMTEyIDAgNy44MzgtMS4wNzkgMTAuMjQxLTIuMjMydjQuNDYyYy0xLjg2MiAyLjM4NS02Ljk4MiA1LjA3Ni0xNC40MzEgNS4wNzYtMTIuNzI1IDAtMjAuNDA2LTYuOTIzLTIwLjQwNi0xOS42OTJ2LS4wNzZjMC0xMi40NjQgOC40NTctMTkuNjk0IDE5LjMyLTE5LjY5NCAxMS40MDUgMCAxNy4zMDIgNi4zODQgMTcuMzAyIDE1Ljc3MiAwIDIuODQ2LS41NDQgNC4zODMtMS4xNjQgNS45MjJoLTIyLjczM3YtLjAwMXptMC01LjIzMWgxMi42NDd2LS42MTZjMC03LjMxLTEuOTM5LTEwLjIzMS01LjgyLTEwLjIzMS00LjI2NyAwLTYuNTk1IDMuMDAxLTYuODI3IDEwLjg0N3ptMzQuMDYxIDE4LjM4NmMtLjQ2NSAyLjYxNS0xLjM5OCAzLjc3MS0xLjM5OCAzLjc3MWgtNS42NjJWMzcuMzgxaDcuMjkyYy45MzEgNC4zODUgNC4xMTIgNi45MjMgOC44NDYgNi45MjMgMy42NDYgMCA2LjA1Mi0xLjQ2MSA2LjA1Mi00LjM4NCAwLTIuMzg2LTEuMTYzLTMuMDc5LTMuMTgyLTMuNTM5LTIuNzkyLS43NjktOC44NDYtLjc2OS0xMy4xMTEtMi44NDgtNC4wMzQtMS45OTktNS44OTctNS41MzktNS44OTctMTAuNjE0IDAtOS4zMDggOC4wNjgtMTIuMzg2IDE0LjA0Mi0xMi4zODYgNS4xMjEgMCA4LjIyNSAxLjY5MiA5LjY5OCA0LjYxNi41NDQtMi42MTcgMS4zMi0zLjY5MyAxLjMyLTMuNjkzaDUuNTA4djEwLjg0N2gtNi45ODNjLTEuMjQtMy42OTItMy43MjMtNS43NzEtNy44MzgtNS43NzEtMy4xMDQgMC01LjUwOCAxLjA3Ny01LjUwOCA0LjA3OCAwIDEuOTIzIDEuMDA5IDIuOTk5IDIuOTQ4IDMuNDYyIDMuNjQ2IDEuMDAxIDkuOTMyIDEuMDAxIDEzLjg4OSAzLjA3NyA0LjExMyAyLjE1NCA1Ljc0MiA1LjU0MSA1Ljc0MiAxMC4yMzIgMCA4LjM4NS02LjEyOSAxMi42MTYtMTQuNzQzIDEyLjYxNi01LjU4My0uMDAyLTkuMDc2LTEuNzctMTEuMDE1LTQuNjE2em0yOC41MzctMTUuNDY0di0uMTUzYzAtMTIuMzA5IDguNjEzLTE5LjIzMSAxOS45NDItMTkuMjMxIDExLjQwNSAwIDIwLjAxNyA2LjkyNCAyMC4wMTcgMTkuMTU2di4xNTNjMCAxNC4zODYtOS42OTggMjAuMTU1LTIwLjAxNyAyMC4xNTUtMTAuMjQ0LS4wMDItMTkuOTQyLTUuNzcxLTE5Ljk0Mi0yMC4wOHptMjcuMjM0IDEuMTU2di0yLjc2OWMwLTguNDYyLTIuODctMTEuNzcyLTcuMjkyLTExLjc3Mi00LjM0NSAwLTcuMjE3IDMuMzEtNy4yMTcgMTEuNzcydjIuNzY5YzAgMTAuNjkzIDMuMTgyIDEzLjIzMSA3LjIxNyAxMy4yMzEgNC4xMSAwIDcuMjkyLTIuNTQxIDcuMjkyLTEzLjIzMXptNTUuNTQ5IDkuMzA3YzAgMi4yMzIuNDY0IDMuMDc4IDMuNzIzIDMuMDc4aC41NDR2NS42OTRoLTIxLjU2OXYtNS42OTRoLjc3NmMzLjE4IDAgNC4wMzMtLjMwNyA0LjAzMy0yLjc2OFYyNC41MzVjMC00LjIzMi0xLjc4NC02LjIzMS01LjM1My02LjIzMS00LjQ5OSAwLTcuNTI2IDMuNjkzLTcuNTI2IDEwLjE1NFY0MC42OWMwIDIuMzA3LjU0NCAyLjc2OCA0LjAzMyAyLjc2OGguNzc2djUuNjk0aC0yMS41Njl2LTUuNjk0aDEuMDA5YzIuNzE1IDAgMy4yNTktLjYxNSAzLjI1OS0zLjMwN1YyMi41MzNjMC0zLjc3MS0xLjMyLTQuMzgzLTQuMDM1LTQuMzgzaC0uMjMzdi02LjY5NWgxNC44MTlzMS43MDcgMy43NyAxLjcwNyA4LjYxNXYuNjE1YzEuNzA3LTYuMDc3IDYuMTI5LTEwLjE1NCAxMy4zNDYtMTAuMTU0IDcuNTI2IDAgMTIuMjU4IDQuNDYyIDEyLjI1OCAxMy42MTZWNDAuMzhoLjAwMnptNi42NTkgMS4yOTZjMC00LjY1MiAzLjg4NC04LjQ5OSA4LjQ4Mi04LjQ5OSA0LjY5MiAwIDguNTc0IDMuODQ3IDguNTc0IDguNDk5IDAgNC41NjItMy44ODIgOC4zMjEtOC41NzQgOC4zMjEtNC41OTgtLjAwMi04LjQ4Mi0zLjc1OS04LjQ4Mi04LjMyMXoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Footer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(42);

var _logo = __webpack_require__(43);

var _logo2 = _interopRequireDefault(_logo);

var _upperMiddle = __webpack_require__(44);

var _upperMiddle2 = _interopRequireDefault(_upperMiddle);

var _upperMiddle2x = __webpack_require__(45);

var _upperMiddle2x2 = _interopRequireDefault(_upperMiddle2x);

var _upperMiddle3x = __webpack_require__(46);

var _upperMiddle3x2 = _interopRequireDefault(_upperMiddle3x);

__webpack_require__(47);

__webpack_require__(48);

__webpack_require__(49);

__webpack_require__(50);

__webpack_require__(51);

__webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var srcSet = _upperMiddle2x2.default + ' 2x, ' + _upperMiddle3x2.default + ' 3x';

function Footer(props) {
    return _react2.default.createElement(
        'div',
        { className: 'footer' },
        _react2.default.createElement(
            'div',
            { className: 'footer__container' },
            _react2.default.createElement(
                'div',
                { className: 'footer__header' },
                _react2.default.createElement(
                    'div',
                    { className: 'footer__social' },
                    _react2.default.createElement(
                        'a',
                        { className: 'footer__social-link footer__twitter', target: '_blank', rel: 'noopener', href: 'https://twitter.com/DeesonAgency' },
                        'twitter'
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'footer__social-link footer__facebook', target: '_blank', rel: 'noopener', href: 'https://www.facebook.com/deesonagency' },
                        'facebook'
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'footer__social-link footer__medium', target: '_blank', rel: 'noopener', href: 'https://medium.com/deeson-publication' },
                        'medium'
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'footer__social-link footer__linkedin', target: '_blank', rel: 'noopener', href: 'https://www.linkedin.com/company/deeson/' },
                        'linkedin'
                    )
                ),
                _react2.default.createElement('img', { src: _upperMiddle2.default,
                    srcSet: srcSet, className: 'upper-middle', width: '190', height: '190', alt: 'Deeson puzzle icon' })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'footer__body' },
            _react2.default.createElement(
                'div',
                { className: 'footer__container' },
                _react2.default.createElement(
                    'div',
                    { className: 'footer__info' },
                    _react2.default.createElement(
                        'div',
                        { className: 'footer__info__left' },
                        _react2.default.createElement(
                            'h4',
                            { className: 'footer__info-heading' },
                            'Read our thoughts.'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Forget telepathy. Our founder writes an email every month to let you know what we\'re thinking about.'
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'footer__btn', href: '/newsletter' },
                            'Find out more'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer__info__right' },
                        _react2.default.createElement(
                            'h4',
                            { className: 'footer__info-heading' },
                            'Events by Deeson.'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Thought-provoking discussions on the future of digital. Request an invite to our next briefing or drinks evening.'
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'footer__btn', href: '/events' },
                            'Join us'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'footer__sub' },
                    _react2.default.createElement('img', { className: 'footer__logo', src: _logo2.default, width: '150', height: '31', alt: 'Deeson logo' }),
                    _react2.default.createElement(
                        'ul',
                        { className: 'footer__address', itemScope: true, itemType: 'http://schema.org/LocalBusiness' },
                        _react2.default.createElement(
                            'li',
                            { itemProp: 'name' },
                            'Deeson Group Ltd.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'span',
                                { itemProp: 'streetAddress' },
                                '1 Pancras Square'
                            ),
                            _react2.default.createElement(
                                'span',
                                { itemProp: 'addressLocality' },
                                'London'
                            ),
                            _react2.default.createElement(
                                'span',
                                { itemProp: 'postalCode' },
                                'N1C 4AG.'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Company number: 01073356.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Registered in England & Wales.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '/privacy-and-cookies' },
                                'Privacy policy.'
                            )
                        )
                    )
                )
            )
        )
    );
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\n  @include media(\"md-up\") {\n    [styles for tablets and larger]\n  }\n  @include media(\"sm-down\") {\n    [styles for portrait tablets and smaller]\n  }\n*/\n.footer {\n  color: #ffffff;\n  overflow: hidden; }\n  .footer__container {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 960px;\n    width: calc(100% - (20px * 2));\n    position: relative;\n    z-index: 1; }\n  .footer__header {\n    margin-bottom: -95px;\n    position: relative;\n    text-align: center;\n    z-index: 1; }\n  .footer__body {\n    padding-top: 140px;\n    padding-bottom: 32px;\n    background-color: #53585e;\n    position: relative; }\n    .footer__body::after {\n      content: '';\n      height: 100%;\n      width: 100%;\n      background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none' fill='%2353585e'%3E %3Ctitle%3Etriangle%3C/title%3E %3Cg id='triangle' transform='translate(50.000000, 50.000000) scale(-1, -1) translate(-50.000000, -50.000000) ' fill-rule='nonzero'%3E %3Cpolygon id='Shape' points='100 100 100 0 0 100'/%3E %3C/g%3E %3C/svg%3E\");\n      background-size: 100% 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 0; }\n  .footer__info {\n    color: #ffffff;\n    margin-bottom: 45px;\n    text-align: center; }\n    @media only screen and (min-width: 501px) {\n      .footer__info {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        text-align: left; } }\n    @media only screen and (min-width: 769px) {\n      .footer__info > div {\n        width: 33.33333%;\n        max-width: 33.33333%;\n        -ms-flex-preferred-size: 33.33333%;\n            flex-basis: 33.33333%; } }\n    .footer__info-heading {\n      font-family: \"CircularStd-Bold\", Helvetica, Arial;\n      font-weight: normal;\n      color: #ffffff;\n      font-size: 27px;\n      line-height: 1.3;\n      margin-bottom: 20px;\n      text-align: left; }\n      @media only screen and (min-width: 769px) {\n        .footer__info-heading {\n          font-size: 24px; } }\n      @media only screen and (max-width: 500px) {\n        .footer__info-heading {\n          text-align: center; } }\n    @media only screen and (min-width: 501px) {\n      .footer__info__left {\n        margin-right: 32px;\n        text-align: right; } }\n    @media only screen and (max-width: 500px) {\n      .footer__info__left {\n        margin-bottom: 45px; } }\n    @media only screen and (min-width: 501px) {\n      .footer__info__left .footer__info-heading {\n        text-align: right; } }\n    @media only screen and (min-width: 501px) {\n      .footer__info__right {\n        margin-left: 32px; } }\n  .footer__btn {\n    font-family: \"CircularStd-Bold\", Helvetica, Arial;\n    font-weight: normal;\n    background-color: transparent;\n    border: solid 4px #ffffff;\n    color: #ffffff;\n    cursor: pointer;\n    display: inline-block;\n    font-size: 16px;\n    padding: 12px 28px;\n    text-decoration: none;\n    -webkit-transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='17' fill='%23ffffff'%3E %3Cpath fill-rule='evenodd' d='M24.736 10.246v6.351l16.4-8.347-16.4-8.099v6.085H.541v4.01h24.195z'/%3E %3C/svg%3E\");\n    background-position: right 32px center;\n    background-repeat: no-repeat;\n    background-size: 31px 12px;\n    padding-right: 80px; }\n    @media only screen and (min-width: 501px) {\n      .footer__btn {\n        border: solid 3px #ffffff;\n        font-size: 16px;\n        padding: 10px 24px; } }\n    .footer__btn:hover, .footer__btn:focus {\n      background-color: #ffffff;\n      border-color: #ffffff;\n      color: #53585e;\n      -webkit-box-shadow: 4px 4px 0px rgba(3, 4, 3, 0.2);\n              box-shadow: 4px 4px 0px rgba(3, 4, 3, 0.2);\n      -webkit-transform: translateY(-4px);\n              transform: translateY(-4px); }\n    .footer__btn:active {\n      -webkit-transform: translateY(0px);\n              transform: translateY(0px);\n      -webkit-box-shadow: 0px 0px 0px rgba(3, 4, 3, 0.15);\n              box-shadow: 0px 0px 0px rgba(3, 4, 3, 0.15); }\n    @media only screen and (min-width: 501px) {\n      .footer__btn {\n        background-position: right 24px center;\n        background-size: 20px 9px;\n        padding-right: 58px; } }\n    .footer__btn:hover, .footer__btn:focus {\n      background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='17' fill='%2353585e'%3E %3Cpath fill-rule='evenodd' d='M24.736 10.246v6.351l16.4-8.347-16.4-8.099v6.085H.541v4.01h24.195z'/%3E %3C/svg%3E\"); }\n  .footer__social {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin-bottom: 32px; }\n    @media only screen and (min-width: 501px) {\n      .footer__social {\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; } }\n    .footer__social-link {\n      display: inline-block;\n      margin: 0 calc(34px / 2);\n      text-indent: 9999px;\n      width: 40px;\n      height: 40px;\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n      -webkit-transition: background-image 0.25s ease;\n      transition: background-image 0.25s ease; }\n      @media only screen and (min-width: 501px) {\n        .footer__social-link {\n          width: 34px;\n          height: 34px; } }\n      .footer__social-link:first-child {\n        margin-left: 0; }\n      .footer__social-link:last-child {\n        margin-right: 0; }\n  .footer__logo {\n    margin-bottom: 20px; }\n  .footer__twitter {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='45' height='46' fill='%2353585e'%3E %3Cpath fill-rule='evenodd' d='M22.4.749C10.028.749 0 10.778 0 23.151c0 12.368 10.028 22.398 22.4 22.398 12.372 0 22.4-10.03 22.4-22.398C44.8 10.778 34.772.749 22.4.749zm12.236 14.947c-.108.178-.659.808-1.247 1.385-.997.99-1.05 1.097-1.05 1.927 0 1.277-.605 3.942-1.211 5.4-1.123 2.739-3.527 5.566-5.932 6.988-3.384 2-7.891 2.505-11.685 1.332-1.262-.394-3.437-1.404-3.437-1.582 0-.056.66-.127 1.462-.143a9.97 9.97 0 0 0 4.774-1.334l.962-.575-1.105-.38c-1.568-.54-2.975-1.783-3.33-2.953-.108-.38-.072-.397.925-.397l1.035-.016-.874-.415c-1.033-.524-1.977-1.404-2.44-2.304-.339-.652-.766-2.289-.641-2.415.035-.054.41.053.837.197 1.228.449 1.389.344.676-.414-1.335-1.37-1.746-3.406-1.105-5.331l.302-.865 1.175 1.172c2.406 2.358 5.238 3.763 8.479 4.177l.89.107-.053-.882c-.16-2.287 1.247-4.374 3.473-5.185.821-.288 2.21-.325 3.12-.072.356.106 1.031.469 1.513.793l.872.595.962-.308c.535-.158 1.247-.429 1.568-.611.302-.159.57-.249.57-.197 0 .305-.659 1.349-1.211 1.925-.749.812-.535.883.978.345.908-.309.927-.309.748.036z'/%3E %3C/svg%3E\"); }\n    .footer__twitter:hover, .footer__twitter:focus {\n      background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='45' height='46' fill='%2340b09b'%3E %3Cpath fill-rule='evenodd' d='M22.4.749C10.028.749 0 10.778 0 23.151c0 12.368 10.028 22.398 22.4 22.398 12.372 0 22.4-10.03 22.4-22.398C44.8 10.778 34.772.749 22.4.749zm12.236 14.947c-.108.178-.659.808-1.247 1.385-.997.99-1.05 1.097-1.05 1.927 0 1.277-.605 3.942-1.211 5.4-1.123 2.739-3.527 5.566-5.932 6.988-3.384 2-7.891 2.505-11.685 1.332-1.262-.394-3.437-1.404-3.437-1.582 0-.056.66-.127 1.462-.143a9.97 9.97 0 0 0 4.774-1.334l.962-.575-1.105-.38c-1.568-.54-2.975-1.783-3.33-2.953-.108-.38-.072-.397.925-.397l1.035-.016-.874-.415c-1.033-.524-1.977-1.404-2.44-2.304-.339-.652-.766-2.289-.641-2.415.035-.054.41.053.837.197 1.228.449 1.389.344.676-.414-1.335-1.37-1.746-3.406-1.105-5.331l.302-.865 1.175 1.172c2.406 2.358 5.238 3.763 8.479 4.177l.89.107-.053-.882c-.16-2.287 1.247-4.374 3.473-5.185.821-.288 2.21-.325 3.12-.072.356.106 1.031.469 1.513.793l.872.595.962-.308c.535-.158 1.247-.429 1.568-.611.302-.159.57-.249.57-.197 0 .305-.659 1.349-1.211 1.925-.749.812-.535.883.978.345.908-.309.927-.309.748.036z'/%3E %3C/svg%3E\"); }\n  .footer__facebook {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46' fill='%2353585e'%3E %3Cpath fill-rule='evenodd' d='M22.8.447C10.48.447.4 10.529.4 22.85c0 12.32 10.08 22.4 22.4 22.4 12.32 0 22.4-10.08 22.4-22.4C45.2 10.529 35.12.447 22.8.447zm5.6 23.241h-3.64v13.021H19.3V23.688h-2.52v-4.62h2.52V16.13c0-2.1.98-5.461 5.46-5.461h4.06v4.48h-2.94c-.42 0-1.12.281-1.12 1.261v2.658h4.06l-.42 4.62z'/%3E %3C/svg%3E\"); }\n    .footer__facebook:hover, .footer__facebook:focus {\n      background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46' fill='%2340b09b'%3E %3Cpath fill-rule='evenodd' d='M22.8.447C10.48.447.4 10.529.4 22.85c0 12.32 10.08 22.4 22.4 22.4 12.32 0 22.4-10.08 22.4-22.4C45.2 10.529 35.12.447 22.8.447zm5.6 23.241h-3.64v13.021H19.3V23.688h-2.52v-4.62h2.52V16.13c0-2.1.98-5.461 5.46-5.461h4.06v4.48h-2.94c-.42 0-1.12.281-1.12 1.261v2.658h4.06l-.42 4.62z'/%3E %3C/svg%3E\"); }\n  .footer__medium {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46' fill='%2353585e'%3E %3Cpath fill-rule='evenodd' d='M23.199.745C10.828.745.8 10.772.8 23.144c0 12.371 10.028 22.398 22.399 22.398s22.399-10.027 22.399-22.398C45.598 10.772 35.57.745 23.199.745zm-5.152 32.569l-6.982-3.492c-.014-.011-.028-.055-.042-.068v-16.53l7.024 3.507v16.583zm1.64-7.851v-6.335l5.636 9.154-5.636-2.819zm3.154-4.359l5.019-8.132 7.164 3.589-7.486 12.182-4.697-7.639zm12.534 12.197l-6.673-3.337 6.673-10.836v14.173z'/%3E %3C/svg%3E\"); }\n    .footer__medium:hover, .footer__medium:focus {\n      background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46' fill='%2340b09b'%3E %3Cpath fill-rule='evenodd' d='M23.199.745C10.828.745.8 10.772.8 23.144c0 12.371 10.028 22.398 22.399 22.398s22.399-10.027 22.399-22.398C45.598 10.772 35.57.745 23.199.745zm-5.152 32.569l-6.982-3.492c-.014-.011-.028-.055-.042-.068v-16.53l7.024 3.507v16.583zm1.64-7.851v-6.335l5.636 9.154-5.636-2.819zm3.154-4.359l5.019-8.132 7.164 3.589-7.486 12.182-4.697-7.639zm12.534 12.197l-6.673-3.337 6.673-10.836v14.173z'/%3E %3C/svg%3E\"); }\n  .footer__linkedin {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='45' height='46' fill='%2353585e'%3E %3Cpath fill-rule='evenodd' d='M22.601 45.546C10.228 45.546.2 35.519.2 23.149S10.228.749 22.601.749C34.972.749 45 10.779 45 23.149s-10.028 22.4-22.399 22.397zm-12.609-9.85h5.74V18.471h-5.74v17.225zm2.595-25.53c-1.984 0-3.281 1.242-3.281 2.953 0 1.673 1.26 2.893 3.204 2.893h.039c2.022 0 3.281-1.249 3.281-2.925-.038-1.711-1.259-2.921-3.243-2.921zm23.648 15.907c0-5.354-2.651-7.848-6.466-7.848-3.08 0-4.196 1.697-5.016 2.881v-2.632h-6.1c.079 1.64 0 17.222 0 17.222h6.1v-9.363c0-.52-.126-1.04.027-1.412.42-1.042 1.207-2.121 2.808-2.121 2.099 0 2.907 1.599 2.907 3.942v8.954h5.74v-9.623zm-11.783-4.967v.056h-.037l.037-.056z'/%3E %3C/svg%3E\"); }\n    .footer__linkedin:hover, .footer__linkedin:focus {\n      background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='45' height='46' fill='%2340b09b'%3E %3Cpath fill-rule='evenodd' d='M22.601 45.546C10.228 45.546.2 35.519.2 23.149S10.228.749 22.601.749C34.972.749 45 10.779 45 23.149s-10.028 22.4-22.399 22.397zm-12.609-9.85h5.74V18.471h-5.74v17.225zm2.595-25.53c-1.984 0-3.281 1.242-3.281 2.953 0 1.673 1.26 2.893 3.204 2.893h.039c2.022 0 3.281-1.249 3.281-2.925-.038-1.711-1.259-2.921-3.243-2.921zm23.648 15.907c0-5.354-2.651-7.848-6.466-7.848-3.08 0-4.196 1.697-5.016 2.881v-2.632h-6.1c.079 1.64 0 17.222 0 17.222h6.1v-9.363c0-.52-.126-1.04.027-1.412.42-1.042 1.207-2.121 2.808-2.121 2.099 0 2.907 1.599 2.907 3.942v8.954h5.74v-9.623zm-11.783-4.967v.056h-.037l.037-.056z'/%3E %3C/svg%3E\"); }\n  .footer__sub {\n    text-align: center; }\n  .footer__address {\n    font-family: \"MaisonNeue-Book\", Helvetica, Arial;\n    font-size: 12px;\n    line-height: 1.3;\n    list-style: none;\n    color: #ffffff;\n    text-align: center; }\n    @media only screen and (min-width: 769px) {\n      .footer__address {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap; } }\n    .footer__address a {\n      color: #ffffff;\n      text-decoration: none; }\n      .footer__address a:hover, .footer__address a:focus {\n        text-decoration: underline; }\n    .footer__address > li + li {\n      margin: 5px 0 0 0; }\n      @media only screen and (min-width: 769px) {\n        .footer__address > li + li {\n          margin: 0 0 0 10px; } }\n", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCAzMDAgNTAiPgogICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjguNjA2LS4wMDdjMTUuOTEyIDAgMjYuMDY5IDguNzk4IDI2LjA2OSAyNi41N3YuMTdjMCAxOS41NDUtMTEuMTczIDI3LjMzMy0yNy42NzggMjcuMzMzSC0uMDAyVjQ3LjU1aDEuOTQ3YzIuOTYyIDAgNC40LS42NzcgNC40LTQuNDg0VjExLjMzYzAtMy44MDctMS40MzgtNC40ODUtNC40LTQuNDg1SC0uMDAyVi0uMDA3aDI4LjYwOHptLTIuNTM4IDQ3LjIxOGMxMC42NjQgMCAxNC4wNTItNi4wMDkgMTQuMDUyLTE4Ljc4NXYtNC4zMTljMC0xMS4xNjgtMi45NjItMTYuNjY4LTEyLjM1Ny0xNi42NjhoLTcuNTM1djM5Ljc3Mmg1Ljg0em00Ni4xMjgtMTEuNzY0Yy40MjQgOC41NDkgNC41NzEgMTEuNTA5IDEyLjk1IDExLjUwOSA0LjQ4NyAwIDguNTUxLTEuMTg0IDExLjE3My0yLjQ1NHY0LjkwN2MtMi4wMzEgMi42MjQtNy42MTcgNS41ODctMTUuNzQzIDUuNTg3LTEzLjg4MiAwLTIyLjI2MS03LjYxNi0yMi4yNjEtMjEuNjY0di0uMDgzYzAtMTMuNzExIDkuMjI2LTIxLjY2MiAyMS4wNzYtMjEuNjYyIDEyLjQ0MiAwIDE4Ljg3NCA3LjAyMSAxOC44NzQgMTcuMzQ1IDAgMy4xMzUtLjU5MyA0LjgyNS0xLjI2OCA2LjUxNkg3Mi4xOTZ2LS4wMDF6bTAtNS43NTNoMTMuNzk3di0uNjhjMC04LjAzOC0yLjExNS0xMS4yNTItNi4zNDktMTEuMjUyLTQuNjU1IDAtNy4xOTMgMy4zMDEtNy40NDggMTEuOTMyem00My4zMzUgNS43NTNjLjQyNSA4LjU0OSA0LjU3MSAxMS41MDkgMTIuOTUgMTEuNTA5IDQuNDg3IDAgOC41NTEtMS4xODQgMTEuMTczLTIuNDU0djQuOTA3Yy0yLjAzMSAyLjYyNC03LjYxNyA1LjU4Ny0xNS43NDMgNS41ODctMTMuODgyIDAtMjIuMjYxLTcuNjE2LTIyLjI2MS0yMS42NjR2LS4wODNjMC0xMy43MTEgOS4yMjYtMjEuNjYyIDIxLjA3Ni0yMS42NjIgMTIuNDQyIDAgMTguODc0IDcuMDIxIDE4Ljg3NCAxNy4zNDUgMCAzLjEzNS0uNTkzIDQuODI1LTEuMjY4IDYuNTE2aC0yNC44MDF2LS4wMDF6bTAtNS43NTNoMTMuNzk3di0uNjhjMC04LjAzOC0yLjExNS0xMS4yNTItNi4zNDktMTEuMjUyLTQuNjU1IDAtNy4xOTUgMy4zMDEtNy40NDggMTEuOTMyem0zNy4xNTggMjAuMjI0Yy0uNTA3IDIuODc3LTEuNTI1IDQuMTQ4LTEuNTI1IDQuMTQ4aC02LjE3N1Y0MS4xMTloNy45NTVjMS4wMTYgNC44MjUgNC40ODYgNy42MTYgOS42NSA3LjYxNiAzLjk3OCAwIDYuNjAyLTEuNjA5IDYuNjAyLTQuODI0IDAtMi42MjQtMS4yNjktMy4zODYtMy40Ny0zLjg5Mi0zLjA0Ny0uODQ1LTkuNjUxLS44NDUtMTQuMzA0LTMuMTMxLTQuNC0yLjIwMi02LjQzMy02LjA5NS02LjQzMy0xMS42NzcgMC0xMC4yMzkgOC44MDItMTMuNjI0IDE1LjMxOS0xMy42MjQgNS41ODYgMCA4Ljk3MyAxLjg2MSAxMC41OCA1LjA3NS41OTMtMi44NzggMS40MzktNC4wNjMgMS40MzktNC4wNjNoNi4wMDl2MTEuOTM0aC03LjYxN2MtMS4zNTQtNC4wNjEtNC4wNjItNi4zNDctOC41NTEtNi4zNDctMy4zODYgMC02LjAwOSAxLjE4NC02LjAwOSA0LjQ4NiAwIDIuMTE0IDEuMSAzLjI5NyAzLjIxNiAzLjgwNiAzLjk3NyAxLjEgMTAuODM1IDEuMSAxNS4xNTIgMy4zODYgNC40ODcgMi4zNjggNi4yNjQgNi4wOTUgNi4yNjQgMTEuMjU1IDAgOS4yMjMtNi42ODYgMTMuODc3LTE2LjA4MyAxMy44NzctNi4wOTEgMC05LjkwMi0xLjk0OC0xMi4wMTctNS4wNzh6bTMxLjEzMi0xNy4wMXYtLjE2OGMwLTEzLjU0IDkuMzk1LTIxLjE1MyAyMS43NTQtMjEuMTUzIDEyLjQ0MSAwIDIxLjgzNiA3LjYxMyAyMS44MzYgMjEuMDY5di4xNzFjMCAxNS44MjMtMTAuNTc5IDIyLjE2OS0yMS44MzYgMjIuMTY5LTExLjE3NSAwLTIxLjc1NC02LjM0OS0yMS43NTQtMjIuMDg4em0yOS43MDkgMS4yNzF2LTMuMDQ1YzAtOS4zMS0zLjEzMS0xMi45NDgtNy45NTUtMTIuOTQ4LTQuNzQgMC03Ljg3MyAzLjYzOC03Ljg3MyAxMi45NDh2My4wNDVjMCAxMS43NjUgMy40NzEgMTQuNTU2IDcuODczIDE0LjU1NiA0LjQ4NCAwIDcuOTU1LTIuNzk0IDcuOTU1LTE0LjU1NnptNjAuNTk5IDEwLjI0YzAgMi40NTQuNTA2IDMuMzg0IDQuMDYyIDMuMzg0aC41OTN2Ni4yNjNoLTIzLjUzdi02LjI2M2guODQ3YzMuNDY5IDAgNC40LS4zMzggNC40LTMuMDQ1di0xNy43N2MwLTQuNjU1LTEuOTQ3LTYuODUzLTUuODQtNi44NTMtNC45MDggMC04LjIxIDQuMDYxLTguMjEgMTEuMTY4djEzLjQ1NWMwIDIuNTQuNTkzIDMuMDQ1IDQuMzk5IDMuMDQ1aC44NDd2Ni4yNjNoLTIzLjUzdi02LjI2M2gxLjFjMi45NjIgMCAzLjU1Ni0uNjc3IDMuNTU2LTMuNjM5VjI0Ljc4NmMwLTQuMTQ4LTEuNDQtNC44MjQtNC40MDItNC44MjRoLS4yNTR2LTcuMzY0aDE2LjE2NnMxLjg2MiA0LjE0OSAxLjg2MiA5LjQ3OHYuNjc3YzEuODYyLTYuNjg0IDYuNjg2LTExLjE2OSAxNC41NTktMTEuMTY5IDguMjExIDAgMTMuMzczIDQuOTA3IDEzLjM3MyAxNC45Nzh2MTcuODU3aC4wMDJ6bTcuMjY0IDEuNDIzYzAtNS4xMTcgNC4yMzgtOS4zNDcgOS4yNTQtOS4zNDcgNS4xMTggMCA5LjM1MyA0LjIzIDkuMzUzIDkuMzQ3IDAgNS4wMi00LjIzNSA5LjE1NC05LjM1MyA5LjE1NC01LjAxNiAwLTkuMjU0LTQuMTM0LTkuMjU0LTkuMTU0eiIvPgo8L3N2Zz4K"

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/upper-middle.12671480.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/upper-middle@2x.0401b18e.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/upper-middle@3x.0e1c2d05.png";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NiIgaGVpZ2h0PSI0NiI+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi44LjQ0N0MxMC40OC40NDcuNCAxMC41MjkuNCAyMi44NWMwIDEyLjMyIDEwLjA4IDIyLjQgMjIuNCAyMi40IDEyLjMyIDAgMjIuNC0xMC4wOCAyMi40LTIyLjRDNDUuMiAxMC41MjkgMzUuMTIuNDQ3IDIyLjguNDQ3em01LjYgMjMuMjQxaC0zLjY0djEzLjAyMUgxOS4zVjIzLjY4OGgtMi41MnYtNC42MmgyLjUyVjE2LjEzYzAtMi4xLjk4LTUuNDYxIDUuNDYtNS40NjFoNC4wNnY0LjQ4aC0yLjk0Yy0uNDIgMC0xLjEyLjI4MS0xLjEyIDEuMjYxdjIuNjU4aDQuMDZsLS40MiA0LjYyeiIvPgo8L3N2Zz4K"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NiI+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi40Ljc0OUMxMC4wMjguNzQ5IDAgMTAuNzc4IDAgMjMuMTUxYzAgMTIuMzY4IDEwLjAyOCAyMi4zOTggMjIuNCAyMi4zOTggMTIuMzcyIDAgMjIuNC0xMC4wMyAyMi40LTIyLjM5OEM0NC44IDEwLjc3OCAzNC43NzIuNzQ5IDIyLjQuNzQ5em0xMi4yMzYgMTQuOTQ3Yy0uMTA4LjE3OC0uNjU5LjgwOC0xLjI0NyAxLjM4NS0uOTk3Ljk5LTEuMDUgMS4wOTctMS4wNSAxLjkyNyAwIDEuMjc3LS42MDUgMy45NDItMS4yMTEgNS40LTEuMTIzIDIuNzM5LTMuNTI3IDUuNTY2LTUuOTMyIDYuOTg4LTMuMzg0IDItNy44OTEgMi41MDUtMTEuNjg1IDEuMzMyLTEuMjYyLS4zOTQtMy40MzctMS40MDQtMy40MzctMS41ODIgMC0uMDU2LjY2LS4xMjcgMS40NjItLjE0M2E5Ljk3IDkuOTcgMCAwIDAgNC43NzQtMS4zMzRsLjk2Mi0uNTc1LTEuMTA1LS4zOGMtMS41NjgtLjU0LTIuOTc1LTEuNzgzLTMuMzMtMi45NTMtLjEwOC0uMzgtLjA3Mi0uMzk3LjkyNS0uMzk3bDEuMDM1LS4wMTYtLjg3NC0uNDE1Yy0xLjAzMy0uNTI0LTEuOTc3LTEuNDA0LTIuNDQtMi4zMDQtLjMzOS0uNjUyLS43NjYtMi4yODktLjY0MS0yLjQxNS4wMzUtLjA1NC40MS4wNTMuODM3LjE5NyAxLjIyOC40NDkgMS4zODkuMzQ0LjY3Ni0uNDE0LTEuMzM1LTEuMzctMS43NDYtMy40MDYtMS4xMDUtNS4zMzFsLjMwMi0uODY1IDEuMTc1IDEuMTcyYzIuNDA2IDIuMzU4IDUuMjM4IDMuNzYzIDguNDc5IDQuMTc3bC44OS4xMDctLjA1My0uODgyYy0uMTYtMi4yODcgMS4yNDctNC4zNzQgMy40NzMtNS4xODUuODIxLS4yODggMi4yMS0uMzI1IDMuMTItLjA3Mi4zNTYuMTA2IDEuMDMxLjQ2OSAxLjUxMy43OTNsLjg3Mi41OTUuOTYyLS4zMDhjLjUzNS0uMTU4IDEuMjQ3LS40MjkgMS41NjgtLjYxMS4zMDItLjE1OS41Ny0uMjQ5LjU3LS4xOTcgMCAuMzA1LS42NTkgMS4zNDktMS4yMTEgMS45MjUtLjc0OS44MTItLjUzNS44ODMuOTc4LjM0NS45MDgtLjMwOS45MjctLjMwOS43NDguMDM2eiIvPgo8L3N2Zz4K"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NiIgaGVpZ2h0PSI0NiI+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy4xOTkuNzQ1QzEwLjgyOC43NDUuOCAxMC43NzIuOCAyMy4xNDRjMCAxMi4zNzEgMTAuMDI4IDIyLjM5OCAyMi4zOTkgMjIuMzk4czIyLjM5OS0xMC4wMjcgMjIuMzk5LTIyLjM5OEM0NS41OTggMTAuNzcyIDM1LjU3Ljc0NSAyMy4xOTkuNzQ1em0tNS4xNTIgMzIuNTY5bC02Ljk4Mi0zLjQ5MmMtLjAxNC0uMDExLS4wMjgtLjA1NS0uMDQyLS4wNjh2LTE2LjUzbDcuMDI0IDMuNTA3djE2LjU4M3ptMS42NC03Ljg1MXYtNi4zMzVsNS42MzYgOS4xNTQtNS42MzYtMi44MTl6bTMuMTU0LTQuMzU5bDUuMDE5LTguMTMyIDcuMTY0IDMuNTg5LTcuNDg2IDEyLjE4Mi00LjY5Ny03LjYzOXptMTIuNTM0IDEyLjE5N2wtNi42NzMtMy4zMzcgNi42NzMtMTAuODM2djE0LjE3M3oiLz4KPC9zdmc+Cg=="

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NiI+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi42MDEgNDUuNTQ2QzEwLjIyOCA0NS41NDYuMiAzNS41MTkuMiAyMy4xNDlTMTAuMjI4Ljc0OSAyMi42MDEuNzQ5QzM0Ljk3Mi43NDkgNDUgMTAuNzc5IDQ1IDIzLjE0OXMtMTAuMDI4IDIyLjQtMjIuMzk5IDIyLjM5N3ptLTEyLjYwOS05Ljg1aDUuNzRWMTguNDcxaC01Ljc0djE3LjIyNXptMi41OTUtMjUuNTNjLTEuOTg0IDAtMy4yODEgMS4yNDItMy4yODEgMi45NTMgMCAxLjY3MyAxLjI2IDIuODkzIDMuMjA0IDIuODkzaC4wMzljMi4wMjIgMCAzLjI4MS0xLjI0OSAzLjI4MS0yLjkyNS0uMDM4LTEuNzExLTEuMjU5LTIuOTIxLTMuMjQzLTIuOTIxem0yMy42NDggMTUuOTA3YzAtNS4zNTQtMi42NTEtNy44NDgtNi40NjYtNy44NDgtMy4wOCAwLTQuMTk2IDEuNjk3LTUuMDE2IDIuODgxdi0yLjYzMmgtNi4xYy4wNzkgMS42NCAwIDE3LjIyMiAwIDE3LjIyMmg2LjF2LTkuMzYzYzAtLjUyLS4xMjYtMS4wNC4wMjctMS40MTIuNDItMS4wNDIgMS4yMDctMi4xMjEgMi44MDgtMi4xMjEgMi4wOTkgMCAyLjkwNyAxLjU5OSAyLjkwNyAzLjk0MnY4Ljk1NGg1Ljc0di05LjYyM3ptLTExLjc4My00Ljk2N3YuMDU2aC0uMDM3bC4wMzctLjA1NnoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4KICAgIDx0aXRsZT50cmlhbmdsZTwvdGl0bGU+CiAgICA8ZyBpZD0idHJpYW5nbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgNTAuMDAwMDAwKSBzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtNTAuMDAwMDAwLCAtNTAuMDAwMDAwKSAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjEwMCAxMDAgMTAwIDAgMCAxMDAiPjwvcG9seWdvbj4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSIxNyI+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC43MzYgMTAuMjQ2djYuMzUxbDE2LjQtOC4zNDctMTYuNC04LjA5OXY2LjA4NUguNTQxdjQuMDFoMjQuMTk1eiIvPgo8L3N2Zz4K"

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(54);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\n/* Custom\n   ========================================================================== */\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin-top: 0; }\n\nul,\nol {\n  margin: 0;\n  padding: 0; }\n\ndl {\n  margin: 0; }\n\ndt, dd {\n  display: inline-block;\n  margin: 0;\n  padding: 0; }\n\n/*\n  @include media(\"md-up\") {\n    [styles for tablets and larger]\n  }\n  @include media(\"sm-down\") {\n    [styles for portrait tablets and smaller]\n  }\n*/\n@font-face {\n  font-family: 'CircularStd-Bold';\n  src: url(" + escape(__webpack_require__(55)) + ");\n  font-display: swap; }\n\n@font-face {\n  font-family: 'MaisonNeue-Book';\n  src: url(" + escape(__webpack_require__(56)) + ");\n  font-display: swap; }\n\n@font-face {\n  font-family: 'MaisonNeue-Bold';\n  src: url(" + escape(__webpack_require__(57)) + ");\n  font-display: swap; }\n\nbody {\n  color: #000000;\n  font-family: \"MaisonNeue-Book\", Helvetica, Arial;\n  font-size: 15px;\n  line-height: 1.5;\n  text-align: left;\n  background-color: #edeee9;\n  margin: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  @media only screen and (min-width: 769px) {\n    body {\n      font-size: 16px; } }\n\nh1,\n.h1 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 38px;\n  line-height: 1.3;\n  text-align: center; }\n\nh2,\n.h2 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 30px;\n  line-height: 1.3;\n  text-align: left; }\n\nh3,\n.h3 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 28px;\n  line-height: 1.3;\n  margin-bottom: 20px;\n  text-align: left; }\n\nh4,\n.h4 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 27px;\n  line-height: 1.3;\n  margin-bottom: 20px;\n  text-align: left; }\n  @media only screen and (min-width: 769px) {\n    h4,\n    .h4 {\n      font-size: 24px; } }\n\nh5,\n.h5 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 25px;\n  line-height: 1.3;\n  margin-bottom: 20px;\n  text-align: left; }\n  @media only screen and (min-width: 769px) {\n    h5,\n    .h5 {\n      font-size: 20px; } }\n\nh6,\n.h6 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 22px;\n  line-height: 1.3;\n  margin-bottom: 10px;\n  text-align: left; }\n  @media only screen and (min-width: 769px) {\n    h6,\n    .h6 {\n      font-size: 18px; } }\n\np strong,\nul strong,\nol strong,\nlabel strong,\np b,\nul b,\nol b,\nlabel b {\n  font-family: \"MaisonNeue-Bold\", Helvetica, Arial;\n  font-weight: normal; }\n\n.noscroll {\n  overflow: hidden; }\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 600px;\n  width: calc(100% - (20px * 2)); }\n\n@media only screen and (min-width: 501px) {\n  .xs-visible {\n    display: none; } }\n\n.text-center {\n  text-align: center; }\n\n.list--bullet {\n  list-style: none;\n  margin-bottom: 40px; }\n  .list--bullet li {\n    position: relative;\n    padding-left: 35px; }\n    .list--bullet li + li {\n      margin-top: 10px; }\n    @media only screen and (min-width: 501px) {\n      .list--bullet li {\n        padding-left: 30px; } }\n    .list--bullet li::before {\n      content: '\\2022';\n      font-size: 40px;\n      position: absolute;\n      line-height: 15px;\n      left: 0;\n      top: 7px; }\n      @media only screen and (min-width: 501px) {\n        .list--bullet li::before {\n          font-size: 30px;\n          line-height: 16px;\n          top: 5px; } }\n\n.form__group {\n  margin-bottom: 10px; }\n  @media only screen and (min-width: 501px) {\n    .form__group--half {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-left: calc(-10px);\n      margin-right: calc(-10px); } }\n  @media only screen and (min-width: 501px) {\n    .form__group--half div {\n      margin: 0 10px; } }\n  .form__group--submit {\n    margin-top: 20px; }\n\n.form__label {\n  display: block;\n  font-family: \"MaisonNeue-Book\", Helvetica, Arial;\n  font-size: 14px;\n  margin-bottom: calc(10px / 2); }\n\n.form__input {\n  background-color: #ffffff;\n  border: solid 3px #edeee9;\n  display: block;\n  -webkit-box-shadow: inset 3px 3px 0 0 rgba(142, 145, 131, 0.4);\n          box-shadow: inset 3px 3px 0 0 rgba(142, 145, 131, 0.4);\n  font-family: \"MaisonNeue-Book\", Helvetica, Arial;\n  padding: 9px 6px 6px 9px;\n  width: 100%;\n  -webkit-transition: -webkit-box-shadow 0.25s ease;\n  transition: -webkit-box-shadow 0.25s ease;\n  transition: box-shadow 0.25s ease;\n  transition: box-shadow 0.25s ease, -webkit-box-shadow 0.25s ease; }\n  .form__input:focus {\n    outline: 0;\n    -webkit-box-shadow: inset 3px 3px 0 0 rgba(142, 145, 131, 0.9);\n            box-shadow: inset 3px 3px 0 0 rgba(142, 145, 131, 0.9); }\n\n.form__extra {\n  font-size: 14px;\n  text-align: center; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  max-width: 100%; }\n\n.chevron-link {\n  color: #000000;\n  font-family: \"MaisonNeue-Bold\", Helvetica, Arial;\n  padding-right: 15px;\n  position: relative;\n  text-decoration: none;\n  -webkit-transition: color 0.25s ease;\n  transition: color 0.25s ease; }\n  .chevron-link:hover, .chevron-link:focus {\n    color: #ff0046; }\n    .chevron-link:hover:after, .chevron-link:focus:after {\n      border-color: transparent transparent transparent #ff0046; }\n  .chevron-link::after {\n    content: '';\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 4px 0 4px 8px;\n    border-color: transparent transparent transparent #000000;\n    position: absolute;\n    right: 0;\n    top: 3px;\n    -webkit-transition: border-color 0.25s ease;\n    transition: border-color 0.25s ease; }\n\n.super-hero {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 640px;\n  width: calc(100% - (20px * 2));\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 65px; }\n  @media only screen and (max-width: 500px) {\n    .super-hero {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  @media only screen and (min-width: 501px) {\n    .super-hero > div {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto; } }\n  @media only screen and (min-width: 501px) {\n    .super-hero__heading {\n      text-align: left; } }\n  @media only screen and (min-width: 501px) {\n    .super-hero__text {\n      max-width: 250px; } }\n  @media only screen and (max-width: 500px) {\n    .super-hero__text {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      text-align: center; } }\n  .super-hero__icon {\n    text-align: right;\n    max-width: 50%; }\n    @media only screen and (max-width: 768px) {\n      .super-hero__icon {\n        padding-left: 32px; } }\n    @media only screen and (max-width: 500px) {\n      .super-hero__icon {\n        margin-bottom: 10px;\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1; } }\n    .super-hero__icon img {\n      height: 100%; }\n", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/CircularStd-Bold.6baed2bf.otf";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/MaisonNeue-Book.416895af.ttf";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/MaisonNeue-Bold.e003666c.ttf";

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.a63b811b.js.map