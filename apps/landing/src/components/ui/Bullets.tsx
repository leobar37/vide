import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { get } from 'lodash';
import React from 'react';
import styled from '@emotion/styled';
import { getToken } from '@vide/ui';
import { AiOutlineLeft } from 'react-icons/ai';
const ItemBullet = styled.span<{ active: boolean }>`
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

const Direction = styled(AiOutlineLeft)<{ reverse: boolean }>`
  transform: scale(1.5);
  ${(props) =>
    props.reverse &&
    css`
      transform: rotate(180deg) scale(1.5);
    `}
`;

function Bullets() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      maxWidth="250px"
    >
      <ItemBullet active={true}>
        <Direction reverse={false} />
      </ItemBullet>
      <ItemBullet active={false}>1</ItemBullet>
      <ItemBullet active={false}>2</ItemBullet>
      <ItemBullet active={true}>3</ItemBullet>
      <ItemBullet active={false}>4</ItemBullet>
      <ItemBullet active>
        <Direction reverse={true} />
      </ItemBullet>
    </Box>
  );
}

export default Bullets;
