import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';
import { Container } from './components/Container';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import Button from './components/Button';

const breakPoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

export const theme = extendTheme({
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Open Sans', sans-serif",
    mono: "'Open Sans', sans-serif",
  },
  colors: {
    primary: '#7216F4',
  },
  config: {
    cssVarPrefix: 'vide',
  },
  components: {
    Container,
    Button,
  },
  breakPoints,
  borders: {
    primary: '2px solid #7216F4',
    subTitle: `6px solid #7216F4`,
  },
  radii: {
    md: '0',
  },
});
