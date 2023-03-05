"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 5224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "o": () => (/* binding */ createAccount)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const createAccount = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/user/createAccount", async ({ router , newData  }, { rejectWithValue  })=>{
    try {
        // console.log(">>>>>>>newDATA", newData)
        await fetch("https://errand-app.herokuapp.com/v1/user/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        }).then((response)=>response.json()).then((data)=>{
            // console.log(">>>>>>>exact", data)
            if (data.success === true) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success(data.message);
                router.push("/profile");
                return data.message;
            }
            if (data.success === false) {
                // router.push("/profile")
                react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].error(data.message);
                //  console.log(">>>>>>data.message", data.message)
                return data.message;
            }
        });
    } catch (e) {
        // console.log(">>>>>err", e)
        return rejectWithValue(e);
    }
});
const initialState = {
    error: "",
    loading: false,
    data: {}
};
const createAccountSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "/user/createAccount",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(createAccount.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(createAccount.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = "";
            state.data = action.payload;
        });
        builder.addCase(createAccount.pending, (state, action)=>{
            state.loading = true;
            state.error = action.payload;
        });
    }
});
// export const { logout } = loginSlice.actions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAccountSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;