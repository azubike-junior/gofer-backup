"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post-errand",{

/***/ "./components/ProgressBar/index.tsx":
/*!******************************************!*\
  !*** ./components/ProgressBar/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StepProgressBar\": function() { return /* binding */ StepProgressBar; },\n/* harmony export */   \"default\": function() { return /* binding */ StepProgressBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst steps = [\n    {\n        label: \"Step 1\"\n    },\n    {\n        label: \"Step 2\"\n    },\n    {\n        label: \"Step 3\"\n    },\n    {\n        label: \"Step 4\"\n    },\n    {\n        label: \"step 5\"\n    }\n];\nconst CheckIcon = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"errandIcons/checkicon.svg\",\n        className: \"\",\n        alt: \"check\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alatisse Omolayo\\\\Desktop\\\\GOFER NEW\\\\ErrandAppWeb\\\\components\\\\ProgressBar\\\\index.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n_c = CheckIcon;\nfunction StepProgressBar() {\n    _s();\n    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function handleStepClick(stepIndex) {\n        setActiveStep(stepIndex);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center w-full max-w-2xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center w-full\",\n                children: steps.map((step, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center w-12 h-12 text-gray-800 rounded-full \".concat(activeStep >= index ? \"bg-blue-500 text-white shadow\" : \"bg-gray-300\"),\n                                onClick: ()=>handleStepClick(index),\n                                children: activeStep >= index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alatisse Omolayo\\\\Desktop\\\\GOFER NEW\\\\ErrandAppWeb\\\\components\\\\ProgressBar\\\\index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 41\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alatisse Omolayo\\\\Desktop\\\\GOFER NEW\\\\ErrandAppWeb\\\\components\\\\ProgressBar\\\\index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, this),\n                            index !== steps.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-1 w-20 bg-gray-300\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alatisse Omolayo\\\\Desktop\\\\GOFER NEW\\\\ErrandAppWeb\\\\components\\\\ProgressBar\\\\index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Alatisse Omolayo\\\\Desktop\\\\GOFER NEW\\\\ErrandAppWeb\\\\components\\\\ProgressBar\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alatisse Omolayo\\\\Desktop\\\\GOFER NEW\\\\ErrandAppWeb\\\\components\\\\ProgressBar\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alatisse Omolayo\\\\Desktop\\\\GOFER NEW\\\\ErrandAppWeb\\\\components\\\\ProgressBar\\\\index.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alatisse Omolayo\\\\Desktop\\\\GOFER NEW\\\\ErrandAppWeb\\\\components\\\\ProgressBar\\\\index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(StepProgressBar, \"cJXWosTT0XUh3gGn3cCcv/Y+Hws=\");\n_c1 = StepProgressBar;\n\nvar _c, _c1;\n$RefreshReg$(_c, \"CheckIcon\");\n$RefreshReg$(_c1, \"StepProgressBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFFeEMsTUFBTUUsUUFBUTtJQUNaO1FBQUVDLE9BQU87SUFBUztJQUNsQjtRQUFFQSxPQUFPO0lBQVM7SUFDbEI7UUFBRUEsT0FBTztJQUFTO0lBQ2xCO1FBQUVBLE9BQU87SUFBUztJQUNsQjtRQUFFQSxPQUFPO0lBQVM7Q0FDbkI7QUFFRCxNQUFNQyxZQUFZLGtCQUNoQiw4REFBQ0M7UUFBSUMsS0FBSTtRQUE0QkMsV0FBVTtRQUFHQyxLQUFJOzs7Ozs7S0FEbERKO0FBSVMsU0FBU0ssa0JBQWtCOztJQUN4QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFFN0MsU0FBU1csZ0JBQWdCQyxTQUFpQixFQUFFO1FBQzFDRixjQUFjRTtJQUNoQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJUCxXQUFVO2tCQUNiLDRFQUFDTztZQUFJUCxXQUFVO3NCQUNiLDRFQUFDTztnQkFBSVAsV0FBVTswQkFDWkwsTUFBTWEsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ2pCLHVEQUFjOzswQ0FDYiw4REFBQ2M7Z0NBQ0NQLFdBQVcseUVBSVYsT0FIQ0csY0FBY08sUUFDVixrQ0FDQSxhQUFhO2dDQUVuQkUsU0FBUyxJQUFNUCxnQkFBZ0JLOzBDQUU5QlAsY0FBY08sdUJBQVMsOERBQUNiOzs7Ozs7Ozs7OzRCQUUxQmEsVUFBVWYsTUFBTWtCLE1BQU0sR0FBRyxtQkFDeEIsOERBQUNOO2dDQUFJUCxXQUFVOzs7Ozs7O3VCQVpFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQmpDLENBQUM7R0FoQ3VCUjtNQUFBQTtBQWtDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyL2luZGV4LnRzeD8zYTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc3RlcHMgPSBbXHJcbiAgeyBsYWJlbDogXCJTdGVwIDFcIiB9LFxyXG4gIHsgbGFiZWw6IFwiU3RlcCAyXCIgfSxcclxuICB7IGxhYmVsOiBcIlN0ZXAgM1wiIH0sXHJcbiAgeyBsYWJlbDogXCJTdGVwIDRcIiB9LFxyXG4gIHsgbGFiZWw6IFwic3RlcCA1XCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IENoZWNrSWNvbiA9ICgpID0+IChcclxuICA8aW1nIHNyYz1cImVycmFuZEljb25zL2NoZWNraWNvbi5zdmdcIiBjbGFzc05hbWU9XCJcIiBhbHQ9XCJjaGVja1wiIC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGVwUHJvZ3Jlc3NCYXIoKSB7XHJcbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN0ZXBDbGljayhzdGVwSW5kZXg6IG51bWJlcikge1xyXG4gICAgc2V0QWN0aXZlU3RlcChzdGVwSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgbWF4LXctMnhsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgIHtzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTEyIGgtMTIgdGV4dC1ncmF5LTgwMCByb3VuZGVkLWZ1bGwgJHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlU3RlcCA+PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHNoYWRvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJnLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3RlcENsaWNrKGluZGV4KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlU3RlcCA+PSBpbmRleCAmJiA8Q2hlY2tJY29uIC8+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtpbmRleCAhPT0gc3RlcHMubGVuZ3RoIC0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMSB3LTIwIGJnLWdyYXktMzAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFN0ZXBQcm9ncmVzc0JhciB9O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0ZXBzIiwibGFiZWwiLCJDaGVja0ljb24iLCJpbWciLCJzcmMiLCJjbGFzc05hbWUiLCJhbHQiLCJTdGVwUHJvZ3Jlc3NCYXIiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsImhhbmRsZVN0ZXBDbGljayIsInN0ZXBJbmRleCIsImRpdiIsIm1hcCIsInN0ZXAiLCJpbmRleCIsIkZyYWdtZW50Iiwib25DbGljayIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProgressBar/index.tsx\n"));

/***/ })

});