"use strict";
(self["webpackChunkwebpack_pro"] = self["webpackChunkwebpack_pro"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #eee;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.to-do-list-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n\r\n.to-do-list-section .container {\r\n  width: 50%;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.to-do-list-section .container .header {\r\n  padding: 1rem;\r\n  border-bottom: 1px solid #ccc;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.to-do-list-section .to-do-list-input {\r\n  padding: 0 1 0.5rem;\r\n}\r\n\r\n.to-do-list-section .to-do-list-input .add-todo {\r\n  padding: 1rem;\r\n  border: none;\r\n  border-bottom: 1px solid #ccc;\r\n  width: 100%;\r\n}\r\n\r\n.to-do-list-section .to-do-list-input .add-todo:focus {\r\n  outline: none;\r\n}\r\n\r\n.to-do-list-section .to-do-list-item .edit-todo {\r\n  border: none;\r\n  width: 100%;\r\n}\r\n\r\n.to-do-list-section .to-do-list-item .edit-todo:focus {\r\n  outline: none;\r\n}\r\n\r\n.to-do-list-section .to-do-list .unordered-list {\r\n  list-style: none;\r\n  cursor: move;\r\n}\r\n\r\n[draggable] {\r\n  -moz-user-select: none;\r\n  -khtml-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n\r\n  /* Required to make elements draggable in old WebKit */\r\n  -khtml-user-drag: element;\r\n  -webkit-user-drag: element;\r\n}\r\n\r\n.to-do-list-section .to-do-list .unordered-list .to-do-list-item {\r\n  padding: 1rem;\r\n  border-bottom: 1px solid #ccc;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.to-do-list-section .to-do-list .unordered-list .to-do-list-item label {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n}\r\n\r\n.to-do-list-section .to-do-list-footer {\r\n  background-color: #eee;\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.to-do-list-section .to-do-list-footer .btn-clear {\r\n  text-decoration: none;\r\n  color: #000;\r\n  padding: 1rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n.to-do-list-section .to-do-list-footer .btn-clear:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\ninput[type='checkbox']:checked {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  background-color: transparent;\r\n  border: none;\r\n  width: 16px;\r\n  height: 16px;\r\n  outline: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  color: green;\r\n}\r\n\r\ninput[type='checkbox']:checked::before {\r\n  content: '\\2713';\r\n  display: block;\r\n  width: 16px;\r\n  height: 16px;\r\n  text-align: center;\r\n  line-height: 16px;\r\n  color: green;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,yBAAyB;EACzB,iBAAiB;;EAEjB,sDAAsD;EACtD,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAChB,6BAA6B;EAC7B,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,aAAa;EACb,SAAS;EACT,UAAU;EACV,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #eee;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.to-do-list-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n\r\n.to-do-list-section .container {\r\n  width: 50%;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.to-do-list-section .container .header {\r\n  padding: 1rem;\r\n  border-bottom: 1px solid #ccc;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.to-do-list-section .to-do-list-input {\r\n  padding: 0 1 0.5rem;\r\n}\r\n\r\n.to-do-list-section .to-do-list-input .add-todo {\r\n  padding: 1rem;\r\n  border: none;\r\n  border-bottom: 1px solid #ccc;\r\n  width: 100%;\r\n}\r\n\r\n.to-do-list-section .to-do-list-input .add-todo:focus {\r\n  outline: none;\r\n}\r\n\r\n.to-do-list-section .to-do-list-item .edit-todo {\r\n  border: none;\r\n  width: 100%;\r\n}\r\n\r\n.to-do-list-section .to-do-list-item .edit-todo:focus {\r\n  outline: none;\r\n}\r\n\r\n.to-do-list-section .to-do-list .unordered-list {\r\n  list-style: none;\r\n  cursor: move;\r\n}\r\n\r\n[draggable] {\r\n  -moz-user-select: none;\r\n  -khtml-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n\r\n  /* Required to make elements draggable in old WebKit */\r\n  -khtml-user-drag: element;\r\n  -webkit-user-drag: element;\r\n}\r\n\r\n.to-do-list-section .to-do-list .unordered-list .to-do-list-item {\r\n  padding: 1rem;\r\n  border-bottom: 1px solid #ccc;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.to-do-list-section .to-do-list .unordered-list .to-do-list-item label {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n}\r\n\r\n.to-do-list-section .to-do-list-footer {\r\n  background-color: #eee;\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.to-do-list-section .to-do-list-footer .btn-clear {\r\n  text-decoration: none;\r\n  color: #000;\r\n  padding: 1rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n.to-do-list-section .to-do-list-footer .btn-clear:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\ninput[type='checkbox']:checked {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  background-color: transparent;\r\n  border: none;\r\n  width: 16px;\r\n  height: 16px;\r\n  outline: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  color: green;\r\n}\r\n\r\ninput[type='checkbox']:checked::before {\r\n  content: '\\2713';\r\n  display: block;\r\n  width: 16px;\r\n  height: 16px;\r\n  text-align: center;\r\n  line-height: 16px;\r\n  color: green;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_iterateTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/iterateTasks.js */ "./src/js/iterateTasks.js");
/* harmony import */ var _js_eventComplete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/eventComplete.js */ "./src/js/eventComplete.js");
/* harmony import */ var _js_draggedItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/draggedItem.js */ "./src/js/draggedItem.js");
/* harmony import */ var _js_addNewTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/addNewTask.js */ "./src/js/addNewTask.js");
/* harmony import */ var _js_removeTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/removeTask.js */ "./src/js/removeTask.js");
/* harmony import */ var _js_clearAllCompletedTask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/clearAllCompletedTask.js */ "./src/js/clearAllCompletedTask.js");








(0,_js_iterateTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

(0,_js_draggedItem_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

(0,_js_removeTask_js__WEBPACK_IMPORTED_MODULE_5__.buttonAction)();

(0,_js_addNewTask_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_js_eventComplete_js__WEBPACK_IMPORTED_MODULE_2__.eventComplete)();

(0,_js_clearAllCompletedTask_js__WEBPACK_IMPORTED_MODULE_6__["default"])();


/***/ }),

/***/ "./src/js/addNewTask.js":
/*!******************************!*\
  !*** ./src/js/addNewTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask.js */ "./src/js/createTask.js");
/* harmony import */ var _eventComplete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventComplete.js */ "./src/js/eventComplete.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");
/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeTask.js */ "./src/js/removeTask.js");





const addNewTaskToList = () => {
  const inputToDO = document.querySelector('.add-todo');
  const unorderdList = document.querySelector('.to-do-list ul');
  inputToDO.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const list = new _list_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      const TodoList = {
        description: inputToDO.value,
        completed: false,
      };
      const task = list.addTaskToList(TodoList);
      const { li, a } = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task);
      unorderdList.appendChild(li);
      inputToDO.value = '';
      (0,_eventComplete_js__WEBPACK_IMPORTED_MODULE_1__.addEventComplete)(li);
      (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_3__.addNewActionWhenTaskAdded)(a);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewTaskToList);


/***/ }),

/***/ "./src/js/clearAllCompletedTask.js":
/*!*****************************************!*\
  !*** ./src/js/clearAllCompletedTask.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");


const clearAllCompletedTask = () => {
  const list = new _list_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const btnClear = document.querySelector('.btn-clear');
  btnClear.addEventListener('click', () => {
    const completed = document.querySelectorAll('.completed');
    const data = list.removeAllCompletedTask();
    completed.forEach((item) => {
      const parent = item.parentNode.parentNode;
      parent.remove();
    });
    const btns = document.querySelectorAll('.btn-task');
    btns.forEach((btn, i) => {
      btn.setAttribute('index', data[i].index);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAllCompletedTask);


/***/ }),

/***/ "./src/js/clickCount.js":
/*!******************************!*\
  !*** ./src/js/clickCount.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "edit": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _editInLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editInLocalStorage.js */ "./src/js/editInLocalStorage.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");
/* harmony import */ var _removeTaskFromLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeTaskFromLocalStorage.js */ "./src/js/removeTaskFromLocalStorage.js");




const convertTextToInput = (parent, index) => {
  const input = document.createElement('input');
  const list = new _list_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const getData = list.getTaskByIndex(Number(index));
  input.value = getData[0].description;
  input.className = 'edit-todo';
  parent.insertBefore(input, parent.firstChild);
};

const edit = (icon, btn) => {
  const index = btn.getAttribute('index');
  if (icon.classList.contains('fa-ellipsis-vertical')) {
    icon.classList.add('fa-trash-can');
    icon.classList.remove('fa-ellipsis-vertical');
    const parent = icon.parentElement.parentElement;
    if (parent.firstChild) {
      parent.removeChild(parent.firstChild);
      convertTextToInput(parent, index);
      (0,_editInLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(index, icon);
    }
  }
};
const deleteItem = (icon, btn) => {
  const index = btn.getAttribute('index');
  const data = (0,_removeTaskFromLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index);
  const parent = btn.parentElement;
  parent.remove();
  const btns = document.querySelectorAll('.btn-task');
  btns.forEach((btn, i) => {
    btn.setAttribute('index', data[i].index);
  });
};




/***/ }),

/***/ "./src/js/createElement.js":
/*!*********************************!*\
  !*** ./src/js/createElement.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createElement = (tag, task = undefined) => {
  const elements = document.createElement(tag);
  if (tag === 'li') {
    elements.className = 'to-do-list-item';
    elements.draggable = true;
    return elements;
  }
  if (tag === 'input') {
    elements.type = 'checkbox';
    elements.value = task.index;
    elements.checked = task.completed;
    // elements.draggable = false;
    // console.log(elements.draggable);
    return elements;
  }
  if (tag === 'span') {
    elements.innerHTML = task.description;
    if (task.completed) elements.classList.add('completed');
    return elements;
  }
  if (tag === 'a') {
    elements.href = '#';
    elements.className = 'btn-task';
    elements.setAttribute('index', task.index);
    return elements;
  }
  if (tag === 'i') {
    elements.className = 'fa-solid fa-ellipsis-vertical';
    return elements;
  }
  return elements;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./src/js/createTask.js":
/*!******************************!*\
  !*** ./src/js/createTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ "./src/js/createElement.js");


const createTask = (task) => {
  const li = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])('li', task);
  const a = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])('a', task);
  const i = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])('i');
  const label = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])('label');
  const input = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])('input', task);
  const span = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])('span', task);
  label.appendChild(input);
  label.appendChild(span);
  li.appendChild(label);
  a.appendChild(i);
  li.appendChild(a);
  return { li, a };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


/***/ }),

/***/ "./src/js/draggedItem.js":
/*!*******************************!*\
  !*** ./src/js/draggedItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");


const draggedItem = () => {
  const list = document.getElementById('todo-list');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  let draggedItem = null;
  list.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    e.dataTransfer.setData('text/plain', e.target.innerHTML);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.dropEffect = 'move';
  });
  list.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  list.addEventListener('drop', (e) => {
    const dropTarget = e.target.closest('li');
    const index = dropTarget.querySelector('a').getAttribute('index');
    const index2 = draggedItem.querySelector('a').getAttribute('index');
    const list = new _list_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (dropTarget && draggedItem !== dropTarget) {
      list.UpdatedIndexWhenDragItem(index, index2);
      dropTarget.querySelector('a').setAttribute('index', index2);
      draggedItem.querySelector('a').setAttribute('index', index);
      const temp = document.createElement('div');
      dropTarget.before(temp);
      draggedItem.before(dropTarget);
      temp.replaceWith(draggedItem);
    }
  });
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('dragstart', (event) => {
      event.preventDefault();
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (draggedItem);


/***/ }),

/***/ "./src/js/editInLocalStorage.js":
/*!**************************************!*\
  !*** ./src/js/editInLocalStorage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ "./src/js/createElement.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");



const editDescription = (index, icon) => {
  const input = document.querySelector('.edit-todo');
  const list = new _list_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      list.UpdateDescriptionTask(Number(index), input.value);
      const task = list.getTaskByIndex(Number(index));
      const parent = input.parentNode;
      input.remove();
      const label = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])('label');
      const inputCheck = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])('input', task);
      const span = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])('span', task);
      label.appendChild(inputCheck);
      label.appendChild(span);
      parent.insertBefore(label, parent.firstChild);
      icon.classList.add('fa-ellipsis-vertical');
      icon.classList.remove('fa-trash-can');
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editDescription);


/***/ }),

/***/ "./src/js/eventComplete.js":
/*!*********************************!*\
  !*** ./src/js/eventComplete.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEventComplete": () => (/* binding */ addEventComplete),
/* harmony export */   "eventComplete": () => (/* binding */ eventComplete)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");


const eventComplete = () => {
  const listItems = document.querySelectorAll('.to-do-list-item');
  listItems.forEach((item) => {
    item.addEventListener('change', () => {
      const list = new _list_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      const index = item.querySelector('a').getAttribute('index');
      const span = item.querySelector('span');
      if (span) {
        span.classList.toggle('completed');
        if (span.classList.contains('completed')) {
          list.UpdateCompleteTask(Number(index));
        } else {
          list.UpdateUnCompleteTask(Number(index));
        }
      }
    });
  });
};

const addEventComplete = (item) => {
  item.addEventListener('change', () => {
    const list = new _list_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const index = item.querySelector('a').getAttribute('index');
    const span = item.querySelector('span');
    if (span) {
      span.classList.toggle('completed');
      if (span.classList.contains('completed')) {
        list.UpdateCompleteTask(Number(index));
      } else {
        list.UpdateUnCompleteTask(Number(index));
      }
    }
  });
};



/***/ }),

/***/ "./src/js/iterateTasks.js":
/*!********************************!*\
  !*** ./src/js/iterateTasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask.js */ "./src/js/createTask.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");



const iterateTasks = () => {
  const unorderdList = document.querySelector('.to-do-list ul');
  const lists = new _list_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

  const sortedList = lists.getLocalStorage().sort((a, b) => a.index - b.index);
  sortedList.forEach((task) => {
    const { li } = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task);
    unorderdList.appendChild(li);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iterateTasks);


/***/ }),

/***/ "./src/js/list.js":
/*!************************!*\
  !*** ./src/js/list.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class List {
  constructor() {
    this.localStorage = localStorage;
  }

  getLocalStorage = () => {
    const savedlistData = this.localStorage.getItem('lists-data');
    const data = savedlistData ? JSON.parse(savedlistData) : [];
    return data;
  };

  setLocalStorage = (data) => {
    this.localStorage.setItem('lists-data', JSON.stringify(data));
  };

  getTaskByIndex = (id) => {
    const data = this.getLocalStorage().filter((e) => e.index === Number(id));
    return data;
  };

  UpdateCompleteTask = (index) => {
    const data = this.getLocalStorage();
    data.forEach((e) => {
      if (e.index === index) {
        e.completed = true;
      }
    });
    this.setLocalStorage(data);
  };

  UpdateUnCompleteTask = (index) => {
    const data = this.getLocalStorage();
    data.forEach((e) => {
      if (e.index === index) {
        e.completed = false;
      }
    });
    this.setLocalStorage(data);
  };

  UpdateDescriptionTask = (index, value) => {
    const data = this.getLocalStorage();
    data.forEach((e) => {
      if (e.index === index) {
        e.description = value;
      }
    });
    this.setLocalStorage(data);
  };

  removeLocalStoragelistData = (index) => {
    const data = this.getLocalStorage().filter((e) => e.index !== index);
    data.forEach((e, i) => {
      e.index = i + 1;
    });
    return data;
  };

  removeAllCompletedTask = () => {
    const data = this.getLocalStorage().filter((e) => !e.completed);
    data.forEach((e, i) => {
      e.index = i + 1;
    });
    this.setLocalStorage(data);
    return data;
  };

  UpdatedIndexWhenDragItem = (index, index2) => {
    const data = this.getLocalStorage();
    const index1Data = data.find((e) => e.index === Number(index));
    const index2Data = data.find((e) => e.index === Number(index2));

    if (index1Data && index2Data) {
      const tempIndex = index1Data.index;
      index1Data.index = index2Data.index;
      index2Data.index = tempIndex;
    }

    this.setLocalStorage(data);
    return data;
  };

  addTaskToList = (listDetails) => {
    const data = this.getLocalStorage();
    listDetails.index = data.length + 1;
    data.push(listDetails);
    this.setLocalStorage(data);
    return listDetails;
  };

  removeTaskFromList = (index) => {
    const data = this.removeLocalStoragelistData(index);
    this.setLocalStorage(data);
    return data;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);


/***/ }),

/***/ "./src/js/removeTask.js":
/*!******************************!*\
  !*** ./src/js/removeTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewActionWhenTaskAdded": () => (/* binding */ addNewActionWhenTaskAdded),
/* harmony export */   "buttonAction": () => (/* binding */ buttonAction)
/* harmony export */ });
/* harmony import */ var _clickCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickCount.js */ "./src/js/clickCount.js");


const buttonAction = () => {
  const buttonTasks = document.querySelectorAll('.btn-task');

  buttonTasks.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const icon = btn.querySelector('i');
      if (icon.classList.contains('fa-trash-can')) {
        (0,_clickCount_js__WEBPACK_IMPORTED_MODULE_0__.deleteItem)(icon, btn);
      }
      if (icon.classList.contains('fa-ellipsis-vertical')) {
        (0,_clickCount_js__WEBPACK_IMPORTED_MODULE_0__.edit)(icon, btn);
      }
    });
  });
};
const addNewActionWhenTaskAdded = (btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const icon = btn.querySelector('i');
    if (icon.classList.contains('fa-trash-can')) {
      (0,_clickCount_js__WEBPACK_IMPORTED_MODULE_0__.deleteItem)(icon, btn);
    }
    if (icon.classList.contains('fa-ellipsis-vertical')) {
      (0,_clickCount_js__WEBPACK_IMPORTED_MODULE_0__.edit)(icon, btn);
    }
  });
};




/***/ }),

/***/ "./src/js/removeTaskFromLocalStorage.js":
/*!**********************************************!*\
  !*** ./src/js/removeTaskFromLocalStorage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");


const removeTaskFromLocalStorage = (index) => {
  const list = new _list_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const data = list.removeTaskFromList(Number(index));
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTaskFromLocalStorage);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFVO0FBQ2xCO0FBQ0E7QUFDQSxRQUFRLG9EQUFJO0FBQ1o7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMERBQVU7QUFDaEI7QUFDQTtBQUNBLE1BQU0sb0RBQUk7QUFDVjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ21EOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0J0QjtBQUM3QjtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsMEJBQTBCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9qcy9hZGROZXdUYXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL2pzL2NsZWFyQWxsQ29tcGxldGVkVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9qcy9jbGlja0NvdW50LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL2pzL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvanMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9qcy9kcmFnZ2VkSXRlbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9qcy9lZGl0SW5Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvanMvZXZlbnRDb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9qcy9pdGVyYXRlVGFza3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvanMvbGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9qcy9yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL2pzL3JlbW92ZVRhc2tGcm9tTG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC5jb250YWluZXIgLmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAgMSAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QtaW5wdXQgLmFkZC10b2RvIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWlucHV0IC5hZGQtdG9kbzpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWl0ZW0gLmVkaXQtdG9kbyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdC1pdGVtIC5lZGl0LXRvZG86Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdCAudW5vcmRlcmVkLWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuW2RyYWdnYWJsZV0ge1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG4gIC8qIFJlcXVpcmVkIHRvIG1ha2UgZWxlbWVudHMgZHJhZ2dhYmxlIGluIG9sZCBXZWJLaXQgKi9cXHJcXG4gIC1raHRtbC11c2VyLWRyYWc6IGVsZW1lbnQ7XFxyXFxuICAtd2Via2l0LXVzZXItZHJhZzogZWxlbWVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdCAudW5vcmRlcmVkLWxpc3QgLnRvLWRvLWxpc3QtaXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0IC51bm9yZGVyZWQtbGlzdCAudG8tZG8tbGlzdC1pdGVtIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QtZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWZvb3RlciAuYnRuLWNsZWFyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdC1mb290ZXIgLmJ0bi1jbGVhcjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ1xcXFwyNzEzJztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixpQkFBaUI7O0VBRWpCLHNEQUFzRDtFQUN0RCx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLmNvbnRhaW5lciAuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QtaW5wdXQge1xcclxcbiAgcGFkZGluZzogMCAxIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdC1pbnB1dCAuYWRkLXRvZG8ge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QtaW5wdXQgLmFkZC10b2RvOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QtaXRlbSAuZWRpdC10b2RvIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWl0ZW0gLmVkaXQtdG9kbzpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0IC51bm9yZGVyZWQtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG5bZHJhZ2dhYmxlXSB7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbiAgLyogUmVxdWlyZWQgdG8gbWFrZSBlbGVtZW50cyBkcmFnZ2FibGUgaW4gb2xkIFdlYktpdCAqL1xcclxcbiAgLWtodG1sLXVzZXItZHJhZzogZWxlbWVudDtcXHJcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBlbGVtZW50O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0IC51bm9yZGVyZWQtbGlzdCAudG8tZG8tbGlzdC1pdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QgLnVub3JkZXJlZC1saXN0IC50by1kby1saXN0LWl0ZW0gbGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdC1mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QtZm9vdGVyIC5idG4tY2xlYXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWZvb3RlciAuYnRuLWNsZWFyOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnXFxcXDI3MTMnO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGl0ZXJhdGVUYXNrcyBmcm9tICcuL2pzL2l0ZXJhdGVUYXNrcy5qcyc7XHJcbmltcG9ydCB7IGV2ZW50Q29tcGxldGUgfSBmcm9tICcuL2pzL2V2ZW50Q29tcGxldGUuanMnO1xyXG5pbXBvcnQgZHJhZ2dlZEl0ZW0gZnJvbSAnLi9qcy9kcmFnZ2VkSXRlbS5qcyc7XHJcbmltcG9ydCBhZGROZXdUYXNrVG9MaXN0IGZyb20gJy4vanMvYWRkTmV3VGFzay5qcyc7XHJcbmltcG9ydCB7IGJ1dHRvbkFjdGlvbiB9IGZyb20gJy4vanMvcmVtb3ZlVGFzay5qcyc7XHJcbmltcG9ydCBjbGVhckFsbENvbXBsZXRlZFRhc2sgZnJvbSAnLi9qcy9jbGVhckFsbENvbXBsZXRlZFRhc2suanMnO1xyXG5cclxuaXRlcmF0ZVRhc2tzKCk7XHJcblxyXG5kcmFnZ2VkSXRlbSgpO1xyXG5cclxuYnV0dG9uQWN0aW9uKCk7XHJcblxyXG5hZGROZXdUYXNrVG9MaXN0KCk7XHJcbmV2ZW50Q29tcGxldGUoKTtcclxuXHJcbmNsZWFyQWxsQ29tcGxldGVkVGFzaygpO1xyXG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZVRhc2suanMnO1xyXG5pbXBvcnQgeyBhZGRFdmVudENvbXBsZXRlIH0gZnJvbSAnLi9ldmVudENvbXBsZXRlLmpzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0LmpzJztcclxuaW1wb3J0IHsgYWRkTmV3QWN0aW9uV2hlblRhc2tBZGRlZCB9IGZyb20gJy4vcmVtb3ZlVGFzay5qcyc7XHJcblxyXG5jb25zdCBhZGROZXdUYXNrVG9MaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0VG9ETyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpO1xyXG4gIGNvbnN0IHVub3JkZXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0IHVsJyk7XHJcbiAgaW5wdXRUb0RPLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgY29uc3QgbGlzdCA9IG5ldyBMaXN0KCk7XHJcbiAgICAgIGNvbnN0IFRvZG9MaXN0ID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpbnB1dFRvRE8udmFsdWUsXHJcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgdGFzayA9IGxpc3QuYWRkVGFza1RvTGlzdChUb2RvTGlzdCk7XHJcbiAgICAgIGNvbnN0IHsgbGksIGEgfSA9IGNyZWF0ZVRhc2sodGFzayk7XHJcbiAgICAgIHVub3JkZXJkTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgIGlucHV0VG9ETy52YWx1ZSA9ICcnO1xyXG4gICAgICBhZGRFdmVudENvbXBsZXRlKGxpKTtcclxuICAgICAgYWRkTmV3QWN0aW9uV2hlblRhc2tBZGRlZChhKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZE5ld1Rhc2tUb0xpc3Q7XHJcbiIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC5qcyc7XHJcblxyXG5jb25zdCBjbGVhckFsbENvbXBsZXRlZFRhc2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGlzdCA9IG5ldyBMaXN0KCk7XHJcbiAgY29uc3QgYnRuQ2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsZWFyJyk7XHJcbiAgYnRuQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGVkJyk7XHJcbiAgICBjb25zdCBkYXRhID0gbGlzdC5yZW1vdmVBbGxDb21wbGV0ZWRUYXNrKCk7XHJcbiAgICBjb21wbGV0ZWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgcGFyZW50LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi10YXNrJyk7XHJcbiAgICBidG5zLmZvckVhY2goKGJ0biwgaSkgPT4ge1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCdpbmRleCcsIGRhdGFbaV0uaW5kZXgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVhckFsbENvbXBsZXRlZFRhc2s7XHJcbiIsImltcG9ydCBlZGl0RGVzY3JpcHRpb24gZnJvbSAnLi9lZGl0SW5Mb2NhbFN0b3JhZ2UuanMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QuanMnO1xyXG5pbXBvcnQgcmVtb3ZlVGFza0Zyb21Mb2NhbFN0b3JhZ2UgZnJvbSAnLi9yZW1vdmVUYXNrRnJvbUxvY2FsU3RvcmFnZS5qcyc7XHJcblxyXG5jb25zdCBjb252ZXJ0VGV4dFRvSW5wdXQgPSAocGFyZW50LCBpbmRleCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBsaXN0ID0gbmV3IExpc3QoKTtcclxuICBjb25zdCBnZXREYXRhID0gbGlzdC5nZXRUYXNrQnlJbmRleChOdW1iZXIoaW5kZXgpKTtcclxuICBpbnB1dC52YWx1ZSA9IGdldERhdGFbMF0uZGVzY3JpcHRpb247XHJcbiAgaW5wdXQuY2xhc3NOYW1lID0gJ2VkaXQtdG9kbyc7XHJcbiAgcGFyZW50Lmluc2VydEJlZm9yZShpbnB1dCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xyXG59O1xyXG5cclxuY29uc3QgZWRpdCA9IChpY29uLCBidG4pID0+IHtcclxuICBjb25zdCBpbmRleCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcbiAgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcpKSB7XHJcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXRyYXNoLWNhbicpO1xyXG4gICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcpO1xyXG4gICAgY29uc3QgcGFyZW50ID0gaWNvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBpZiAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgICAgY29udmVydFRleHRUb0lucHV0KHBhcmVudCwgaW5kZXgpO1xyXG4gICAgICBlZGl0RGVzY3JpcHRpb24oaW5kZXgsIGljb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuY29uc3QgZGVsZXRlSXRlbSA9IChpY29uLCBidG4pID0+IHtcclxuICBjb25zdCBpbmRleCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcbiAgY29uc3QgZGF0YSA9IHJlbW92ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKGluZGV4KTtcclxuICBjb25zdCBwYXJlbnQgPSBidG4ucGFyZW50RWxlbWVudDtcclxuICBwYXJlbnQucmVtb3ZlKCk7XHJcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tdGFzaycpO1xyXG4gIGJ0bnMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XHJcbiAgICBidG4uc2V0QXR0cmlidXRlKCdpbmRleCcsIGRhdGFbaV0uaW5kZXgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZWRpdCwgZGVsZXRlSXRlbSB9O1xyXG4iLCJjb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgdGFzayA9IHVuZGVmaW5lZCkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gIGlmICh0YWcgPT09ICdsaScpIHtcclxuICAgIGVsZW1lbnRzLmNsYXNzTmFtZSA9ICd0by1kby1saXN0LWl0ZW0nO1xyXG4gICAgZWxlbWVudHMuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIHJldHVybiBlbGVtZW50cztcclxuICB9XHJcbiAgaWYgKHRhZyA9PT0gJ2lucHV0Jykge1xyXG4gICAgZWxlbWVudHMudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICBlbGVtZW50cy52YWx1ZSA9IHRhc2suaW5kZXg7XHJcbiAgICBlbGVtZW50cy5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XHJcbiAgICAvLyBlbGVtZW50cy5kcmFnZ2FibGUgPSBmYWxzZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRzLmRyYWdnYWJsZSk7XHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgfVxyXG4gIGlmICh0YWcgPT09ICdzcGFuJykge1xyXG4gICAgZWxlbWVudHMuaW5uZXJIVE1MID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgIGlmICh0YXNrLmNvbXBsZXRlZCkgZWxlbWVudHMuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgfVxyXG4gIGlmICh0YWcgPT09ICdhJykge1xyXG4gICAgZWxlbWVudHMuaHJlZiA9ICcjJztcclxuICAgIGVsZW1lbnRzLmNsYXNzTmFtZSA9ICdidG4tdGFzayc7XHJcbiAgICBlbGVtZW50cy5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgdGFzay5pbmRleCk7XHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgfVxyXG4gIGlmICh0YWcgPT09ICdpJykge1xyXG4gICAgZWxlbWVudHMuY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsJztcclxuICAgIHJldHVybiBlbGVtZW50cztcclxuICB9XHJcbiAgcmV0dXJuIGVsZW1lbnRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcclxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50LmpzJztcclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2sgPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IGxpID0gY3JlYXRlRWxlbWVudCgnbGknLCB0YXNrKTtcclxuICBjb25zdCBhID0gY3JlYXRlRWxlbWVudCgnYScsIHRhc2spO1xyXG4gIGNvbnN0IGkgPSBjcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB0YXNrKTtcclxuICBjb25zdCBzcGFuID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHRhc2spO1xyXG4gIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICBsaS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgYS5hcHBlbmRDaGlsZChpKTtcclxuICBsaS5hcHBlbmRDaGlsZChhKTtcclxuICByZXR1cm4geyBsaSwgYSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcclxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0LmpzJztcclxuXHJcbmNvbnN0IGRyYWdnZWRJdGVtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XHJcbiAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG5cclxuICBsZXQgZHJhZ2dlZEl0ZW0gPSBudWxsO1xyXG4gIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgIGRyYWdnZWRJdGVtID0gZS50YXJnZXQ7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuaW5uZXJIVE1MKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xyXG4gIH0pO1xyXG4gIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgZHJvcFRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XHJcbiAgICBjb25zdCBpbmRleCA9IGRyb3BUYXJnZXQucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcclxuICAgIGNvbnN0IGluZGV4MiA9IGRyYWdnZWRJdGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcbiAgICBjb25zdCBsaXN0ID0gbmV3IExpc3QoKTtcclxuICAgIGlmIChkcm9wVGFyZ2V0ICYmIGRyYWdnZWRJdGVtICE9PSBkcm9wVGFyZ2V0KSB7XHJcbiAgICAgIGxpc3QuVXBkYXRlZEluZGV4V2hlbkRyYWdJdGVtKGluZGV4LCBpbmRleDIpO1xyXG4gICAgICBkcm9wVGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaW5kZXgyKTtcclxuICAgICAgZHJhZ2dlZEl0ZW0ucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpbmRleCk7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZHJvcFRhcmdldC5iZWZvcmUodGVtcCk7XHJcbiAgICAgIGRyYWdnZWRJdGVtLmJlZm9yZShkcm9wVGFyZ2V0KTtcclxuICAgICAgdGVtcC5yZXBsYWNlV2l0aChkcmFnZ2VkSXRlbSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZHJhZ2dlZEl0ZW07XHJcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudC5qcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC5qcyc7XHJcblxyXG5jb25zdCBlZGl0RGVzY3JpcHRpb24gPSAoaW5kZXgsIGljb24pID0+IHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8nKTtcclxuICBjb25zdCBsaXN0ID0gbmV3IExpc3QoKTtcclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBsaXN0LlVwZGF0ZURlc2NyaXB0aW9uVGFzayhOdW1iZXIoaW5kZXgpLCBpbnB1dC52YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSBsaXN0LmdldFRhc2tCeUluZGV4KE51bWJlcihpbmRleCkpO1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSBpbnB1dC5wYXJlbnROb2RlO1xyXG4gICAgICBpbnB1dC5yZW1vdmUoKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBjb25zdCBpbnB1dENoZWNrID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB0YXNrKTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB0YXNrKTtcclxuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXRDaGVjayk7XHJcbiAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGxhYmVsLCBwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtZWxsaXBzaXMtdmVydGljYWwnKTtcclxuICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS10cmFzaC1jYW4nKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZWRpdERlc2NyaXB0aW9uO1xyXG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QuanMnO1xyXG5cclxuY29uc3QgZXZlbnRDb21wbGV0ZSA9ICgpID0+IHtcclxuICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8tbGlzdC1pdGVtJyk7XHJcbiAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0ID0gbmV3IExpc3QoKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcbiAgICAgIGNvbnN0IHNwYW4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgaWYgKHNwYW4pIHtcclxuICAgICAgICBzcGFuLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgIGlmIChzcGFuLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGVkJykpIHtcclxuICAgICAgICAgIGxpc3QuVXBkYXRlQ29tcGxldGVUYXNrKE51bWJlcihpbmRleCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsaXN0LlVwZGF0ZVVuQ29tcGxldGVUYXNrKE51bWJlcihpbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRFdmVudENvbXBsZXRlID0gKGl0ZW0pID0+IHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgIGNvbnN0IGxpc3QgPSBuZXcgTGlzdCgpO1xyXG4gICAgY29uc3QgaW5kZXggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcbiAgICBjb25zdCBzcGFuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICBpZiAoc3Bhbikge1xyXG4gICAgICBzcGFuLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICBpZiAoc3Bhbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlZCcpKSB7XHJcbiAgICAgICAgbGlzdC5VcGRhdGVDb21wbGV0ZVRhc2soTnVtYmVyKGluZGV4KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdC5VcGRhdGVVbkNvbXBsZXRlVGFzayhOdW1iZXIoaW5kZXgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5leHBvcnQgeyBldmVudENvbXBsZXRlLCBhZGRFdmVudENvbXBsZXRlIH07XHJcbiIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vY3JlYXRlVGFzay5qcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC5qcyc7XHJcblxyXG5jb25zdCBpdGVyYXRlVGFza3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgdW5vcmRlcmRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QgdWwnKTtcclxuICBjb25zdCBsaXN0cyA9IG5ldyBMaXN0KCk7XHJcblxyXG4gIGNvbnN0IHNvcnRlZExpc3QgPSBsaXN0cy5nZXRMb2NhbFN0b3JhZ2UoKS5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XHJcbiAgc29ydGVkTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCB7IGxpIH0gPSBjcmVhdGVUYXNrKHRhc2spO1xyXG4gICAgdW5vcmRlcmRMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdGVUYXNrcztcclxuIiwiY2xhc3MgTGlzdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcclxuICB9XHJcblxyXG4gIGdldExvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhdmVkbGlzdERhdGEgPSB0aGlzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0cy1kYXRhJyk7XHJcbiAgICBjb25zdCBkYXRhID0gc2F2ZWRsaXN0RGF0YSA/IEpTT04ucGFyc2Uoc2F2ZWRsaXN0RGF0YSkgOiBbXTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcblxyXG4gIHNldExvY2FsU3RvcmFnZSA9IChkYXRhKSA9PiB7XHJcbiAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0cy1kYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH07XHJcblxyXG4gIGdldFRhc2tCeUluZGV4ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKS5maWx0ZXIoKGUpID0+IGUuaW5kZXggPT09IE51bWJlcihpZCkpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfTtcclxuXHJcbiAgVXBkYXRlQ29tcGxldGVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIGRhdGEuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5pbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICBlLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgVXBkYXRlVW5Db21wbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgZGF0YS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAgIGUuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgVXBkYXRlRGVzY3JpcHRpb25UYXNrID0gKGluZGV4LCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0TG9jYWxTdG9yYWdlKCk7XHJcbiAgICBkYXRhLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgaWYgKGUuaW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgICAgZS5kZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJlbW92ZUxvY2FsU3RvcmFnZWxpc3REYXRhID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKS5maWx0ZXIoKGUpID0+IGUuaW5kZXggIT09IGluZGV4KTtcclxuICAgIGRhdGEuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICBlLmluZGV4ID0gaSArIDE7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcblxyXG4gIHJlbW92ZUFsbENvbXBsZXRlZFRhc2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKS5maWx0ZXIoKGUpID0+ICFlLmNvbXBsZXRlZCk7XHJcbiAgICBkYXRhLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgZS5pbmRleCA9IGkgKyAxO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldExvY2FsU3RvcmFnZShkYXRhKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcblxyXG4gIFVwZGF0ZWRJbmRleFdoZW5EcmFnSXRlbSA9IChpbmRleCwgaW5kZXgyKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIGNvbnN0IGluZGV4MURhdGEgPSBkYXRhLmZpbmQoKGUpID0+IGUuaW5kZXggPT09IE51bWJlcihpbmRleCkpO1xyXG4gICAgY29uc3QgaW5kZXgyRGF0YSA9IGRhdGEuZmluZCgoZSkgPT4gZS5pbmRleCA9PT0gTnVtYmVyKGluZGV4MikpO1xyXG5cclxuICAgIGlmIChpbmRleDFEYXRhICYmIGluZGV4MkRhdGEpIHtcclxuICAgICAgY29uc3QgdGVtcEluZGV4ID0gaW5kZXgxRGF0YS5pbmRleDtcclxuICAgICAgaW5kZXgxRGF0YS5pbmRleCA9IGluZGV4MkRhdGEuaW5kZXg7XHJcbiAgICAgIGluZGV4MkRhdGEuaW5kZXggPSB0ZW1wSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoZGF0YSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9O1xyXG5cclxuICBhZGRUYXNrVG9MaXN0ID0gKGxpc3REZXRhaWxzKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIGxpc3REZXRhaWxzLmluZGV4ID0gZGF0YS5sZW5ndGggKyAxO1xyXG4gICAgZGF0YS5wdXNoKGxpc3REZXRhaWxzKTtcclxuICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKGRhdGEpO1xyXG4gICAgcmV0dXJuIGxpc3REZXRhaWxzO1xyXG4gIH07XHJcblxyXG4gIHJlbW92ZVRhc2tGcm9tTGlzdCA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVtb3ZlTG9jYWxTdG9yYWdlbGlzdERhdGEoaW5kZXgpO1xyXG4gICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoZGF0YSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iLCJpbXBvcnQgeyBlZGl0LCBkZWxldGVJdGVtIH0gZnJvbSAnLi9jbGlja0NvdW50LmpzJztcclxuXHJcbmNvbnN0IGJ1dHRvbkFjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25UYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tdGFzaycpO1xyXG5cclxuICBidXR0b25UYXNrcy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgaWNvbiA9IGJ0bi5xdWVyeVNlbGVjdG9yKCdpJyk7XHJcbiAgICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucygnZmEtdHJhc2gtY2FuJykpIHtcclxuICAgICAgICBkZWxldGVJdGVtKGljb24sIGJ0bik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcpKSB7XHJcbiAgICAgICAgZWRpdChpY29uLCBidG4pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgYWRkTmV3QWN0aW9uV2hlblRhc2tBZGRlZCA9IChidG4pID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaWNvbiA9IGJ0bi5xdWVyeVNlbGVjdG9yKCdpJyk7XHJcbiAgICBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXRyYXNoLWNhbicpKSB7XHJcbiAgICAgIGRlbGV0ZUl0ZW0oaWNvbiwgYnRuKTtcclxuICAgIH1cclxuICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucygnZmEtZWxsaXBzaXMtdmVydGljYWwnKSkge1xyXG4gICAgICBlZGl0KGljb24sIGJ0bik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBidXR0b25BY3Rpb24sIGFkZE5ld0FjdGlvbldoZW5UYXNrQWRkZWQgfTtcclxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0LmpzJztcclxuXHJcbmNvbnN0IHJlbW92ZVRhc2tGcm9tTG9jYWxTdG9yYWdlID0gKGluZGV4KSA9PiB7XHJcbiAgY29uc3QgbGlzdCA9IG5ldyBMaXN0KCk7XHJcbiAgY29uc3QgZGF0YSA9IGxpc3QucmVtb3ZlVGFza0Zyb21MaXN0KE51bWJlcihpbmRleCkpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlVGFza0Zyb21Mb2NhbFN0b3JhZ2U7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==