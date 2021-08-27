import {
  Box,
  Button,
  Center,
  Flex,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { down } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-emotion';
import { CompanyDetailForm, ProjectForm, UserDetailForm } from './components';
import SvgCotization from './SvgCotization';

function Cotization() {
  const numPanels = 2;
  const { handleSubmit, submitForm, isSubmitting, isValid, isInitialValid } =
    useFormikContext();
  const [tabIndex, setTabIndex] = React.useState(0);

  const isMobile = useBreakpoint(down('xs'));

  const handleSliderChangeAhead = () => {
    setTabIndex((prev) => {
      if (prev == numPanels) {
        submitForm();
        return numPanels;
      }
      return tabIndex + 1;
    });
  };

  const handleSliderChangeBack = () => {
    setTabIndex((prev) => {
      if (prev == 0) {
        return 0;
      }
      return tabIndex - 1;
    });
  };
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Flex
      bg={['transparent', 'white']}
      width={[null, '500px', '900px']}
      display={['block', 'flex']}
      height={['80vh', '70vh']}
    >
      <Center flex="50%" alignItems="flex-start" pt={7} px={[5, null]}>
        <VStack
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handleSubmit(e as any);
          }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          spacing={8}
          maxWidth="350px"
        >
          <Text fontWeight="bold" fontSize={['2xl', 'xl']}>
            Cotización
          </Text>
          {tabIndex == 0 && (
            <Text textAlign="center" fontSize={['sm', 'sm', 'lg']}>
              Permitenos hacerte una cuantas preguntas , para entender mucho
              mejor tus necesidades y ponernos en contacto lo más antes posible
            </Text>
          )}
          <Tabs index={tabIndex} onChange={handleTabsChange}>
            <TabPanels>
              <TabPanel>
                {/* User detail form */}
                <UserDetailForm />
              </TabPanel>
              <TabPanel>
                {/* Company detail form */}
                <CompanyDetailForm />
              </TabPanel>
              <TabPanel>
                {/*  Project Form  */}
                <ProjectForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box
            display="inline-flex"
            justifyContent="space-between"
            minWidth="350px"
            width="100%"
          >
            <Button
              visibility={tabIndex == 0 ? 'hidden' : 'visible'}
              onClick={() => handleSliderChangeBack()}
              rightIcon={<AiOutlineLeft />}
            >
              Atrás
            </Button>
            <Button
              onClick={() => handleSliderChangeAhead()}
              rightIcon={<AiOutlineRight />}
              loadingText="Cargando..."
              disabled={isSubmitting}
            >
              {tabIndex == numPanels ? 'Finalizar' : 'Siguiente'}
            </Button>
          </Box>
        </VStack>
      </Center>
      <Box
        flex={[null, '350px', '350px', '50%']}
        textAlign="center"
        color="white"
        display={['none', 'initial']}
        height="100%"
        bg="primary"
      >
        <SvgCotization style={{ width: '400px', margin: '50px auto' }} />
        <Text>+987654321</Text>
        <Text>vide@gmail.com</Text>
      </Box>
    </Flex>
  );
}

export default Cotization;
