// == Import npm
import React from 'react';

// == Import
import NotFoundStyled from './NotFoundStyled';
import Header from 'src/components/Header';

// == Composant
const NotFound = () => (
  <NotFoundStyled>
  <Header />
  <div className="notFound">
    <h2>Oops....</h2>
    <p>Rien ici, désolé</p>
  </div>
    
  </NotFoundStyled>
);

// == Export
export default NotFound;