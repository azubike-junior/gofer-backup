"use strict";
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 5065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ verifyPhone),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const verifyPhone = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/user/verifyPhone", async ({ phone_number  }, { rejectWithValue  })=>{
    try {
        await fetch("https://errand-app.herokuapp.com/v1/user/verify-phone", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone_number
            })
        }).then((response)=>response.json()).then((data)=>{
            if (data.status === true) {
                return data.status;
            }
        });
    } catch (e) {
        return rejectWithValue(e);
    }
});
const initialState = {
    error: "",
    loading: false
};
const verifyPhoneSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "/users/verify",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(verifyPhone.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(verifyPhone.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = "";
        });
        builder.addCase(verifyPhone.pending, (state, action)=>{
            state.loading = true;
            state.error = action.payload;
        });
    }
});
// export const { logout } = loginSlice.actions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyPhoneSlice.reducer);


/***/ })

};
;