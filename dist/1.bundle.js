(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/MyAlbum/style.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/MyAlbum/style.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".my-album {\\n  margin: 75px 0;\\n  height: calc( 100vh - 150px); }\\n  .my-album__banner {\\n    height: 234px;\\n    width: 100%;\\n    background-color: #fff; }\\n  .my-album__content {\\n    padding: 42px 40px;\\n    display: flex;\\n    flex-wrap: wrap;\\n    overflow: scroll;\\n    height: calc(100vh - 384px); }\\n  .my-album__list-container {\\n    margin: 0 27px 20px; }\\n  .my-album__image {\\n    width: 172px;\\n    height: 172px;\\n    background-color: red;\\n    margin-bottom: 10px; }\\n  .my-album__name {\\n    margin-bottom: 15px;\\n    color: #fff;\\n    font-size: 18px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/pages/MyAlbum/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/images/banner.jpg":
/*!*******************************!*\
  !*** ./src/images/banner.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a597b730b03404750383bef41b9b34e1.jpg\";\n\n//# sourceURL=webpack:///./src/images/banner.jpg?");

/***/ }),

/***/ "./src/pages/MyAlbum/index.js":
/*!************************************!*\
  !*** ./src/pages/MyAlbum/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/pages/MyAlbum/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_banner_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/banner.jpg */ \"./src/images/banner.jpg\");\n/* harmony import */ var _images_banner_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_banner_jpg__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar MyAlbum =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(MyAlbum, _Component);\n\n  function MyAlbum() {\n    var _this;\n\n    _classCallCheck(this, MyAlbum);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyAlbum).call(this));\n    _this._renderAlbum = _this._renderAlbum.bind(_assertThisInitialized(_this));\n    _this.state = {\n      albums: [{\n        name: 'kai',\n        image: 'test'\n      }, {\n        name: 'kai',\n        image: 'test'\n      }, {\n        name: 'kai',\n        image: 'test'\n      }, {\n        name: 'kai',\n        image: 'test'\n      }, {\n        name: 'kai',\n        image: 'test'\n      }, {\n        name: 'kai',\n        image: 'test'\n      }, {\n        name: 'kai',\n        image: 'test'\n      }, {\n        name: 'kai',\n        image: 'test'\n      }, {\n        name: 'kai',\n        image: 'test'\n      }]\n    };\n    return _this;\n  }\n\n  _createClass(MyAlbum, [{\n    key: \"_renderAlbum\",\n    value: function _renderAlbum() {\n      var albums = this.state.albums;\n      return albums.map(function (item, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: \"my-album_\".concat(item.name, \"_\").concat(index),\n          className: \"my-album__list-container\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"my-album__image\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"my-album__name\"\n        }, item.name));\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _renderAlbum = this._renderAlbum;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"my-album\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"my-album__banner\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"my-album__content\"\n      }, _renderAlbum()));\n    }\n  }]);\n\n  return MyAlbum;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyAlbum);\n\n//# sourceURL=webpack:///./src/pages/MyAlbum/index.js?");

/***/ }),

/***/ "./src/pages/MyAlbum/style.scss":
/*!**************************************!*\
  !*** ./src/pages/MyAlbum/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/MyAlbum/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/pages/MyAlbum/style.scss?");

/***/ })

}]);