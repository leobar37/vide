import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import {
  useCotizationState,
  useModalCotization,
} from './context/CotizationContex';

import CotizationController from './CotizationController';
// eslint-disable-next-line @typescript-eslint/ban-types
function BaseModal({ children }: PropsWithChildren<{}>) {
  const { isOpen, onClose } = useModalCotization();
  return (
    <Modal isOpen={isOpen} closeOnOverlayClick onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="0" left={['0px', '-150px', '-250px']}>
        <CotizationController>{children}</CotizationController>
      </ModalContent>
    </Modal>
  );
}

export default BaseModal;
