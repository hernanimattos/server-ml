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
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  type Author {\n    name: String\n    lastname: String\n  }\n\n  type Price {\n    currency: String\n    amount: Float\n    decimals: Float\n    value: Float\n  }\n\n  type Item {\n    id: String\n    title: String\n    price: Price\n    picture: String\n    condition: String\n    free_shipping: Boolean\n    description: String\n    sold_quantity: Float\n  }\n\n  type Products {\n    author: Author\n    categories: [String]\n    items: [Item]\n  }\n\n  type Product {\n    author: Author\n    item: Item\n  }\n\n  type Query {\n    searchProducts(term: String!): Products!\n    product(id: ID!): Product!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var typeDefs = Object(apollo_server__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());
var resolvers = {
  Query: {
    // eslint-disable-next-line no-unused-vars
    searchProducts: function searchProducts(teobj, args, context, info) {
      return Object(_product_resolver__WEBPACK_IMPORTED_MODULE_2__["searchProductsResolver"])(args);
    }
  }
};


/***/ }),

/***/ "./src/graphql/types/product/product.resolver.js":
/*!*******************************************************!*\
  !*** ./src/graphql/types/product/product.resolver.js ***!
  \*******************************************************/
/*! exports provided: searchProductsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProductsResolver", function() { return searchProductsResolver; });
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

var getDescriptions =
/*#__PURE__*/
function () {
  var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
    var _ref9, _ref9$data, data, _data$plain_text, plain_text;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _http__WEBPACK_IMPORTED_MODULE_2__["default"].get("items/".concat(id, "/description"));

          case 2:
            _ref9 = _context4.sent;
            _ref9$data = _ref9.data;
            data = _ref9$data === void 0 ? {} : _ref9$data;
            _data$plain_text = data.plain_text, plain_text = _data$plain_text === void 0 ? null : _data$plain_text;
            return _context4.abrupt("return", plain_text);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getDescriptions(_x4) {
    return _ref8.apply(this, arguments);
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
  var _ref10 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(term) {
    var productToSearch, _ref11, data, results, available_filters, items;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            productToSearch = term.term;
            _context6.next = 3;
            return _http__WEBPACK_IMPORTED_MODULE_2__["default"].get("sites/MLA/search?q=".concat(productToSearch));

          case 3:
            _ref11 = _context6.sent;
            data = _ref11.data;
            results = data.results, available_filters = data.available_filters;
            items = results.map(
            /*#__PURE__*/
            function () {
              var _ref12 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(prod) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", getProducType(prod));

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x6) {
                return _ref12.apply(this, arguments);
              };
            }());
            _context6.next = 9;
            return getAllCategories(available_filters);

          case 9:
            _context6.t0 = _context6.sent;
            _context6.t1 = items;
            return _context6.abrupt("return", {
              categories: _context6.t0,
              items: _context6.t1
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function searchProductsResolver(_x5) {
    return _ref10.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBocWwvdHlwZXMvcHJvZHVjdC9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaHFsL3R5cGVzL3Byb2R1Y3QvcHJvZHVjdC5yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0dHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJ0eXBlRGVmcyIsImdxbCIsInJlc29sdmVycyIsIlF1ZXJ5Iiwic2VhcmNoUHJvZHVjdHMiLCJ0ZW9iaiIsImFyZ3MiLCJjb250ZXh0IiwiaW5mbyIsInNlYXJjaFByb2R1Y3RzUmVzb2x2ZXIiLCJnZXREZWNpbWFscyIsImN1cnJlbmN5IiwiSHR0cCIsImdldCIsImN1cnJlbnRDdXJyZW5jeSIsImRhdGEiLCJkZWNpbWFsX3BsYWNlcyIsImdldFByb2R1Y1R5cGUiLCJwcm9kIiwiaWQiLCJ0aXRsZSIsImN1cnJlbmN5X2lkIiwiaW5zdGFsbG1lbnRzIiwiY29uZGl0aW9uIiwic2hpcHBpbmciLCJmcmVlX3NoaXBwaW5nIiwiYW1vdW50IiwiZ2V0UHJvZHVjdCIsInBpY3R1cmVzIiwic29sZF9xdWFudGl0eSIsInZhbHVlIiwicHJpY2UiLCJkZWNpbWFscyIsImdldERlc2NyaXB0aW9ucyIsInVybCIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsInBsYWluX3RleHQiLCJnZXRBbGxDYXRlZ29yaWVzIiwiZmlsdGVycyIsImZpbHRlciIsImNhdGVnb3JpZSIsIm1hcCIsIm5hbWUiLCJ2YWx1ZXMiLCJlIiwicmVkdWNlIiwiYSIsImIiLCJ0ZXJtIiwicHJvZHVjdFRvU2VhcmNoIiwicmVzdWx0cyIsImF2YWlsYWJsZV9maWx0ZXJzIiwiaXRlbXMiLCJjYXRlZ29yaWVzIiwiY29uZmlnIiwiYmFzZVVSTCIsIkhUVFAiLCJheGlvcyIsInNldEF4aW9zQ29uZmlnIiwiY3JlYXRlIiwicmVzcG9uc2UiLCJzZXJ2ZXIiLCJBcG9sbG9TZXJ2ZXIiLCJyZXEiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsImxpc3RlbiIsInRoZW4iLCJjb25zb2xlIiwid2FybiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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Z0IsQ0FHbEJFLE9BSGtCLENBR1BELGFBSE87QUFNcEIsV0FBT0EsYUFBUCxDQU5vQixDQU9wQjtBQUNEO0FBWDZCLENBQWpCLENBQWY7QUFjQUgsTUFBTSxDQUFDSyxNQUFQLEdBQWdCQyxJQUFoQixDQUFxQixpQkFBYTtBQUFBLE1BQVZsQyxHQUFVLFNBQVZBLEdBQVU7QUFDaENtQyxTQUFPLENBQUNDLElBQVIsMkJBQWdDcEMsR0FBaEMsR0FEZ0MsQ0FDUTtBQUN6QyxDQUZELEU7Ozs7Ozs7Ozs7O0FDbEJBLG9FOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyJztcbmltcG9ydCB7IHNlYXJjaFByb2R1Y3RzUmVzb2x2ZXIgfSBmcm9tICcuL3Byb2R1Y3QucmVzb2x2ZXInO1xuXG5jb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgdHlwZSBBdXRob3Ige1xuICAgIG5hbWU6IFN0cmluZ1xuICAgIGxhc3RuYW1lOiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgUHJpY2Uge1xuICAgIGN1cnJlbmN5OiBTdHJpbmdcbiAgICBhbW91bnQ6IEZsb2F0XG4gICAgZGVjaW1hbHM6IEZsb2F0XG4gICAgdmFsdWU6IEZsb2F0XG4gIH1cblxuICB0eXBlIEl0ZW0ge1xuICAgIGlkOiBTdHJpbmdcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgcHJpY2U6IFByaWNlXG4gICAgcGljdHVyZTogU3RyaW5nXG4gICAgY29uZGl0aW9uOiBTdHJpbmdcbiAgICBmcmVlX3NoaXBwaW5nOiBCb29sZWFuXG4gICAgZGVzY3JpcHRpb246IFN0cmluZ1xuICAgIHNvbGRfcXVhbnRpdHk6IEZsb2F0XG4gIH1cblxuICB0eXBlIFByb2R1Y3RzIHtcbiAgICBhdXRob3I6IEF1dGhvclxuICAgIGNhdGVnb3JpZXM6IFtTdHJpbmddXG4gICAgaXRlbXM6IFtJdGVtXVxuICB9XG5cbiAgdHlwZSBQcm9kdWN0IHtcbiAgICBhdXRob3I6IEF1dGhvclxuICAgIGl0ZW06IEl0ZW1cbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIHNlYXJjaFByb2R1Y3RzKHRlcm06IFN0cmluZyEpOiBQcm9kdWN0cyFcbiAgICBwcm9kdWN0KGlkOiBJRCEpOiBQcm9kdWN0IVxuICB9XG5gO1xuXG5jb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgc2VhcmNoUHJvZHVjdHM6ICh0ZW9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT4gc2VhcmNoUHJvZHVjdHNSZXNvbHZlcihhcmdzKVxuICB9XG59O1xuXG5leHBvcnQgeyB0eXBlRGVmcywgcmVzb2x2ZXJzIH07XG4iLCJpbXBvcnQgSHR0cCBmcm9tICcuLi8uLi8uLi9odHRwJztcblxuY29uc3QgZ2V0RGVjaW1hbHMgPSBhc3luYyBjdXJyZW5jeSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDdXJyZW5jeSA9IGF3YWl0IEh0dHAuZ2V0KGBjdXJyZW5jaWVzLyR7Y3VycmVuY3l9YCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gY3VycmVudEN1cnJlbmN5O1xuICBjb25zdCB7IGRlY2ltYWxfcGxhY2VzIH0gPSBkYXRhO1xuICByZXR1cm4gZGVjaW1hbF9wbGFjZXM7XG59O1xuXG5jb25zdCBnZXRQcm9kdWNUeXBlID0gYXN5bmMgcHJvZCA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBjdXJyZW5jeV9pZDogY3VycmVuY3ksXG4gICAgaW5zdGFsbG1lbnRzLFxuICAgIGNvbmRpdGlvbixcbiAgICBzaGlwcGluZ1xuICB9ID0gcHJvZDtcblxuICBjb25zdCB7IGZyZWVfc2hpcHBpbmcgPSAwIH0gPSBzaGlwcGluZyB8fCB7fTtcbiAgY29uc3QgeyBhbW91bnQgPSAwIH0gPSBpbnN0YWxsbWVudHMgfHwge307XG4gIGNvbnN0IHsgcGljdHVyZXMsIHNvbGRfcXVhbnRpdHksIHByaWNlOiB2YWx1ZSB9ID0gYXdhaXQgZ2V0UHJvZHVjdChpZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBwcmljZToge1xuICAgICAgdmFsdWUsXG4gICAgICBjdXJyZW5jeSxcbiAgICAgIGRlY2ltYWxzOiBhd2FpdCBnZXREZWNpbWFscyhjdXJyZW5jeSksXG4gICAgICBhbW91bnRcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiBhd2FpdCBnZXREZXNjcmlwdGlvbnMoaWQpLFxuICAgIGNvbmRpdGlvbixcbiAgICBmcmVlX3NoaXBwaW5nLFxuICAgIHBpY3R1cmU6IHBpY3R1cmVzWzBdLnVybCxcbiAgICBzb2xkX3F1YW50aXR5XG4gIH07XG59O1xuXG5jb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgaWQgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IEh0dHAuZ2V0KGBpdGVtcy8ke2lkfWApO1xuICBjb25zdCB7IHBpY3R1cmVzLCBzb2xkX3F1YW50aXR5LCBwcmljZSB9ID0gZGF0YTtcbiAgcmV0dXJuIHtcbiAgICBwaWN0dXJlcyxcbiAgICBzb2xkX3F1YW50aXR5LFxuICAgIHByaWNlXG4gIH07XG59O1xuXG5jb25zdCBnZXREZXNjcmlwdGlvbnMgPSBhc3luYyBpZCA9PiB7XG4gIGNvbnN0IHsgZGF0YSA9IHt9IH0gPSBhd2FpdCBIdHRwLmdldChgaXRlbXMvJHtpZH0vZGVzY3JpcHRpb25gKTtcbiAgY29uc3QgeyBwbGFpbl90ZXh0ID0gbnVsbCB9ID0gZGF0YTtcblxuICByZXR1cm4gcGxhaW5fdGV4dDtcbn07XG5cbmNvbnN0IGdldEFsbENhdGVnb3JpZXMgPSBmaWx0ZXJzID0+XG4gIGZpbHRlcnNcbiAgICAuZmlsdGVyKGNhdGVnb3JpZSA9PiBjYXRlZ29yaWUuaWQgPT09ICdjYXRlZ29yeScpXG4gICAgLm1hcChuYW1lID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWVzIH0gPSBuYW1lO1xuICAgICAgcmV0dXJuIHZhbHVlcy5tYXAoZSA9PiBlLm5hbWUpO1xuICAgIH0pXG4gICAgLnJlZHVjZSgoYSwgYikgPT4gW2EgKyBiXSwgW10pO1xuXG5jb25zdCBzZWFyY2hQcm9kdWN0c1Jlc29sdmVyID0gYXN5bmMgdGVybSA9PiB7XG4gIGNvbnN0IHsgdGVybTogcHJvZHVjdFRvU2VhcmNoIH0gPSB0ZXJtO1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IEh0dHAuZ2V0KGBzaXRlcy9NTEEvc2VhcmNoP3E9JHtwcm9kdWN0VG9TZWFyY2h9YCk7XG4gIGNvbnN0IHsgcmVzdWx0cywgYXZhaWxhYmxlX2ZpbHRlcnMgfSA9IGRhdGE7XG4gIGNvbnN0IGl0ZW1zID0gcmVzdWx0cy5tYXAoYXN5bmMgcHJvZCA9PiBnZXRQcm9kdWNUeXBlKHByb2QpKTtcblxuICByZXR1cm4ge1xuICAgIGNhdGVnb3JpZXM6IGF3YWl0IGdldEFsbENhdGVnb3JpZXMoYXZhaWxhYmxlX2ZpbHRlcnMpLFxuICAgIGl0ZW1zXG4gIH07XG59O1xuXG5leHBvcnQgeyBzZWFyY2hQcm9kdWN0c1Jlc29sdmVyIH07XG4iLCJjb25zdCBjb25maWcgPSB7XG4gIGJhc2VVUkw6ICdodHRwczovL2FwaS5tZXJjYWRvbGlicmUuY29tLycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IC4uLmNvbmZpZyB9O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5jbGFzcyBIVFRQIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5heGlvcyA9IG51bGw7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5zZXRBeGlvc0NvbmZpZygpO1xuICB9XG5cbiAgc2V0QXhpb3NDb25maWcoKSB7XG4gICAgdGhpcy5heGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldCh1cmwpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXhpb3MuZ2V0KHVybCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIVFRQKCk7XG4iLCJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tICdhcG9sbG8tc2VydmVyJztcblxuaW1wb3J0IHsgdHlwZURlZnMsIHJlc29sdmVycyB9IGZyb20gJy4vZ3JhcGhxbC90eXBlcy9wcm9kdWN0L3Byb2R1Y3QnO1xuXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgdHlwZURlZnMsXG4gIHJlc29sdmVycyxcbiAgY29udGV4dDogKHsgcmVxIH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tbWEtZGFuZ2xlXG4gICAgICBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb24gfVxuICAgIH0gPSByZXE7XG5cbiAgICByZXR1cm4gYXV0aG9yaXphdGlvbjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tbWEtZGFuZ2xlXG4gIH1cbn0pO1xuXG5zZXJ2ZXIubGlzdGVuKCkudGhlbigoeyB1cmwgfSkgPT4ge1xuICBjb25zb2xlLndhcm4oYFNlcnZlciByZWFkeSBhdCAke3VybH1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9