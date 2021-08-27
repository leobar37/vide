import React from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { up, down, only } from 'styled-breakpoints';
import { useTheme } from '@emotion/react';
const Wrapper = styled.div`
  width: 450px;
  height: 450px;
  ${down('md')} {
    background-color: red;
  }
  ${down('sm')} {
    background-color: blue;
  }
  ${down('xs')} {
    background-color: pink;
  }
  ${up('lg')} {
    background-color: yellow;
  }
`;

function Responsive() {
  const theme = useTheme();
  console.log(theme);

  return (
    // <Box
    //   width="350px"
    //   height="350px"
    //   bg={{
    //     base: 'blue',
    //     sm: 'red',
    //   }}
    // ></Box>
    <Wrapper></Wrapper>
  );
}

export default Responsive;
