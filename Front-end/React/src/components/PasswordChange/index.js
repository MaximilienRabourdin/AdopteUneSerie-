import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

	// == Import
import PasswordChangeStyled from './PasswordChangeStyled';
import Field from 'src/components/Field';
import Header from 'src/containers/Header';


// == Composant
const PasswordChange = ({data, password, newPassword, changeField, handlePasswordChange }) => {

  const handleSubmit= (evt) => {
    evt.preventDefault();
    var token = sessionStorage.getItem('token');
    handlePasswordChange(token);
  };

  var token = sessionStorage.getItem('token');
  var error = sessionStorage.getItem('error');
console.log(error)
console.log(data)
  return (
    <PasswordChangeStyled onSubmit={handleSubmit}>
    <Header />
      <MediaQuery minDeviceWidth={426}>
        <form className="formDesktop">
          <h1 className="titleDesktop">Modifier mon mot de passe</h1>
          <Field
          value={password}
          onChange={changeField}
          placeholder="Mot de passe actuel"
          name="password"
          type="password"
          />
          <Field
          value={newPassword}
          onChange={changeField}
          placeholder="Nouveau mot de passe"
          name="newPassword"
          type="password"
          />

          <div className="actionsDesktop">
             <p>{(error) && 
              "Mot de passe incorrect"
              }</p> 
              <p>{!(token.length>0) && 
              "Vous n'êtes plus connecté"
              }</p>
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
              {(!(error) && data === 200) && 
              "Mot de passe modifié"
              }
              {(token.length>0 && !(data === 200)) &&
              "Envoyer"
              }
            </Button>
          
          </div>
        </form>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={425}>
        <form className="formMobile">
          <h1 className="titleMobile">Modifier mon mot de passe</h1>
          <Field
          value={password}
          onChange={changeField}
          placeholder="Mot de passe actuel"
          name="password"
          type="password"
          />
          <Field
          value={newPassword}
          onChange={changeField}
          placeholder="Nouveau mot de passe"
          name="newPassword"
          type="password"
          />

          <div className="actionsMobile">
          <p>{(error) && 
           "Mot de passe incorrect"
           }</p> 
           <p>{!(token.length>0) && 
           "Vous n'êtes plus connecté"
           }</p>
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
            {(!(error) && data === 200) && 
            "Mot de passe modifié"
            }
            {(token.length>0 && !(data === 200)) &&
            "Envoyer"
            }
            </Button>         
          </div>
        </form>
      </MediaQuery>
    </PasswordChangeStyled>

  );
};

PasswordChange.propTypes = {
  data: PropTypes.number.isRequired,
  password: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};

// == Export
export default PasswordChange;
