"use strict";
exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "pH": () => (/* binding */ loginUser)
/* harmony export */ });
/* unused harmony export logout */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const loginUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/users/sign-in", async ({ router , ...rest }, { rejectWithValue  })=>{
    try {
        console.log(">>>>>>>rest", rest);
        const rs = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"https://errand-app.herokuapp.com/v1"}/user/sign-in`, rest);
        if (rs.status === 200) {
            localStorage?.setItem("accessToken", rs.data.data.token);
            localStorage?.setItem("refreshToken", rs.data.data.refreshToken);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Login Successful");
            router.push("/profile");
        }
    } catch (e) {
        if (e.response.status === 404) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Invalid Login Credentials");
            return "Invalid Login Credentials";
        }
        return rejectWithValue(e.response.message);
    }
});
const initialState = {
    error: "",
    loading: false
};
const loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "/users/login",
    initialState,
    reducers: {
        logout: (state)=>{
            localStorage.clear();
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.deleteCookie)("accessToken");
            state.loading = false;
            state.error = "";
            window.location.pathname = "/";
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(loginUser.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(loginUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = "";
        });
        builder.addCase(loginUser.pending, (state, action)=>{
            state.loading = true;
            state.error = action.payload;
        });
    }
});
const { logout  } = loginSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;