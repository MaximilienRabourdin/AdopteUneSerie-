import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

	// == Import
import LoginStyled from './LoginStyled';
import Field from 'src/components/Field';
import Header from 'src/containers/Header';


// == Composant
const Login = ({ password, email, changeField, handleLogin }) => {
  const handleSubmit= (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  var data = sessionStorage.getItem('token');
  var error = sessionStorage.getItem('error');
 //console.log(data);

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
          <p>Votre mot de passe doit contenir 8 caractères, une majuscule, un chiffre et un caractère spécial</p>

          <div className="actionsDesktop">
            {(error) &&
            <p style={{color:"red"}}>Email ou mot de passe incorrect</p>}
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
              {(data) && 
              "Vous êtes Connecté"
              }
              {!(data) && 
              "Connexion"
              }
            </Button>
          
          </div>

          <div className="linksDesktop">
            <Link className="links-item" to="/mot-de-passe-oublié">Mot de passe oublié</Link>/
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
          {(error) &&
          <p style={{color:"red"}}>Email ou mot de passe incorrect</p>}
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
              {(data) && 
                "Vous êtes Connecté"
              }
              {(!data) && 
                "Connexion"
              }
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
