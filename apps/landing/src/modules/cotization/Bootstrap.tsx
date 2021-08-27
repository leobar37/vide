import React, { PropsWithChildren } from 'react';
import CotizationModal from './BaseModal';
import { CotizationProvider } from './context';
import Cotization from './Cotization';
import { down } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-emotion';
import BaseDrawer from './BaseDrawer';
// eslint-disable-next-line @typescript-eslint/ban-types
function Bootstrap({ children }: PropsWithChildren<{}>) {
  const isMobile = useBreakpoint(down('xs'));
  return (
    <CotizationProvider>
      {children}
      {!isMobile ? (
        <CotizationModal>
          <Cotization />
        </CotizationModal>
      ) : (
        <BaseDrawer>
          <Cotization />
        </BaseDrawer>
      )}
    </CotizationProvider>
  );
}

export default Bootstrap;
