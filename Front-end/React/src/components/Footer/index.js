// Import npm
import React from 'react';

// Import
import FooterStyled from './FooterStyled';
import Facebook from './Facebook';
import Twitter from './Twitter';

// Composant
const Footer = () => (

  <FooterStyled>
    <div className="Footer">
      <Twitter href="#" className="tweet" />
      <Facebook href="#" className="fb" />
      <a className="contact" href="/contact">Contact</a>
      <a className="cookie" href="/cookie">Cookie</a>
      <a className="FAQ" href="/faq">FAQ</a>
      <a className="notices" href="/mentions-legales">Mentions légales</a>
    </div>
  </FooterStyled>

);

// Export
export default Footer;
