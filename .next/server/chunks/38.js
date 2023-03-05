"use strict";
exports.id = 38;
exports.ids = [38];
exports.modules = {

/***/ 3038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UP": () => (/* binding */ InputField)
});

// UNUSED EXPORTS: PhoneField, SelectField

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-phone-input-2"
var external_react_phone_input_2_ = __webpack_require__(5452);
;// CONCATENATED MODULE: ./helpers/classNames.ts
function classNames_classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

;// CONCATENATED MODULE: ./components/InputField/index.tsx



function InputField({ label , rest , placeholder , required , className ="" , select , errors , name , show , type , selectBorder , textArea , textAreaClass , disabled , register , value , message , onClick , validate , minLength , maxLength , pattern , onChange , optional  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "",
                className: "text-base capitalize text-[#243763]",
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classNames_classNames(!errors && "focus:border-green-600", errors && "border-red-500", "flex justify-between items-center w-full bg-white py-2 border-2 border-inputBorder rounded-lg mt-1"),
                children: [
                    textArea ? /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        name: "",
                        className: "rounded-lg outline-none flex-1 px-3 py-2",
                        rows: 9
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        // {...register(name, { required })}
                        placeholder: placeholder,
                        className: "rounded-lg outline-none flex-1 px-3 py-2",
                        name: name,
                        type: type,
                        disabled: disabled,
                        value: value,
                        ...rest
                    }),
                    show && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        onClick: onClick,
                        className: "cursor-pointer text-xs px-1",
                        children: show === "show" ? "show" : "hide"
                    })
                ]
            }),
            errors && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-red-500 text-sm",
                children: message
            })
        ]
    });
}
const PhoneField = ({ label , placeholder  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "mb-6",
        children: [
            label && /*#__PURE__*/ _jsx("label", {
                htmlFor: "",
                className: "text-xs font-semibold pb-1",
                children: label
            }),
            /*#__PURE__*/ _jsx(PhoneInput, {
                country: "us",
                value: "",
                onChange: ()=>{},
                containerClass: " w-full",
                searchClass: "",
                inputStyle: {
                    width: "100%",
                    height: "50px",
                    marginTop: "10px"
                },
                placeholder: placeholder
            })
        ]
    });
};
const SelectField = ({ label , className , selectArray , selectBorder , selectLabel , labelClass  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: className,
        children: [
            label && /*#__PURE__*/ _jsx("label", {
                htmlFor: "",
                className: labelClass,
                children: label
            }),
            /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsx("select", {
                    className: classNames(selectBorder && selectBorder, "w-full p-3 rounded-lg outline-none bg-white border-inputBorder border-1 mt-1 text-tintedAsh"),
                    name: "",
                    id: "",
                    children: selectArray?.map((_item, index)=>{
                        return(// <div key={}>
                        /*#__PURE__*/ _jsx("option", {
                            value: _item.value,
                            children: _item.text
                        }, index));
                    })
                })
            })
        ]
    });
};


/***/ })

};
;