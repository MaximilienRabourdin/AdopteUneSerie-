import React from 'react';


// == Import	// == Import
import FormStyled from 'src/components/FormStyled';
import Field from 'src/components/Field';


// == Composant	// == Composant
const Login = () => (
  <FormStyled>
    <h1 className="title">Connexion</h1>

    <Field />
    <input type="" />	 
    <Field />

    <div className="actions">
      <button
        type="submit"
        className="actions-button"
      >
        Connexion
      </button>
    </div>

    <div className="links">
      <a className="links-item" href="#">mot de passe oublié</a> /
      <a className="links-item" href="#">compte</a>
    </div>
  </FormStyled>
);

// == Export	
export default Login
