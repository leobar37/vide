"use strict";
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Brand": () => (/* reexport */ Brand_Logo),
  "getToken": () => (/* reexport */ getToken),
  "r": () => (/* reexport */ theme)
});

// UNUSED EXPORTS: UiVide

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ../../libs/ui-vide/src/lib/ui-vide.tsx


/* eslint-disable-next-line */

function UiVide(props) {
  return /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsx("h1", {
      children: "Welcome to UiVide!"
    })
  });
}
/* harmony default export */ const ui_vide = ((/* unused pure expression or super */ null && (UiVide)));
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: ../../libs/ui-vide/src/components/Brand/base.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Base = ({
  props,
  ref,
  lettersColor,
  brand,
  direction
}) => direction == 'horizontal' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({
  ref: ref,
  viewBox: "0 0 217 318",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), {}, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M46.0388 246.827C47.0177 246.586 48.0314 246.448 49.0801 246.413C50.1289 246.345 51.1426 246.31 52.1214 246.31C53.0653 246.31 54.149 246.379 55.3725 246.517C56.596 246.655 57.6622 246.879 58.5711 247.189L59.2003 248.016L38.96 317.483C37.282 317.655 35.4642 317.776 33.5066 317.845C31.584 317.948 29.7138 318 27.896 318C25.2043 318 23.1068 317.552 21.6037 316.656C20.1354 315.76 19.0343 314.055 18.3002 311.539L0 248.067C1.25847 247.482 2.60432 246.999 4.03758 246.62C5.50578 246.207 7.00895 246 8.54707 246C10.5746 246 12.1826 246.534 13.3712 247.602C14.5597 248.67 15.4861 250.411 16.1503 252.823L25.5364 286.057C26.3404 288.849 27.1094 291.881 27.8435 295.154C28.5776 298.428 29.2244 301.495 29.7837 304.355C29.9585 305.147 30.308 305.543 30.8324 305.543L46.0388 246.827Z",
    fill: lettersColor
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M69.4589 246.827C70.5426 246.62 71.7486 246.482 73.077 246.413C74.4054 246.345 75.524 246.31 76.4329 246.31C77.4467 246.31 78.6003 246.345 79.8937 246.413C81.1871 246.482 82.3931 246.62 83.5118 246.827V317.431C82.3931 317.638 81.1871 317.776 79.8937 317.845C78.6003 317.914 77.4467 317.948 76.4329 317.948C75.524 317.948 74.4054 317.914 73.077 317.845C71.7486 317.776 70.5426 317.638 69.4589 317.431V246.827Z",
    fill: lettersColor
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M156.939 282.129C156.939 286.161 156.66 290.037 156.1 293.759C155.541 297.446 154.44 300.909 152.797 304.148C151.154 307.352 148.707 310.23 145.456 312.78C143.883 314.02 141.995 315.019 139.793 315.777C137.591 316.536 135.336 317.087 133.029 317.431C130.721 317.81 128.606 318 126.684 318C122.314 318 118.224 317.948 114.414 317.845C110.638 317.776 106.478 317.69 101.934 317.587L101.2 316.863V247.396L101.934 246.672C106.444 246.534 110.603 246.448 114.414 246.413C118.224 246.345 122.314 246.31 126.684 246.31C128.606 246.31 130.721 246.482 133.029 246.827C135.336 247.172 137.591 247.74 139.793 248.533C142.03 249.291 143.918 250.29 145.456 251.531C148.672 254.08 151.102 256.975 152.745 260.214C154.388 263.419 155.489 266.882 156.048 270.603C156.642 274.29 156.939 278.132 156.939 282.129ZM142.415 282.129C142.415 279.269 142.222 276.392 141.838 273.497C141.488 270.569 140.772 267.881 139.688 265.434C138.604 262.988 137.014 261.024 134.916 259.542C132.854 258.026 130.11 257.268 126.684 257.268C124.691 257.268 122.804 257.268 121.021 257.268C119.273 257.233 117.35 257.199 115.253 257.164V307.042C117.35 307.042 119.273 307.042 121.021 307.042C122.804 307.042 124.691 307.042 126.684 307.042C130.11 307.042 132.854 306.302 134.916 304.82C137.014 303.304 138.604 301.322 139.688 298.876C140.772 296.395 141.488 293.69 141.838 290.761C142.222 287.832 142.415 284.955 142.415 282.129Z",
    fill: lettersColor
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M217 305.957C217 309.92 216.371 312.866 215.112 314.795C213.854 316.691 211.389 317.638 207.719 317.638H178.197C175.715 317.638 173.758 316.897 172.325 315.416C170.891 313.934 170.175 311.918 170.175 309.368V247.499L170.856 246.827H214.64C214.815 247.861 214.938 248.843 215.007 249.773C215.077 250.669 215.112 251.513 215.112 252.306C215.112 253.098 215.007 254.063 214.798 255.2C214.623 256.337 214.343 257.423 213.959 258.457H190.834C190.1 258.457 189.104 258.457 187.846 258.457C186.587 258.457 185.294 258.439 183.965 258.405C183.965 259.818 183.983 261.041 184.018 262.075C184.053 263.074 184.07 264.246 184.07 265.589V276.237C185.364 276.237 186.622 276.237 187.846 276.237C189.104 276.202 190.1 276.185 190.834 276.185H208.663C208.942 277.047 209.135 278.029 209.239 279.131C209.379 280.2 209.449 281.113 209.449 281.871C209.449 282.663 209.379 283.594 209.239 284.662C209.135 285.696 208.942 286.66 208.663 287.556H190.834C190.1 287.556 189.104 287.556 187.846 287.556C186.622 287.522 185.364 287.487 184.07 287.453V299.754C184.07 300.892 184.053 301.943 184.018 302.907C183.983 303.872 183.965 304.94 183.965 306.112V306.164C185.084 306.095 186.238 306.043 187.426 306.009C188.615 305.974 189.908 305.957 191.306 305.957H217Z",
    fill: lettersColor
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M192.656 121.45C171.996 75.3459 95.2079 74.8123 124.33 0C68.699 21.4512 24.642 76.6266 68.2012 149.518C6.5961 127.32 33.6028 71.7174 33.6028 71.7174C33.6028 71.7174 0 89.4333 0 143.008C4.72928 202.772 63.5964 221.129 84.7537 223.476C114.996 226.785 147.728 221.982 171.25 203.519C197.136 182.922 206.595 150.052 192.656 121.45V121.45ZM77.1619 175.131C95.0834 171.396 104.293 160.297 106.782 150.478C110.889 135.217 94.8345 120.276 105.662 96.1568C109.769 116.114 146.359 128.6 146.359 150.372C147.354 177.372 113.254 200.531 77.1619 175.131Z",
    fill: brand
  })]
})) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({
  ref: ref,
  viewBox: "0 0 811 415",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), {}, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
    width: "811",
    height: "415"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M420.133 163.275C421.518 162.903 422.952 162.691 424.436 162.637C425.92 162.531 427.354 162.478 428.739 162.478C430.074 162.478 431.607 162.584 433.338 162.797C435.069 163.009 436.577 163.355 437.863 163.833L438.753 165.108L410.118 272.203C407.745 272.469 405.173 272.655 402.403 272.761C399.683 272.92 397.037 273 394.466 273C390.658 273 387.69 272.309 385.564 270.928C383.487 269.547 381.929 266.917 380.89 263.039L355 165.187C356.78 164.284 358.684 163.541 360.712 162.956C362.789 162.319 364.916 162 367.092 162C369.96 162 372.235 162.823 373.917 164.47C375.598 166.117 376.909 168.8 377.849 172.518L391.127 223.755C392.265 228.058 393.353 232.733 394.392 237.78C395.43 242.826 396.345 247.554 397.136 251.963C397.384 253.185 397.878 253.796 398.62 253.796L420.133 163.275Z",
    fill: lettersColor
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M453.267 163.275C454.8 162.956 456.506 162.744 458.385 162.637C460.265 162.531 461.847 162.478 463.133 162.478C464.567 162.478 466.199 162.531 468.029 162.637C469.859 162.744 471.565 162.956 473.148 163.275V272.123C471.565 272.442 469.859 272.655 468.029 272.761C466.199 272.867 464.567 272.92 463.133 272.92C461.847 272.92 460.265 272.867 458.385 272.761C456.506 272.655 454.8 272.442 453.267 272.123V163.275Z",
    fill: lettersColor
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M577.03 217.699C577.03 223.915 576.634 229.891 575.843 235.628C575.051 241.312 573.493 246.651 571.169 251.645C568.845 256.585 565.383 261.021 560.783 264.952C558.558 266.864 555.887 268.405 552.771 269.574C549.656 270.742 546.466 271.592 543.202 272.123C539.938 272.708 536.946 273 534.226 273C528.044 273 522.257 272.92 516.867 272.761C511.525 272.655 505.64 272.522 499.211 272.363L498.172 271.247V164.151L499.211 163.036C505.591 162.823 511.476 162.691 516.867 162.637C522.257 162.531 528.044 162.478 534.226 162.478C536.946 162.478 539.938 162.744 543.202 163.275C546.466 163.806 549.656 164.683 552.771 165.905C555.937 167.073 558.607 168.614 560.783 170.526C565.333 174.457 568.77 178.92 571.095 183.913C573.419 188.854 574.977 194.192 575.768 199.93C576.609 205.614 577.03 211.537 577.03 217.699ZM556.481 217.699C556.481 213.29 556.209 208.854 555.665 204.392C555.17 199.877 554.156 195.733 552.623 191.961C551.09 188.19 548.84 185.162 545.872 182.877C542.954 180.54 539.072 179.371 534.226 179.371C531.407 179.371 528.736 179.371 526.214 179.371C523.741 179.318 521.021 179.265 518.053 179.212V256.107C521.021 256.107 523.741 256.107 526.214 256.107C528.736 256.107 531.407 256.107 534.226 256.107C539.072 256.107 542.954 254.965 545.872 252.681C548.84 250.343 551.09 247.289 552.623 243.517C554.156 239.692 555.17 235.522 555.665 231.006C556.209 226.491 556.481 222.055 556.481 217.699Z",
    fill: lettersColor
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M662 254.434C662 260.543 661.11 265.085 659.329 268.06C657.549 270.981 654.062 272.442 648.869 272.442H607.104C603.593 272.442 600.823 271.3 598.795 269.016C596.768 266.732 595.754 263.624 595.754 259.693V164.311L596.718 163.275H658.662C658.909 164.869 659.082 166.383 659.181 167.817C659.28 169.198 659.329 170.5 659.329 171.721C659.329 172.943 659.181 174.431 658.884 176.184C658.637 177.937 658.241 179.61 657.697 181.204H624.982C623.944 181.204 622.534 181.204 620.754 181.204C618.973 181.204 617.144 181.177 615.264 181.124C615.264 183.302 615.289 185.188 615.338 186.782C615.388 188.322 615.413 190.129 615.413 192.2V208.615C617.242 208.615 619.023 208.615 620.754 208.615C622.534 208.562 623.944 208.536 624.982 208.536H650.205C650.6 209.864 650.872 211.378 651.021 213.078C651.219 214.724 651.318 216.132 651.318 217.301C651.318 218.523 651.219 219.957 651.021 221.604C650.872 223.197 650.6 224.685 650.205 226.066H624.982C623.944 226.066 622.534 226.066 620.754 226.066C619.023 226.013 617.242 225.96 615.413 225.907V244.871C615.413 246.625 615.388 248.245 615.338 249.732C615.289 251.22 615.264 252.866 615.264 254.673V254.752C616.847 254.646 618.479 254.566 620.16 254.513C621.842 254.46 623.672 254.434 625.65 254.434H662Z",
    fill: lettersColor
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M330.987 215.217C315.547 175.275 258.157 174.813 279.922 110C238.344 128.584 205.417 176.385 237.972 239.533C191.93 220.302 212.114 172.131 212.114 172.131C212.114 172.131 187 187.479 187 233.893C190.535 285.669 234.531 301.572 250.343 303.606C272.946 306.472 297.409 302.312 314.989 286.317C334.336 268.472 341.405 239.995 330.987 215.217V215.217ZM244.669 261.723C258.064 258.487 264.947 248.871 266.807 240.365C269.876 227.144 257.877 214.2 265.97 193.304C269.039 210.594 296.386 221.411 296.386 240.273C297.13 263.664 271.644 283.728 244.669 261.723Z",
    fill: brand
  })]
}));
;// CONCATENATED MODULE: ../../libs/ui-vide/src/components/Brand/Logo.tsx



/**
 *  @props :
 * - direction?: 'horizontal' | 'vertical';
 *  color?: 'white' | 'black' | 'normal' | 'normal-black';
 *
 *
 */

const Logo = /*#__PURE__*/(0,external_react_.forwardRef)((props, ref) => {
  let info = {};

  switch ((props === null || props === void 0 ? void 0 : props.color) || 'normal') {
    case 'black':
      {
        info = {
          letterColor: '#000000',
          brandColor: '#000000'
        };
        break;
      }

    case 'normal':
      {
        info = {
          letterColor: '#FFFFFF',
          brandColor: '#7216F4'
        };
        break;
      }

    case 'normal-black':
      {
        info = {
          letterColor: '#000000',
          brandColor: '#7216F4'
        };
        break;
      }

    case 'white':
      {
        info = {
          letterColor: '#FFFFFF',
          brandColor: '#FFFFFF'
        };
        break;
      }
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Base, {
    props: props,
    ref: ref,
    lettersColor: info.letterColor,
    brand: info.brandColor,
    direction: props.direction || 'vertical'
  });
});
/* harmony default export */ const Brand_Logo = (Logo);
;// CONCATENATED MODULE: ../../libs/ui-vide/src/components/Brand/index.ts

;// CONCATENATED MODULE: ../../libs/ui-vide/src/components/index.tsx

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(426);
;// CONCATENATED MODULE: ../../libs/ui-vide/src/theme/components/Container.tsx
const Container = {
  sizes: {
    fluid: {
      margin: '30px 0',
      maxWidth: '100vw'
    },
    lg: {
      margin: '0 auto',
      maxWidth: '1500px'
    },
    md: {
      margin: '0 auto',
      maxWidth: '1200px'
    }
  }
};
// EXTERNAL MODULE: external "@chakra-ui/theme-tools"
var theme_tools_ = __webpack_require__(547);
;// CONCATENATED MODULE: ../../libs/ui-vide/src/theme/components/Button.tsx
const Button = {
  // style object for base or default style
  baseStyle: {
    borderRadius: '0px'
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    md: {
      fontSize: 'md',
      py: 2,
      px: 2,
      maxWidth: '150px',
      minWidth: '120px'
    },
    sm: {
      fontSize: 'sm',
      width: '120px',
      py: 2,
      px: 2
    }
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    solid: {
      bg: 'primary',
      color: 'white',
      _hover: {
        bg: 'white',
        border: 'primary',
        color: 'primary'
      }
    },
    outline: {
      _hover: {
        color: 'primary',
        bg: 'white'
      }
    }
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: 'md',
    variant: 'solid'
  }
};
/* harmony default export */ const components_Button = (Button);
;// CONCATENATED MODULE: ../../libs/ui-vide/src/theme/index.tsx




const breakPoints = (0,theme_tools_.createBreakpoints)({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
});
const theme = (0,react_.extendTheme)({
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Open Sans', sans-serif",
    mono: "'Open Sans', sans-serif"
  },
  colors: {
    primary: '#7216F4'
  },
  config: {
    cssVarPrefix: 'vide'
  },
  components: {
    Container: Container,
    Button: components_Button
  },
  breakPoints,
  borders: {
    primary: '2px solid #7216F4',
    subTitle: `6px solid #7216F4`
  },
  radii: {
    md: '0'
  }
});
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(804);
;// CONCATENATED MODULE: ../../libs/ui-vide/src/utils/theme.ts

/**
 *
 * @param path
 * @param defaultValue : alternative value if path no exist
 * @returns : the token present in default theme of chackra
 */

const getToken = (path, defaultValue) => {
  return props => (0,external_lodash_.get)(props.theme, path, defaultValue);
};
;// CONCATENATED MODULE: ../../libs/ui-vide/src/utils/index.ts

;// CONCATENATED MODULE: ../../libs/ui-vide/src/index.ts






/***/ })

};
;