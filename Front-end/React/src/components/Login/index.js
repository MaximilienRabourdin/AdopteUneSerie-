import React from 'react';


// == Import	// == Import
import FormStyled from 'src/components/FormStyled';


// == Composant	// == Composant
const Login = () =>  (
  <FormStyled>
    <h1 className="title">Se connecter</h1>

    <div className="field">
      <input type="text" />
    </div>
    <div className="field">
      <input type="text" />
    </div>

    <div className="actions">
      <button
        type="submit"
        className="actions-button"
      >
        Connexion
      </button>
    </div>

    <div className="links">
      <a className="links-item" href="#">mot de passe</a> /
      <a className="links-item" href="#">compte</a>
    </div>
  </FormStyled>
  );

// == Export	
export default Login
