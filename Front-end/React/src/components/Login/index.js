import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

	// == Import
import LoginStyled from './LoginStyled';
import Field from 'src/components/Field';
import Header from 'src/components/Header';


// == Composant
const Login = ({ password, email, changeField, handleLogin }) => {
  const handleSubmit= (evt) => {
    evt.preventDefault();
    console.log("login");
    handleLogin();
  };
  return (
    <LoginStyled onSubmit={handleSubmit}>
    <Header />
      <MediaQuery minDeviceWidth={426}>
        <form className="formDesktop">
          <h1 className="titleDesktop">Se connecter</h1>
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

          <div className="actionsDesktop">
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button" to="/inscription">
              Connexion
            </Button>
          
          </div>

          <div className="linksDesktop">
            <Link className="links-item" to="/mot_de-passe">Mot de passe oublié</Link>/
            <Link className="links-item" to="/inscription">Créer un compte</Link>
          </div>
        </form>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={425}>
        <form className="formMobile">
          <h1 className="titleMobile">Se connecter</h1>
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

          <div className="actionsMobile">
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button" to="/inscription">
              Connexion
            </Button>
          
          </div>

          <div className="linksMobile">
            <Link className="links-item" to="/mot_de-passe">Mot de passe oublié</Link>/
            <Link className="links-item" to="/inscription">Créer un compte</Link>
          </div>
        </form>
      </MediaQuery>
    </LoginStyled>

  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

// == Export
export default Login;
