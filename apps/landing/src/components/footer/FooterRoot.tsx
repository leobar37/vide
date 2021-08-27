import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { getToken } from '@vide/ui';
const Wrapper = styled.div`
  width: 100vw;
  background: ${getToken('colors.primary')};
  padding: 40px 0;
`;
function FooterRoot() {
  return (
    <Wrapper>
      <Container
        display="flex"
        justifyContent="center"
        flexDirection="column"
        size="lg"
        height="100%"
      >
        <Flex
          color="white"
          flexDirection={['column', 'row']}
          justifyContent="space-between"
          w={'100%'}
        >
          <VStack spacing="5" alignItems={['center', 'flex-start']}>
            <Text fontSize="x-large" fontWeight="semibold">
              Comienza con nosotros
            </Text>
            <Text
              maxWidth="400px"
              fontWeight="light"
              textAlign={['center', 'left']}
            >
              Nos encontramos en la capacidad de concretar cualquier proyecto
            </Text>
            <Button variant="outline" size="sm">
              cotizar
            </Button>
          </VStack>
          <HStack
            my={[2, 'initial']}
            spacing={['0', '10']}
            flexDirection={['column', 'row']}
            justifyContent={['center', 'initial']}
            alignItems={['center', 'initial']}
          >
            <Box>
              <Text fontWeight="bold" textAlign={['center', 'left']} my={2}>
                About
              </Text>
              <VStack alignItems={['center', 'flex-start']} as="ul">
                <Link>Nuestro Team</Link>
                <Link>Clientes</Link>
              </VStack>
            </Box>
            <Box>
              <Text fontWeight="bold" textAlign={['center', 'left']} my={2}>
                Contacto
              </Text>
              <VStack alignItems={['center', 'flex-start']} as="ul">
                <Link>+51987654321</Link>
                <Link>contacto@vide.com</Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
        <Flex
          mt={12}
          color="whiteAlpha.700"
          w={'100%'}
          justifyContent="space-between"
        >
          <Text>@2021 vide company</Text>
          <HStack spacing={5}>
            <Text>
              <Link>Terms of Service</Link>
            </Text>
            <Text>
              <Link>Privacy policy</Link>
            </Text>
          </HStack>
        </Flex>
      </Container>
    </Wrapper>
  );
}

export default FooterRoot;
