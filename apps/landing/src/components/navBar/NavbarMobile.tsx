import styled from '@emotion/styled';
import { getToken } from '@vide/ui';
import { motion, useAnimation, Variants } from 'framer-motion';
import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Nav = styled(motion.div)(`
  position: fixed;
  height: 100vh;
  width: 350px;
  background: ${getToken('colors.white')};
  z-index : 1500;
  top:0;  
  right : 0;
  background : white;
`);

const List = styled.div`
  list-style-type: none;
  text-align: center;
  height: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const WrapperIcon = styled(motion.button)`
  position: absolute;
  svg {
    color: black;
    font-size: 35px;
  }
  z-index: 100;
  cursor: pointer;
  top: 20px;
  right: 20px;
  background: white;
`;

export const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
};

const variantsMenu: Variants = {
  open: (height = 1000) => ({
    opacity: 1,
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      duration: 0.5,
      staggerChildren: 1,
      stiffness: 20,
      restDelta: 2,
    },
  }),
  close: {
    clipPath: 'circle(30px at 450px 40px)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
      stiffness: 400,
      damping: 40,
    },
  },
};

const variantIcon: Variants = {
  close: {
    borderRadius: '50%',
    padding: '10px',
  },
  open: {},
};

type MobileNavProps = PropsWithChildren<{
  isOpen: boolean;
  onClose?: () => void;
}>;

const NavMobile: FunctionComponent<MobileNavProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const controls = useAnimation();
  const menuRef = useRef();
  const { height } = useDimensions(menuRef);
  useEffect(() => {
    if (isOpen) {
      controls.start('open');
    } else {
      controls.start('close');
    }
  }, [isOpen, controls]);
  return (
    <Nav
      custom={height}
      ref={menuRef}
      animate={controls}
      variants={variantsMenu}
    >
      <WrapperIcon
        onClick={() => {
          if (onClose) {
            onClose();
          }
        }}
      >
        <AiOutlineClose />
      </WrapperIcon>
      <List>
        {children}
        {/* {fakeMenu.map((item, idx) => (
          <motion.li
            variants={liVariants}
            custom={idx}
            animate={isOpen ? 'visible' : 'hidden'}
            key={idx}
            whileTap="inTap"
          >
            {item}
          </motion.li>
        ))} */}
      </List>
    </Nav>
  );
};

export default NavMobile;
