import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// Import
import Field from 'src/components/Field';
import Header from 'src/containers/Header';
import PasswordStyled from './PasswordStyled';


// Composant
const Password = ({
  email, status, error, changeField, handlePassword,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handlePassword();
  };
  // console.log(error)

  let error409 = 0;
  if (error) {
    if (error.status) {
      if (error.status === 409) {
        error409 = 409;
        // console.log(error.status)
      }
    }
  }

  return (
    <PasswordStyled onSubmit={handleSubmit}>
      <Header />
      <form className="form">
        <h1 className="title">Mot de passe oublié</h1>
        <Field
          value={email}
          onChange={changeField}
          placeholder="Veuillez entrer votre email"
          name="email"
          type="email"
        />
        <div className="actions">
          <p style={{ color: 'green' }}>
            {(status > 0)
            && 'Nouveau mot de passe envoyé'}
            {(error409 === 409)
            && <p style={{ color: 'red' }}>Email incorrect</p>}
          </p>
          <Button
            className="ui blue button"
            type="submit"
            className="actions-button"
          >
            Envoyer
          </Button>
        </div>
        <div className="links">
          <Link className="links-item" to="/inscription">Créer un compte</Link>
        </div>
      </form>
    </PasswordStyled>

  );
};

Password.propTypes = {
  status: PropTypes.number.isRequired,
  error: PropTypes.objectOf(
    PropTypes.object.isRequired,
  ).isRequired,
  status: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
};

// Export
export default Password;
