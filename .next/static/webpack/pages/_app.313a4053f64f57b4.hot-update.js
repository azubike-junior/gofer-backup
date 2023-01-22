"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_without_properties.mjs */ \"./node_modules/@swc/helpers/src/_object_without_properties.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-phone-input-2/lib/style.css */ \"./node_modules/react-phone-input-2/lib/style.css\");\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ */ \"./components/index.tsx\");\n/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/store */ \"./services/store.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\n//Theme Customization\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.extendTheme)({\n    styles: {\n        global: function() {\n            return {\n                body: {\n                    bg: \"#E5E5E5\"\n                }\n            };\n        }\n    },\n    colors: {\n        //ipcolor-imalipay colorcode\n        ipcolor: \"#014342\",\n        inputcolor: \"#7C7C7C\",\n        placholdercolor: \"#9B9B9B\",\n        selectcolor: \"f2f2f2\",\n        divider: \"#cecece\",\n        error: \"#F8E7E7\",\n        dashborder: \"#D9D9D9\",\n        ipcolor2: \"#DDDDDD\",\n        buttoncolor: \"#101010\",\n        review: \"#FFF2D8\",\n        success: \"#E4F2D1\",\n        almostBlack: \"#101010\",\n        C4C4C4: \"#c4c4c4\"\n    },\n    components: {\n        Button: {\n            variants: {\n                solid: function(props) {\n                    return {\n                        bg: props.colorMode === \"light\" ? \"ipcolor\" : \"null\"\n                    };\n                }\n            },\n            defaultProps: {\n                colorScheme: \"ipcolor\"\n            }\n        }\n    },\n    space: {}\n});\nfunction App(_param) {\n    var Component = _param.Component, pageProps = _param.pageProps, appProps = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_param, [\n        \"Component\",\n        \"pageProps\"\n    ]);\n    var isLayoutDashboard = [\n        \"/overview\"\n    ].includes(appProps.router.pathname);\n    var LayoutComponent = isLayoutDashboard ? _components___WEBPACK_IMPORTED_MODULE_4__.Layout : (react__WEBPACK_IMPORTED_MODULE_1___default().Fragment);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _services_store__WEBPACK_IMPORTED_MODULE_5__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ChakraProvider, {\n            theme: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutComponent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, pageProps), void 0, false, {\n                    fileName: \"/Users/mac/Documents/Gofer-web/pages/_app.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/Gofer-web/pages/_app.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Documents/Gofer-web/pages/_app.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Documents/Gofer-web/pages/_app.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUl5QjtBQUVBO0FBQ2lCO0FBQ0o7QUFDQztBQUNFO0FBQ1g7QUFFOUIscUJBQXFCO0FBQ3JCLElBQU1NLFFBQVFMLDZEQUFXQSxDQUFDO0lBQ3hCTSxRQUFRO1FBQ05DLFFBQVE7bUJBQU87Z0JBQ2JDLE1BQU07b0JBQ0pDLElBQUk7Z0JBQ047WUFDRjs7SUFDRjtJQUNBQyxRQUFRO1FBQ04sNEJBQTRCO1FBQzVCQyxTQUFTO1FBQ1RDLFlBQVk7UUFDWkMsaUJBQWlCO1FBQ2pCQyxhQUFhO1FBQ2JDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsYUFBYTtRQUNiQyxRQUFRO0lBQ1Y7SUFDQUMsWUFBWTtRQUNWQyxRQUFRO1lBQ05DLFVBQVU7Z0JBQ1JDLE9BQU8sU0FBQ0M7MkJBQStCO3dCQUNyQ25CLElBQUltQixNQUFNQyxTQUFTLEtBQUssVUFBVSxZQUFZLE1BQU07b0JBQ3REOztZQUNGO1lBQ0FDLGNBQWM7Z0JBQ1pDLGFBQWE7WUFDZjtRQUNGO0lBQ0Y7SUFDQUMsT0FBTyxDQUFDO0FBQ1Y7QUFFZSxTQUFTQyxJQUFJLFFBQWlEO1FBQS9DQyxZQUFGLE9BQUVBLFdBQVdDLFlBQWIsT0FBYUEsV0FBY0MsV0FBQUEsMEZBQUFBLENBQTNCO1FBQUVGO1FBQVdDOztJQUN2QyxJQUFNRSxvQkFBb0I7UUFBQztLQUFZLENBQUNDLFFBQVEsQ0FBQ0YsU0FBU0csTUFBTSxDQUFDQyxRQUFRO0lBRXpFLElBQU1DLGtCQUFrQkosb0JBQW9CbEMsZ0RBQU1BLEdBQUdGLHVEQUFjO0lBRW5FLHFCQUNFLDhEQUFDQyxpREFBUUE7UUFBQ0UsT0FBT0Esa0RBQUtBO2tCQUNwQiw0RUFBQ0wsNERBQWNBO1lBQUNNLE9BQU9BO3NCQUNyQiw0RUFBQ29DOzBCQUNDLDRFQUFDUCxXQUFBQSw4RUFBQUEsS0FBY0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCLENBQUM7S0FkdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hha3JhUHJvdmlkZXIsXG4gIGV4dGVuZFRoZW1lLFxuICBTdHlsZUZ1bmN0aW9uUHJvcHMsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJ3JlYWN0LXBob25lLWlucHV0LTIvbGliL3N0eWxlLmNzcydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzLydcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vc2VydmljZXMvc3RvcmUnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuLy9UaGVtZSBDdXN0b21pemF0aW9uXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgc3R5bGVzOiB7XG4gICAgZ2xvYmFsOiAoKSA9PiAoe1xuICAgICAgYm9keToge1xuICAgICAgICBiZzogJyNFNUU1RTUnLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgLy9pcGNvbG9yLWltYWxpcGF5IGNvbG9yY29kZVxuICAgIGlwY29sb3I6ICcjMDE0MzQyJyxcbiAgICBpbnB1dGNvbG9yOiAnIzdDN0M3QycsXG4gICAgcGxhY2hvbGRlcmNvbG9yOiAnIzlCOUI5QicsXG4gICAgc2VsZWN0Y29sb3I6ICdmMmYyZjInLFxuICAgIGRpdmlkZXI6ICcjY2VjZWNlJyxcbiAgICBlcnJvcjogJyNGOEU3RTcnLFxuICAgIGRhc2hib3JkZXI6ICcjRDlEOUQ5JyxcbiAgICBpcGNvbG9yMjogJyNEREREREQnLFxuICAgIGJ1dHRvbmNvbG9yOiAnIzEwMTAxMCcsXG4gICAgcmV2aWV3OiAnI0ZGRjJEOCcsXG4gICAgc3VjY2VzczogJyNFNEYyRDEnLFxuICAgIGFsbW9zdEJsYWNrOiAnIzEwMTAxMCcsXG4gICAgQzRDNEM0OiAnI2M0YzRjNCcsXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBCdXR0b246IHtcbiAgICAgIHZhcmlhbnRzOiB7XG4gICAgICAgIHNvbGlkOiAocHJvcHM6IFN0eWxlRnVuY3Rpb25Qcm9wcykgPT4gKHtcbiAgICAgICAgICBiZzogcHJvcHMuY29sb3JNb2RlID09PSAnbGlnaHQnID8gJ2lwY29sb3InIDogJ251bGwnLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29sb3JTY2hlbWU6ICdpcGNvbG9yJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc3BhY2U6IHt9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIC4uLmFwcFByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IGlzTGF5b3V0RGFzaGJvYXJkID0gWycvb3ZlcnZpZXcnXS5pbmNsdWRlcyhhcHBQcm9wcy5yb3V0ZXIucGF0aG5hbWUpXG5cbiAgY29uc3QgTGF5b3V0Q29tcG9uZW50ID0gaXNMYXlvdXREYXNoYm9hcmQgPyBMYXlvdXQgOiBSZWFjdC5GcmFnbWVudFxuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPExheW91dENvbXBvbmVudD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0Q29tcG9uZW50PlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJleHRlbmRUaGVtZSIsIlJlYWN0IiwiUHJvdmlkZXIiLCJMYXlvdXQiLCJzdG9yZSIsInRoZW1lIiwic3R5bGVzIiwiZ2xvYmFsIiwiYm9keSIsImJnIiwiY29sb3JzIiwiaXBjb2xvciIsImlucHV0Y29sb3IiLCJwbGFjaG9sZGVyY29sb3IiLCJzZWxlY3Rjb2xvciIsImRpdmlkZXIiLCJlcnJvciIsImRhc2hib3JkZXIiLCJpcGNvbG9yMiIsImJ1dHRvbmNvbG9yIiwicmV2aWV3Iiwic3VjY2VzcyIsImFsbW9zdEJsYWNrIiwiQzRDNEM0IiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsInZhcmlhbnRzIiwic29saWQiLCJwcm9wcyIsImNvbG9yTW9kZSIsImRlZmF1bHRQcm9wcyIsImNvbG9yU2NoZW1lIiwic3BhY2UiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcHBQcm9wcyIsImlzTGF5b3V0RGFzaGJvYXJkIiwiaW5jbHVkZXMiLCJyb3V0ZXIiLCJwYXRobmFtZSIsIkxheW91dENvbXBvbmVudCIsIkZyYWdtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});