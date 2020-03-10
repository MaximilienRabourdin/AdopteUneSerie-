import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// == Import	// == Import
import FormStyled from 'src/components/FormStyled';
import Field from 'src/components/Field';


// == Composant	// == Composant
const Password = ({ fields, changeField }) => (

   <FormStyled>
   <h1 className="title">Mot de passe oublié</h1>

   <Field
      value={fields.email}
      changeValue={changeField}
      placeholder="Votre email"
      name="email"
      type="email"
    />

<div className="actions">
  <button
    type="submit"
    className="actions-button">
    Générer un nouveau mot de passe
  </button>
</div>

<div className="links">
<Link className="links-item" to="/login">Connexion</Link>/
<Link className="links-item" to="/register">Créer un compte</Link>
</div>
  </FormStyled>
);

Password.propTypes = {
  fields: PropTypes.object.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default Password;
