// == Import : npm
import React from 'react';
import MediaQuery from 'react-responsive';

// == Import : local
import  './IntroStyled.module.css';

// == Composant
const Intro = () => (
  //<IntroStyled>
    <MediaQuery minDeviceWidth={426}>
        <a href={"http://localhost:8080/Accueil"} >Adopte une série</a>
        <div></div>
        <div></div>
        <div></div>
        <div></div> 
        <div></div>            
    </MediaQuery>
  //</IntroStyled>
);

// == Export
export default Intro;
