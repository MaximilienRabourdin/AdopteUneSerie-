// Import npm
import React from 'react';

// Import
import Header from 'src/containers/Header';
import NotFoundStyled from './NotFoundStyled';

// Composant
const NotFound = () => (
  <NotFoundStyled>
    <Header />
    <div className="notFound">
      <h2>Oops....</h2>
      <p>Rien ici, désolé</p>
    </div>
  </NotFoundStyled>
);

// Export
export default NotFound;
