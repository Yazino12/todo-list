/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Palette+Mosaic&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: sans-serif, serif, 'cursive';\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  min-width: 500px;\\r\\n  min-height: 790px;\\r\\n  background-color: rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-family: 'Palette Mosaic', 'cursive', sans-serif;\\r\\n  color: #545862;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 400;\\r\\n  line-height: 1em;\\r\\n  margin: 0;\\r\\n  text-overflow: ellipsis;\\r\\n  overflow: hidden;\\r\\n  white-space: nowrap;\\r\\n}\\r\\n\\r\\nul {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  color: inherit;\\r\\n  font: inherit;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/* SHARED CLASSES  */\\r\\n.stats i,\\r\\n.add i,\\r\\n.list-item i {\\r\\n  opacity: 0.5;\\r\\n  color: #333;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* LIST WRAPPER  */\\r\\n.list-wrapper {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 50%;\\r\\n  margin: auto;\\r\\n  border-radius: 3px;\\r\\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n/* STATS SECTION  */\\r\\n.stats {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 1em;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n/* ADD NOTES SECTION  */\\r\\n.add {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n.add div {\\r\\n  flex: 1;\\r\\n  padding: 1em;\\r\\n}\\r\\n\\r\\n.add div #note {\\r\\n  font-size: 1rem;\\r\\n  font-style: italic;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  width: 95%;\\r\\n}\\r\\n\\r\\n.add button {\\r\\n  width: 2.7em;\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  padding: 0;\\r\\n  color: #545862;\\r\\n}\\r\\n\\r\\n/* NOTES SECTION  */\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.container .list-item {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n.container .list-item .left {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 1em;\\r\\n  flex: 1;\\r\\n  padding: 0 0 0 1em;\\r\\n}\\r\\n\\r\\n.container .list-item .left label {\\r\\n  height: 20px;\\r\\n  width: 100%;\\r\\n  padding: 0.8em 0;\\r\\n}\\r\\n\\r\\n.container .list-item .right {\\r\\n  display: flex;\\r\\n  padding: 1em;\\r\\n}\\r\\n\\r\\n.drag:hover {\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.delete:hover {\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.editing {\\r\\n  background-color: #fff9b6;\\r\\n}\\r\\n\\r\\n.edit {\\r\\n  display: block;\\r\\n  height: 20px;\\r\\n  overflow: auto;\\r\\n  width: 100%;\\r\\n  padding: 0.8em 0;\\r\\n  word-wrap: break-word;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background: transparent;\\r\\n  box-shadow: none;\\r\\n  resize: none;\\r\\n  appearance: none;\\r\\n  cursor: default;\\r\\n}\\r\\n\\r\\n.edit:focus {\\r\\n  cursor: text;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* BOTTOM SECTION  */\\r\\n.bottom {\\r\\n  padding: 1em;\\r\\n  text-align: center;\\r\\n  background: rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n.bottom .clear-completed {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  color: #545862;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.bottom .clear-completed:hover {\\r\\n  text-decoration: underline;\\r\\n  color: #333;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://setup-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://setup-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form.js */ \"./src/modules/form.js\");\n/* harmony import */ var _modules_functionality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/functionality.js */ \"./src/modules/functionality.js\");\n/* harmony import */ var _modules_interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/interactive.js */ \"./src/modules/interactive.js\");\n\r\n\r\n\r\n\r\n\r\nclass Task {\r\n  constructor(taskArray) {\r\n    this.taskArray = taskArray;\r\n  }\r\n\r\n  render = () => {\r\n    (0,_modules_form_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.fillTask, this.taskArray);\r\n\r\n    (0,_modules_functionality_js__WEBPACK_IMPORTED_MODULE_2__.add)(this.taskArray);\r\n    (0,_modules_functionality_js__WEBPACK_IMPORTED_MODULE_2__.edit)(this.taskArray, this.fillTask);\r\n    (0,_modules_functionality_js__WEBPACK_IMPORTED_MODULE_2__.removeList)(this.taskArray, this.fillTask);\r\n\r\n    (0,_modules_interactive_js__WEBPACK_IMPORTED_MODULE_3__.isCompleted)(this.taskArray, this.fillTask);\r\n    (0,_modules_interactive_js__WEBPACK_IMPORTED_MODULE_3__.clearAll)(this.taskArray);\r\n  };\r\n\r\n  // Fill tasks array & localstorage\r\n\r\n  fillTask = (data) => {\r\n    if (data) {\r\n      this.taskArray.push(data);\r\n      localStorage.setItem('taskData', JSON.stringify(this.taskArray));\r\n    } else {\r\n      localStorage.setItem('taskData', JSON.stringify(this.taskArray));\r\n    }\r\n  };\r\n}\r\n\r\nconst initializer = new Task(\r\n  JSON.parse(localStorage.getItem('taskData')) || [],\r\n);\r\ninitializer.render();\r\ninitializer.fillTask();\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formAction = (fillTask, taskArray) => {\r\n  const form = document.querySelector('.add');\r\n  form.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const [desc] = form.elements;\r\n    if (desc.value.trim()) {\r\n      const taskData = {\r\n        description: desc.value.trim(),\r\n        completed: false,\r\n        index: taskArray.length,\r\n      };\r\n      fillTask(taskData);\r\n      desc.value = '';\r\n      window.location.reload();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formAction);\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/functionality.js":
/*!**************************************!*\
  !*** ./src/modules/functionality.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"edit\": () => (/* binding */ edit),\n/* harmony export */   \"removeList\": () => (/* binding */ removeList)\n/* harmony export */ });\n// Global Variables\r\nconst deleteItem = (taskArray, fillTask, el) => {\r\n  const index = parseInt(el.children[0].children[0].getAttribute('id'), 10);\r\n  taskArray.splice(index, 1);\r\n  taskArray.forEach((entry, i) => {\r\n    entry.index = i;\r\n  });\r\n  fillTask();\r\n  el.remove();\r\n  window.location.reload();\r\n};\r\n\r\nlet trigerring = false;\r\n\r\n// ADD FUNCTIONALITY\r\n\r\nconst add = (tasks) => {\r\n  const container = document.querySelector('.container');\r\n  tasks.forEach((task) => {\r\n    const taskEl = `\r\n      <li class=\"list-item\"><div class=\"left\"><input class=\"checkBox\" type=\"checkbox\" id=${task.index} name=${task.description} value=${task.description}>\r\n      <label for=${task.index} hidden>${task.description}</label><textarea class=\"edit\" maxlength=\"255\" spellcheck=\"false\" focus>${task.description}</textarea></div><div class=\"right\"><i class=\"fa-solid fa-ellipsis-vertical drag\"></i><i class=\"fa-solid fa-trash-can delete\"></i></div>\r\n      </li>`;\r\n\r\n    container.innerHTML += taskEl;\r\n    task.completed = false;\r\n  });\r\n};\r\n\r\n// REMOVE FUNCTIONALITY\r\n\r\nconst removeList = (taskArray, fillTask) => {\r\n  const delIcons = document.querySelectorAll('.delete');\r\n  delIcons.forEach((delIcon) => {\r\n    delIcon.addEventListener('mousedown', () => {\r\n      trigerring = true;\r\n      const listEl = delIcon.parentNode.parentElement;\r\n      deleteItem(taskArray, fillTask, listEl);\r\n    });\r\n  });\r\n};\r\n\r\n// EDIT FUNCTIONALITY\r\n\r\nconst edit = (taskArray, fillTask) => {\r\n  const listItems = document.querySelectorAll('.list-item');\r\n  const textAreas = document.querySelectorAll('textarea');\r\n  let newDesc = '';\r\n\r\n  listItems.forEach((listItem) => {\r\n    const deleteIcon = listItem.children[1].children[1];\r\n    deleteIcon.classList.add('hidden');\r\n  });\r\n\r\n  textAreas.forEach((textArea) => {\r\n    textArea.addEventListener('focusin', () => {\r\n      const listEl = textArea.parentNode.parentElement;\r\n      textArea.style.textDecoration = 'none'; // Removing line-through style\r\n      listEl.classList.add('editing'); // Li element\r\n      listEl.children[1].children[0].classList.add('hidden'); // Vertical dots icon\r\n      listEl.children[1].children[1].classList.remove('hidden'); // Delete icon\r\n      newDesc = textArea.value;\r\n      textArea.addEventListener('input', () => {\r\n        newDesc = textArea.value;\r\n      });\r\n    });\r\n\r\n    textArea.addEventListener('focusout', () => {\r\n      const listEl = textArea.parentNode.parentElement;\r\n      const checkBox = listEl.children[0].children[0];\r\n      if (checkBox.checked) textArea.style.textDecoration = 'line-through'; // Adding line-through style\r\n      listEl.classList.remove('editing'); // Li element\r\n      listEl.children[1].children[0].classList.remove('hidden'); // Vertical dots icon\r\n      listEl.children[1].children[1].classList.add('hidden'); // Delete icon\r\n\r\n      const index = textArea.parentElement.children[0].getAttribute('id');\r\n      if (!trigerring) {\r\n        if (newDesc.trim()) {\r\n          taskArray[index].description = newDesc.trim();\r\n          fillTask();\r\n        } else {\r\n          deleteItem(taskArray, fillTask, listEl);\r\n        }\r\n      }\r\n      newDesc = '';\r\n      trigerring = false;\r\n    });\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/functionality.js?");

/***/ }),

/***/ "./src/modules/interactive.js":
/*!************************************!*\
  !*** ./src/modules/interactive.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"isCompleted\": () => (/* binding */ isCompleted)\n/* harmony export */ });\n// Update completed status and handle check clicks\r\nconst isCompleted = (taskArray, fillTask) => {\r\n  const checkBoxs = document.querySelectorAll('.checkBox');\r\n  checkBoxs.forEach((checkBox) => {\r\n    const index = checkBox.getAttribute('id');\r\n    const contentText = checkBox.nextElementSibling.nextElementSibling;\r\n    checkBox.addEventListener('change', (e) => {\r\n      if (e.target.checked) {\r\n        taskArray[index].completed = true;\r\n        fillTask();\r\n        contentText.style.textDecoration = 'line-through';\r\n      } else {\r\n        taskArray[index].completed = false;\r\n        fillTask();\r\n        contentText.style.textDecoration = 'none';\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n// Clear all completed function\r\nconst clearAll = (taskArray) => {\r\n  const listItems = document.querySelectorAll('.list-item');\r\n  const clearAllButton = document.querySelector('.clear-completed');\r\n  clearAllButton.addEventListener('click', () => {\r\n    listItems.forEach(\r\n      (item) => item.children[0].children[0].checked && item.remove(),\r\n    );\r\n    taskArray = taskArray.filter((obj) => obj.completed !== true); // Filtering out the array\r\n    if (taskArray.length > 0) {\r\n      taskArray.forEach((entry, i) => {\r\n        entry.index = i;\r\n        localStorage.setItem('taskData', JSON.stringify(taskArray));\r\n      });\r\n    } else {\r\n      localStorage.setItem('taskData', JSON.stringify(taskArray));\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/interactive.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;