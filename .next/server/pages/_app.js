(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "react-bootstrap/Container"
const Container_namespaceObject = require("react-bootstrap/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Form"
const Form_namespaceObject = require("react-bootstrap/Form");
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/MainNav.js








function NavScrollExample() {
    const router = (0,router_.useRouter)();
    //used to get URL to set nav.link activeKey
    const [pageURL, setPageURL] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        if (window.location.pathname == "/" || window.location.pathname == "/search") {
            setPageURL(window.location.pathname);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
                bg: "primary",
                variant: "dark",
                expand: "lg",
                className: "fixed-top",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Brand, {
                            children: "Ryan Locke"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                            "aria-controls": "navbarScroll"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Collapse, {
                            id: "navbarScroll",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                                    className: "me-auto my-2 my-lg-0",
                                    style: {
                                        maxHeight: "100px"
                                    },
                                    navbarScroll: true,
                                    activeKey: pageURL,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                            href: "/",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                            href: "/search",
                                            children: "Advanced Search"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()), {
                                    className: "d-flex",
                                    onSubmit: (e)=>{
                                        e.preventDefault();
                                        let searchbtn = document.getElementById("searchbtn");
                                        searchbtn.click();
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            id: "input",
                                            type: "search",
                                            placeholder: "Search",
                                            className: "me-2",
                                            "aria-label": "Search"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            id: "searchbtn",
                                            onClick: (e)=>{
                                                let input = document.getElementById("input");
                                                router.push(`/artwork?title=true&q=${input.value} `);
                                                input.value = ""; //reset placeholder value in search bar
                                            },
                                            variant: "success",
                                            children: "Search"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
        ]
    });
}
/* harmony default export */ const MainNav = (NavScrollExample);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/Layout.js




const Layout = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MainNav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2620);
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6219);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__]);
swr__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {
                value: {
                    fetcher: async (url)=>{
                        const res = await fetch(url);
                        if (!res.ok) {
                            const error = new Error("An error occurred while fetching the data.");
                            error.info = await res.json();
                            error.status = res.status;
                            throw error;
                        }
                        return res.json();
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2620:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 1937:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8484));
module.exports = __webpack_exports__;

})();