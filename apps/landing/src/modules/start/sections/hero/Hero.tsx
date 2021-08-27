import { Box, Button, Container, HStack, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { getToken } from '@vide/ui';
import React from 'react';
import { Element } from 'react-scroll';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import { HeroStartup, Line } from '../../../../components/svgs';

import { Link as LinkScroll } from 'react-scroll';
import { down } from 'styled-breakpoints';
import { useCotizationState } from '../../../../modules/cotization';
const Wrapper = styled.div`
  position: relative;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  height: 800px;
  width: 100vw;
  ${down('laptop')} {
    .side_left {
      min-width: 45% !important;
      margin-left: 50px;
    }
  }
  ${down('sm')} {
    height: 550px;
  }
  ${down('xs')} {
    height: 100vh;
    align-items: center;
    .side_left {
      margin: 0 !important;
    }
  }
  .limit {
    height: 100%;
    display: flex;
    position: absolute;
    top: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .startup {
    width: 400px;
    ${down('laptop')} {
      width: 400px !important;
    }
    ${down('sm')} {
      display: none;
    }
  }
  .space_svg {
    position: relative;
    margin: 50px;
    svg {
      width: 500px;
    }
    /* border: 2px solid black; */
  }
  .wrapper_typer {
    min-height: 150px;
  }
  .typer {
    ${down('laptop')} {
      &__title,
      &__subtitle {
        font-size: ${getToken('fontSizes.6xl')} !important;
      }
    }
    ${down('xs')} {
      &__title,
      &__subtitle {
        text-align: left;
        font-size: ${getToken('fontSizes.3xl')} !important;
      }
    }

    &__title {
      font-size: ${getToken('fontSizes.7xl')};
      font-weight: bold;
      line-height: 40px;
    }
    &__subtitle {
      font-weight: bold;
      color: ${getToken('colors.primary')};
      font-size: ${getToken('fontSizes.7xl')};
    }
  }
  .side_left {
    min-width: 50%;
  }
`;
const SvgLine = styled(Line)`
  position: absolute;
  right: 8%;
  height: 1000px;
  ${down('laptop')} {
    right: -100px;
    width: 550px;
  }
  ${down('sm')} {
    display: none;
  }
`;

function Hero() {
  const skills = [
    'Paginas web',
    'Eccommerce',
    'Diseño web',
    'Marketing Digital',
  ];
  const [stateCotization, dispatchCotization] = useCotizationState();
  const onWriter = (writer: TypewriterClass) => {
    let instance_ = writer;
    const repeat = (instance: TypewriterClass, skill: string) => {
      return instance
        .typeString(`<span class="typer__subtitle">${skill}</span>`)
        .pauseFor(100)
        .deleteChars(skill.length)
        .pauseFor(100);
    };
    instance_ = skills.reduce((prev, curr, idx) => {
      return repeat(prev, skills[idx]);
    }, instance_);

    instance_.start();
  };
  return (
    <Element name="start">
      <Wrapper>
        <SvgLine />
        <Container size="lg" className="limit">
          <Stack
            spacing={[0, 2]}
            className="side_left"
            width="100%"
            justifyContent="center"
            alignItems="flex-start"
            justifySelf={['center', 'flex-start']}
          >
            <Box className="wrapper_typer">
              <Text
                padding={['12px 0px', '25px 6px']}
                fontSize={['sm']}
                color="blackAlpha.500"
              >
                Agencia de marketing Digital y desarrollo de software
              </Text>

              <h1 className="typer__title">Solución eficaz en:</h1>
              <Typewriter
                onInit={onWriter}
                options={{
                  loop: true,
                  wrapperClassName: 'typer',
                  cursor: '',
                }}
              ></Typewriter>
            </Box>
            <Text
              py={[4, null, 3]}
              maxWidth="650px"
              textAlign={['left', null, 'initial']}
            >
              Potencia tu negocio con nuevas tecnologias y nuevas maneras de
              llegar a potenciales clientes, consigue esos leads que le hacen
              falta a tu empresa
            </Text>
            <HStack>
              <Button
                variant="solid"
                onClick={() =>
                  dispatchCotization({
                    type: 'HANDLE_MODAL_FORM',
                    payload: { open: true },
                  })
                }
              >
                Cotizar
              </Button>
              <Button variant="outline">
                <LinkScroll to="services" spy={true} smooth={true}>
                  Servicios
                </LinkScroll>
              </Button>
            </HStack>
          </Stack>
          <Stack
            alignItems="center"
            className="space_svg"
            justifyContent="center"
            display={['none', null, 'initial']}
          >
            <HeroStartup className="startup"></HeroStartup>
          </Stack>
        </Container>
      </Wrapper>
    </Element>
  );
}

export default Hero;
