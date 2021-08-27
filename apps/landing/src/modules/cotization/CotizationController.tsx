import React, { FC } from 'react';
import { useFormikContext, Formik, FormikHelpers } from 'formik';
import {
  useCotizationState,
  FormCotization,
  cotizationSchema,
} from './context/CotizationContex';
import { useToast } from '@chakra-ui/react';
const CotizationController: FC = ({ children }) => {
  const [state, dispatch] = useCotizationState();
  const toast = useToast();
  const handleSubmit = async (
    values: FormCotization,
    { setSubmitting }: FormikHelpers<FormCotization>
  ) => {
    setSubmitting(true);
    const data = await fetch('/api/cotization', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cotization: values,
      }),
    }).then((d) => d.json());
    toast({
      description: 'Cotización registrada',
      position: 'top',
    });
    dispatch({
      type: 'HANDLE_MODAL_FORM',
      payload: {
        open: false,
      },
    });
    setSubmitting(false);
  };
  return (
    <Formik
      validationSchema={cotizationSchema}
      initialValues={{
        name: '',
        lastName: '',
        country: '',
        nameCompany: '',
        services: [],
        webCompany: '',
        email: '',
        notes: '',
        phone: '',
      }}
      onSubmit={handleSubmit}
    >
      {children}
    </Formik>
  );
};

export default CotizationController;
