// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';


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

<MediaQuery maxDeviceWidth={426}>
<div id="MobileFooter">

  <div id="social-media">
    <Twitter href="#" className="tweet"/>
    <Facebook href="#" className="fb"/>
  </div>
  
    <Contact  href="#" className="contact"/>
    <Cookie  href="#"className="cookie"/>
    <FAQ  href="#"className="FAQ"/>
    <Notices href="#"className="notices"/>
    
</div>
</MediaQuery>

 <MediaQuery maxDeviceWidth={430}>
<div id="DesktopFooter">

    <Twitter href="#" className="tweet"/>
    <Facebook href="#" className="fb"/>
    <Contact  href="#" className="contact"/>
    <Cookie  href="#"className="cookie"/>
    <FAQ  href="#"className="FAQ"/>
    <Notices href="#"className="notices"/>
    <Toggle href="#"className="toggle" />
    
</div>
</MediaQuery> 


</FooterStyled>


);

// == Export
export default Footer;
