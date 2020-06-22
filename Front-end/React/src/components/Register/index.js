// Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

// Import
import Field from 'src/components/Field';
import Header from 'src/containers/Header';
import RegisterStyled from './RegisterStyled';

// Composant
const Register = ({
  firstname,
  status,
  error,
  lastname,
  email,
  password,
  confirmPassword,
  changeField,
  handleRegister,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };
  // Vérification des inputs
  // console.log("components", status);
  let firstnameE = '';
  let lastnameE = '';
  let emailE = '';
  let passwordE = '';
  let error409 = 0;
  // var data = sessionStorage.getItem('data');
  if (error) {
    if (error.data) {
      if (error.data.errors) {
        if (error.data.errors.firstname) {
          firstnameE = error.data.errors.firstname;
        }
        if (error.data.errors.lastname) {
          lastnameE = error.data.errors.lastname;
        }
        if (error.data.errors.email) {
          emailE = error.data.errors.email;
        }
        if (error.data.errors.plainPassword) {
          passwordE = error.data.errors.plainPassword;
        }
      }
      if (error.status) {
        if (error.status === 409) {
          error409 = 409;
          // console.log(error.status)
        }
      }
    }
  }

  return (
    <RegisterStyled onSubmit={handleSubmit}>
      <Header />
      <form className="form">
        <h1 className="title">Créer un compte</h1>

        <Field
          value={firstname}
          onChange={changeField}
          placeholder="Prénom"
          name="firstname"
          type="text"
        />
        {(firstnameE.length > 0)
        && <p className="red">{firstnameE}</p>}

        <Field
          value={lastname}
          onChange={changeField}
          placeholder="Nom de famille"
          name="lastname"
          type="text"
        />
        {(lastnameE.length > 0)
        && <p className="red">{lastnameE}</p>}
        <Field
          value={email}
          onChange={changeField}
          placeholder="Votre email"
          name="email"
          type="email"
        />
        {(emailE.length > 0)
        && <p className="red">{emailE}</p>}

        <Field
          value={password}
          onChange={changeField}
          placeholder="Mot de passe"
          name="password"
          type="password"
        />
        {(passwordE.length > 0)
        && <p className="red">{passwordE}</p>}
        <Field
          value={confirmPassword}
          onChange={changeField}
          placeholder="Confirmation mot de passe"
          name="confirmPassword"
          type="password"
        />

        <div className="actions">
          {(status > 0)
        && <p className="green">L'inscription a bien été prise en compte</p>}
          {(error409 === 409)
        && <p className="red">Ce compte existe déjà</p>}
          <Button
            className="ui blue button"
            type="submit"
            className="actions-button"
          >
            Valider
          </Button>
        </div>

        <div className="links">
          <Link className="links-item" to="/connexion">Connexion</Link>
        </div>
      </form>
    </RegisterStyled>
  );
};

Register.propTypes = {
  status: PropTypes.number.isRequired,
  error: PropTypes.objectOf(
    PropTypes.object.isRequired,
  ).isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};


export default Register;
