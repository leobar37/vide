import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/ban-types
function Subtitle({ children, ...props }: PropsWithChildren<{} & TextProps>) {
  return (
    <Text
      fontWeight="bold"
      width="100%"
      fontSize="4xl"
      as="h2"
      textAlign="center"
      {...props}
    >
      {children}
    </Text>
  );
}

export default Subtitle;
