import styled from '@emotion/styled';

import { AiOutlineShop, AiFillMobile } from 'react-icons/ai';

import { IoMdMegaphone } from 'react-icons/io';
import { FiMonitor } from 'react-icons/fi';

const OutlineShop = styled(AiOutlineShop)`
  width: 64px;
  height: 64px;
  color: #7216f4;

  @media (min-width: 1024px) {
    width: 86px;
    height: 86px;
  }
`;

const Monitor = styled(FiMonitor)`
  width: 64px;
  height: 64px;
  color: #7216f4;

  @media (min-width: 1024px) {
    width: 86px;
    height: 86px;
  }
`;

const Megaphone = styled(IoMdMegaphone)`
  width: 64px;
  height: 64px;
  color: #7216f4;

  @media (min-width: 1024px) {
    width: 86px;
    height: 86px;
  }
`;

const FillMobile = styled(AiFillMobile)`
  width: 64px;
  height: 64px;
  color: #7216f4;

  @media (min-width: 1024px) {
    width: 86px;
    height: 86px;
  }
`;

export const ecommerceIcon: JSX.Element = <OutlineShop />;
export const monitorIcon: JSX.Element = <Monitor />;
export const megaphoneIcon: JSX.Element = <Megaphone />;
export const mobileIcon: JSX.Element = <FillMobile />;
