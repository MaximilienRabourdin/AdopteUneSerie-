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
const PasswordChange = ({password, newPassword, changeField, handlePasswordChange }) => {

  const handleSubmit= (evt) => {
    evt.preventDefault();
    var token = sessionStorage.getItem('token');
    handlePasswordChange(token);
  };

  var token = sessionStorage.getItem('token');
  var status = sessionStorage.getItem('status');
  console.log(status)
  var error = sessionStorage.getItem('error');

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
          <p>Votre mot de passe doit contenir au moins: 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial</p>
          <Field
          value={newPassword}
          onChange={changeField}
          placeholder="Nouveau mot de passe"
          name="newPassword"
          type="password"
          />
          <p>Votre mot de passe doit contenir au moins: 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial</p>

          <div className="actionsDesktop">
            <p style={{color:"red"}}>
              {(error) && 
                "Mot de passe incorrect"
              }
            </p> 
            <p style={{color:"red"}}>
              {(error) && 
              "Format de mot de passe incorrect"
              }
            </p> 
            <p style={{color:"red"}}>
              {!(token.length>0) && 
              "Vous n'êtes plus connecté"
              }
            </p>
            <p style={{color:"green"}}>
              {(status) && 
              "Mot de passe modifié"
              }
            </p>
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
              Envoyer
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
          <p>Votre mot de passe doit contenir au moins: 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial</p>
          <Field
          value={newPassword}
          onChange={changeField}
          placeholder="Nouveau mot de passe"
          name="newPassword"
          type="password"
          />
          <p>Votre mot de passe doit contenir au moins: 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial</p>

          <div className="actionsMobile">
          <p style={{color:"red"}}>
            {(error) && 
              "Mot de passe incorrect"
            }
          </p> 
          <p style={{color:"red"}}>
            {(error) && 
            "Format de mot de passe incorrect"
            }
          </p> 
          <p style={{color:"red"}}>
            {!(token.length>0) && 
            "Vous n'êtes plus connecté"
            }
          </p>
          <p style={{color:"green"}}>
            {(status) && 
            "Mot de passe modifié"
            }
          </p>
          <Button 
          className="ui blue button"
          type="submit"
          className="actions-button">
            "Envoyer"
          </Button>        
          </div>
        </form>
      </MediaQuery>
    </PasswordChangeStyled>

  );
};

PasswordChange.propTypes = {
  status: PropTypes.number.isRequired,
  password: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};

// == Export
export default PasswordChange;
