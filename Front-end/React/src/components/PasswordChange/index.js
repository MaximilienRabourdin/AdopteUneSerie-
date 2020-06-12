import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

	// Import
import PasswordChangeStyled from './PasswordChangeStyled';
import Field from 'src/components/Field';
import Header from 'src/containers/Header';


// Composant
const PasswordChange = ({password,status, error, newPassword, changeField, handlePasswordChange }) => {

  const handleSubmit= (evt) => {
    evt.preventDefault();
    var token = sessionStorage.getItem('token');
    handlePasswordChange(token);
  };

  console.log(error)

  var error409=0;
  var error400=0;

  if(error) {     
    if (error.status) {
      if (error.status===409) {
        error409 = 409;
        //console.log(error.status)
      }
      if (error.status===400) {
        error400 = 400;
        //console.log(error.status)
      }
    }
   }
  return (
    <PasswordChangeStyled onSubmit={handleSubmit}>
    <Header />
      <MediaQuery minWidth={426}>
        <form className="formDesktop">
          <h1 className="titleDesktop">Modifier mon mot de passe</h1>
          <Field
          value={password}
          onChange={changeField}
          placeholder="Mot de passe actuel"
          name="password"
          type="password"
          />
          {(error409===409) &&
            <p style={{color:"red"}}>{error.data.false}</p>
          }
          <Field
          value={newPassword}
          onChange={changeField}
          placeholder="Nouveau mot de passe"
          name="newPassword"
          type="password"
          />
          {(error400===400) &&
            <p style={{color:"red"}}>{error.data.errors.plainPassword}</p>
          }

          <div className="actionsDesktop">
            {(status>0) && 
              <p style={{color:"green"}}>
                Mot de passe modifié
              </p>
            }
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
              Envoyer
            </Button>
          
          </div>
        </form>
      </MediaQuery>

      <MediaQuery maxWidth={425}>
        <form className="formMobile">
          <h1 className="titleMobile">Modifier mon mot de passe</h1>
          <Field
          value={password}
          onChange={changeField}
          placeholder="Mot de passe actuel"
          name="password"
          type="password"
          />
          {(error409===409) &&
            <p style={{color:"red"}}>{error.data.false}</p>
          }
          <Field
          value={newPassword}
          onChange={changeField}
          placeholder="Nouveau mot de passe"
          name="newPassword"
          type="password"
          />
          {(error400===400) &&
            <p style={{color:"red"}}>{error.data.errors.plainPassword}</p>
          }

          <div className="actionsMobile">
          {(status>0) && 
            <p style={{color:"green"}}>            
              Mot de passe modifié
            </p>
          }
          <Button 
          className="ui blue button"
          type="submit"
          className="actions-button">
            Envoyer
          </Button>        
          </div>
        </form>
      </MediaQuery>
    </PasswordChangeStyled>

  );
};

PasswordChange.propTypes = {
  status: PropTypes.number.isRequired,
  error: PropTypes.objectOf(
    PropTypes.object.isRequired
  ).isRequired,
  password: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};

// Export
export default PasswordChange;
