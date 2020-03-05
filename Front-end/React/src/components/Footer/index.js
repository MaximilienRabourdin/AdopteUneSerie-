// == Import npm
import React from 'react';

// == Import

import Contact from 'src/components/Contact';
import Cookie from 'src/components/Cookie';
import FAQ from 'src/components/FAQ';
import Notices from 'src/components/Notices';
import FooterStyled from './FooterStyled';
import Toggle from './Toggle';
import Facebook from './Facebook';
import Twitter from './Twitter';

// == Composant
const Footer = () => (
<<<<<<< HEAD
  <FooterStyled>
    <div id="text">
      <Notices href="#" className="notices" />
      <FAQ href="#" className="FAQ" />
      <Cookie href="#" className="cookie" />
      <Contact href="#" className="contact" />
    </div>
    <div id="toggle">
      <Toggle className="toggle" />
    </div>
    <div id="buttons">
      <Twitter href="#" className="tweet" />
      <Facebook href="#" className="fb" />
    </div>
  </FooterStyled>
=======

  <FooterStyled>
    <MediaQuery minDeviceWidth={426}>

      <div id="DesktopFooter">
        <Twitter href="#" className="tweet" />
        <Facebook href="#" className="fb" />
        <Contact href="#" className="contact" />
        <Cookie href="#" className="cookie" />
        <FAQ href="#" className="FAQ" />
        <Notices href="#" className="notices" />
        <Toggle href="#" className="toggle" />
      </div>
    </MediaQuery>


    <MediaQuery maxDeviceWidth={425}>
      <div id="MobileFooter">
        <Twitter href="#" className="tweet" />
        <Facebook href="#" className="fb" />
        <Contact href="#" className="contact" />
        <Cookie href="#" className="cookie" />
        <FAQ href="#" className="FAQ" />
        <Notices href="#" className="notices" />
      </div>
    </MediaQuery>

  </FooterStyled>

>>>>>>> 0481b1d22eb2da40c93ad44e045b32654d087af6

);

// == Export
export default Footer;
