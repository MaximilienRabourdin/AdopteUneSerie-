// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';

// == Import
import FooterStyled from './FooterStyled';
import Toggle from './Toggle';
import Facebook from './Facebook';
import Twitter from './Twitter';

// == Composant
const Footer = () => (

  <FooterStyled>
    <MediaQuery minWidth={701}>

      <div id="DesktopFooter">
        <Twitter href="#" className="tweet" />
        <Facebook href="#" className="fb" />
        <a className="contact" href={"/contact"}>Contact</a> 
        <a className="cookie" href={"/cookie"}>Cookie</a> 
        <a className="FAQ" href={"/faq"}>FAQ</a> 
        <a className="notices" href={"/mentions-legales"}>Mentions légales</a> 
      </div>
    </MediaQuery>


    <MediaQuery maxWidth={700}>
      <div id="MobileFooter">
        <Twitter href="#" className="tweet" />
        <Facebook href="#" className="fb" />
        <a className="contact" href={"/contact"}>Contact</a> 
        <a className="cookie" href={"/cookie"}>Cookie</a> 
        <a className="FAQ" href={"/faq"}>FAQ</a> 
        <a className="notices" href={"/mentions-legales"}>Mentions légales</a> 
      </div>
    </MediaQuery>

  </FooterStyled>

);

// == Export
export default Footer;
