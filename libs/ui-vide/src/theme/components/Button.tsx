import { StyleConfig } from '@chakra-ui/theme-tools';
const Button: StyleConfig = {
  // style object for base or default style
  baseStyle: {
    borderRadius: '0px',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    md: {
      fontSize: 'md',
      py: 2,
      px: 2,
      maxWidth: '150px',
      minWidth: '120px',
    },
    sm: {
      fontSize: 'sm',
      width: '120px',
      py: 2,
      px: 2,
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    solid: {
      bg: 'primary',
      color: 'white',
      _hover: {
        bg: 'white',
        border: 'primary',
        color: 'primary',
      },
    },
    outline: {
      _hover: {
        color: 'primary',
        bg: 'white',
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

export default Button as any;
