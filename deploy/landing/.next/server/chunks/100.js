"use strict";
exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Hz": () => (/* reexport */ cotization_Bootstrap),
  "$I": () => (/* reexport */ cotization_handler),
  "ev": () => (/* reexport */ useCotizationState)
});

// UNUSED EXPORTS: CotizationProvider, cotizationSchema, useModalCotization

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(426);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(440);
;// CONCATENATED MODULE: ./src/modules/cotization/context/CotizationContex.tsx


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





(0,external_yup_.setLocale)({
  mixed: {
    default: 'Este campo es invalido',
    required: 'Este campo es requerido'
  },
  string: {
    email: re => {
      return `Email invalido`;
    }
  }
});
const cotizationSchema = external_yup_.object({
  name: external_yup_.string().required(),
  lastName: external_yup_.string().required(),
  phone: external_yup_.string().required(),
  country: external_yup_.string().required(),
  email: external_yup_.string().email().required(),
  nameCompany: external_yup_.string().required(),
  webCompany: external_yup_.string().required(),
  services: external_yup_.array().of(external_yup_.string()).required(),
  notes: external_yup_.string().required()
});
const initialState = {
  formCotization: null,
  modalCotization: false
}; // export type FormCotization = State['formCotization'];

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEND_FORM':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          formCotization: action.payload.cotization
        });
      }

    case 'HANDLE_MODAL_FORM':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          modalCotization: action.payload.open
        });
      }
  }
};

const CotizationContext = /*#__PURE__*/(0,external_react_.createContext)(undefined);
const CotizationProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,external_react_.useReducer)(reducer, initialState);
  return /*#__PURE__*/jsx_runtime_.jsx(CotizationContext.Provider, {
    value: {
      dispatch,
      state
    },
    children: children
  });
};
const useModalCotization = () => {
  const [state, dispatch] = useCotizationState();
  return (0,react_.useDisclosure)({
    isOpen: state.modalCotization,
    onClose: () => {
      dispatch({
        type: 'HANDLE_MODAL_FORM',
        payload: {
          open: false
        }
      });
    }
  });
};
const useCotizationState = () => {
  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(CotizationContext);
  return [state, dispatch];
};
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(717);
;// CONCATENATED MODULE: ./src/modules/cotization/CotizationController.tsx





const CotizationController = ({
  children
}) => {
  const [state, dispatch] = useCotizationState();
  const toast = (0,react_.useToast)();

  const handleSubmit = async (values, {
    setSubmitting
  }) => {
    setSubmitting(true);
    const data = await fetch('/api/cotization', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cotization: values
      })
    }).then(d => d.json());
    toast({
      description: 'Cotización registrada',
      position: 'top'
    });
    dispatch({
      type: 'HANDLE_MODAL_FORM',
      payload: {
        open: false
      }
    });
    setSubmitting(false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
    validationSchema: cotizationSchema,
    initialValues: {
      name: '',
      lastName: '',
      country: '',
      nameCompany: '',
      services: [],
      webCompany: '',
      email: '',
      notes: '',
      phone: ''
    },
    onSubmit: handleSubmit,
    children: children
  });
};

/* harmony default export */ const cotization_CotizationController = (CotizationController);
;// CONCATENATED MODULE: ./src/modules/cotization/BaseModal.tsx




 // eslint-disable-next-line @typescript-eslint/ban-types

function BaseModal({
  children
}) {
  const {
    isOpen,
    onClose
  } = useModalCotization();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Modal, {
    isOpen: isOpen,
    closeOnOverlayClick: true,
    onClose: onClose,
    isCentered: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.ModalOverlay, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.ModalContent, {
      borderRadius: "0",
      left: ['0px', '-150px', '-250px'],
      children: /*#__PURE__*/jsx_runtime_.jsx(cotization_CotizationController, {
        children: children
      })
    })]
  });
}

/* harmony default export */ const cotization_BaseModal = (BaseModal);
;// CONCATENATED MODULE: ./src/modules/cotization/context/index.ts

// EXTERNAL MODULE: ../../node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(951);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(466);
// EXTERNAL MODULE: external "styled-breakpoints/react-emotion"
var react_emotion_ = __webpack_require__(162);
// EXTERNAL MODULE: external "formik-chakra-ui"
var external_formik_chakra_ui_ = __webpack_require__(136);
;// CONCATENATED MODULE: ./src/modules/cotization/components/Forms.tsx





const widthForm = {
  lg: '350px',
  md: '300px'
};
const containerFormCss = {
  minWidth: [widthForm.md, widthForm.md, widthForm.lg]
};
const UserDetailForm = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
    sx: containerFormCss,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
      flexDirection: ['column', 'row'],
      width: ['100%', 'initial'],
      justify: ['flex-start', 'center'],
      spacing: [0, 5],
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_formik_chakra_ui_.InputControl, {
        name: "name",
        label: "Nombres"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_chakra_ui_.InputControl, {
        name: "lastName",
        label: "Apellidos"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_chakra_ui_.InputControl, {
      name: "phone",
      label: "Tel\xE9fono"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_chakra_ui_.InputControl, {
      name: "email",
      label: "Correo electronico:"
    })]
  });
};
const CompanyDetailForm = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
    align: "flex-start",
    sx: containerFormCss,
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_formik_chakra_ui_.InputControl, {
      name: "nameCompany",
      label: "Nombre de la empresa"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_chakra_ui_.InputControl, {
      name: "webCompany",
      label: "Direcci\xF3n web"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_chakra_ui_.InputControl, {
      name: "country",
      label: "Pa\xEDs"
    })]
  });
};
const ProjectForm = () => {
  const services = ['Paginas web', 'Social media', 'Eccomerce'];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
    align: "flex-start",
    sx: containerFormCss,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.FormControl, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.FormLabel, {
        fontWeight: "semibold",
        children: "Servicios:"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
        align: "flex-start",
        children: services.map(el => /*#__PURE__*/jsx_runtime_.jsx(external_formik_chakra_ui_.CheckboxControl, {
          name: "services",
          value: el,
          label: el
        }, el))
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.FormControl, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.FormLabel, {
        fontWeight: "semibold",
        children: "Notas"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
        as: react_.Textarea,
        name: "notes",
        placeholder: "Notas adicionales acerca del proyecto (opcional)"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/modules/cotization/components/index.ts

;// CONCATENATED MODULE: ./src/modules/cotization/SvgCotization.tsx



function SvgCotization_ownKeys(object, enumerableOnly) {
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

function SvgCotization_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      SvgCotization_ownKeys(Object(source), true).forEach(function (key) {
        SvgCotization_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      SvgCotization_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function SvgCotization_defineProperty(obj, key, value) {
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

function SvgCotization(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", SvgCotization_objectSpread(SvgCotization_objectSpread({
    viewBox: "0 0 558 520",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M479.583 249.993C436.841 155.092 277.974 153.994 338.225 0 223.13 44.155 131.982 157.728 222.1 307.768c-127.453-45.693-71.58-160.145-71.58-160.145S81 184.09 81 294.368c9.784 123.019 131.574 160.804 175.346 165.637 62.568 6.81 130.286-3.076 178.95-41.08 53.557-42.398 73.125-110.058 44.287-168.932zM240.639 360.491c37.078-7.689 56.131-30.535 61.281-50.746 8.497-31.414-24.718-62.168-2.317-111.816 8.497 41.08 84.197 66.782 84.197 111.597 2.06 55.578-68.491 103.248-143.161 50.965z",
      fill: "#fff",
      fillOpacity: 0.22
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M429.437 237.75H123.36v172.057h306.077V237.75z",
      fill: "#E6E6E6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M429.437 208.997H123.36v28.753h306.077v-28.753z",
      fill: "#C9C9C9"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: 0.08,
      d: "M407.145 257.426h-67.393v39.953h67.393v-39.953zM407.145 303.942h-67.393v39.953h67.393v-39.953zM407.145 350.472h-67.393v39.952h67.393v-39.952z",
      fill: "#000"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M323.487 256.505H149.642V389.74h173.845V256.505z",
      fill: "#7216F4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M323.487 375.943H149.642v13.797h173.845v-13.797z",
      fill: "#24285B"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: 0.46,
      d: "M314.586 381.934H158.542v1.829h156.044v-1.829z",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M194.533 388.148a5.304 5.304 0 005.301-5.306 5.304 5.304 0 00-5.301-5.307 5.304 5.304 0 00-5.301 5.307 5.304 5.304 0 005.301 5.306z",
      fill: "#FFD200"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: 0.44,
      d: "M218.708 354.117v-68.022l51.573 34.004-51.573 34.018z",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M141.662 228.436a4.536 4.536 0 004.534-4.539 4.536 4.536 0 00-4.534-4.538 4.535 4.535 0 00-4.533 4.538 4.536 4.536 0 004.533 4.539z",
      fill: "#24285B"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M156.756 228.436a4.536 4.536 0 004.534-4.539 4.536 4.536 0 00-4.534-4.538 4.536 4.536 0 00-4.534 4.538 4.536 4.536 0 004.534 4.539z",
      fill: "#FFD200"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M171.85 228.436a4.536 4.536 0 004.534-4.539 4.536 4.536 0 00-4.534-4.538 4.536 4.536 0 00-4.534 4.538 4.536 4.536 0 004.534 4.539z",
      fill: "#7216F4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: 0.08,
      d: "M429.437 208.955v72.169a54.264 54.264 0 01-35.257 10.85 54.267 54.267 0 01-34.046-14.206 54.396 54.396 0 01-9.417-68.813h78.72zM429.451 311.818h-80.408v97.85h80.408v-97.85z",
      fill: "#000"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M475.095 317.167H361.389v103.756h113.706V317.167z",
      fill: "#F4F4F4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M403.532 349.662h-14.327a10.192 10.192 0 00-9.434 6.298 10.226 10.226 0 00-.777 3.91v9.412c0 2.711 1.075 5.311 2.99 7.228a10.207 10.207 0 007.221 2.994h1.395l4.799 22.553 7.63-1.62-4.45-20.947h4.994l45.129 11.647v-53.121l-45.17 11.646zM455.035 336.033h-1.437a2.512 2.512 0 00-2.511 2.513v52.074a2.513 2.513 0 002.511 2.514h1.437a2.513 2.513 0 002.511-2.514v-52.074a2.512 2.512 0 00-2.511-2.513z",
      fill: "#7216F4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: 0.08,
      d: "M402.876 354.145h-14.369v3.644h14.369v-3.644zM206.613 354.368H123.36v55.104h83.253v-55.104z",
      fill: "#000"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M200.713 358.809H103.76v67.295h96.953v-67.295z",
      fill: "#F4F4F4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M137.589 397.63H126.68v13.965h10.909V397.63z",
      fill: "#C1C1C1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M157.984 386.878h-10.909v24.717h10.909v-24.717z",
      fill: "#FFD200"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M177.988 375.929h-10.909v35.666h10.909v-35.666z",
      fill: "#7216F4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M458.271 233.365c0 2.1-.121 4.198-.362 6.284a54.477 54.477 0 01-19.531 35.86 54.368 54.368 0 01-75.397-6.162 54.502 54.502 0 01-13.461-38.556 54.485 54.485 0 0117.101-37.083 54.374 54.374 0 0138.046-14.753 54.373 54.373 0 0137.593 15.874 54.49 54.49 0 0115.998 37.573c.013.293.013.642.013.963z",
      fill: "#E6E6E6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M403.978 271.74c21.172 0 38.335-17.181 38.335-38.375 0-21.193-17.163-38.374-38.335-38.374s-38.335 17.181-38.335 38.374c0 21.194 17.163 38.375 38.335 38.375z",
      fill: "#7216F4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M403.978 256.756c12.905 0 23.366-10.472 23.366-23.391 0-12.918-10.461-23.39-23.366-23.39s-23.366 10.472-23.366 23.39c0 12.919 10.461 23.391 23.366 23.391z",
      fill: "#E6E6E6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M403.978 244.649c6.225 0 11.272-5.052 11.272-11.284 0-6.231-5.047-11.283-11.272-11.283-6.225 0-11.272 5.052-11.272 11.283 0 6.232 5.047 11.284 11.272 11.284z",
      fill: "#7216F4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M461.968 199.376l-17.381 8.546.85-10.39 17.382-8.546-.851 10.39zM464.061 203.635l-17.382 8.546 8.733 5.684 17.381-8.561-8.732-5.669z",
      fill: "#FFD200"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M464.666 198.076l-62.813 30.899 2.092 4.262 62.812-30.899-2.091-4.262z",
      fill: "#24285B"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: 0.27,
      d: "M464.666 198.076l-62.813 30.899 2.092 4.262 62.812-30.899-2.091-4.262z",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: 0.08,
      d: "M185.382 252.245H123.36v50.035h62.022v-50.035z",
      fill: "#000"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M180.736 247.218h-72.107v50.035h72.107v-50.035z",
      fill: "#F4F4F4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M152.292 287.576a18.127 18.127 0 01-8.844 1.983c-8.133 0-15.108-5.977-15.108-15.529 0-10.264 7.115-19.131 18.135-19.131 8.649 0 14.466 6.074 14.466 14.397 0 7.471-4.185 11.856-8.844 11.856-1.995 0-3.836-1.397-3.683-4.385h-.209a7.802 7.802 0 01-6.975 4.385c-2.888 0-5.385-2.346-5.385-6.284a11.773 11.773 0 017.282-10.913 11.743 11.743 0 014.52-.887 12.994 12.994 0 015.315 1.047l-1.66 9.077c-.74 3.785-.154 5.586 1.492 5.586 2.539 0 5.371-3.338 5.371-9.119 0-7.22-4.324-12.4-12.039-12.4-8.105 0-14.926 6.423-14.926 16.534 0 8.378 5.426 13.447 12.792 13.447 2.609.06 5.19-.54 7.505-1.745l.795 2.081zm-2.79-21.52a8.377 8.377 0 00-2.483-.349c-4.38 0-7.91 4.19-7.91 8.965 0 2.193 1.089 3.785 3.279 3.785 2.887 0 5.58-3.687 6.068-6.773l1.046-5.628z",
      fill: "#C1C1C1"
    })]
  }));
}

/* harmony default export */ const cotization_SvgCotization = (SvgCotization);
;// CONCATENATED MODULE: ./src/modules/cotization/Cotization.tsx











function Cotization() {
  const numPanels = 2;
  const {
    handleSubmit,
    submitForm,
    isSubmitting,
    isValid,
    isInitialValid
  } = (0,external_formik_.useFormikContext)();
  const [tabIndex, setTabIndex] = external_react_default().useState(0);
  const isMobile = (0,react_emotion_.useBreakpoint)((0,external_styled_breakpoints_.down)('xs'));

  const handleSliderChangeAhead = () => {
    setTabIndex(prev => {
      if (prev == numPanels) {
        submitForm();
        return numPanels;
      }

      return tabIndex + 1;
    });
  };

  const handleSliderChangeBack = () => {
    setTabIndex(prev => {
      if (prev == 0) {
        return 0;
      }

      return tabIndex - 1;
    });
  };

  const handleTabsChange = index => {
    setTabIndex(index);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    bg: ['transparent', 'white'],
    width: [null, '500px', '900px'],
    display: ['block', 'flex'],
    height: ['80vh', '70vh'],
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Center, {
      flex: "50%",
      alignItems: "flex-start",
      pt: 7,
      px: [5, null],
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
        as: "form",
        onSubmit: e => {
          e.preventDefault(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          handleSubmit(e);
        } // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ,
        spacing: 8,
        maxWidth: "350px",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontWeight: "bold",
          fontSize: ['2xl', 'xl'],
          children: "Cotizaci\xF3n"
        }), tabIndex == 0 && /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          textAlign: "center",
          fontSize: ['sm', 'sm', 'lg'],
          children: "Permitenos hacerte una cuantas preguntas , para entender mucho mejor tus necesidades y ponernos en contacto lo m\xE1s antes posible"
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Tabs, {
          index: tabIndex,
          onChange: handleTabsChange,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.TabPanels, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.TabPanel, {
              children: /*#__PURE__*/jsx_runtime_.jsx(UserDetailForm, {})
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.TabPanel, {
              children: /*#__PURE__*/jsx_runtime_.jsx(CompanyDetailForm, {})
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.TabPanel, {
              children: /*#__PURE__*/jsx_runtime_.jsx(ProjectForm, {})
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          display: "inline-flex",
          justifyContent: "space-between",
          minWidth: "350px",
          width: "100%",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
            visibility: tabIndex == 0 ? 'hidden' : 'visible',
            onClick: () => handleSliderChangeBack(),
            rightIcon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiOutlineLeft */.CF5, {}),
            children: "Atr\xE1s"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
            onClick: () => handleSliderChangeAhead(),
            rightIcon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiOutlineRight */.Td4, {}),
            loadingText: "Cargando...",
            disabled: isSubmitting,
            children: tabIndex == numPanels ? 'Finalizar' : 'Siguiente'
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      flex: [null, '350px', '350px', '50%'],
      textAlign: "center",
      color: "white",
      display: ['none', 'initial'],
      height: "100%",
      bg: "primary",
      children: [/*#__PURE__*/jsx_runtime_.jsx(cotization_SvgCotization, {
        style: {
          width: '400px',
          margin: '50px auto'
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        children: "+987654321"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        children: "vide@gmail.com"
      })]
    })]
  });
}

/* harmony default export */ const cotization_Cotization = (Cotization);
;// CONCATENATED MODULE: ./src/modules/cotization/BaseDrawer.tsx




 // eslint-disable-next-line @typescript-eslint/ban-types

function BaseDrawer({
  children
}) {
  const {
    isOpen,
    onClose
  } = useModalCotization();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Drawer, {
    isOpen: isOpen,
    placement: "bottom",
    closeOnOverlayClick: true,
    onClose: onClose,
    isCentered: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.DrawerOverlay, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.DrawerContent, {
      borderTopRadius: '15px',
      children: /*#__PURE__*/jsx_runtime_.jsx(cotization_CotizationController, {
        children: children
      })
    })]
  });
}

/* harmony default export */ const cotization_BaseDrawer = (BaseDrawer);
;// CONCATENATED MODULE: ./src/modules/cotization/Bootstrap.tsx







 // eslint-disable-next-line @typescript-eslint/ban-types

function Bootstrap({
  children
}) {
  const isMobile = (0,react_emotion_.useBreakpoint)((0,external_styled_breakpoints_.down)('xs'));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CotizationProvider, {
    children: [children, !isMobile ? /*#__PURE__*/jsx_runtime_.jsx(cotization_BaseModal, {
      children: /*#__PURE__*/jsx_runtime_.jsx(cotization_Cotization, {})
    }) : /*#__PURE__*/jsx_runtime_.jsx(cotization_BaseDrawer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(cotization_Cotization, {})
    })]
  });
}

/* harmony default export */ const cotization_Bootstrap = (Bootstrap);
// EXTERNAL MODULE: external "@notionhq/client"
var client_ = __webpack_require__(733);
;// CONCATENATED MODULE: ./src/libs/notion.ts

const notion = new client_.Client({
  auth: process.env.NOTION_TOKEN
});
/* harmony default export */ const libs_notion = (notion);
;// CONCATENATED MODULE: ./src/modules/cotization/handler/index.ts

const databaseId = '444610992f8d4379beca4454e3054181';

const objetToListItem = cotization => {
  return Object.keys(cotization).map(key => {
    const candidate = {
      key: key,
      val: cotization[key]
    };
    return {
      type: 'bulleted_list_item',
      bulleted_list_item: {
        text: [{
          type: 'text',
          text: {
            content: candidate.key + ':'
          },
          annotations: {
            bold: true,
            italic: true
          }
        }, {
          type: 'text',
          text: {
            content: ' ' + candidate.val
          }
        }]
      }
    };
  });
};

const addNewCotization = cotization => {
  return libs_notion.pages.create({
    parent: {
      database_id: databaseId
    },
    properties: {
      company: {
        type: 'title',
        id: 'title',
        title: [{
          type: 'text',
          text: {
            content: cotization.nameCompany
          }
        }]
      },
      status: {
        type: 'multi_select',
        id: 'm%3ASk',
        multi_select: [{
          color: 'pink',
          name: 'pending'
        }]
      },
      // client
      client: {
        type: 'rich_text',
        rich_text: [{
          type: 'text',
          text: {
            content: cotization.name
          }
        }]
      } //

    },
    children: [{
      type: 'heading_1',
      heading_1: {
        text: [{
          type: 'text',
          text: {
            content: cotization.nameCompany,
            link: null
          }
        }]
      }
    }, ...objetToListItem(cotization)]
  });
};

const sendCotizationController = async (req, res) => {
  const {
    cotization
  } = req.body;
  console.log(cotization);
  console.log(req.body);

  try {
    // add to notion
    await addNewCotization(cotization); // notify

    return res.json({
      ok: true
    });
  } catch (error) {
    console.log(error);
    return res.json({
      ok: false
    });
  }
};

const handler = async (req, res) => {
  if (req.method == 'POST') {
    return sendCotizationController(req, res);
  }
};

/* harmony default export */ const cotization_handler = (handler);
/**
 Create page documentation
 * @link https://developers.notion.com/reference/post-page
 */
;// CONCATENATED MODULE: ./src/modules/cotization/index.ts




/***/ })

};
;