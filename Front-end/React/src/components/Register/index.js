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
const Register = ({ firstname, status, error, lastname, email, password, confirmPassword, changeField, handleRegister }) => {
  const handleSubmit= (evt) => {
    evt.preventDefault();
    handleRegister();
  };
  //var data = sessionStorage.getItem('data');
  console.log(status);
  //var error = sessionStorage.getItem('error');
  console.log(error);
  var error400 = sessionStorage.getItem('error400');
  console.log(error400);
  var error409 = sessionStorage.getItem('error409');
  console.log(error409);

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
        <p>Votre prénom doit contenir au moins 2 lettres</p>

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
        <p>Votre mot de passe doit contenir 8 caractères, une majuscule, un chiffre et un caractère spécial</p>
        <Field
          value={confirmPassword}
          onChange={changeField}
          placeholder="Confirmation mot de passe"
          name="confirmPassword"
          type="password"
        />

        <div className="actionsDesktop">
        {(status>0) &&
        <p style={{color:"green"}}>L'inscription a bien été prise en compte</p>}
        {(error.length>0) &&
        <p style={{color:"red"}}>Erreur sur le formulaire</p>}
        {(error409) &&
        <p style={{color:"red"}}>Ce compte existe déjà</p>}
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
          placeholder="mot de passe"
          name="confirmPassword"
          type="password"
        />

        <div className="actionsMobile">
        {(status>0) &&
        <p style={{color:"green"}}>L'inscription a bien été prise en compte</p>}
        {(error.length>0) &&
        <p style={{color:"red"}}>Erreur sur le formulaire</p>}
        {(error409) &&
        <p style={{color:"red"}}>Ce compte existe déjà</p>}
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
  status: PropTypes.number.isRequired,
  error: PropTypes.objectOf(
    PropTypes.object.isRequired
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
