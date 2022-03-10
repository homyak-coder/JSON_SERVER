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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_userServise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userServise */ \"./src/modules/userServise.js\");\n/* harmony import */ var _modules_addUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addUser */ \"./src/modules/addUser.js\");\n\r\n\r\n\r\n\r\nwindow.userServise = new _modules_userServise__WEBPACK_IMPORTED_MODULE_1__.UserServise\r\n\r\nuserServise.getUsers().then(data => {\r\n    ;(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data)\r\n})\r\n;(0,_modules_addUser__WEBPACK_IMPORTED_MODULE_2__.addUser)()\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUser.js":
/*!********************************!*\
  !*** ./src/modules/addUser.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUser\": () => (/* binding */ addUser)\n/* harmony export */ });\nconst addUser = () => {\n    const form = document.querySelector('form')\n    const nameInput = form.querySelector('#form-name')\n    const emailInput = form.querySelector('#form-email')\n    const childrenInput = form.querySelector('#form-children')\n\n    form.addEventListener('submit', (e) => {\n        e.preventDefault()\n\n        console.log(nameInput.value);\n        console.log(emailInput.value);\n        console.log(childrenInput.checked);\n    })\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUser.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\n    const tbody = document.getElementById('table-body');\n\n\n    console.log(tbody)\n    users.forEach(user => {\n        tbody.insertAdjacentHTML('beforeend', `\n        <tr>\n                                <th scope=\"row\">${user.id}</th>\n                                <td>${user.name}</td>\n                                <td>${user.email}</td>\n                                <td>${user.children ? 'Есть' : 'Нет'}</td>\n                                <td>\n                                    <div class=\"form-check form-switch\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\n                                            id=\"form-children\" ${user.permissions ? 'checked' : ''}>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\n                                        <button type=\"button\" class=\"btn btn-warning\">\n                                            <i class=\"bi-pencil-square\"></i>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-danger\">\n                                            <i class=\"bi-person-x\"></i>\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>`)\n    })\n}\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/userServise.js":
/*!************************************!*\
  !*** ./src/modules/userServise.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserServise\": () => (/* binding */ UserServise)\n/* harmony export */ });\nclass UserServise {\n\n    getUsers() {\n        return fetch(' http://localhost:4545/users').then(response => response.json())\n    }\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userServise.js?");

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
/******/ 			// no module.id needed
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