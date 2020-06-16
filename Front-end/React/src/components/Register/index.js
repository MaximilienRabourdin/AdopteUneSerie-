import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// Import	// Import
import Field from 'src/components/Field';
import Header from 'src/containers/Header';
import RegisterStyled from './RegisterStyled';


// Composant	// Composant
const Register = ({
  firstname, status, error, lastname, email, password, confirmPassword, changeField, handleRegister,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };
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
      <MediaQuery minWidth={426}>
        <form className="formDesktop">
          <h1 className="titleDesktop">Créer un compte</h1>

          <Field
            value={firstname}
            onChange={changeField}
            placeholder="Prénom"
            name="firstname"
            type="text"
          />
          {(firstnameE.length > 0)
        && <p style={{ color: 'red' }}>{firstnameE}</p>}

          <Field
            value={lastname}
            onChange={changeField}
            placeholder="Nom de famille"
            name="lastname"
            type="text"
          />
          {(lastnameE.length > 0)
        && <p style={{ color: 'red' }}>{lastnameE}</p>}
          <Field
            value={email}
            onChange={changeField}
            placeholder="Votre email"
            name="email"
            type="email"
          />
          {(emailE.length > 0)
        && <p style={{ color: 'red' }}>{emailE}</p>}

          <Field
            value={password}
            onChange={changeField}
            placeholder="Mot de passe"
            name="password"
            type="password"
          />
          {(passwordE.length > 0)
        && <p style={{ color: 'red' }}>{passwordE}</p>}
          <Field
            value={confirmPassword}
            onChange={changeField}
            placeholder="Confirmation mot de passe"
            name="confirmPassword"
            type="password"
          />

          <div className="actionsDesktop">
            {(status > 0)
        && <p style={{ color: 'green' }}>L'inscription a bien été prise en compte</p>}
            {(error409 === 409)
        && <p style={{ color: 'red' }}>Ce compte existe déjà</p>}
            <Button
              className="ui blue button"
              type="submit"
              className="actions-button"
            >
              Valider
            </Button>
          </div>

          <div className="linksDesktop">
            <Link className="links-item" to="/connexion">Connexion</Link>
          </div>
        </form>
      </MediaQuery>
      <MediaQuery maxWidth={425}>
        <form className="formMobile">
          <h1 className="titleMobile">Créer un compte</h1>

          <Field
            value={firstname}
            onChange={changeField}
            placeholder="Prénom"
            name="firstname"
            type="text"
          />
          {(firstnameE.length > 0)
        && <p style={{ color: 'red' }}>{firstnameE}</p>}

          <Field
            value={lastname}
            onChange={changeField}
            placeholder="Nom de famille"
            name="lastname"
            type="text"
          />
          {(lastnameE.length > 0)
        && <p style={{ color: 'red' }}>{lastnameE}</p>}
          <Field
            value={email}
            onChange={changeField}
            placeholder="Votre email"
            name="email"
            type="email"
          />
          {(emailE.length > 0)
        && <p style={{ color: 'red' }}>{emailE}</p>}

          <Field
            value={password}
            onChange={changeField}
            placeholder="Mot de passe"
            name="password"
            type="password"
          />
          {(passwordE.length > 0)
        && <p style={{ color: 'red' }}>{passwordE}</p>}
          <Field
            value={confirmPassword}
            onChange={changeField}
            placeholder="Confirmation mot de passe"
            name="confirmPassword"
            type="password"
          />

          <div className="actionsMobile">
            {(status > 0)
        && <p style={{ color: 'green' }}>L'inscription a bien été prise en compte</p>}
            {(error409 == 409)
          && <p style={{ color: 'red' }}>Ce compte existe déjà</p>}
            <Button
              className="ui blue button"
              type="submit"
              className="actions-button"
            >
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
