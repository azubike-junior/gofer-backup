(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Button/index.tsx
var Button = __webpack_require__(8267);
;// CONCATENATED MODULE: ./components/Footer/index.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "bg-[#243763] border w-full h-full px-28 text-[#EEEEEE]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: " font-bold leading-43 text-3xl mt-10 mb-8",
                    children: "Gofer"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center w-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "flex-1",
                            children: [
                                "Random Text that goes here should go here.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                " Even another text should go here."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "flex justify-center",
                                    children: "Get the app"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    child: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/errandIcons/applelogo.svg",
                                                className: "mr-2 ",
                                                alt: ""
                                            }),
                                            "Download on the",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "App Store"
                                        ]
                                    }),
                                    className: "bg-[#243763] border border-white text-xs text-white rounded px-1 py-1 mb-2",
                                    onClick: ()=>{}
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    child: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/errandIcons/googleplaylogo.svg",
                                                className: "mr-4",
                                                alt: ""
                                            }),
                                            "GET IT ON ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Google Play"
                                        ]
                                    }),
                                    className: "bg-[#243763] border border-white text-xs text-white rounded px-1 py-1",
                                    onClick: ()=>{}
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row gap-14 mt-2 mb-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "About Us"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Pricing"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Contact"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "FAQ"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Help"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Privacy"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "border border-b-0 border-[#082563] mb-8"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex mb-8 items-center w-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "flex-1",
                            children: "\xa9 2023. Gofer. All Rights Reserved"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row gap-10 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/errandIcons/facebooklogo.svg",
                                        className: "",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/errandIcons/instagramlogo.svg",
                                        className: "",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/errandIcons/linkedinlogo.svg",
                                        className: "",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/errandIcons/twitterlogo.svg",
                                        className: "",
                                        alt: ""
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Navbar/index.tsx



function Navbar() {
    const [user, setUser] = (0,external_react_.useState)({});
    const [show, setShow] = (0,external_react_.useState)(false);
    // const  {userInfo } = useSelector((state:RootState) => state.login
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex px-20 border border-b-gray-300 shadow-sm",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center w-full mt-8 mb-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "flex-1 font-bold leading-43 text-3xl text-black",
                    children: "Gofer"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    child: "Get Started",
                    className: "bg-white text-blue rounded-lg border-[#A5B6DE] py-3 px-3 w-40 border-1 text-xs text-blue-500 ml-auto",
                    onClick: ()=>{}
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout/index.tsx




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
            })
        ]
    });
}


/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4463);
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9085);
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1032);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_store__WEBPACK_IMPORTED_MODULE_6__]);
_services_store__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








//Theme Customization
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({
    styles: {
        global: ()=>({
                body: {
                    bg: "#E5E5E5"
                }
            })
    },
    colors: {
        //ipcolor-imalipay colorcode
        ipcolor: "#014342",
        inputcolor: "#7C7C7C",
        placholdercolor: "#9B9B9B",
        selectcolor: "f2f2f2",
        divider: "#cecece",
        error: "#F8E7E7",
        dashborder: "#D9D9D9",
        ipcolor2: "#DDDDDD",
        buttoncolor: "#101010",
        review: "#FFF2D8",
        success: "#E4F2D1",
        almostBlack: "#101010",
        C4C4C4: "#c4c4c4"
    },
    components: {
        Button: {
            variants: {
                solid: (props)=>({
                        bg: props.colorMode === "light" ? "ipcolor" : "null"
                    })
            },
            defaultProps: {
                colorScheme: "ipcolor"
            }
        }
    },
    space: {}
});
function App({ Component , pageProps , ...appProps }) {
    const isLayoutDashboard = [
        "/post-errand",
        "/errandMarket/errands"
    ].includes(appProps.router.pathname);
    const LayoutComponent = isLayoutDashboard ? _components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z : (react__WEBPACK_IMPORTED_MODULE_2___default().Fragment);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
        store: _services_store__WEBPACK_IMPORTED_MODULE_6__/* .store */ .h,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LayoutComponent, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9325:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getQuestions */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axios_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9170);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios_http__WEBPACK_IMPORTED_MODULE_2__]);
_axios_http__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getQuestions = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/users/security-questions", async ({ router , ...rest }, { rejectWithValue  })=>{
    try {
        const rs = await _axios_http__WEBPACK_IMPORTED_MODULE_2__/* .http.post */ .d.post(`${"https://errand-app.herokuapp.com/v1"}/users/security-questions`, rest);
        if (rs.data.statusCode === "0000") {
            // setCookie so that I can use it for serverside prop 
            return rs.data;
        }
        if (rs.data.statusCode === "9000") {
            return rejectWithValue(rs.data.statusCode);
        }
    } catch (e) {
        console.log(">>>>>>e", e);
        return rejectWithValue(e);
    }
});
const initialState = {
    error: "",
    loading: false
};
const questionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "/users/login",
    initialState,
    reducers: {
        logout: (state)=>{
            localStorage.clear();
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.deleteCookie)("accessToken");
            state.loading = false;
            state.error = "";
            window.location.pathname = "/";
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getQuestions.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(getQuestions.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = "";
        });
        builder.addCase(getQuestions.pending, (state, action)=>{
            state.loading = true;
            state.error = action.payload;
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questionSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ http)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

axios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.request.use(async (config)=>{
    if (config.url?.includes("/sign-in")) return config;
    if (config.url?.includes("/sign-up")) return config;
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("access_token");
    config.headers["Content-Type"] = "application/json";
    return config;
}, (error)=>{
    return Promise.reject(error);
});
axios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use((response)=>{
    return response;
}, (error)=>{
    const request = error.config; //this is actual request that was sent, and error is received in response to that request
    if (error.response.status === 401 && !request._retry) {
        request._retry = true;
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common.Authorization = "Bearer " + localStorage.getItem("access_token");
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common["Content-Type"] = "application/json";
        return (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(request);
    }
    return Promise.reject(error);
});
const http = axios__WEBPACK_IMPORTED_MODULE_0__["default"];
// eslint-disable-next-line import/no-anonymous-default-export


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports toggleTransferFundsModal, toggleVerifyTransaction, toggleTransactionStatus, toggleCashoutModal, toggleVerifyCashout, toggleCashoutStatus, toggleTransactionDetail, toggleApproveCreditRequest, toggleVerifyCreditTransaction, toggleCreditRequestApproved, toggleDeclineCreditRequest, toggleCreditRequestDeclined */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    showTransferFundsModal: false,
    showVerifyTransaction: false,
    showTransactionStatus: false,
    showCashoutModal: false,
    showVerifyCashout: false,
    showCashoutStatus: false,
    showTransactionDetailModal: false,
    approveCreditRequest: false,
    verifyCreditTransanction: false,
    creditRequestApproved: false,
    declineCreditRequest: false,
    creditRequestDeclined: false
};
const modalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "/modals/setup",
    initialState,
    reducers: {
        toggleTransferFundsModal (state) {
            state.showTransferFundsModal = !state.showTransferFundsModal;
        },
        toggleVerifyTransaction (state) {
            state.showVerifyTransaction = !state.showVerifyTransaction;
        },
        toggleTransactionStatus (state) {
            state.showTransactionStatus = !state.showTransactionStatus;
        },
        toggleCashoutModal (state) {
            state.showCashoutModal = !state.showCashoutModal;
        },
        toggleVerifyCashout (state) {
            state.showVerifyCashout = !state.showVerifyCashout;
        },
        toggleCashoutStatus (state) {
            state.showCashoutStatus = !state.showCashoutStatus;
        },
        toggleTransactionDetail (state) {
            state.showTransactionDetailModal = !state.showTransactionDetailModal;
        },
        toggleApproveCreditRequest (state) {
            state.approveCreditRequest = !state.approveCreditRequest;
        },
        toggleVerifyCreditTransaction (state) {
            state.verifyCreditTransanction = !state.verifyCreditTransanction;
        },
        toggleCreditRequestApproved (state) {
            state.creditRequestApproved = !state.creditRequestApproved;
        },
        toggleDeclineCreditRequest (state) {
            state.declineCreditRequest = !state.declineCreditRequest;
        },
        toggleCreditRequestDeclined (state) {
            state.creditRequestDeclined = !state.creditRequestDeclined;
        }
    }
});
const { toggleTransferFundsModal , toggleVerifyTransaction , toggleTransactionStatus , toggleCashoutModal , toggleVerifyCashout , toggleCashoutStatus , toggleTransactionDetail , toggleApproveCreditRequest , toggleVerifyCreditTransaction , toggleCreditRequestApproved , toggleDeclineCreditRequest , toggleCreditRequestDeclined  } = modalSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalSlice.reducer);


/***/ }),

/***/ 1032:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5642);
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_create_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5224);
/* harmony import */ var _auth_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(573);
/* harmony import */ var _auth_questions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9325);
/* harmony import */ var _auth_verify_phone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5065);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9865);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_create_account__WEBPACK_IMPORTED_MODULE_2__, _auth_login__WEBPACK_IMPORTED_MODULE_3__, _auth_questions__WEBPACK_IMPORTED_MODULE_4__]);
([_auth_create_account__WEBPACK_IMPORTED_MODULE_2__, _auth_login__WEBPACK_IMPORTED_MODULE_3__, _auth_questions__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        createAccount: _auth_create_account__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        login: _auth_login__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        questions: _auth_questions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        verifyPhone: _auth_verify_phone__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        modals: _modals__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware()
});
(0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.setupListeners)(store.dispatch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4463:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 5642:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query");

/***/ }),

/***/ 8982:
/***/ ((module) => {

"use strict";
module.exports = require("cookies-next");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [943,675,267,224,573,65], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();