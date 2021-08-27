import { AppProps } from 'next/app';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@vide/ui';
import { ThemeProvider } from '@emotion/react';
import { globalStyles } from '../globals/global.styles';
import SwiperCore, { EffectFade } from 'swiper';
import { CotizationFeature } from '../modules/cotization';
SwiperCore.use([EffectFade]);
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to landing!</title>
      </Head>
      <ChakraProvider theme={theme}>
        <ThemeProvider
          theme={{
            ...theme,
            breakpoints: {
              xs: '0px',
              sm: '576px',
              md: '768px',
              lg: '992px',
              laptop: '1200px',
              xl: '1200px',
            },
          }}
        >
          <CotizationFeature>
            <Component {...pageProps} />
          </CotizationFeature>
        </ThemeProvider>
        {globalStyles}
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
