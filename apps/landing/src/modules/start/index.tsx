/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { NavBarRoot } from '../../components/navBar';
import { Hero } from './sections/hero';
import { Services } from './sections/services';
import Portafolio from './sections/portafolio';
import { FooterRoot } from '../../components/footer';
import About from './sections/About';
function Home() {
  return (
    <>
      <NavBarRoot />
      <Hero />
      <About />
      <Services />
      <Portafolio />
      <FooterRoot />
    </>
  );
}

export default Home;
