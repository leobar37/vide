import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { useModalCotization } from './context/CotizationContex';

import CotizationController from './CotizationController';
// eslint-disable-next-line @typescript-eslint/ban-types
function BaseDrawer({ children }: PropsWithChildren<{}>) {
  const { isOpen, onClose } = useModalCotization();
  return (
    <Drawer
      isOpen={isOpen}
      placement="bottom"
      closeOnOverlayClick
      onClose={onClose}
      isCentered
    >
      <DrawerOverlay />
      <DrawerContent borderTopRadius={'15px'}>
        <CotizationController>{children}</CotizationController>
      </DrawerContent>
    </Drawer>
  );
}

export default BaseDrawer;
