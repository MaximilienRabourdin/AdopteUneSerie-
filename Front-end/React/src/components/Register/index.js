import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// == Import	// == Import
import RegisterStyled from './RegisterStyled';
import Field from 'src/components/Field';
import Header from 'src/containers/Header';


// == Composant	// == Composant
const Register = ({ firstname, lastname, email, password, confirmPassword, changeField, handleRegister }) => {
  const handleSubmit= (evt) => {
    evt.preventDefault();
    handleRegister();
  };
  return (
    <RegisterStyled onSubmit={handleSubmit}>
    <Header/>
    <MediaQuery minDeviceWidth={426}>
      <form className="formDesktop">
        <h1 className="titleDesktop">Créer un compte</h1>

        <Field
          value={firstname}
          onChange={changeField}
          placeholder="Prénom"
          name="firstname"
          type="text"
        />
        <Field
          value={lastname}
          onChange={changeField}
          placeholder="Nom de famille"
          name="lastname"
          type="text"
        />
        <Field
          value={email}
          onChange={changeField}
          placeholder="Votre email"
          name="email"
          type="email"
        />

        <Field
          value={password}
          onChange={changeField}
          placeholder="Mot de passe"
          name="password"
          type="password"
        />

        <Field
          value={confirmPassword}
          onChange={changeField}
          placeholder="Confirmation de votre mot de passe"
          name="confirmPassword"
          type="password"
        />

        <div className="actionsDesktop">
          <Button
          className="ui blue button"
          type="submit"
          className="actions-button">
            Valider
          </Button>
        </div>

        <div className="linksDesktop">
          <Link className="links-item" to="/connexion">Connexion</Link>
        </div>
      </form>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={425}>
      <form className="formMobile">
        <h1 className="titleMobile">Créer un compte</h1>

        <Field
          value={firstname}
          onChange={changeField}
          placeholder="Prénom"
          name="firstname"
          type="text"
        />
        <Field
          value={lastname}
          onChange={changeField}
          placeholder="Nom de famille"
          name="lastname"
          type="text"
        />
        <Field
          value={email}
          onChange={changeField}
          placeholder="Votre email"
          name="email"
          type="email"
        />

        <Field
          value={password}
          onChange={changeField}
          placeholder="Mot de passe"
          name="password"
          type="password"
        />

        <Field
          value={confirmPassword}
          onChange={changeField}
          placeholder="Confirmation de votre mot de passe"
          name="confirmPassword"
          type="password"
        />

        <div className="actionsMobile">
          <Button
          className="ui blue button"
          type="submit"
          className="actions-button">
            Valider
          </Button>
        </div>

        <div className="linksMobile">
          <Link className="links-item" to="/connexion">Connexion</Link>
        </div>
      </form>
    </MediaQuery>
    </RegisterStyled>
  );
};

Register.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};


export default Register;
