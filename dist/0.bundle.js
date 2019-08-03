(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/PlayList/style.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/PlayList/style.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".play-list {\\n  width: 100%; }\\n  .play-list__banner img {\\n    width: 100%;\\n    height: 340px; }\\n  .play-list__container {\\n    padding: 0 69px 75px;\\n    position: relative;\\n    top: -144px; }\\n  .play-list__title {\\n    display: flex;\\n    margin-bottom: 43px;\\n    color: #fff; }\\n    .play-list__title-container {\\n      width: calc(100% - 217px); }\\n    .play-list__title-top, .play-list__title-bottom {\\n      display: flex;\\n      align-items: center;\\n      justify-content: space-between;\\n      margin-bottom: 30px; }\\n    .play-list__title-bottom {\\n      align-items: flex-start;\\n      margin-bottom: 0px; }\\n    .play-list__title img {\\n      width: 185px;\\n      height: 185px;\\n      margin-right: 32px; }\\n    .play-list__title-name {\\n      font-size: 40px; }\\n    .play-list__title-add {\\n      padding: 8px 20px;\\n      border-radius: 23.5px;\\n      background-color: rgba(0, 0, 0, 0.6);\\n      cursor: pointer; }\\n    .play-list__title-description {\\n      font-size: 16px; }\\n    .play-list__title-play {\\n      width: 82px;\\n      height: 82px;\\n      border-radius: 50%;\\n      background-image: linear-gradient(to right, #3927FF, #FFA883);\\n      cursor: pointer; }\\n      .play-list__title-play::after {\\n        content: '';\\n        display: inline-block;\\n        width: 0;\\n        height: 0;\\n        border-style: solid;\\n        border-width: 15px 0 15px 26.0px;\\n        border-color: transparent transparent transparent #fff;\\n        position: relative;\\n        left: 30px;\\n        top: 24px; }\\n  .play-list__content ul li {\\n    color: #fff;\\n    display: grid;\\n    grid-template-columns: 60px 1fr 90px 92px;\\n    font-size: 18px;\\n    background-color: #222;\\n    padding: 12px 0px;\\n    box-sizing: border-box;\\n    text-align: center;\\n    cursor: pointer; }\\n    .play-list__content ul li:hover {\\n      background-image: linear-gradient(270deg, #FFA88F30, #3927FF30); }\\n  .play-list__button-group {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center; }\\n    .play-list__button-group img {\\n      width: 24px;\\n      height: 24px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/pages/PlayList/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/images/add.png":
/*!****************************!*\
  !*** ./src/images/add.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAD1BMVEX///9HcEz///////////9iTY1sAAAABHRSTlOAAEDANdddFAAAADNJREFUKM9jEMQADAMnpMCEIcTiMOiEhBiAwMQZRCpChQRc4IARtxAWjYPVj7iiYyCTCQAifjC/R/acdgAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/images/add.png?");

/***/ }),

/***/ "./src/images/banner.jpg":
/*!*******************************!*\
  !*** ./src/images/banner.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a597b730b03404750383bef41b9b34e1.jpg\";\n\n//# sourceURL=webpack:///./src/images/banner.jpg?");

/***/ }),

/***/ "./src/images/remove.png":
/*!*******************************!*\
  !*** ./src/images/remove.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkAgMAAACcbnALAAAADFBMVEVHcEz///////////8Gn9AKAAAAA3RSTlMAfz/kt4zaAAAAHUlEQVQY02NgGOyAKRQEGoAsxv8g4IDCQsgObgAAZmgOz0tRX84AAAAASUVORK5CYII=\"\n\n//# sourceURL=webpack:///./src/images/remove.png?");

/***/ }),

/***/ "./src/pages/PlayList/index.js":
/*!*************************************!*\
  !*** ./src/pages/PlayList/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/pages/PlayList/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_banner_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/banner.jpg */ \"./src/images/banner.jpg\");\n/* harmony import */ var _images_banner_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_banner_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_album_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/album.jpeg */ \"./src/images/album.jpeg\");\n/* harmony import */ var _images_album_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_album_jpeg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_add_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/add.png */ \"./src/images/add.png\");\n/* harmony import */ var _images_add_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_add_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_remove_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/remove.png */ \"./src/images/remove.png\");\n/* harmony import */ var _images_remove_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_remove_png__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction PlayList(_ref) {\n  var match = _ref.match;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__banner\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _images_banner_jpg__WEBPACK_IMPORTED_MODULE_2___default.a\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__title\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _images_album_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__title-container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__title-top\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__title-name\"\n  }, \" \", match.params.album, \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__title-add\"\n  }, \" + \\u65B0\\u589E\\u81F3\\u6211\\u7684\\u5C08\\u8F2F\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__title-bottom\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__title-description\"\n  }, \"Youtube \\u983B\\u9053 \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"\\u65BC 2019.7.22 \\u5275\\u5EFA\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__title-play\"\n  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"1\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Jazz Apricot\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"1:52\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play-list__button-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _images_add_png__WEBPACK_IMPORTED_MODULE_4___default.a\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _images_remove_png__WEBPACK_IMPORTED_MODULE_5___default.a\n  }))))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayList);\n\n//# sourceURL=webpack:///./src/pages/PlayList/index.js?");

/***/ }),

/***/ "./src/pages/PlayList/style.scss":
/*!***************************************!*\
  !*** ./src/pages/PlayList/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/PlayList/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/pages/PlayList/style.scss?");

/***/ })

}]);