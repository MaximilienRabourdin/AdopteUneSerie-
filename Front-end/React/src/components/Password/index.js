import React from 'react';


// == Import	// == Import
import FormStyled from 'src/components/FormStyled';


// == Composant	// == Composant
const Password = () => (
   <FormStyled>
   <h1 className="title">Mot de passe oublié</h1>

<div className="field">
  <input type="text" />
</div>

<div className="actions">
  <button
    type="submit"
    className="actions-button">
    Générer un nouveau mot de passe
  </button>
</div>

<div className="links">
  <a className="links-item" href="#">Connexion</a>/
  <a className="links-item" href="#">Créer un compte</a>
</div>
  </FormStyled>
);

export default Password;
