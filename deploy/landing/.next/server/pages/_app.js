(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(426);
// EXTERNAL MODULE: ../../libs/ui-vide/src/index.ts + 10 modules
var src = __webpack_require__(544);
// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(381);
;// CONCATENATED MODULE: ./src/globals/global.styles.tsx


const globalStyles = /*#__PURE__*/jsx_runtime_.jsx(external_emotion_react_.Global, {
  styles: external_emotion_react_.css`
      body {
        overflow-x: hidden;
      }
      .max-paragraph {
        max-width: 1000px;
      }
    `
});
;// CONCATENATED MODULE: external "swiper"
const external_swiper_namespaceObject = require("swiper");
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_namespaceObject);
// EXTERNAL MODULE: ./src/modules/cotization/index.ts + 12 modules
var cotization = __webpack_require__(100);
// EXTERNAL MODULE: ../../node_modules/swiper/swiper.scss
var swiper = __webpack_require__(701);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}








external_swiper_default().use([external_swiper_namespaceObject.EffectFade]);



function CustomApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Welcome to landing!"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
      theme: src/* theme */.r,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_emotion_react_.ThemeProvider, {
        theme: _objectSpread(_objectSpread({}, src/* theme */.r), {}, {
          breakpoints: {
            xs: '0px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            laptop: '1200px',
            xl: '1200px'
          }
        }),
        children: /*#__PURE__*/jsx_runtime_.jsx(cotization/* CotizationFeature */.Hz, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
        })
      }), globalStyles]
    })]
  });
}

/* harmony default export */ const _app = (CustomApp);

/***/ }),

/***/ 701:
/***/ (() => {



/***/ }),

/***/ 426:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 547:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 381:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 733:
/***/ ((module) => {

"use strict";
module.exports = require("@notionhq/client");

/***/ }),

/***/ 717:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 136:
/***/ ((module) => {

"use strict";
module.exports = require("formik-chakra-ui");

/***/ }),

/***/ 804:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 466:
/***/ ((module) => {

"use strict";
module.exports = require("styled-breakpoints");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("styled-breakpoints/react-emotion");

/***/ }),

/***/ 440:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [951,100,544], () => (__webpack_exec__(455)));
module.exports = __webpack_exports__;

})();