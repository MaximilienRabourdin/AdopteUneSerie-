import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


	// == Import
import FormStyled from 'src/components/FormStyled';
import Field from 'src/components/Field';
import { Button } from 'semantic-ui-react';


// == Composant
const Login = ({ password, email, changeField, handleLogin }) => {
  const handleSubmit= (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
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

      <div className="actions">
        <Button 
        className="ui blue button"
        type="submit"
        className="actions-button">
          Connexion
        </Button>
       
      </div>

      <div className="links">
        <Link className="links-item" to="/mot_de-passe">Mot de passe oublié</Link>/
        <Link className="links-item" to="/inscription">Créer un compte</Link>
      </div>
    </FormStyled>

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
