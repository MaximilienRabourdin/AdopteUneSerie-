import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

// Import
import Field from 'src/components/Field';
import Header from 'src/containers/Header';
import PasswordChangeStyled from './PasswordChangeStyled';


// Composant
const PasswordChange = ({
  password, status, error, newPassword, changeField, handlePasswordChange,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const token = sessionStorage.getItem('token');
    handlePasswordChange(token);
  };

  console.log(error);

  let error409 = 0;
  let error400 = 0;

  if (error) {
    if (error.status) {
      if (error.status === 409) {
        error409 = 409;
        // console.log(error.status)
      }
      if (error.status === 400) {
        error400 = 400;
        // console.log(error.status)
      }
    }
  }
  return (
    <PasswordChangeStyled onSubmit={handleSubmit}>
      <Header />
      <form className="form">
        <h1 className="title">Modifier mon mot de passe</h1>
        <Field
          value={password}
          onChange={changeField}
          placeholder="Mot de passe actuel"
          name="password"
          type="password"
        />
        {(error409 === 409)
          && <p style={{ color: 'red' }}>{error.data.false}</p>}
        <Field
          value={newPassword}
          onChange={changeField}
          placeholder="Nouveau mot de passe"
          name="newPassword"
          type="password"
        />
        {(error400 === 400)
          && <p style={{ color: 'red' }}>{error.data.errors.plainPassword}</p>}
        <div className="actions">
          {(status > 0)
            && (
            <p style={{ color: 'green' }}>
              Mot de passe modifié
            </p>
            )}
          <Button
            className="ui blue button"
            type="submit"
            className="actions-button"
          >
            Envoyer
          </Button>

        </div>
      </form>
    </PasswordChangeStyled>
  );
};

PasswordChange.propTypes = {
  status: PropTypes.number.isRequired,
  error: PropTypes.objectOf(
    PropTypes.object.isRequired,
  ).isRequired,
  password: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};

// Export
export default PasswordChange;
