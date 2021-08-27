import { Box, Button, Container, Flex, Text, VStack } from '@chakra-ui/react';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import {
  ComputerSvg,
  MobileAppsSvg,
  ShopSvg,
} from '../../../../components/svgs';
import { Subtitle } from '../../../../components/ui';
import { ServicesData } from '../../../../globals/services';
import { getToken } from '@vide/ui';
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EccomerceSvg } from '../../../../components/svgs';
import { down } from 'styled-breakpoints';

const WrapperClass = styled(Element)`
  min-height: 350px;
  text-align: center;
  margin: 40px 0;
  padding: 30px 0;
  ${down('xs')} {
    margin: 10px 0;
    padding: 10px 0;
  }
  .cards {
    margin-top: 80px;
  }
  .card_right {
    padding: 10px;
    max-width: 50%;
    ${down('sm')} {
      max-width: initial !important;
      text-align: center;
      width: 500px;
      .cards {
        margin-top: px;
      }
    }
  }
  .services_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 35px;
  }
`;
const CardIcon = styled(VStack)`
  cursor: pointer;
  margin: 10px;
  max-width: 250px;
  .icon {
    font-size: 50px;
    color: ${getToken('colors.primary')};
  }
  transition: 0.2s;
  &:hover {
    transform: scale(1.08);
  }
`;

const WrapperSvg = styled.div`
  height: 350px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
  }
  ${down('xs')} {
    height: 350px;
    width: 250px;
  }
`;

function Services() {
  const [swiper, setSwiper] = useState<SwiperClass>(null);

  const goToSlide = (idx: number) => {
    swiper.slideTo(idx);
  };

  const cards = ServicesData.map((item, idx) => {
    return (
      <CardIcon
        shadow="md"
        data-idx={idx}
        _hover={{ shadow: 'lg', bg: 'gray.100' }}
        padding="12"
        key={idx}
        onClick={() => goToSlide(idx)}
      >
        <item.icon className="icon" />
        <Text fontWeight="bold" fontSize="lg">
          {item.name}
        </Text>
      </CardIcon>
    );
  });

  return (
    <WrapperClass name="services">
      <Container size="lg">
        <VStack
          my={10}
          direction="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          textAlign="center"
        >
          <Subtitle textAlign="center">Servicios</Subtitle>
          <Text textAlign="center" maxW="container.lg" fontSize={['md', 'lg']}>
            Contamos con los servicios necesarios para hacer notar tu empresa ,
            consigue esos leads que te faltan, o empieza a desarollar tu idea,
            contamos con personal capacitado para llevar a cabo todo tipo reto
          </Text>
        </VStack>
        <div className="services_wrapper">
          <Flex
            flexWrap="wrap"
            spacing={10}
            maxWidth="40%"
            mx={4}
            display={['none', 'flex']}
            className="cards"
            alignItems="start"
            justifyContent="start"
          >
            {cards}
          </Flex>
          <Swiper
            effect="slide"
            navigation={false}
            centeredSlides
            onSwiper={setSwiper}
            slidesPerView={1}
            className="card_right"
          >
            {/* Eccomerce */}
            <SwiperSlide>
              <VStack padding={5} minWidth="280px" bg={'white'} spacing={5}>
                <WrapperSvg>
                  <ShopSvg />
                </WrapperSvg>
                <Text fontWeight="semibold" fontSize="2xl">
                  Eccomerce
                </Text>
                <Text as="p" maxWidth="450px" textAlign="center">
                  !Amplia tu mercado a todo el mundo¡ Haz que tu tienda gane más
                  vendiendo tus productos a millones de clientes
                </Text>
                <Button variant="solid">cotizar</Button>
              </VStack>
            </SwiperSlide>
            {/* Web design */}
            <SwiperSlide>
              <VStack bg={'white'} mx={2} spacing={5}>
                <WrapperSvg>
                  <ComputerSvg />
                </WrapperSvg>
                <Text fontWeight="semibold" fontSize="2xl">
                  Diseño web
                </Text>
                <Text as="p" maxWidth="450px" textAlign="center">
                  Crea una entidad coporativa a la medida de tus deseos y
                  adáptala a tus nuevas necesidades
                </Text>
                <Button variant="solid">cotizar</Button>
              </VStack>
            </SwiperSlide>
            {/*  Marketing */}
            <SwiperSlide>
              <VStack bg={'white'} mx={2} spacing={5}>
                <WrapperSvg>
                  <EccomerceSvg />
                </WrapperSvg>
                <Text fontWeight="semibold" fontSize="2xl">
                  Marketing
                </Text>
                <Text as="p" maxWidth="450px" textAlign="center">
                  Especialistas en marketing digital para pequeñas y medianas
                  empresas
                </Text>
                <Button variant="solid">cotizar</Button>
              </VStack>
            </SwiperSlide>
            {/* Mobile apps */}
            <SwiperSlide>
              <VStack bg={'white'} mx={2} spacing={5}>
                <WrapperSvg>
                  <MobileAppsSvg />
                </WrapperSvg>
                <Text fontWeight="semibold" fontSize="2xl">
                  Mobile apps
                </Text>
                <Text as="p" maxWidth="450px" textAlign="center">
                  Lleva tu idea de negocio a otro nivel con un app desarrollada
                  a medida para extraer todo el potencial de tu tienda
                </Text>
                <Button variant="solid">cotizar</Button>
              </VStack>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </WrapperClass>
  );
}

export default Services;

/** */

// /* eslint-disable @nrwl/nx/enforce-module-boundaries */
// import React from 'react';
// import styled from '@emotion/styled';
// import { Container, Stack, Text } from '@chakra-ui/react';
// import { EccomerceSvg } from '../../../../components/svgs';
// import { SmallCard } from '../../../../components/smallCard';

// import {
//   ecommerceIcon,
//   monitorIcon,
//   megaphoneIcon,
//   mobileIcon,
// } from './ServicesIcons';

// const Wrapper = styled.div`
//   height: 800px;
//   /* border: 2px solid black; */
//   .limit {
//     /* border: 2px solid black; */
//     height: 100%;
//     display: flex;
//     padding: 0 3rem;
//     flex-flow: row wrap;
//     align-items: flex-start;
//     justify-content: flex-start;
//   }
// `;

// const Line = styled.div`
//   width: 360px;
//   height: 8px;
//   background-color: #7216f4;
// `;

// const CardsContainer = styled.div`
//   padding-top: 3rem;
//   display: flex;
//   overflow-x: scroll;

//   @media (min-width: 1024px) {
//     flex-flow: row wrap;
//     max-width: 50vw;
//     overflow-x: hidden;
//   }
// `;

// const DescriptionContainer = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
// `;

// function Services() {
//   return (
//     <Wrapper>
//       <Container size="lg" className="limit">
//         <Stack width="100%" justifySelf="flex-start">
//           <Text fontSize="6xl" fontWeight="bold">
//             Servicios
//           </Text>
//           <Line />
//         </Stack>
//         <CardsContainer>
//           <SmallCard icon={ecommerceIcon} title="Ecommerce" />
//           <SmallCard icon={monitorIcon} title="Diseño web" />
//           <SmallCard icon={megaphoneIcon} title="Marketing" />
//           <SmallCard icon={mobileIcon} title="Mobile apps" />
//         </CardsContainer>

//         <DescriptionContainer>
//           <EccomerceSvg />
//           <Text fontSize="4xl" fontWeight="bold" textAlign="center">
//             Ecommerce
//           </Text>
//           <Text
//             fontSize="2xl"
//             fontWeight="thin"
//             textAlign="center"
//             maxWidth="360px"
//             margin="auto"
//           >
//             ¡Amplía tu mercado a todo el mundo! Haz que tu tienda gane más
//             vendiendo tus productos a millones de clientes.
//           </Text>
//         </DescriptionContainer>
//       </Container>
//     </Wrapper>
//   );
// }

// export default Services;
