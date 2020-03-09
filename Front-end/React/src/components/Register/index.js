
import React from 'react';


// == Import	// == Import
import FormStyled from 'src/components/FormStyled';


// == Composant	// == Composant
const Register = () => (
  <FormStyled>
    <h1 className="title">Créer un compte</h1>

    <div className="field">
      <input type="text" />
    </div>
    <div className="field">
      <input type="text" />
    </div>
    <div className="field">
      <input type="text" />
    </div>
    <div className="field">
      <input type="text" />
    </div>
    <div className="field">
      <input type="text" />
    </div>

    <div className="actions">
      <button
        type="submit"
        className="actions-button">
        Valider
  </button>
    </div>

    <div className="links">
      <a className="links-item" href="#">Connexion</a>
    </div>
  </FormStyled>
);


export default Register;
