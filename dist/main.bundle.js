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







(0,_js_iterateTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

(0,_js_eventComplete_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

(0,_js_draggedItem_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

(0,_js_removeTask_js__WEBPACK_IMPORTED_MODULE_5__.buttonAction)();

(0,_js_addNewTask_js__WEBPACK_IMPORTED_MODULE_4__["default"])();


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
      (0,_eventComplete_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_3__.addNewActionWhenTaskAdded)(a);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewTaskToList);


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
  if (getData.description) input.value = getData.description;
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
  (0,_removeTaskFromLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index);
  const parent = btn.parentElement;
  parent.remove();
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

    if (dropTarget && draggedItem !== dropTarget) {
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventComplete);


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
    let x;
    this.getLocalStorage().forEach((element) => {
      let l = 1;
      let r = this.getLocalStorage().length - 1;
      const mid = Math.floor((l + r) / 2);
      if (element.index === id) {
        x = element;
        return;
      }
      if (element.index < id) l = mid + 1;
      else r = mid - 1;
    });
    return x;
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
  list.removeTaskFromList(Number(index));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTaskFromLocalStorage);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25GK0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBVTtBQUNsQjtBQUNBO0FBQ0EsUUFBUSxvREFBSTtBQUNaO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFVO0FBQ2hCO0FBQ0E7QUFDQSxNQUFNLG9EQUFJO0FBQ1Y7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNtRDs7Ozs7Ozs7Ozs7Ozs7OztBQy9CdEI7QUFDN0I7QUFDQTtBQUNBLG1CQUFtQixnREFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSwwQkFBMEIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL2pzL2FkZE5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvanMvY2xpY2tDb3VudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9qcy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL2pzL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvanMvZHJhZ2dlZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvanMvZWRpdEluTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL2pzL2V2ZW50Q29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvanMvaXRlcmF0ZVRhc2tzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL2pzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvanMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9qcy9yZW1vdmVUYXNrRnJvbUxvY2FsU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAuY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAuY29udGFpbmVyIC5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdC1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwIDEgMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWlucHV0IC5hZGQtdG9kbyB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdC1pbnB1dCAuYWRkLXRvZG86Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdC1pdGVtIC5lZGl0LXRvZG8ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QtaXRlbSAuZWRpdC10b2RvOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QgLnVub3JkZXJlZC1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbltkcmFnZ2FibGVdIHtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxuICAvKiBSZXF1aXJlZCB0byBtYWtlIGVsZW1lbnRzIGRyYWdnYWJsZSBpbiBvbGQgV2ViS2l0ICovXFxyXFxuICAta2h0bWwtdXNlci1kcmFnOiBlbGVtZW50O1xcclxcbiAgLXdlYmtpdC11c2VyLWRyYWc6IGVsZW1lbnQ7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QgLnVub3JkZXJlZC1saXN0IC50by1kby1saXN0LWl0ZW0ge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdCAudW5vcmRlcmVkLWxpc3QgLnRvLWRvLWxpc3QtaXRlbSBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdC1mb290ZXIgLmJ0bi1jbGVhciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QtZm9vdGVyIC5idG4tY2xlYXI6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcMjcxMyc7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsaUJBQWlCOztFQUVqQixzREFBc0Q7RUFDdEQseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC5jb250YWluZXIgLmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAgMSAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QtaW5wdXQgLmFkZC10b2RvIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWlucHV0IC5hZGQtdG9kbzpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWl0ZW0gLmVkaXQtdG9kbyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdC1pdGVtIC5lZGl0LXRvZG86Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdCAudW5vcmRlcmVkLWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuW2RyYWdnYWJsZV0ge1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG4gIC8qIFJlcXVpcmVkIHRvIG1ha2UgZWxlbWVudHMgZHJhZ2dhYmxlIGluIG9sZCBXZWJLaXQgKi9cXHJcXG4gIC1raHRtbC11c2VyLWRyYWc6IGVsZW1lbnQ7XFxyXFxuICAtd2Via2l0LXVzZXItZHJhZzogZWxlbWVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdCAudW5vcmRlcmVkLWxpc3QgLnRvLWRvLWxpc3QtaXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0IC51bm9yZGVyZWQtbGlzdCAudG8tZG8tbGlzdC1pdGVtIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LXNlY3Rpb24gLnRvLWRvLWxpc3QtZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC1zZWN0aW9uIC50by1kby1saXN0LWZvb3RlciAuYnRuLWNsZWFyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3Qtc2VjdGlvbiAudG8tZG8tbGlzdC1mb290ZXIgLmJ0bi1jbGVhcjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ1xcXFwyNzEzJztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBpdGVyYXRlVGFza3MgZnJvbSAnLi9qcy9pdGVyYXRlVGFza3MuanMnO1xyXG5pbXBvcnQgZXZlbnRDb21wbGV0ZSBmcm9tICcuL2pzL2V2ZW50Q29tcGxldGUuanMnO1xyXG5pbXBvcnQgZHJhZ2dlZEl0ZW0gZnJvbSAnLi9qcy9kcmFnZ2VkSXRlbS5qcyc7XHJcbmltcG9ydCBhZGROZXdUYXNrVG9MaXN0IGZyb20gJy4vanMvYWRkTmV3VGFzay5qcyc7XHJcbmltcG9ydCB7IGJ1dHRvbkFjdGlvbiB9IGZyb20gJy4vanMvcmVtb3ZlVGFzay5qcyc7XHJcblxyXG5pdGVyYXRlVGFza3MoKTtcclxuXHJcbmV2ZW50Q29tcGxldGUoKTtcclxuXHJcbmRyYWdnZWRJdGVtKCk7XHJcblxyXG5idXR0b25BY3Rpb24oKTtcclxuXHJcbmFkZE5ld1Rhc2tUb0xpc3QoKTtcclxuIiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jcmVhdGVUYXNrLmpzJztcclxuaW1wb3J0IGV2ZW50Q29tcGxldGUgZnJvbSAnLi9ldmVudENvbXBsZXRlLmpzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0LmpzJztcclxuaW1wb3J0IHsgYWRkTmV3QWN0aW9uV2hlblRhc2tBZGRlZCB9IGZyb20gJy4vcmVtb3ZlVGFzay5qcyc7XHJcblxyXG5jb25zdCBhZGROZXdUYXNrVG9MaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0VG9ETyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpO1xyXG4gIGNvbnN0IHVub3JkZXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0IHVsJyk7XHJcbiAgaW5wdXRUb0RPLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgY29uc3QgbGlzdCA9IG5ldyBMaXN0KCk7XHJcbiAgICAgIGNvbnN0IFRvZG9MaXN0ID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpbnB1dFRvRE8udmFsdWUsXHJcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgdGFzayA9IGxpc3QuYWRkVGFza1RvTGlzdChUb2RvTGlzdCk7XHJcbiAgICAgIGNvbnN0IHsgbGksIGEgfSA9IGNyZWF0ZVRhc2sodGFzayk7XHJcbiAgICAgIHVub3JkZXJkTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgIGlucHV0VG9ETy52YWx1ZSA9ICcnO1xyXG4gICAgICBldmVudENvbXBsZXRlKCk7XHJcbiAgICAgIGFkZE5ld0FjdGlvbldoZW5UYXNrQWRkZWQoYSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGROZXdUYXNrVG9MaXN0O1xyXG4iLCJpbXBvcnQgZWRpdERlc2NyaXB0aW9uIGZyb20gJy4vZWRpdEluTG9jYWxTdG9yYWdlLmpzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0LmpzJztcclxuaW1wb3J0IHJlbW92ZVRhc2tGcm9tTG9jYWxTdG9yYWdlIGZyb20gJy4vcmVtb3ZlVGFza0Zyb21Mb2NhbFN0b3JhZ2UuanMnO1xyXG5cclxuY29uc3QgY29udmVydFRleHRUb0lucHV0ID0gKHBhcmVudCwgaW5kZXgpID0+IHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgbGlzdCA9IG5ldyBMaXN0KCk7XHJcbiAgY29uc3QgZ2V0RGF0YSA9IGxpc3QuZ2V0VGFza0J5SW5kZXgoTnVtYmVyKGluZGV4KSk7XHJcbiAgaWYgKGdldERhdGEuZGVzY3JpcHRpb24pIGlucHV0LnZhbHVlID0gZ2V0RGF0YS5kZXNjcmlwdGlvbjtcclxuICBpbnB1dC5jbGFzc05hbWUgPSAnZWRpdC10b2RvJztcclxuICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGlucHV0LCBwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbn07XHJcblxyXG5jb25zdCBlZGl0ID0gKGljb24sIGJ0bikgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gYnRuLmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcclxuICBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsJykpIHtcclxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtdHJhc2gtY2FuJyk7XHJcbiAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsJyk7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBpY29uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGlmIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICBjb252ZXJ0VGV4dFRvSW5wdXQocGFyZW50LCBpbmRleCk7XHJcbiAgICAgIGVkaXREZXNjcmlwdGlvbihpbmRleCwgaWNvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5jb25zdCBkZWxldGVJdGVtID0gKGljb24sIGJ0bikgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gYnRuLmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcclxuICByZW1vdmVUYXNrRnJvbUxvY2FsU3RvcmFnZShpbmRleCk7XHJcbiAgY29uc3QgcGFyZW50ID0gYnRuLnBhcmVudEVsZW1lbnQ7XHJcbiAgcGFyZW50LnJlbW92ZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZWRpdCwgZGVsZXRlSXRlbSB9O1xyXG4iLCJjb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgdGFzayA9IHVuZGVmaW5lZCkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gIGlmICh0YWcgPT09ICdsaScpIHtcclxuICAgIGVsZW1lbnRzLmNsYXNzTmFtZSA9ICd0by1kby1saXN0LWl0ZW0nO1xyXG4gICAgZWxlbWVudHMuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIHJldHVybiBlbGVtZW50cztcclxuICB9XHJcbiAgaWYgKHRhZyA9PT0gJ2lucHV0Jykge1xyXG4gICAgZWxlbWVudHMudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICBlbGVtZW50cy52YWx1ZSA9IHRhc2suaW5kZXg7XHJcbiAgICBlbGVtZW50cy5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XHJcbiAgICAvLyBlbGVtZW50cy5kcmFnZ2FibGUgPSBmYWxzZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRzLmRyYWdnYWJsZSk7XHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgfVxyXG4gIGlmICh0YWcgPT09ICdzcGFuJykge1xyXG4gICAgZWxlbWVudHMuaW5uZXJIVE1MID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgIGlmICh0YXNrLmNvbXBsZXRlZCkgZWxlbWVudHMuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgfVxyXG4gIGlmICh0YWcgPT09ICdhJykge1xyXG4gICAgZWxlbWVudHMuaHJlZiA9ICcjJztcclxuICAgIGVsZW1lbnRzLmNsYXNzTmFtZSA9ICdidG4tdGFzayc7XHJcbiAgICBlbGVtZW50cy5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgdGFzay5pbmRleCk7XHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgfVxyXG4gIGlmICh0YWcgPT09ICdpJykge1xyXG4gICAgZWxlbWVudHMuY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsJztcclxuICAgIHJldHVybiBlbGVtZW50cztcclxuICB9XHJcbiAgcmV0dXJuIGVsZW1lbnRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcclxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50LmpzJztcclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2sgPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IGxpID0gY3JlYXRlRWxlbWVudCgnbGknLCB0YXNrKTtcclxuICBjb25zdCBhID0gY3JlYXRlRWxlbWVudCgnYScsIHRhc2spO1xyXG4gIGNvbnN0IGkgPSBjcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB0YXNrKTtcclxuICBjb25zdCBzcGFuID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHRhc2spO1xyXG4gIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICBsaS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgYS5hcHBlbmRDaGlsZChpKTtcclxuICBsaS5hcHBlbmRDaGlsZChhKTtcclxuICByZXR1cm4geyBsaSwgYSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcclxuIiwiY29uc3QgZHJhZ2dlZEl0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcblxuICBsZXQgZHJhZ2dlZEl0ZW0gPSBudWxsO1xuICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gICAgZHJhZ2dlZEl0ZW0gPSBlLnRhcmdldDtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuaW5uZXJIVE1MKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gIH0pO1xuICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gICAgY29uc3QgZHJvcFRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG5cbiAgICBpZiAoZHJvcFRhcmdldCAmJiBkcmFnZ2VkSXRlbSAhPT0gZHJvcFRhcmdldCkge1xuICAgICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZHJvcFRhcmdldC5iZWZvcmUodGVtcCk7XG4gICAgICBkcmFnZ2VkSXRlbS5iZWZvcmUoZHJvcFRhcmdldCk7XG4gICAgICB0ZW1wLnJlcGxhY2VXaXRoKGRyYWdnZWRJdGVtKTtcbiAgICB9XG4gIH0pO1xuICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBkcmFnZ2VkSXRlbTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudC5qcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC5qcyc7XHJcblxyXG5jb25zdCBlZGl0RGVzY3JpcHRpb24gPSAoaW5kZXgsIGljb24pID0+IHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8nKTtcclxuICBjb25zdCBsaXN0ID0gbmV3IExpc3QoKTtcclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBsaXN0LlVwZGF0ZURlc2NyaXB0aW9uVGFzayhOdW1iZXIoaW5kZXgpLCBpbnB1dC52YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSBsaXN0LmdldFRhc2tCeUluZGV4KE51bWJlcihpbmRleCkpO1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSBpbnB1dC5wYXJlbnROb2RlO1xyXG4gICAgICBpbnB1dC5yZW1vdmUoKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBjb25zdCBpbnB1dENoZWNrID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB0YXNrKTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB0YXNrKTtcclxuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXRDaGVjayk7XHJcbiAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGxhYmVsLCBwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtZWxsaXBzaXMtdmVydGljYWwnKTtcclxuICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS10cmFzaC1jYW4nKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZWRpdERlc2NyaXB0aW9uO1xyXG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QuanMnO1xyXG5cclxuY29uc3QgZXZlbnRDb21wbGV0ZSA9ICgpID0+IHtcclxuICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8tbGlzdC1pdGVtJyk7XHJcbiAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0ID0gbmV3IExpc3QoKTtcclxuXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdhJykuZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xyXG4gICAgICBjb25zdCBzcGFuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGlmIChzcGFuKSB7XHJcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICBpZiAoc3Bhbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlZCcpKSB7XHJcbiAgICAgICAgICBsaXN0LlVwZGF0ZUNvbXBsZXRlVGFzayhOdW1iZXIoaW5kZXgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGlzdC5VcGRhdGVVbkNvbXBsZXRlVGFzayhOdW1iZXIoaW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBldmVudENvbXBsZXRlO1xyXG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZVRhc2suanMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QuanMnO1xyXG5cclxuY29uc3QgaXRlcmF0ZVRhc2tzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVub3JkZXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0IHVsJyk7XHJcbiAgY29uc3QgbGlzdHMgPSBuZXcgTGlzdCgpO1xyXG5cclxuICBjb25zdCBzb3J0ZWRMaXN0ID0gbGlzdHMuZ2V0TG9jYWxTdG9yYWdlKCkuc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xyXG4gIHNvcnRlZExpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgY29uc3QgeyBsaSB9ID0gY3JlYXRlVGFzayh0YXNrKTtcclxuICAgIHVub3JkZXJkTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpdGVyYXRlVGFza3M7XHJcbiIsImNsYXNzIExpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5sb2NhbFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2U7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZGxpc3REYXRhID0gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHMtZGF0YScpO1xyXG4gICAgY29uc3QgZGF0YSA9IHNhdmVkbGlzdERhdGEgPyBKU09OLnBhcnNlKHNhdmVkbGlzdERhdGEpIDogW107XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9O1xyXG5cclxuICBzZXRMb2NhbFN0b3JhZ2UgPSAoZGF0YSkgPT4ge1xyXG4gICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdHMtZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB9O1xyXG5cclxuICBnZXRUYXNrQnlJbmRleCA9IChpZCkgPT4ge1xyXG4gICAgbGV0IHg7XHJcbiAgICB0aGlzLmdldExvY2FsU3RvcmFnZSgpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgbGV0IGwgPSAxO1xyXG4gICAgICBsZXQgciA9IHRoaXMuZ2V0TG9jYWxTdG9yYWdlKCkubGVuZ3RoIC0gMTtcclxuICAgICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcigobCArIHIpIC8gMik7XHJcbiAgICAgIGlmIChlbGVtZW50LmluZGV4ID09PSBpZCkge1xyXG4gICAgICAgIHggPSBlbGVtZW50O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZWxlbWVudC5pbmRleCA8IGlkKSBsID0gbWlkICsgMTtcclxuICAgICAgZWxzZSByID0gbWlkIC0gMTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHg7XHJcbiAgfTtcclxuXHJcbiAgVXBkYXRlQ29tcGxldGVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIGRhdGEuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5pbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICBlLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgVXBkYXRlVW5Db21wbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgZGF0YS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAgIGUuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgVXBkYXRlRGVzY3JpcHRpb25UYXNrID0gKGluZGV4LCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0TG9jYWxTdG9yYWdlKCk7XHJcbiAgICBkYXRhLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgaWYgKGUuaW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgICAgZS5kZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJlbW92ZUxvY2FsU3RvcmFnZWxpc3REYXRhID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKS5maWx0ZXIoKGUpID0+IGUuaW5kZXggIT09IGluZGV4KTtcclxuICAgIGRhdGEuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICBlLmluZGV4ID0gaSArIDE7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcblxyXG4gIGFkZFRhc2tUb0xpc3QgPSAobGlzdERldGFpbHMpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgbGlzdERldGFpbHMuaW5kZXggPSBkYXRhLmxlbmd0aCArIDE7XHJcbiAgICBkYXRhLnB1c2gobGlzdERldGFpbHMpO1xyXG4gICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoZGF0YSk7XHJcbiAgICByZXR1cm4gbGlzdERldGFpbHM7XHJcbiAgfTtcclxuXHJcbiAgcmVtb3ZlVGFza0Zyb21MaXN0ID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZW1vdmVMb2NhbFN0b3JhZ2VsaXN0RGF0YShpbmRleCk7XHJcbiAgICB0aGlzLnNldExvY2FsU3RvcmFnZShkYXRhKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iLCJpbXBvcnQgeyBlZGl0LCBkZWxldGVJdGVtIH0gZnJvbSAnLi9jbGlja0NvdW50LmpzJztcclxuXHJcbmNvbnN0IGJ1dHRvbkFjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25UYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tdGFzaycpO1xyXG5cclxuICBidXR0b25UYXNrcy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgaWNvbiA9IGJ0bi5xdWVyeVNlbGVjdG9yKCdpJyk7XHJcbiAgICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucygnZmEtdHJhc2gtY2FuJykpIHtcclxuICAgICAgICBkZWxldGVJdGVtKGljb24sIGJ0bik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcpKSB7XHJcbiAgICAgICAgZWRpdChpY29uLCBidG4pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgYWRkTmV3QWN0aW9uV2hlblRhc2tBZGRlZCA9IChidG4pID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaWNvbiA9IGJ0bi5xdWVyeVNlbGVjdG9yKCdpJyk7XHJcbiAgICBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXRyYXNoLWNhbicpKSB7XHJcbiAgICAgIGRlbGV0ZUl0ZW0oaWNvbiwgYnRuKTtcclxuICAgIH1cclxuICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucygnZmEtZWxsaXBzaXMtdmVydGljYWwnKSkge1xyXG4gICAgICBlZGl0KGljb24sIGJ0bik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBidXR0b25BY3Rpb24sIGFkZE5ld0FjdGlvbldoZW5UYXNrQWRkZWQgfTtcclxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0LmpzJztcclxuXHJcbmNvbnN0IHJlbW92ZVRhc2tGcm9tTG9jYWxTdG9yYWdlID0gKGluZGV4KSA9PiB7XHJcbiAgY29uc3QgbGlzdCA9IG5ldyBMaXN0KCk7XHJcbiAgbGlzdC5yZW1vdmVUYXNrRnJvbUxpc3QoTnVtYmVyKGluZGV4KSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW1vdmVUYXNrRnJvbUxvY2FsU3RvcmFnZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9