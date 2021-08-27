import {
  createContext,
  FC,
  Reducer,
  Dispatch,
  useReducer,
  useContext,
} from 'react';
import { Action } from '@vide/ui';
import { useDisclosure } from '@chakra-ui/react';

import * as yup from 'yup';
import { setLocale, Asserts } from 'yup';
setLocale({
  mixed: {
    default: 'Este campo es invalido',
    required: 'Este campo es requerido',
  },
  string: {
    email: (re: string) => {
      return `Email invalido`;
    },
  },
});

export const cotizationSchema = yup.object({
  name: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup.string().required(),
  country: yup.string().required(),
  email: yup.string().email().required(),
  nameCompany: yup.string().required(),
  webCompany: yup.string().required(),
  services: yup.array().of(yup.string()).required(),
  notes: yup.string().required(),
});

export type FormCotization = Asserts<typeof cotizationSchema>;

interface State {
  formCotization: {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    nameCompany: string;
    webCompany: string;
    country: string;
    services: string[];
    notes: string;
  } | null;
  modalCotization: boolean;
}

const initialState: State = {
  formCotization: null,
  modalCotization: false,
};

// export type FormCotization = State['formCotization'];

type Actions =
  | Action<'SEND_FORM', { cotization: FormCotization }>
  | Action<'HANDLE_MODAL_FORM', { open: boolean }>;

const reducer: Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case 'SEND_FORM': {
      return {
        ...state,
        formCotization: action.payload.cotization,
      };
    }
    case 'HANDLE_MODAL_FORM': {
      return {
        ...state,
        modalCotization: action.payload.open,
      };
    }
  }
};
const CotizationContext =
  createContext<{ state: State; dispatch: Dispatch<Actions> }>(undefined);

export const CotizationProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CotizationContext.Provider value={{ dispatch, state }}>
      {children}
    </CotizationContext.Provider>
  );
};

export const useModalCotization = () => {
  const [state, dispatch] = useCotizationState();
  return useDisclosure({
    isOpen: state.modalCotization,
    onClose: () => {
      dispatch({ type: 'HANDLE_MODAL_FORM', payload: { open: false } });
    },
  });
};

export const useCotizationState = () => {
  const { state, dispatch } = useContext(CotizationContext);
  return [state, dispatch] as const;
};
