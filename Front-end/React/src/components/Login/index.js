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
const Login = ({ password, status, error, email, changeField, handleLogin }) => {
  const handleSubmit= (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  var data = sessionStorage.getItem('token');
  console.log(error)

  //console.log(error
  var error401 = 0;

  //var data = sessionStorage.getItem('data');
 if(error) {
    if(error.status){
      error401=401;
  }
}

  return (
    <LoginStyled onSubmit={handleSubmit}>
    <Header />
      <MediaQuery minWidth={426}>
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
          <p>Votre mot de passe doit contenir au moins: 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial</p>

          <div className="actionsDesktop">
              {(data) && 
                <p style={{color:"green"}}>Vous êtes Connecté</p>
              }
              {(error401===401) &&
              <p style={{color:"red"}}>Email ou mot de passe incorrect</p>
              }
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
              Connexion
            </Button>
          
          </div>

          <div className="linksDesktop">
            <Link className="links-item" to="/mot-de-passe-oublié">Mot de passe oublié</Link>/
            <Link className="links-item" to="/inscription">Créer un compte</Link>
          </div>
        </form>
      </MediaQuery>

      <MediaQuery maxWidth={425}>
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
          <p>Votre mot de passe doit contenir au moins: 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial</p>

          <div className="actionsMobile">
          {(data) && 
            <p style={{color:"green"}}>Vous êtes Connecté</p>
          }
          {(error401===401) &&
          <p style={{color:"red"}}>Email ou mot de passe incorrect</p>
          }
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
                Connexion
            </Button>
          
          </div>

          <div className="linksMobile">
            <Link className="links-item" to="/mot-de-passe-oublié">Mot de passe oublié</Link>/
            <Link className="links-item" to="/inscription">Créer un compte</Link>
          </div>
        </form>
      </MediaQuery>
    </LoginStyled>

  );
};

Login.propTypes = {
  status: PropTypes.number.isRequired,
  error: PropTypes.objectOf(
    PropTypes.object.isRequired
  ).isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

// == Export
export default Login;
