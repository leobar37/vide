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
import React, { useState } from 'react';
import { Bullets } from '../../../../components/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { chakra } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import { down } from 'styled-breakpoints';
import { Swiper as SwiperClass } from 'swiper';
import { PROJECTS_DATA, ProjectDataType } from './projectsData';
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
  const [swiper, setSwiper] = useState<SwiperClass>(null);
  const mapProject = (pr: ProjectDataType) => {
    return (
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
              {pr.name}
            </Text>
            <Text as="p" textAlign={['center', 'left']}>
              {pr.description}
            </Text>
            <Box display="block" textAlign="center" w={'100%'} py={3}>
              <Button
                as="a"
                href={pr.redirect}
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
              {pr.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <Image
                    alt=""
                    src={`/${img}`}
                    width={350}
                    height={350}
                    objectFit="contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </VStack>
        </Flex>
      </SwiperSlide>
    );
  };

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
        <SwiperContainer onSwiper={setSwiper} padding="5" maxWidth="1200px">
          {PROJECTS_DATA.map(mapProject)}
          <Flex w={'100%'} display={['none', 'flex']} justifyContent="center">
            <Bullets
              onLeft={() => {
                swiper.slidePrev();
              }}
              onRight={() => {
                swiper.slideNext();
              }}
            />
          </Flex>
        </SwiperContainer>
      </Wrapper>
    </Element>
  );
}

export default Portafolio;
