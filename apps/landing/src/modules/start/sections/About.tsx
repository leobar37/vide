import React from 'react';
import { Subtitle } from '../../../components/ui';
import { Container, Button, Text, VStack } from '@chakra-ui/react';
import { Element } from 'react-scroll';

import { useCotizationState } from '../../../modules/cotization';

function About() {
  const [, dispatchCotization] = useCotizationState();

  return (
    <Element name="about">
      <Container size="lg" my={[5, 10]} py={[5, 35]}>
        <VStack spacing={8}>
          <Subtitle>Sobre vide</Subtitle>
          <Text
            className="max-paragraph"
            textAlign="center"
            fontSize={['md', 'md', 'lg']}
          >
            Somos una empresa que tiene como objetivo ayudar a pequeñas y
            medianas empresas en distintos países de Latinoamérica a llegar a
            más clientes, automatizar procesos, mejorar la imagen de marca,
            reduciendo costos a travéssdel desarrollo de software, estrategias
            de marketing digital y social media acompañando con feedback durante
            todo el crecimiento del proyecto y tu empresa
          </Text>
          <Button
            variant="solid"
            onClick={() =>
              dispatchCotization({
                type: 'HANDLE_MODAL_FORM',
                payload: { open: true },
              })
            }
          >
            Empecemos
          </Button>
        </VStack>
      </Container>
    </Element>
  );
}

export default About;
