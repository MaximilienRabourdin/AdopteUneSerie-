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

);

// == Export
export default Footer;
