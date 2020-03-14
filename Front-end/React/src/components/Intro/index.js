// == Import : npm
import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";

// == Import : local
import IntroStyled from './IntroStyled.module.js';
import logo from 'src/assets/logo4.png'

// == Composant
const Intro = () => (
  <IntroStyled>
    <MediaQuery minDeviceWidth={426}>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div> 
        <div className="div">
          <Link to="/Accueil">
            <img src={logo} />
          </Link>
        </div>            
    </MediaQuery>
  </IntroStyled>
);

// == Export
export default Intro;
