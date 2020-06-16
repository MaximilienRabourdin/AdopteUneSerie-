// Import npm
import React from 'react';
import { Button } from 'semantic-ui-react';

// Composant
const LogOutButton = () => {
  const handleClick = () => {
    sessionStorage.clear();
  };

  return (
    <Button onClick={handleClick} inverted color="blue">
      <a href="/Accueil">Déconnexion</a>
    </Button>
  );
};


// Export
export default LogOutButton;
