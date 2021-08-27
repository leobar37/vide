import {
  FormControl,
  FormLabel,
  HStack,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { CheckboxControl, InputControl } from 'formik-chakra-ui';
import { SystemStyleObject } from '@chakra-ui/react';
import React from 'react';

const widthForm = {
  lg: '350px',
  md: '300px',
};

const containerFormCss: SystemStyleObject = {
  minWidth: [widthForm.md, widthForm.md, widthForm.lg],
};

export const UserDetailForm = () => {
  return (
    <VStack sx={containerFormCss}>
      <HStack
        flexDirection={['column', 'row']}
        width={['100%', 'initial']}
        justify={['flex-start', 'center']}
        spacing={[0, 5]}
      >
        <InputControl name="name" label="Nombres"></InputControl>
        <InputControl name="lastName" label="Apellidos"></InputControl>
      </HStack>
      <InputControl name="phone" label="Teléfono"></InputControl>
      <InputControl name="email" label="Correo electronico:"></InputControl>
    </VStack>
  );
};

export const CompanyDetailForm = () => {
  return (
    <VStack align="flex-start" sx={containerFormCss}>
      <InputControl
        name="nameCompany"
        label="Nombre de la empresa"
      ></InputControl>

      <InputControl name="webCompany" label="Dirección web"></InputControl>
      <InputControl name="country" label="País"></InputControl>
    </VStack>
  );
};

export const ProjectForm = () => {
  const services = ['Paginas web', 'Social media', 'Eccomerce'];
  return (
    <VStack align="flex-start" sx={containerFormCss}>
      <FormControl>
        <FormLabel fontWeight="semibold">Servicios:</FormLabel>
        <VStack align="flex-start">
          {services.map((el) => (
            <CheckboxControl key={el} name="services" value={el} label={el} />
          ))}
        </VStack>
      </FormControl>
      <FormControl>
        <FormLabel fontWeight="semibold">Notas</FormLabel>
        <Field
          as={Textarea}
          name="notes"
          placeholder="Notas adicionales acerca del proyecto (opcional)"
        ></Field>
      </FormControl>
    </VStack>
  );
};
