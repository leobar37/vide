import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { get } from 'lodash';
import React from 'react';
import styled from '@emotion/styled';
import { getToken } from '@vide/ui';
import { AiOutlineLeft } from 'react-icons/ai';
const ItemBullet = styled.button<{ active: boolean }>`
  width: 30px;
  height: 30px;
  border: 2px solid ${getToken('colors.gray.200')};
  text-align: center;
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  ${(props) =>
    props.active &&
    css`
      background: ${get(props.theme, 'colors.primary')};
      color: ${get(props.theme, 'colors.white')};
      border: none;
    `}
  &:hover {
    cursor: pointer;
    transform: scale(1.08);
  }
  svg {
    font-size: 18px;
  }
`;

const Direction = styled(AiOutlineLeft)<{ rever: boolean }>`
  transform: scale(1.5);
  ${(props) =>
    props.rever &&
    css`
      transform: rotate(180deg) scale(1.5);
    `}
`;

/***
 * bullets compoents
 * Input :
 * size : number of
 * onLeft
 * onRigth
 */
type BulltetsProps = {
  onRight?: () => void;
  onLeft?: () => void;
};

function Bullets({ onRight, onLeft }: BulltetsProps) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      maxWidth="250px"
    >
      <ItemBullet active={true} onClick={onLeft}>
        <Direction rever={false} />
      </ItemBullet>
      {/* <ItemBullet active={false}>1</ItemBullet>
      <ItemBullet active={false}>2</ItemBullet>
      <ItemBullet active={true}>3</ItemBullet>
      <ItemBullset active={false}>4</ItemBullset> */}
      <ItemBullet active onClick={onRight}>
        <Direction rever={true} />
      </ItemBullet>
    </Box>
  );
}

export default Bullets;
