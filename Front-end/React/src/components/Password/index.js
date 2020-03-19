import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

	// == Import
import PasswordStyled from './PasswordStyled';
import Field from 'src/components/Field';
import Header from 'src/containers/Header';


// == Composant
const Password = ({ email, status, changeField, handlePassword }) => {
  const handleSubmit= (evt) => {
    evt.preventDefault();
    handlePassword();
  };

  //var status = sessionStorage.getItem('status');
  var error = sessionStorage.getItem('error');

  return (
    <PasswordStyled onSubmit={handleSubmit}>
    <Header />
      <MediaQuery minDeviceWidth={426}>
        <form className="formDesktop">
          <h1 className="titleDesktop">Mot de passe oublié</h1>
          <Field
          value={email}
          onChange={changeField}
          placeholder="Veuillez entrer votre email"
          name="email"
          type="email"
          />

          <div className="actionsDesktop">
          <p style={{color:"red"}}>
            {(error) && 
            "Email incorrect"
            }
          </p> 
          <p style={{color:"green"}}>
              {(status>0) && 
              "Demande prise en compte"
              }
          </p>
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
              Envoyer
            </Button>
          
          </div>

          <div className="linksDesktop">
            <Link className="links-item" to="/inscription">Créer un compte</Link>
          </div>
        </form>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={425}>
        <form className="formMobile">
          <h1 className="titleMobile">Mot de passe oublié</h1>
          <Field
          value={email}
          onChange={changeField}
          placeholder="Veuillez entrer votre email"
          name="email"
          type="email"
          />

          <div className="actionsMobile">
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
              {(status >0) && 
              "Demande prise en compte"
              }
              {!(status>0) && 
              "Envoyer"
              }
            </Button>         
          </div>

          <div className="linksMobile">            
            <Link className="links-item" to="/inscription">Créer un compte</Link>
          </div>
        </form>
      </MediaQuery>
    </PasswordStyled>

  );
};

Password.propTypes = {
  status: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
};

// == Export
export default Password;
