import { Box, Button, Container, Stack, useDisclosure } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Brand as _Brand } from '@vide/ui';
import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';
import { down } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-emotion';
import { useCotizationState } from '../../modules/cotization';
import MobileNav, { WrapperIcon } from './NavbarMobile';
import { useNavBarState } from './useNavbarState';
import { ClassNames } from '@emotion/react';
import { useToken } from '@chakra-ui/react';
const Brand = styled(_Brand)`
  width: 200px;
  ${down('xs')} {
    width: 150px !important;
  }
`;

const liVariants: Variants = {
  visible: (i: number) => {
    return {
      opacity: 1,
      x: '0',
      transition: {
        delay: i * 0.4,
        type: 'spring',
      },
    };
  },
  hidden: {
    opacity: 0,
    x: '-20%',
  },
  inTap: {
    scale: 0.8,
  },
};
// TODO: separate in other file
type ItemMenu = {
  label: string;
  route: string;
  inPage: boolean;
};
const Links: ItemMenu[] = [
  {
    inPage: true,
    route: 'start',
    label: 'Inicio',
  },
  {
    inPage: true,
    route: 'about',
    label: 'Aceca de',
  },
  {
    inPage: true,
    route: 'services',
    label: 'Servicios',
  },
  {
    inPage: true,
    route: 'portafolio',
    label: 'Portafolio',
  },
];

const MenuDesktop = () => {
  const [, dispatchCotization] = useCotizationState();
  const { isMobile, openNavbar } = useNavBarState();
  const [primaryColor] = useToken('colors', ['primary']);
  const mapItemMenu = ({ inPage, route, label }: ItemMenu) => {
    return (
      <motion.li
        key={route}
        variants={liVariants}
        custom={0}
        animate={openNavbar || !isMobile ? 'visible' : 'hidden'}
        whileTap="inTap"
      >
        <ClassNames>
          {({ css }) => (
            <LinkScroll
              className={css`
                cursor: pointer;
                position: relative;
                &:before,
                &:after {
                  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
                  content: '';
                  width: 0%;
                  position: absolute;
                  background: ${primaryColor};
                  height: 3px;
                }
                &:before {
                  right: 0;
                  top: -7px;
                }
                &:after {
                  left: 0;
                  bottom: -8px;
                }
                &:hover {
                  &:after,
                  &:before {
                    width: 100% !important;
                  }
                }
              `}
              to={route}
              spy={true}
              smooth={true}
            >
              {label}
            </LinkScroll>
          )}
        </ClassNames>
      </motion.li>
    );
  };

  return (
    <Stack
      as="ul"
      alignItems="center"
      spacing={5}
      display={['flex', null, 'flex']}
      direction={['column', 'column', 'row']}
      listStyleType="none"
    >
      {Links.map(mapItemMenu)}
      <Button
        sx={
          isMobile && {
            position: 'absolute',
            bottom: '10px',
          }
        }
        variant="solid"
        onClick={() =>
          dispatchCotization({
            type: 'HANDLE_MODAL_FORM',
            payload: { open: true },
          })
        }
      >
        Cotizar
      </Button>
    </Stack>
  );
};

function NavBarRoot() {
  const router = useRouter();
  const isMobile = useBreakpoint(down('sm'));
  const { openNavbar } = useNavBarState();

  const { isOpen, onOpen, onToggle, onClose } = useDisclosure({
    isOpen: openNavbar,
    onOpen: () => {
      useNavBarState.getState().set({
        openNavbar: true,
      });
    },
    onClose: () => {
      useNavBarState.getState().set({
        openNavbar: false,
      });
    },
  });
  useEffect(() => {
    useNavBarState.getState().set({
      isMobile,
    });
  }, [isMobile]);

  return (
    <Container
      size="lg"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={['0 40px', null, '0px 50px']}
    >
      <Stack direction="row" alignItems="center" justifyContent="flex-start">
        <Box as="button" onClick={() => router.push('/')}>
          <Brand
            color="normal-black"
            style={{
              marginLeft: '-4rem',
              textAlign: 'left',
            }}
          />
        </Box>
      </Stack>
      {isMobile && (
        <WrapperIcon onClick={onOpen}>
          <AiOutlineMenu />
        </WrapperIcon>
      )}
      {isMobile ? (
        <MobileNav onClose={onClose} isOpen={isOpen}>
          <MenuDesktop />
        </MobileNav>
      ) : (
        <MenuDesktop />
      )}
    </Container>
  );
}

export default NavBarRoot;
