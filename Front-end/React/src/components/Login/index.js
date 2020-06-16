// Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

// Import
import Field from 'src/components/Field';
import Header from 'src/containers/Header';
import LoginStyled from './LoginStyled';


// Composant
const Login = ({
  password, status, error, email, changeField, handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  const data = sessionStorage.getItem('token');
  console.log(error);

  // console.log(error);
  let error401 = 0;

  // var data = sessionStorage.getItem('data');
  if (error) {
    if (error.status) {
      error401 = 401;
    }
  }

  return (
    <LoginStyled onSubmit={handleSubmit}>
      <Header />
      <form className="form">
        <h1 className="title">Se connecter</h1>
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
        <p>Votre mot de passe doit contenir au moins: 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial</p>

        <div className="actions">
          {(data)
            && <p style={{ color: 'green' }}>Vous êtes Connecté</p>}
          {(error401 === 401)
          && <p style={{ color: 'red' }}>Email ou mot de passe incorrect</p>}
          <Button
            className="ui blue button"
            type="submit"
            className="actions-button"
          >
            Connexion
          </Button>

        </div>
        <div className="links">
          <Link className="links-item" to="/mot-de-passe-oublié">Mot de passe oublié</Link>/
          <Link className="links-item" to="/inscription">Créer un compte</Link>
        </div>
      </form>
    </LoginStyled>
  );
};

Login.propTypes = {
  status: PropTypes.number.isRequired,
  error: PropTypes.objectOf(
    PropTypes.object.isRequired,
  ).isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

// Export
export default Login;
