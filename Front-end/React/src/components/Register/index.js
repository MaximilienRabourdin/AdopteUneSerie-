
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// == Import	// == Import
import FormStyled from 'src/components/FormStyled';
import Field from 'src/components/Field';


// == Composant	// == Composant
const Register = ({ fields, changeField }) => (
  <FormStyled>
    <h1 className="title">Créer un compte</h1>

    <Field
      value={fields.firstname}
      changeValue={changeField}
      placeholder="Prénom"
      name="firstname"
      type="text"
    />
    <Field
      value={fields.lastname}
      changeValue={changeField}
      placeholder="Nom de famille"
      name="lastname"
      type="text"
    />
    <Field
      value={fields.email}
      changeValue={changeField}
      placeholder="Votre email"
      name="email"
      type="email"
    />

    <Field
      value={fields.email}
      changeValue={changeField}
      placeholder="Mot de passe"
      name="mp"
      type="mp"
    />

    <Field
      value={fields.email}
      changeValue={changeField}
      placeholder="Confirmation de votre mot de passe"
      name="confirm-mp"
      type="confirm-mp"
    />

    <div className="actions">
      <button
        type="submit"
        className="actions-button">
        Valider
  </button>
    </div>

    <div className="links">
      <Link className="links-item" to="/login">Connexion</Link>
    </div>
  </FormStyled>
);

Register.propTypes = {
  fields: PropTypes.object.isRequired,
  changeField: PropTypes.func.isRequired,
};


export default Register;
