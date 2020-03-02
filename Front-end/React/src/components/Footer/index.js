// == Import npm
import React from 'react';


// == Import
import Buttons from 'src/components/Buttons';
import Contact from 'src/components/Contact';
import Cookie from 'src/components/Cookie';
import FAQ from 'src/components/FAQ';
import Notices from 'src/components/Notices';
import FooterStyled from './FooterStyled';

// == Composant
const Footer = () => (
  
  <FooterStyled>
    <Buttons />
    <Contact />
    <Cookie />
    <FAQ />
    <Notices />
  </FooterStyled>

);

// == Export
export default Footer;
