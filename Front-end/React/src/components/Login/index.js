import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import	// == Import
import FormStyled from 'src/components/FormStyled';
import Field from 'src/components/Field';


// == Composant
const Login = ({ fields, changeField }) => (
  <FormStyled>
    <h1 className="title">Se connecter</h1>

    <Field
      value={fields.email}
      changeValue={changeField}
      placeholder="Votre email"
      name="email"
      type="email"
    />
    <Field
      value={fields.password}
      changeValue={changeField}
      placeholder="Mot de passe"
      name="password"
      type="password"
    />

    <div className="actions">
      <button
        type="submit"
        className="actions-button"
      >
        Connexion
      </button>
    </div>

    <div className="links">
      <Link className="links-item" to="/password">Mot de passe</Link>/
      <Link className="links-item" to="/register">Créer un compte</Link>
    </div>
  </FormStyled>
);

Login.propTypes = {
  fields: PropTypes.object.isRequired,
  changeField: PropTypes.func.isRequired,
};

// == Export
export default Login;
