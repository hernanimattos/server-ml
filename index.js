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
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  type Author {\n    name: String\n    lastname: String\n  }\n\n  type Price {\n    currency: String\n    amount: Float\n    decimals: Float\n    value: Float\n  }\n\n  type Item {\n    id: String\n    title: String\n    price: Price\n    picture: String\n    condition: String\n    free_shipping: Boolean\n    description: String\n    sold_quantity: Float\n  }\n\n  type Products {\n    author: Author\n    categories: [String]\n    items: [Item]\n  }\n\n  type Product {\n    author: Author\n    item: Item\n  }\n\n  type Query {\n    searchProducts(term: String!): Products!\n    getProductById(id: String!): Product!\n  }\n"]);

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
    var id, title, currency, installments, condition, shipping, _ref3, _ref3$free_shipping, free_shipping, _ref4, _ref4$amount, amount, _ref5, pictures, sold_quantity, value;

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
            _context2.t0 = id;
            _context2.t1 = title;
            _context2.t2 = value;
            _context2.t3 = currency;
            _context2.next = 15;
            return getDecimals(currency);

          case 15:
            _context2.t4 = _context2.sent;
            _context2.t5 = amount;
            _context2.t6 = {
              value: _context2.t2,
              currency: _context2.t3,
              decimals: _context2.t4,
              amount: _context2.t5
            };
            _context2.next = 20;
            return getDescriptions(id);

          case 20:
            _context2.t7 = _context2.sent;
            _context2.t8 = condition;
            _context2.t9 = free_shipping;
            _context2.t10 = pictures[0].url;
            _context2.t11 = sold_quantity;
            return _context2.abrupt("return", {
              id: _context2.t0,
              title: _context2.t1,
              price: _context2.t6,
              description: _context2.t7,
              condition: _context2.t8,
              free_shipping: _context2.t9,
              picture: _context2.t10,
              sold_quantity: _context2.t11
            });

          case 26:
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
    var _ref7, data, pictures, sold_quantity, price;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _http__WEBPACK_IMPORTED_MODULE_2__["default"].get("items/".concat(id));

          case 2:
            _ref7 = _context3.sent;
            data = _ref7.data;
            pictures = data.pictures, sold_quantity = data.sold_quantity, price = data.price;
            return _context3.abrupt("return", {
              pictures: pictures,
              sold_quantity: sold_quantity,
              price: price
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
    var id, _ref9, data, title, value, pictures, condition, picture, t;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = args.id;
            console.log(id);
            _context4.next = 4;
            return _http__WEBPACK_IMPORTED_MODULE_2__["default"].get("items/".concat(id));

          case 4:
            _ref9 = _context4.sent;
            data = _ref9.data;
            // console.log(data, 'kkkkk');
            title = data.title, value = data.price, pictures = data.pictures, condition = data.condition;
            picture = pictures[0].url;
            _context4.next = 10;
            return getDescriptions(id);

          case 10:
            t = _context4.sent;
            console.log(t);
            _context4.t0 = title;
            _context4.t1 = {
              value: value
            };
            _context4.t2 = picture;
            _context4.t3 = condition;
            _context4.next = 18;
            return getDescriptions(id);

          case 18:
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

          case 21:
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
            return _context5.abrupt("return", description.replace(/(\r\n|\n|\r)/gm, ''));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBocWwvdHlwZXMvcHJvZHVjdC9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaHFsL3R5cGVzL3Byb2R1Y3QvcHJvZHVjdC5yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0dHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJ0eXBlRGVmcyIsImdxbCIsInJlc29sdmVycyIsIlF1ZXJ5Iiwic2VhcmNoUHJvZHVjdHMiLCJvYmoiLCJhcmdzIiwiY29udGV4dCIsImluZm8iLCJzZWFyY2hQcm9kdWN0c1Jlc29sdmVyIiwiZ2V0UHJvZHVjdEJ5SWQiLCJnZXRQcm9kdWN0QnlJZFJlc29sdmVyIiwiZ2V0RGVjaW1hbHMiLCJjdXJyZW5jeSIsIkh0dHAiLCJnZXQiLCJjdXJyZW50Q3VycmVuY3kiLCJkYXRhIiwiZGVjaW1hbF9wbGFjZXMiLCJnZXRQcm9kdWNUeXBlIiwicHJvZCIsImlkIiwidGl0bGUiLCJjdXJyZW5jeV9pZCIsImluc3RhbGxtZW50cyIsImNvbmRpdGlvbiIsInNoaXBwaW5nIiwiZnJlZV9zaGlwcGluZyIsImFtb3VudCIsImdldFByb2R1Y3QiLCJwaWN0dXJlcyIsInNvbGRfcXVhbnRpdHkiLCJ2YWx1ZSIsInByaWNlIiwiZGVjaW1hbHMiLCJnZXREZXNjcmlwdGlvbnMiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsInBpY3R1cmUiLCJjb25zb2xlIiwibG9nIiwidCIsIml0ZW0iLCJwbGFpbl90ZXh0IiwicmVwbGFjZSIsImdldEFsbENhdGVnb3JpZXMiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiY2F0ZWdvcmllIiwibWFwIiwibmFtZSIsInZhbHVlcyIsImUiLCJyZWR1Y2UiLCJhIiwiYiIsInRlcm0iLCJwcm9kdWN0VG9TZWFyY2giLCJyZXN1bHRzIiwiYXZhaWxhYmxlX2ZpbHRlcnMiLCJpdGVtcyIsImNhdGVnb3JpZXMiLCJjb25maWciLCJiYXNlVVJMIiwiSFRUUCIsImF4aW9zIiwic2V0QXhpb3NDb25maWciLCJjcmVhdGUiLCJyZXNwb25zZSIsInNlcnZlciIsIkFwb2xsb1NlcnZlciIsInJlcSIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwibGlzdGVuIiwidGhlbiIsIndhcm4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBS0EsSUFBTUEsUUFBUSxHQUFHQyx5REFBSCxtQkFBZDtBQXlDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLE9BQUssRUFBRTtBQUNMO0FBQ0FDLGtCQUFjLEVBQUUsd0JBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFZQyxPQUFaLEVBQXFCQyxJQUFyQjtBQUFBLGFBQThCQyxnRkFBc0IsQ0FBQ0gsSUFBRCxDQUFwRDtBQUFBLEtBRlg7QUFHTEksa0JBQWMsRUFBRSx3QkFBQ0wsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLE9BQVosRUFBcUJDLElBQXJCO0FBQUEsYUFBOEJHLGdGQUFzQixDQUFDTCxJQUFELENBQXBEO0FBQUE7QUFIWDtBQURTLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTs7QUFFQSxJQUFNTSxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RUFBRyxpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNZQyw2Q0FBSSxDQUFDQyxHQUFMLHNCQUF1QkYsUUFBdkIsRUFEWjs7QUFBQTtBQUNaRywyQkFEWTtBQUVWQyxnQkFGVSxHQUVERCxlQUZDLENBRVZDLElBRlU7QUFHVkMsMEJBSFUsR0FHU0QsSUFIVCxDQUdWQyxjQUhVO0FBQUEsNkNBSVhBLGNBSlc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWE4sV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQjs7QUFPQSxJQUFNTyxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RUFBRyxrQkFBTUMsSUFBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWxCQyxjQUZrQixHQVFoQkQsSUFSZ0IsQ0FFbEJDLEVBRmtCLEVBR2xCQyxLQUhrQixHQVFoQkYsSUFSZ0IsQ0FHbEJFLEtBSGtCLEVBSUxULFFBSkssR0FRaEJPLElBUmdCLENBSWxCRyxXQUprQixFQUtsQkMsWUFMa0IsR0FRaEJKLElBUmdCLENBS2xCSSxZQUxrQixFQU1sQkMsU0FOa0IsR0FRaEJMLElBUmdCLENBTWxCSyxTQU5rQixFQU9sQkMsUUFQa0IsR0FRaEJOLElBUmdCLENBT2xCTSxRQVBrQjtBQUFBLG9CQVVVQSxRQUFRLElBQUksRUFWdEIsOEJBVVpDLGFBVlksRUFVWkEsYUFWWSxvQ0FVSSxDQVZKO0FBQUEsb0JBV0dILFlBQVksSUFBSSxFQVhuQix1QkFXWkksTUFYWSxFQVdaQSxNQVhZLDZCQVdILENBWEc7QUFBQTtBQUFBLG1CQVlvQ0MsVUFBVSxDQUFDUixFQUFELENBWjlDOztBQUFBO0FBQUE7QUFZWlMsb0JBWlksU0FZWkEsUUFaWTtBQVlGQyx5QkFaRSxTQVlGQSxhQVpFO0FBWW9CQyxpQkFacEIsU0FZYUMsS0FaYjtBQUFBLDJCQWVsQlosRUFma0I7QUFBQSwyQkFnQmxCQyxLQWhCa0I7QUFBQSwyQkFrQmhCVSxLQWxCZ0I7QUFBQSwyQkFtQmhCbkIsUUFuQmdCO0FBQUE7QUFBQSxtQkFvQkFELFdBQVcsQ0FBQ0MsUUFBRCxDQXBCWDs7QUFBQTtBQUFBO0FBQUEsMkJBcUJoQmUsTUFyQmdCO0FBQUE7QUFrQmhCSSxtQkFsQmdCO0FBbUJoQm5CLHNCQW5CZ0I7QUFvQmhCcUIsc0JBcEJnQjtBQXFCaEJOLG9CQXJCZ0I7QUFBQTtBQUFBO0FBQUEsbUJBdUJDTyxlQUFlLENBQUNkLEVBQUQsQ0F2QmhCOztBQUFBO0FBQUE7QUFBQSwyQkF3QmxCSSxTQXhCa0I7QUFBQSwyQkF5QmxCRSxhQXpCa0I7QUFBQSw0QkEwQlRHLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWU0sR0ExQkg7QUFBQSw0QkEyQmxCTCxhQTNCa0I7QUFBQTtBQWVsQlYsZ0JBZmtCO0FBZ0JsQkMsbUJBaEJrQjtBQWlCbEJXLG1CQWpCa0I7QUF1QmxCSSx5QkF2QmtCO0FBd0JsQlosdUJBeEJrQjtBQXlCbEJFLDJCQXpCa0I7QUEwQmxCVyxxQkExQmtCO0FBMkJsQlAsMkJBM0JrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJaLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7O0FBK0JBLElBQU1VLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQUFHLGtCQUFNUixFQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNNUCw2Q0FBSSxDQUFDQyxHQUFMLGlCQUFrQk0sRUFBbEIsRUFETjs7QUFBQTtBQUFBO0FBQ1RKLGdCQURTLFNBQ1RBLElBRFM7QUFFVGEsb0JBRlMsR0FFMEJiLElBRjFCLENBRVRhLFFBRlMsRUFFQ0MsYUFGRCxHQUUwQmQsSUFGMUIsQ0FFQ2MsYUFGRCxFQUVnQkUsS0FGaEIsR0FFMEJoQixJQUYxQixDQUVnQmdCLEtBRmhCO0FBQUEsOENBR1Y7QUFDTEgsc0JBQVEsRUFBUkEsUUFESztBQUVMQywyQkFBYSxFQUFiQSxhQUZLO0FBR0xFLG1CQUFLLEVBQUxBO0FBSEssYUFIVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWSixVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCOztBQVVBLElBQU1sQixzQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQUFHLGtCQUFNTCxJQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJlLGNBRHFCLEdBQ2RmLElBRGMsQ0FDckJlLEVBRHFCO0FBRTdCa0IsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsRUFBWjtBQUY2QjtBQUFBLG1CQUdOUCw2Q0FBSSxDQUFDQyxHQUFMLGlCQUFrQk0sRUFBbEIsRUFITTs7QUFBQTtBQUFBO0FBR3JCSixnQkFIcUIsU0FHckJBLElBSHFCO0FBSTdCO0FBQ1FLLGlCQUxxQixHQUt3QkwsSUFMeEIsQ0FLckJLLEtBTHFCLEVBS1BVLEtBTE8sR0FLd0JmLElBTHhCLENBS2RnQixLQUxjLEVBS0FILFFBTEEsR0FLd0JiLElBTHhCLENBS0FhLFFBTEEsRUFLVUwsU0FMVixHQUt3QlIsSUFMeEIsQ0FLVVEsU0FMVjtBQU12QmEsbUJBTnVCLEdBTWJSLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWU0sR0FOQztBQUFBO0FBQUEsbUJBUWJELGVBQWUsQ0FBQ2QsRUFBRCxDQVJGOztBQUFBO0FBUXZCb0IsYUFSdUI7QUFTN0JGLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUMsQ0FBWjtBQVQ2QiwyQkFhekJuQixLQWJ5QjtBQUFBLDJCQWNsQjtBQUNMVSxtQkFBSyxFQUFMQTtBQURLLGFBZGtCO0FBQUEsMkJBaUJ6Qk0sT0FqQnlCO0FBQUEsMkJBa0J6QmIsU0FsQnlCO0FBQUE7QUFBQSxtQkFtQk5VLGVBQWUsQ0FBQ2QsRUFBRCxDQW5CVDs7QUFBQTtBQUFBO0FBQUE7QUFhekJDLG1CQWJ5QjtBQWN6QlcsbUJBZHlCO0FBaUJ6QksscUJBakJ5QjtBQWtCekJiLHVCQWxCeUI7QUFtQnpCWSx5QkFuQnlCO0FBQUE7QUFBQTtBQVkzQkssa0JBWjJCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBdEIvQixzQkFBc0I7QUFBQTtBQUFBO0FBQUEsR0FBNUI7O0FBd0JBLElBQU13QixlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RUFBRyxrQkFBTWQsRUFBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCZ0IsdUJBRGtCLEdBQ0osSUFESTtBQUFBO0FBQUE7QUFBQSxtQkFHUXZCLDZDQUFJLENBQUNDLEdBQUwsaUJBQWtCTSxFQUFsQixrQkFIUjs7QUFBQTtBQUFBO0FBQUEsaUNBR1pKLElBSFk7QUFHWkEsZ0JBSFksNEJBR0wsRUFISztBQUFBLCtCQUlVQSxJQUpWLENBSVowQixVQUpZLEVBSVpBLFVBSlksaUNBSUMsSUFKRDtBQUtwQk4sdUJBQVcsR0FBR00sVUFBZDtBQUxvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9wQk4sdUJBQVcsR0FBRyxZQUFkOztBQVBvQjtBQUFBLDhDQVVmQSxXQUFXLENBQUNPLE9BQVosQ0FBb0IsZ0JBQXBCLEVBQXNDLEVBQXRDLENBVmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZlQsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7QUFhQSxJQUFNVSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLE9BQU87QUFBQSxTQUM5QkEsT0FBTyxDQUNKQyxNQURILENBQ1UsVUFBQUMsU0FBUztBQUFBLFdBQUlBLFNBQVMsQ0FBQzNCLEVBQVYsS0FBaUIsVUFBckI7QUFBQSxHQURuQixFQUVHNEIsR0FGSCxDQUVPLFVBQUFDLElBQUksRUFBSTtBQUFBLFFBQ0hDLE1BREcsR0FDUUQsSUFEUixDQUNIQyxNQURHO0FBRVgsV0FBT0EsTUFBTSxDQUFDRixHQUFQLENBQVcsVUFBQUcsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0YsSUFBTjtBQUFBLEtBQVosQ0FBUDtBQUNELEdBTEgsRUFNR0csTUFOSCxDQU1VLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVUsQ0FBQ0QsQ0FBQyxHQUFHQyxDQUFMLENBQVY7QUFBQSxHQU5WLEVBTTZCLEVBTjdCLENBRDhCO0FBQUEsQ0FBaEM7O0FBU0EsSUFBTTlDLHNCQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUVBQUcsa0JBQU0rQyxJQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkMsMkJBRGUsR0FDS0QsSUFETCxDQUNyQkEsSUFEcUI7QUFBQTtBQUFBLG1CQUVOMUMsNkNBQUksQ0FBQ0MsR0FBTCw4QkFBK0IwQyxlQUEvQixFQUZNOztBQUFBO0FBQUE7QUFFckJ4QyxnQkFGcUIsVUFFckJBLElBRnFCO0FBR3JCeUMsbUJBSHFCLEdBR1V6QyxJQUhWLENBR3JCeUMsT0FIcUIsRUFHWkMsaUJBSFksR0FHVTFDLElBSFYsQ0FHWjBDLGlCQUhZO0FBSXZCQyxpQkFKdUIsR0FJZkYsT0FBTyxDQUFDVCxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFBWSxrQkFBTTdCLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBEQUFjRCxhQUFhLENBQUNDLElBQUQsQ0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKZTtBQUFBO0FBQUEsbUJBT1R5QixnQkFBZ0IsQ0FBQ2MsaUJBQUQsQ0FQUDs7QUFBQTtBQUFBO0FBQUEsMkJBUTNCQyxLQVIyQjtBQUFBO0FBTzNCQyx3QkFQMkI7QUFRM0JELG1CQVIyQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXRCbkQsc0JBQXNCO0FBQUE7QUFBQTtBQUFBLEdBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHQSxJQUFNcUQsTUFBTSxHQUFHO0FBQ2JDLFNBQU8sRUFBRTtBQURJLENBQWY7QUFJZSxpRkFBS0QsTUFBcEIsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7SUFFTUUsSTs7O0FBQ0osa0JBQWM7QUFBQTs7QUFDWixTQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtILE1BQUwsR0FBY0EsK0NBQWQ7QUFDQSxTQUFLSSxjQUFMO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsV0FBS0QsS0FBTCxHQUFhQSw0Q0FBSyxDQUFDRSxNQUFOLG1CQUNSLEtBQUtMLE1BREcsRUFBYjtBQUdEOzs7Ozs7OEZBRVMxQixHOzs7Ozs7O3VCQUNlLEtBQUs2QixLQUFMLENBQVdsRCxHQUFYLENBQWVxQixHQUFmLEM7OztBQUFqQmdDLHdCO2lEQUNDQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJSSxtRUFBSUosSUFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQSxJQUFNSyxNQUFNLEdBQUcsSUFBSUMsMERBQUosQ0FBaUI7QUFDOUJ0RSxVQUFRLEVBQVJBLHVFQUQ4QjtBQUU5QkUsV0FBUyxFQUFUQSx3RUFGOEI7QUFHOUJLLFNBQU8sRUFBRSx1QkFBYTtBQUFBLFFBQVZnRSxHQUFVLFFBQVZBLEdBQVU7QUFBQSxRQUdQQyxhQUhPLEdBSWhCRCxHQUpnQixDQUdsQkUsT0FIa0IsQ0FHUEQsYUFITztBQU1wQixXQUFPQSxhQUFQLENBTm9CLENBT3BCO0FBQ0Q7QUFYNkIsQ0FBakIsQ0FBZjtBQWNBSCxNQUFNLENBQUNLLE1BQVAsR0FBZ0JDLElBQWhCLENBQXFCLGlCQUFhO0FBQUEsTUFBVnZDLEdBQVUsU0FBVkEsR0FBVTtBQUNoQ0csU0FBTyxDQUFDcUMsSUFBUiwyQkFBZ0N4QyxHQUFoQyxHQURnQyxDQUNRO0FBQ3pDLENBRkQsRTs7Ozs7Ozs7Ozs7QUNsQkEsb0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXInO1xuaW1wb3J0IHtcbiAgc2VhcmNoUHJvZHVjdHNSZXNvbHZlcixcbiAgZ2V0UHJvZHVjdEJ5SWRSZXNvbHZlclxufSBmcm9tICcuL3Byb2R1Y3QucmVzb2x2ZXInO1xuXG5jb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgdHlwZSBBdXRob3Ige1xuICAgIG5hbWU6IFN0cmluZ1xuICAgIGxhc3RuYW1lOiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgUHJpY2Uge1xuICAgIGN1cnJlbmN5OiBTdHJpbmdcbiAgICBhbW91bnQ6IEZsb2F0XG4gICAgZGVjaW1hbHM6IEZsb2F0XG4gICAgdmFsdWU6IEZsb2F0XG4gIH1cblxuICB0eXBlIEl0ZW0ge1xuICAgIGlkOiBTdHJpbmdcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgcHJpY2U6IFByaWNlXG4gICAgcGljdHVyZTogU3RyaW5nXG4gICAgY29uZGl0aW9uOiBTdHJpbmdcbiAgICBmcmVlX3NoaXBwaW5nOiBCb29sZWFuXG4gICAgZGVzY3JpcHRpb246IFN0cmluZ1xuICAgIHNvbGRfcXVhbnRpdHk6IEZsb2F0XG4gIH1cblxuICB0eXBlIFByb2R1Y3RzIHtcbiAgICBhdXRob3I6IEF1dGhvclxuICAgIGNhdGVnb3JpZXM6IFtTdHJpbmddXG4gICAgaXRlbXM6IFtJdGVtXVxuICB9XG5cbiAgdHlwZSBQcm9kdWN0IHtcbiAgICBhdXRob3I6IEF1dGhvclxuICAgIGl0ZW06IEl0ZW1cbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIHNlYXJjaFByb2R1Y3RzKHRlcm06IFN0cmluZyEpOiBQcm9kdWN0cyFcbiAgICBnZXRQcm9kdWN0QnlJZChpZDogU3RyaW5nISk6IFByb2R1Y3QhXG4gIH1cbmA7XG5cbmNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBzZWFyY2hQcm9kdWN0czogKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT4gc2VhcmNoUHJvZHVjdHNSZXNvbHZlcihhcmdzKSxcbiAgICBnZXRQcm9kdWN0QnlJZDogKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT4gZ2V0UHJvZHVjdEJ5SWRSZXNvbHZlcihhcmdzKVxuICB9XG59O1xuXG5leHBvcnQgeyB0eXBlRGVmcywgcmVzb2x2ZXJzIH07XG4iLCJpbXBvcnQgSHR0cCBmcm9tICcuLi8uLi8uLi9odHRwJztcblxuY29uc3QgZ2V0RGVjaW1hbHMgPSBhc3luYyBjdXJyZW5jeSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDdXJyZW5jeSA9IGF3YWl0IEh0dHAuZ2V0KGBjdXJyZW5jaWVzLyR7Y3VycmVuY3l9YCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gY3VycmVudEN1cnJlbmN5O1xuICBjb25zdCB7IGRlY2ltYWxfcGxhY2VzIH0gPSBkYXRhO1xuICByZXR1cm4gZGVjaW1hbF9wbGFjZXM7XG59O1xuXG5jb25zdCBnZXRQcm9kdWNUeXBlID0gYXN5bmMgcHJvZCA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBjdXJyZW5jeV9pZDogY3VycmVuY3ksXG4gICAgaW5zdGFsbG1lbnRzLFxuICAgIGNvbmRpdGlvbixcbiAgICBzaGlwcGluZ1xuICB9ID0gcHJvZDtcblxuICBjb25zdCB7IGZyZWVfc2hpcHBpbmcgPSAwIH0gPSBzaGlwcGluZyB8fCB7fTtcbiAgY29uc3QgeyBhbW91bnQgPSAwIH0gPSBpbnN0YWxsbWVudHMgfHwge307XG4gIGNvbnN0IHsgcGljdHVyZXMsIHNvbGRfcXVhbnRpdHksIHByaWNlOiB2YWx1ZSB9ID0gYXdhaXQgZ2V0UHJvZHVjdChpZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBwcmljZToge1xuICAgICAgdmFsdWUsXG4gICAgICBjdXJyZW5jeSxcbiAgICAgIGRlY2ltYWxzOiBhd2FpdCBnZXREZWNpbWFscyhjdXJyZW5jeSksXG4gICAgICBhbW91bnRcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiBhd2FpdCBnZXREZXNjcmlwdGlvbnMoaWQpLFxuICAgIGNvbmRpdGlvbixcbiAgICBmcmVlX3NoaXBwaW5nLFxuICAgIHBpY3R1cmU6IHBpY3R1cmVzWzBdLnVybCxcbiAgICBzb2xkX3F1YW50aXR5XG4gIH07XG59O1xuXG5jb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgaWQgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IEh0dHAuZ2V0KGBpdGVtcy8ke2lkfWApO1xuICBjb25zdCB7IHBpY3R1cmVzLCBzb2xkX3F1YW50aXR5LCBwcmljZSB9ID0gZGF0YTtcbiAgcmV0dXJuIHtcbiAgICBwaWN0dXJlcyxcbiAgICBzb2xkX3F1YW50aXR5LFxuICAgIHByaWNlXG4gIH07XG59O1xuXG5jb25zdCBnZXRQcm9kdWN0QnlJZFJlc29sdmVyID0gYXN5bmMgYXJncyA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGFyZ3M7XG4gIGNvbnNvbGUubG9nKGlkKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBIdHRwLmdldChgaXRlbXMvJHtpZH1gKTtcbiAgLy8gY29uc29sZS5sb2coZGF0YSwgJ2tra2trJyk7XG4gIGNvbnN0IHsgdGl0bGUsIHByaWNlOiB2YWx1ZSwgcGljdHVyZXMsIGNvbmRpdGlvbiB9ID0gZGF0YTtcbiAgY29uc3QgcGljdHVyZSA9IHBpY3R1cmVzWzBdLnVybDtcblxuICBjb25zdCB0ID0gYXdhaXQgZ2V0RGVzY3JpcHRpb25zKGlkKTtcbiAgY29uc29sZS5sb2codCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtOiB7XG4gICAgICB0aXRsZSxcbiAgICAgIHByaWNlOiB7XG4gICAgICAgIHZhbHVlXG4gICAgICB9LFxuICAgICAgcGljdHVyZSxcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGRlc2NyaXB0aW9uOiBhd2FpdCBnZXREZXNjcmlwdGlvbnMoaWQpXG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgZ2V0RGVzY3JpcHRpb25zID0gYXN5bmMgaWQgPT4ge1xuICBsZXQgZGVzY3JpcHRpb24gPSBudWxsO1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSA9IHt9IH0gPSBhd2FpdCBIdHRwLmdldChgaXRlbXMvJHtpZH0vZGVzY3JpcHRpb25gKTtcbiAgICBjb25zdCB7IHBsYWluX3RleHQgPSBudWxsIH0gPSBkYXRhO1xuICAgIGRlc2NyaXB0aW9uID0gcGxhaW5fdGV4dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGRlc2NyaXB0aW9uID0gJ07Do28gcG9zc3VpJztcbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdGlvbi5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnJyk7XG59O1xuXG5jb25zdCBnZXRBbGxDYXRlZ29yaWVzID0gZmlsdGVycyA9PlxuICBmaWx0ZXJzXG4gICAgLmZpbHRlcihjYXRlZ29yaWUgPT4gY2F0ZWdvcmllLmlkID09PSAnY2F0ZWdvcnknKVxuICAgIC5tYXAobmFtZSA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlcyB9ID0gbmFtZTtcbiAgICAgIHJldHVybiB2YWx1ZXMubWFwKGUgPT4gZS5uYW1lKTtcbiAgICB9KVxuICAgIC5yZWR1Y2UoKGEsIGIpID0+IFthICsgYl0sIFtdKTtcblxuY29uc3Qgc2VhcmNoUHJvZHVjdHNSZXNvbHZlciA9IGFzeW5jIHRlcm0gPT4ge1xuICBjb25zdCB7IHRlcm06IHByb2R1Y3RUb1NlYXJjaCB9ID0gdGVybTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBIdHRwLmdldChgc2l0ZXMvTUxBL3NlYXJjaD9xPSR7cHJvZHVjdFRvU2VhcmNofWApO1xuICBjb25zdCB7IHJlc3VsdHMsIGF2YWlsYWJsZV9maWx0ZXJzIH0gPSBkYXRhO1xuICBjb25zdCBpdGVtcyA9IHJlc3VsdHMubWFwKGFzeW5jIHByb2QgPT4gZ2V0UHJvZHVjVHlwZShwcm9kKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjYXRlZ29yaWVzOiBhd2FpdCBnZXRBbGxDYXRlZ29yaWVzKGF2YWlsYWJsZV9maWx0ZXJzKSxcbiAgICBpdGVtc1xuICB9O1xufTtcblxuZXhwb3J0IHsgc2VhcmNoUHJvZHVjdHNSZXNvbHZlciwgZ2V0UHJvZHVjdEJ5SWRSZXNvbHZlciB9O1xuIiwiY29uc3QgY29uZmlnID0ge1xuICBiYXNlVVJMOiAnaHR0cHM6Ly9hcGkubWVyY2Fkb2xpYnJlLmNvbS8nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgeyAuLi5jb25maWcgfTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuY2xhc3MgSFRUUCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXhpb3MgPSBudWxsO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuc2V0QXhpb3NDb25maWcoKTtcbiAgfVxuXG4gIHNldEF4aW9zQ29uZmlnKCkge1xuICAgIHRoaXMuYXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgLi4udGhpcy5jb25maWcsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBnZXQodXJsKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF4aW9zLmdldCh1cmwpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSFRUUCgpO1xuIiwiaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlcic7XG5cbmltcG9ydCB7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSBmcm9tICcuL2dyYXBocWwvdHlwZXMvcHJvZHVjdC9wcm9kdWN0JztcblxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIHR5cGVEZWZzLFxuICByZXNvbHZlcnMsXG4gIGNvbnRleHQ6ICh7IHJlcSB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbW1hLWRhbmdsZVxuICAgICAgaGVhZGVyczogeyBhdXRob3JpemF0aW9uIH1cbiAgICB9ID0gcmVxO1xuXG4gICAgcmV0dXJuIGF1dGhvcml6YXRpb247XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbW1hLWRhbmdsZVxuICB9XG59KTtcblxuc2VydmVyLmxpc3RlbigpLnRoZW4oKHsgdXJsIH0pID0+IHtcbiAgY29uc29sZS53YXJuKGBTZXJ2ZXIgcmVhZHkgYXQgJHt1cmx9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==