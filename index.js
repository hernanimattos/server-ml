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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/graphql/types/product/product.js":
/*!**********************************************!*\
  !*** ./src/graphql/types/product/product.js ***!
  \**********************************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.resolver */ "./src/graphql/types/product/product.resolver.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  type Author {\n    name: String\n    lastname: String\n  }\n\n  type Price {\n    currency: String\n    amount: Float\n    decimals: Float\n    value: String\n  }\n\n  type Item {\n    id: String\n    title: String\n    price: Price\n    picture: String\n    condition: String\n    free_shipping: Boolean\n    description: String\n    sold_quantity: Float\n  }\n\n  type Products {\n    author: Author\n    categories: [String]\n    items: [Item]\n  }\n\n  type Product {\n    author: Author\n    item: Item\n  }\n\n  type Query {\n    searchProducts(term: String!): Products!\n    getProductById(id: String!): Product!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var typeDefs = Object(apollo_server__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());
var resolvers = {
  Query: {
    // eslint-disable-next-line no-unused-vars
    searchProducts: function searchProducts(obj, args, context, info) {
      return Object(_product_resolver__WEBPACK_IMPORTED_MODULE_2__["searchProductsResolver"])(args);
    },
    getProductById: function getProductById(obj, args, context, info) {
      return Object(_product_resolver__WEBPACK_IMPORTED_MODULE_2__["getProductByIdResolver"])(args);
    }
  }
};


/***/ }),

/***/ "./src/graphql/types/product/product.resolver.js":
/*!*******************************************************!*\
  !*** ./src/graphql/types/product/product.resolver.js ***!
  \*******************************************************/
/*! exports provided: searchProductsResolver, getProductByIdResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProductsResolver", function() { return searchProductsResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductByIdResolver", function() { return getProductByIdResolver; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http */ "./src/http/index.js");




var getDecimals =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(currency) {
    var currentCurrency, data, decimal_places;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _http__WEBPACK_IMPORTED_MODULE_2__["default"].get("currencies/".concat(currency));

          case 2:
            currentCurrency = _context.sent;
            data = currentCurrency.data;
            decimal_places = data.decimal_places;
            return _context.abrupt("return", decimal_places);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDecimals(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getProducType =
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(prod) {
    var id, title, currency, installments, condition, shipping, _ref3, _ref3$free_shipping, free_shipping, _ref4, _ref4$amount, amount, _ref5, pictures, sold_quantity, value, decimals;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = prod.id, title = prod.title, currency = prod.currency_id, installments = prod.installments, condition = prod.condition, shipping = prod.shipping;
            _ref3 = shipping || {}, _ref3$free_shipping = _ref3.free_shipping, free_shipping = _ref3$free_shipping === void 0 ? 0 : _ref3$free_shipping;
            _ref4 = installments || {}, _ref4$amount = _ref4.amount, amount = _ref4$amount === void 0 ? 0 : _ref4$amount;
            _context2.next = 5;
            return getProduct(id);

          case 5:
            _ref5 = _context2.sent;
            pictures = _ref5.pictures;
            sold_quantity = _ref5.sold_quantity;
            value = _ref5.price;
            _context2.next = 11;
            return getDecimals(currency);

          case 11:
            decimals = _context2.sent;
            _context2.t0 = id;
            _context2.t1 = title;
            _context2.t2 = {
              value: fixValue(value, decimals),
              currency: currency,
              decimals: decimals,
              amount: amount
            };
            _context2.next = 17;
            return getDescriptions(id);

          case 17:
            _context2.t3 = _context2.sent;
            _context2.t4 = condition;
            _context2.t5 = free_shipping;
            _context2.t6 = pictures[0].url;
            _context2.t7 = sold_quantity;
            return _context2.abrupt("return", {
              id: _context2.t0,
              title: _context2.t1,
              price: _context2.t2,
              description: _context2.t3,
              condition: _context2.t4,
              free_shipping: _context2.t5,
              picture: _context2.t6,
              sold_quantity: _context2.t7
            });

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProducType(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getProduct =
/*#__PURE__*/
function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    var _ref7, data, pictures, sold_quantity, value;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _http__WEBPACK_IMPORTED_MODULE_2__["default"].get("items/".concat(id));

          case 2:
            _ref7 = _context3.sent;
            data = _ref7.data;
            pictures = data.pictures, sold_quantity = data.sold_quantity, value = data.price;
            return _context3.abrupt("return", {
              pictures: pictures,
              sold_quantity: sold_quantity,
              value: value
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProduct(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

var getProductByIdResolver =
/*#__PURE__*/
function () {
  var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(args) {
    var id, _ref9, data, title, value, pictures, condition, currency_id, picture, decimals;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = args.id;
            _context4.next = 3;
            return _http__WEBPACK_IMPORTED_MODULE_2__["default"].get("items/".concat(id));

          case 3:
            _ref9 = _context4.sent;
            data = _ref9.data;
            title = data.title, value = data.price, pictures = data.pictures, condition = data.condition, currency_id = data.currency_id;
            picture = pictures[0].url;
            _context4.next = 9;
            return getDecimals(currency_id);

          case 9:
            decimals = _context4.sent;
            _context4.t0 = title;
            _context4.t1 = {
              value: fixValue(value, decimals)
            };
            _context4.t2 = picture;
            _context4.t3 = condition;
            _context4.next = 16;
            return getDescriptions(id);

          case 16:
            _context4.t4 = _context4.sent;
            _context4.t5 = {
              title: _context4.t0,
              price: _context4.t1,
              picture: _context4.t2,
              condition: _context4.t3,
              description: _context4.t4
            };
            return _context4.abrupt("return", {
              item: _context4.t5
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getProductByIdResolver(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

var getDescriptions =
/*#__PURE__*/
function () {
  var _ref10 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
    var description, _ref11, _ref11$data, data, _data$plain_text, plain_text;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            description = null;
            _context5.prev = 1;
            _context5.next = 4;
            return _http__WEBPACK_IMPORTED_MODULE_2__["default"].get("items/".concat(id, "/description"));

          case 4:
            _ref11 = _context5.sent;
            _ref11$data = _ref11.data;
            data = _ref11$data === void 0 ? {} : _ref11$data;
            _data$plain_text = data.plain_text, plain_text = _data$plain_text === void 0 ? null : _data$plain_text;
            description = plain_text;
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](1);
            description = 'Não possui';

          case 14:
            return _context5.abrupt("return", description.replace(/(_|-)/gm, ''));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 11]]);
  }));

  return function getDescriptions(_x5) {
    return _ref10.apply(this, arguments);
  };
}();

var getAllCategories = function getAllCategories(filters) {
  return filters.filter(function (categorie) {
    return categorie.id === 'category';
  }).map(function (name) {
    var values = name.values;
    return values.map(function (e) {
      return e.name;
    });
  }).reduce(function (a, b) {
    return [a + b];
  }, []);
};

var searchProductsResolver =
/*#__PURE__*/
function () {
  var _ref12 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(term) {
    var productToSearch, _ref13, data, results, available_filters, items;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            productToSearch = term.term;
            _context7.next = 3;
            return _http__WEBPACK_IMPORTED_MODULE_2__["default"].get("sites/MLA/search?q=".concat(productToSearch));

          case 3:
            _ref13 = _context7.sent;
            data = _ref13.data;
            results = data.results, available_filters = data.available_filters;
            items = results.map(
            /*#__PURE__*/
            function () {
              var _ref14 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(prod) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        return _context6.abrupt("return", getProducType(prod));

                      case 1:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x7) {
                return _ref14.apply(this, arguments);
              };
            }());
            _context7.next = 9;
            return getAllCategories(available_filters);

          case 9:
            _context7.t0 = _context7.sent;
            _context7.t1 = items;
            return _context7.abrupt("return", {
              categories: _context7.t0,
              items: _context7.t1
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function searchProductsResolver(_x6) {
    return _ref12.apply(this, arguments);
  };
}();

var fixValue = function fixValue(value, fix) {
  console.log(value, fix);
  return "$".concat(value.toFixed(fix));
};



/***/ }),

/***/ "./src/http/config.js":
/*!****************************!*\
  !*** ./src/http/config.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = {
  baseURL: 'https://api.mercadolibre.com/'
};
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, config));

/***/ }),

/***/ "./src/http/index.js":
/*!***************************!*\
  !*** ./src/http/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./src/http/config.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var HTTP =
/*#__PURE__*/
function () {
  function HTTP() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, HTTP);

    this.axios = null;
    this.config = _config__WEBPACK_IMPORTED_MODULE_6__["default"];
    this.setAxiosConfig();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(HTTP, [{
    key: "setAxiosConfig",
    value: function setAxiosConfig() {
      this.axios = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create(_objectSpread({}, this.config));
    }
  }, {
    key: "get",
    value: function () {
      var _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.axios.get(url);

              case 2:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }]);

  return HTTP;
}();

/* harmony default export */ __webpack_exports__["default"] = (new HTTP());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphql_types_product_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql/types/product/product */ "./src/graphql/types/product/product.js");


var server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  typeDefs: _graphql_types_product_product__WEBPACK_IMPORTED_MODULE_1__["typeDefs"],
  resolvers: _graphql_types_product_product__WEBPACK_IMPORTED_MODULE_1__["resolvers"],
  context: function context(_ref) {
    var req = _ref.req;
    var authorization = req.headers.authorization;
    return authorization; // eslint-disable-next-line comma-dangle
  }
});
server.listen().then(function (_ref2) {
  var url = _ref2.url;
  console.warn("Server ready at ".concat(url)); // eslint-disable-line
});

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBocWwvdHlwZXMvcHJvZHVjdC9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaHFsL3R5cGVzL3Byb2R1Y3QvcHJvZHVjdC5yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0dHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJ0eXBlRGVmcyIsImdxbCIsInJlc29sdmVycyIsIlF1ZXJ5Iiwic2VhcmNoUHJvZHVjdHMiLCJvYmoiLCJhcmdzIiwiY29udGV4dCIsImluZm8iLCJzZWFyY2hQcm9kdWN0c1Jlc29sdmVyIiwiZ2V0UHJvZHVjdEJ5SWQiLCJnZXRQcm9kdWN0QnlJZFJlc29sdmVyIiwiZ2V0RGVjaW1hbHMiLCJjdXJyZW5jeSIsIkh0dHAiLCJnZXQiLCJjdXJyZW50Q3VycmVuY3kiLCJkYXRhIiwiZGVjaW1hbF9wbGFjZXMiLCJnZXRQcm9kdWNUeXBlIiwicHJvZCIsImlkIiwidGl0bGUiLCJjdXJyZW5jeV9pZCIsImluc3RhbGxtZW50cyIsImNvbmRpdGlvbiIsInNoaXBwaW5nIiwiZnJlZV9zaGlwcGluZyIsImFtb3VudCIsImdldFByb2R1Y3QiLCJwaWN0dXJlcyIsInNvbGRfcXVhbnRpdHkiLCJ2YWx1ZSIsInByaWNlIiwiZGVjaW1hbHMiLCJmaXhWYWx1ZSIsImdldERlc2NyaXB0aW9ucyIsInVybCIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsIml0ZW0iLCJwbGFpbl90ZXh0IiwicmVwbGFjZSIsImdldEFsbENhdGVnb3JpZXMiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiY2F0ZWdvcmllIiwibWFwIiwibmFtZSIsInZhbHVlcyIsImUiLCJyZWR1Y2UiLCJhIiwiYiIsInRlcm0iLCJwcm9kdWN0VG9TZWFyY2giLCJyZXN1bHRzIiwiYXZhaWxhYmxlX2ZpbHRlcnMiLCJpdGVtcyIsImNhdGVnb3JpZXMiLCJmaXgiLCJjb25zb2xlIiwibG9nIiwidG9GaXhlZCIsImNvbmZpZyIsImJhc2VVUkwiLCJIVFRQIiwiYXhpb3MiLCJzZXRBeGlvc0NvbmZpZyIsImNyZWF0ZSIsInJlc3BvbnNlIiwic2VydmVyIiwiQXBvbGxvU2VydmVyIiwicmVxIiwiYXV0aG9yaXphdGlvbiIsImhlYWRlcnMiLCJsaXN0ZW4iLCJ0aGVuIiwid2FybiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFLQSxJQUFNQSxRQUFRLEdBQUdDLHlEQUFILG1CQUFkO0FBeUNBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsT0FBSyxFQUFFO0FBQ0w7QUFDQUMsa0JBQWMsRUFBRSx3QkFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLE9BQVosRUFBcUJDLElBQXJCO0FBQUEsYUFBOEJDLGdGQUFzQixDQUFDSCxJQUFELENBQXBEO0FBQUEsS0FGWDtBQUdMSSxrQkFBYyxFQUFFLHdCQUFDTCxHQUFELEVBQU1DLElBQU4sRUFBWUMsT0FBWixFQUFxQkMsSUFBckI7QUFBQSxhQUE4QkcsZ0ZBQXNCLENBQUNMLElBQUQsQ0FBcEQ7QUFBQTtBQUhYO0FBRFMsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBOztBQUVBLElBQU1NLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQUFHLGlCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1lDLDZDQUFJLENBQUNDLEdBQUwsc0JBQXVCRixRQUF2QixFQURaOztBQUFBO0FBQ1pHLDJCQURZO0FBRVZDLGdCQUZVLEdBRURELGVBRkMsQ0FFVkMsSUFGVTtBQUdWQywwQkFIVSxHQUdTRCxJQUhULENBR1ZDLGNBSFU7QUFBQSw2Q0FJWEEsY0FKVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYTixXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCOztBQU9BLElBQU1PLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQUFHLGtCQUFNQyxJQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFbEJDLGNBRmtCLEdBUWhCRCxJQVJnQixDQUVsQkMsRUFGa0IsRUFHbEJDLEtBSGtCLEdBUWhCRixJQVJnQixDQUdsQkUsS0FIa0IsRUFJTFQsUUFKSyxHQVFoQk8sSUFSZ0IsQ0FJbEJHLFdBSmtCLEVBS2xCQyxZQUxrQixHQVFoQkosSUFSZ0IsQ0FLbEJJLFlBTGtCLEVBTWxCQyxTQU5rQixHQVFoQkwsSUFSZ0IsQ0FNbEJLLFNBTmtCLEVBT2xCQyxRQVBrQixHQVFoQk4sSUFSZ0IsQ0FPbEJNLFFBUGtCO0FBQUEsb0JBVVVBLFFBQVEsSUFBSSxFQVZ0Qiw4QkFVWkMsYUFWWSxFQVVaQSxhQVZZLG9DQVVJLENBVko7QUFBQSxvQkFXR0gsWUFBWSxJQUFJLEVBWG5CLHVCQVdaSSxNQVhZLEVBV1pBLE1BWFksNkJBV0gsQ0FYRztBQUFBO0FBQUEsbUJBWW9DQyxVQUFVLENBQUNSLEVBQUQsQ0FaOUM7O0FBQUE7QUFBQTtBQVlaUyxvQkFaWSxTQVlaQSxRQVpZO0FBWUZDLHlCQVpFLFNBWUZBLGFBWkU7QUFZb0JDLGlCQVpwQixTQVlhQyxLQVpiO0FBQUE7QUFBQSxtQkFjR3JCLFdBQVcsQ0FBQ0MsUUFBRCxDQWRkOztBQUFBO0FBY2RxQixvQkFkYztBQUFBLDJCQWdCbEJiLEVBaEJrQjtBQUFBLDJCQWlCbEJDLEtBakJrQjtBQUFBLDJCQWtCWDtBQUNMVSxtQkFBSyxFQUFFRyxRQUFRLENBQUNILEtBQUQsRUFBUUUsUUFBUixDQURWO0FBRUxyQixzQkFBUSxFQUFSQSxRQUZLO0FBR0xxQixzQkFBUSxFQUFSQSxRQUhLO0FBSUxOLG9CQUFNLEVBQU5BO0FBSkssYUFsQlc7QUFBQTtBQUFBLG1CQXdCQ1EsZUFBZSxDQUFDZixFQUFELENBeEJoQjs7QUFBQTtBQUFBO0FBQUEsMkJBeUJsQkksU0F6QmtCO0FBQUEsMkJBMEJsQkUsYUExQmtCO0FBQUEsMkJBMkJURyxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlPLEdBM0JIO0FBQUEsMkJBNEJsQk4sYUE1QmtCO0FBQUE7QUFnQmxCVixnQkFoQmtCO0FBaUJsQkMsbUJBakJrQjtBQWtCbEJXLG1CQWxCa0I7QUF3QmxCSyx5QkF4QmtCO0FBeUJsQmIsdUJBekJrQjtBQTBCbEJFLDJCQTFCa0I7QUEyQmxCWSxxQkEzQmtCO0FBNEJsQlIsMkJBNUJrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJaLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7O0FBZ0NBLElBQU1VLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQUFHLGtCQUFNUixFQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNNUCw2Q0FBSSxDQUFDQyxHQUFMLGlCQUFrQk0sRUFBbEIsRUFETjs7QUFBQTtBQUFBO0FBQ1RKLGdCQURTLFNBQ1RBLElBRFM7QUFFVGEsb0JBRlMsR0FFaUNiLElBRmpDLENBRVRhLFFBRlMsRUFFQ0MsYUFGRCxHQUVpQ2QsSUFGakMsQ0FFQ2MsYUFGRCxFQUV1QkMsS0FGdkIsR0FFaUNmLElBRmpDLENBRWdCZ0IsS0FGaEI7QUFBQSw4Q0FHVjtBQUNMSCxzQkFBUSxFQUFSQSxRQURLO0FBRUxDLDJCQUFhLEVBQWJBLGFBRks7QUFHTEMsbUJBQUssRUFBTEE7QUFISyxhQUhVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZILFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBVUEsSUFBTWxCLHNCQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUVBQUcsa0JBQU1MLElBQU47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQmUsY0FEcUIsR0FDZGYsSUFEYyxDQUNyQmUsRUFEcUI7QUFBQTtBQUFBLG1CQUVOUCw2Q0FBSSxDQUFDQyxHQUFMLGlCQUFrQk0sRUFBbEIsRUFGTTs7QUFBQTtBQUFBO0FBRXJCSixnQkFGcUIsU0FFckJBLElBRnFCO0FBR3JCSyxpQkFIcUIsR0FHcUNMLElBSHJDLENBR3JCSyxLQUhxQixFQUdQVSxLQUhPLEdBR3FDZixJQUhyQyxDQUdkZ0IsS0FIYyxFQUdBSCxRQUhBLEdBR3FDYixJQUhyQyxDQUdBYSxRQUhBLEVBR1VMLFNBSFYsR0FHcUNSLElBSHJDLENBR1VRLFNBSFYsRUFHcUJGLFdBSHJCLEdBR3FDTixJQUhyQyxDQUdxQk0sV0FIckI7QUFJdkJnQixtQkFKdUIsR0FJYlQsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZTyxHQUpDO0FBQUE7QUFBQSxtQkFLTnpCLFdBQVcsQ0FBQ1csV0FBRCxDQUxMOztBQUFBO0FBS3ZCVyxvQkFMdUI7QUFBQSwyQkFTekJaLEtBVHlCO0FBQUEsMkJBVWxCO0FBQ0xVLG1CQUFLLEVBQUVHLFFBQVEsQ0FBQ0gsS0FBRCxFQUFRRSxRQUFSO0FBRFYsYUFWa0I7QUFBQSwyQkFhekJLLE9BYnlCO0FBQUEsMkJBY3pCZCxTQWR5QjtBQUFBO0FBQUEsbUJBZU5XLGVBQWUsQ0FBQ2YsRUFBRCxDQWZUOztBQUFBO0FBQUE7QUFBQTtBQVN6QkMsbUJBVHlCO0FBVXpCVyxtQkFWeUI7QUFhekJNLHFCQWJ5QjtBQWN6QmQsdUJBZHlCO0FBZXpCYSx5QkFmeUI7QUFBQTtBQUFBO0FBUTNCRSxrQkFSMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUF0QjdCLHNCQUFzQjtBQUFBO0FBQUE7QUFBQSxHQUE1Qjs7QUFvQkEsSUFBTXlCLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQUFHLGtCQUFNZixFQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJpQix1QkFEa0IsR0FDSixJQURJO0FBQUE7QUFBQTtBQUFBLG1CQUdReEIsNkNBQUksQ0FBQ0MsR0FBTCxpQkFBa0JNLEVBQWxCLGtCQUhSOztBQUFBO0FBQUE7QUFBQSxpQ0FHWkosSUFIWTtBQUdaQSxnQkFIWSw0QkFHTCxFQUhLO0FBQUEsK0JBSVVBLElBSlYsQ0FJWndCLFVBSlksRUFJWkEsVUFKWSxpQ0FJQyxJQUpEO0FBS3BCSCx1QkFBVyxHQUFHRyxVQUFkO0FBTG9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT3BCSCx1QkFBVyxHQUFHLFlBQWQ7O0FBUG9CO0FBQUEsOENBVWZBLFdBQVcsQ0FBQ0ksT0FBWixDQUFvQixTQUFwQixFQUErQixFQUEvQixDQVZlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZOLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7O0FBYUEsSUFBTU8sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxPQUFPO0FBQUEsU0FDOUJBLE9BQU8sQ0FDSkMsTUFESCxDQUNVLFVBQUFDLFNBQVM7QUFBQSxXQUFJQSxTQUFTLENBQUN6QixFQUFWLEtBQWlCLFVBQXJCO0FBQUEsR0FEbkIsRUFFRzBCLEdBRkgsQ0FFTyxVQUFBQyxJQUFJLEVBQUk7QUFBQSxRQUNIQyxNQURHLEdBQ1FELElBRFIsQ0FDSEMsTUFERztBQUVYLFdBQU9BLE1BQU0sQ0FBQ0YsR0FBUCxDQUFXLFVBQUFHLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNGLElBQU47QUFBQSxLQUFaLENBQVA7QUFDRCxHQUxILEVBTUdHLE1BTkgsQ0FNVSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVLENBQUNELENBQUMsR0FBR0MsQ0FBTCxDQUFWO0FBQUEsR0FOVixFQU02QixFQU43QixDQUQ4QjtBQUFBLENBQWhDOztBQVNBLElBQU01QyxzQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQUFHLGtCQUFNNkMsSUFBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLDJCQURlLEdBQ0tELElBREwsQ0FDckJBLElBRHFCO0FBQUE7QUFBQSxtQkFFTnhDLDZDQUFJLENBQUNDLEdBQUwsOEJBQStCd0MsZUFBL0IsRUFGTTs7QUFBQTtBQUFBO0FBRXJCdEMsZ0JBRnFCLFVBRXJCQSxJQUZxQjtBQUdyQnVDLG1CQUhxQixHQUdVdkMsSUFIVixDQUdyQnVDLE9BSHFCLEVBR1pDLGlCQUhZLEdBR1V4QyxJQUhWLENBR1p3QyxpQkFIWTtBQUl2QkMsaUJBSnVCLEdBSWZGLE9BQU8sQ0FBQ1QsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUZBQVksa0JBQU0zQixJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFBY0QsYUFBYSxDQUFDQyxJQUFELENBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSmU7QUFBQTtBQUFBLG1CQU9UdUIsZ0JBQWdCLENBQUNjLGlCQUFELENBUFA7O0FBQUE7QUFBQTtBQUFBLDJCQVEzQkMsS0FSMkI7QUFBQTtBQU8zQkMsd0JBUDJCO0FBUTNCRCxtQkFSMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUF0QmpELHNCQUFzQjtBQUFBO0FBQUE7QUFBQSxHQUE1Qjs7QUFZQSxJQUFNMEIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0gsS0FBRCxFQUFRNEIsR0FBUixFQUFnQjtBQUMvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVk5QixLQUFaLEVBQW1CNEIsR0FBbkI7QUFDQSxvQkFBVzVCLEtBQUssQ0FBQytCLE9BQU4sQ0FBY0gsR0FBZCxDQUFYO0FBQ0QsQ0FIRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0EsSUFBTUksTUFBTSxHQUFHO0FBQ2JDLFNBQU8sRUFBRTtBQURJLENBQWY7QUFJZSxpRkFBS0QsTUFBcEIsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7SUFFTUUsSTs7O0FBQ0osa0JBQWM7QUFBQTs7QUFDWixTQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtILE1BQUwsR0FBY0EsK0NBQWQ7QUFDQSxTQUFLSSxjQUFMO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsV0FBS0QsS0FBTCxHQUFhQSw0Q0FBSyxDQUFDRSxNQUFOLG1CQUNSLEtBQUtMLE1BREcsRUFBYjtBQUdEOzs7Ozs7OEZBRVMzQixHOzs7Ozs7O3VCQUNlLEtBQUs4QixLQUFMLENBQVdwRCxHQUFYLENBQWVzQixHQUFmLEM7OztBQUFqQmlDLHdCO2lEQUNDQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJSSxtRUFBSUosSUFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQSxJQUFNSyxNQUFNLEdBQUcsSUFBSUMsMERBQUosQ0FBaUI7QUFDOUJ4RSxVQUFRLEVBQVJBLHVFQUQ4QjtBQUU5QkUsV0FBUyxFQUFUQSx3RUFGOEI7QUFHOUJLLFNBQU8sRUFBRSx1QkFBYTtBQUFBLFFBQVZrRSxHQUFVLFFBQVZBLEdBQVU7QUFBQSxRQUdQQyxhQUhPLEdBSWhCRCxHQUpnQixDQUdsQkUsT0FIa0IsQ0FHUEQsYUFITztBQU1wQixXQUFPQSxhQUFQLENBTm9CLENBT3BCO0FBQ0Q7QUFYNkIsQ0FBakIsQ0FBZjtBQWNBSCxNQUFNLENBQUNLLE1BQVAsR0FBZ0JDLElBQWhCLENBQXFCLGlCQUFhO0FBQUEsTUFBVnhDLEdBQVUsU0FBVkEsR0FBVTtBQUNoQ3dCLFNBQU8sQ0FBQ2lCLElBQVIsMkJBQWdDekMsR0FBaEMsR0FEZ0MsQ0FDUTtBQUN6QyxDQUZELEU7Ozs7Ozs7Ozs7O0FDbEJBLG9FOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyJztcbmltcG9ydCB7XG4gIHNlYXJjaFByb2R1Y3RzUmVzb2x2ZXIsXG4gIGdldFByb2R1Y3RCeUlkUmVzb2x2ZXJcbn0gZnJvbSAnLi9wcm9kdWN0LnJlc29sdmVyJztcblxuY29uc3QgdHlwZURlZnMgPSBncWxgXG4gIHR5cGUgQXV0aG9yIHtcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBsYXN0bmFtZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIFByaWNlIHtcbiAgICBjdXJyZW5jeTogU3RyaW5nXG4gICAgYW1vdW50OiBGbG9hdFxuICAgIGRlY2ltYWxzOiBGbG9hdFxuICAgIHZhbHVlOiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgSXRlbSB7XG4gICAgaWQ6IFN0cmluZ1xuICAgIHRpdGxlOiBTdHJpbmdcbiAgICBwcmljZTogUHJpY2VcbiAgICBwaWN0dXJlOiBTdHJpbmdcbiAgICBjb25kaXRpb246IFN0cmluZ1xuICAgIGZyZWVfc2hpcHBpbmc6IEJvb2xlYW5cbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgc29sZF9xdWFudGl0eTogRmxvYXRcbiAgfVxuXG4gIHR5cGUgUHJvZHVjdHMge1xuICAgIGF1dGhvcjogQXV0aG9yXG4gICAgY2F0ZWdvcmllczogW1N0cmluZ11cbiAgICBpdGVtczogW0l0ZW1dXG4gIH1cblxuICB0eXBlIFByb2R1Y3Qge1xuICAgIGF1dGhvcjogQXV0aG9yXG4gICAgaXRlbTogSXRlbVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgc2VhcmNoUHJvZHVjdHModGVybTogU3RyaW5nISk6IFByb2R1Y3RzIVxuICAgIGdldFByb2R1Y3RCeUlkKGlkOiBTdHJpbmchKTogUHJvZHVjdCFcbiAgfVxuYDtcblxuY29uc3QgcmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHNlYXJjaFByb2R1Y3RzOiAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PiBzZWFyY2hQcm9kdWN0c1Jlc29sdmVyKGFyZ3MpLFxuICAgIGdldFByb2R1Y3RCeUlkOiAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PiBnZXRQcm9kdWN0QnlJZFJlc29sdmVyKGFyZ3MpXG4gIH1cbn07XG5cbmV4cG9ydCB7IHR5cGVEZWZzLCByZXNvbHZlcnMgfTtcbiIsImltcG9ydCBIdHRwIGZyb20gJy4uLy4uLy4uL2h0dHAnO1xuXG5jb25zdCBnZXREZWNpbWFscyA9IGFzeW5jIGN1cnJlbmN5ID0+IHtcbiAgY29uc3QgY3VycmVudEN1cnJlbmN5ID0gYXdhaXQgSHR0cC5nZXQoYGN1cnJlbmNpZXMvJHtjdXJyZW5jeX1gKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBjdXJyZW50Q3VycmVuY3k7XG4gIGNvbnN0IHsgZGVjaW1hbF9wbGFjZXMgfSA9IGRhdGE7XG4gIHJldHVybiBkZWNpbWFsX3BsYWNlcztcbn07XG5cbmNvbnN0IGdldFByb2R1Y1R5cGUgPSBhc3luYyBwcm9kID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHRpdGxlLFxuICAgIGN1cnJlbmN5X2lkOiBjdXJyZW5jeSxcbiAgICBpbnN0YWxsbWVudHMsXG4gICAgY29uZGl0aW9uLFxuICAgIHNoaXBwaW5nXG4gIH0gPSBwcm9kO1xuXG4gIGNvbnN0IHsgZnJlZV9zaGlwcGluZyA9IDAgfSA9IHNoaXBwaW5nIHx8IHt9O1xuICBjb25zdCB7IGFtb3VudCA9IDAgfSA9IGluc3RhbGxtZW50cyB8fCB7fTtcbiAgY29uc3QgeyBwaWN0dXJlcywgc29sZF9xdWFudGl0eSwgcHJpY2U6IHZhbHVlIH0gPSBhd2FpdCBnZXRQcm9kdWN0KGlkKTtcblxuICBjb25zdCBkZWNpbWFscyA9IGF3YWl0IGdldERlY2ltYWxzKGN1cnJlbmN5KTtcbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBwcmljZToge1xuICAgICAgdmFsdWU6IGZpeFZhbHVlKHZhbHVlLCBkZWNpbWFscyksXG4gICAgICBjdXJyZW5jeSxcbiAgICAgIGRlY2ltYWxzLFxuICAgICAgYW1vdW50XG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjogYXdhaXQgZ2V0RGVzY3JpcHRpb25zKGlkKSxcbiAgICBjb25kaXRpb24sXG4gICAgZnJlZV9zaGlwcGluZyxcbiAgICBwaWN0dXJlOiBwaWN0dXJlc1swXS51cmwsXG4gICAgc29sZF9xdWFudGl0eVxuICB9O1xufTtcblxuY29uc3QgZ2V0UHJvZHVjdCA9IGFzeW5jIGlkID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBIdHRwLmdldChgaXRlbXMvJHtpZH1gKTtcbiAgY29uc3QgeyBwaWN0dXJlcywgc29sZF9xdWFudGl0eSwgcHJpY2U6IHZhbHVlIH0gPSBkYXRhO1xuICByZXR1cm4ge1xuICAgIHBpY3R1cmVzLFxuICAgIHNvbGRfcXVhbnRpdHksXG4gICAgdmFsdWVcbiAgfTtcbn07XG5cbmNvbnN0IGdldFByb2R1Y3RCeUlkUmVzb2x2ZXIgPSBhc3luYyBhcmdzID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gYXJncztcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBIdHRwLmdldChgaXRlbXMvJHtpZH1gKTtcbiAgY29uc3QgeyB0aXRsZSwgcHJpY2U6IHZhbHVlLCBwaWN0dXJlcywgY29uZGl0aW9uLCBjdXJyZW5jeV9pZCB9ID0gZGF0YTtcbiAgY29uc3QgcGljdHVyZSA9IHBpY3R1cmVzWzBdLnVybDtcbiAgY29uc3QgZGVjaW1hbHMgPSBhd2FpdCBnZXREZWNpbWFscyhjdXJyZW5jeV9pZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtOiB7XG4gICAgICB0aXRsZSxcbiAgICAgIHByaWNlOiB7XG4gICAgICAgIHZhbHVlOiBmaXhWYWx1ZSh2YWx1ZSwgZGVjaW1hbHMpXG4gICAgICB9LFxuICAgICAgcGljdHVyZSxcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGRlc2NyaXB0aW9uOiBhd2FpdCBnZXREZXNjcmlwdGlvbnMoaWQpXG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgZ2V0RGVzY3JpcHRpb25zID0gYXN5bmMgaWQgPT4ge1xuICBsZXQgZGVzY3JpcHRpb24gPSBudWxsO1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSA9IHt9IH0gPSBhd2FpdCBIdHRwLmdldChgaXRlbXMvJHtpZH0vZGVzY3JpcHRpb25gKTtcbiAgICBjb25zdCB7IHBsYWluX3RleHQgPSBudWxsIH0gPSBkYXRhO1xuICAgIGRlc2NyaXB0aW9uID0gcGxhaW5fdGV4dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGRlc2NyaXB0aW9uID0gJ07Do28gcG9zc3VpJztcbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdGlvbi5yZXBsYWNlKC8oX3wtKS9nbSwgJycpO1xufTtcblxuY29uc3QgZ2V0QWxsQ2F0ZWdvcmllcyA9IGZpbHRlcnMgPT5cbiAgZmlsdGVyc1xuICAgIC5maWx0ZXIoY2F0ZWdvcmllID0+IGNhdGVnb3JpZS5pZCA9PT0gJ2NhdGVnb3J5JylcbiAgICAubWFwKG5hbWUgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IG5hbWU7XG4gICAgICByZXR1cm4gdmFsdWVzLm1hcChlID0+IGUubmFtZSk7XG4gICAgfSlcbiAgICAucmVkdWNlKChhLCBiKSA9PiBbYSArIGJdLCBbXSk7XG5cbmNvbnN0IHNlYXJjaFByb2R1Y3RzUmVzb2x2ZXIgPSBhc3luYyB0ZXJtID0+IHtcbiAgY29uc3QgeyB0ZXJtOiBwcm9kdWN0VG9TZWFyY2ggfSA9IHRlcm07XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgSHR0cC5nZXQoYHNpdGVzL01MQS9zZWFyY2g/cT0ke3Byb2R1Y3RUb1NlYXJjaH1gKTtcbiAgY29uc3QgeyByZXN1bHRzLCBhdmFpbGFibGVfZmlsdGVycyB9ID0gZGF0YTtcbiAgY29uc3QgaXRlbXMgPSByZXN1bHRzLm1hcChhc3luYyBwcm9kID0+IGdldFByb2R1Y1R5cGUocHJvZCkpO1xuXG4gIHJldHVybiB7XG4gICAgY2F0ZWdvcmllczogYXdhaXQgZ2V0QWxsQ2F0ZWdvcmllcyhhdmFpbGFibGVfZmlsdGVycyksXG4gICAgaXRlbXNcbiAgfTtcbn07XG5cbmNvbnN0IGZpeFZhbHVlID0gKHZhbHVlLCBmaXgpID0+IHtcbiAgY29uc29sZS5sb2codmFsdWUsIGZpeCk7XG4gIHJldHVybiBgJCR7dmFsdWUudG9GaXhlZChmaXgpfWA7XG59O1xuXG5leHBvcnQgeyBzZWFyY2hQcm9kdWN0c1Jlc29sdmVyLCBnZXRQcm9kdWN0QnlJZFJlc29sdmVyIH07XG4iLCJjb25zdCBjb25maWcgPSB7XG4gIGJhc2VVUkw6ICdodHRwczovL2FwaS5tZXJjYWRvbGlicmUuY29tLycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IC4uLmNvbmZpZyB9O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5jbGFzcyBIVFRQIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5heGlvcyA9IG51bGw7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5zZXRBeGlvc0NvbmZpZygpO1xuICB9XG5cbiAgc2V0QXhpb3NDb25maWcoKSB7XG4gICAgdGhpcy5heGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldCh1cmwpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXhpb3MuZ2V0KHVybCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIVFRQKCk7XG4iLCJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tICdhcG9sbG8tc2VydmVyJztcblxuaW1wb3J0IHsgdHlwZURlZnMsIHJlc29sdmVycyB9IGZyb20gJy4vZ3JhcGhxbC90eXBlcy9wcm9kdWN0L3Byb2R1Y3QnO1xuXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgdHlwZURlZnMsXG4gIHJlc29sdmVycyxcbiAgY29udGV4dDogKHsgcmVxIH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tbWEtZGFuZ2xlXG4gICAgICBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb24gfVxuICAgIH0gPSByZXE7XG5cbiAgICByZXR1cm4gYXV0aG9yaXphdGlvbjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tbWEtZGFuZ2xlXG4gIH1cbn0pO1xuXG5zZXJ2ZXIubGlzdGVuKCkudGhlbigoeyB1cmwgfSkgPT4ge1xuICBjb25zb2xlLndhcm4oYFNlcnZlciByZWFkeSBhdCAke3VybH1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9