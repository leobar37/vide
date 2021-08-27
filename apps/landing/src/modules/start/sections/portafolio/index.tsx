import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import { Subtitle } from '../../../../components/ui';
import Image from 'next/image';
import React from 'react';
import { Bullets } from '../../../../components/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { chakra } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import { down } from 'styled-breakpoints';
const Wrapper = styled(Container)`
  padding: 50px 0;
  .portafolio_project {
    min-height: 450px;
    /* border: 2px solid black; */
    align-items: center;
    justify-content: center;
    ${down('xs')} {
      flex-direction: column;
    }
  }
  ${down('xs')} {
    max-width: 350px;
    overflow: hidden;
    padding: 0 0;
  }
`;
const SwiperContainer = chakra(Swiper);

function Portafolio() {
  return (
    <Element name="portafolio">
      <Wrapper size={'lg'}>
        <Subtitle>Proyectos</Subtitle>
        <Text fontSize="lg" textAlign="center" mt={6}>
          Tenemos una larga trayectoria desarrollando todo tipo de proyectos. A
          continuación, unos ejemplos de lo que somos capaces.
        </Text>
        {/* bullets */}
        {/* gallery */}
        <SwiperContainer padding="5" maxWidth="1200px">
          <SwiperSlide>
            <Flex className="portafolio_project">
              <VStack
                width={['100%', '35%']}
                spacing={5}
                className="left"
                border="2px solid white"
                justifyContent="flex-start"
                alignItems="flex-start"
                order={[2, 1]}
              >
                <Text
                  as="h3"
                  w={'100%'}
                  textAlign={['center', 'left']}
                  fontSize="3xl"
                  fontWeight="bold"
                >
                  Dubbie Eccomerce
                </Text>
                <Text as="p" textAlign={['center', 'left']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </Text>
                <Box display="block" w={'100%'} py={3}>
                  <Button
                    variant="solid"
                    display="block"
                    mx={['auto', 'initial']}
                  >
                    visitar
                  </Button>
                </Box>
              </VStack>
              <VStack width={['100%', '50%']} order={[1, 2]}>
                <Swiper>
                  <SwiperSlide>
                    <Image
                      alt=""
                      src="/projects/test.png"
                      width={350}
                      height={350}
                      objectFit="cover"
                    ></Image>
                  </SwiperSlide>
                </Swiper>
              </VStack>
            </Flex>
          </SwiperSlide>
          <Flex w={'100%'} display={['none', 'flex']} justifyContent="center">
            <Bullets />
          </Flex>
        </SwiperContainer>
      </Wrapper>
    </Element>
  );
}

export default Portafolio;
