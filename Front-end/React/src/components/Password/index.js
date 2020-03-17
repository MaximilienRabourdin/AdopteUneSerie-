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
const Password = ({ email, data, changeField, handlePassword }) => {
  const handleSubmit= (evt) => {
    evt.preventDefault();
    handlePassword();
  };

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
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
              {(data) && 
              "Demande prise en compte"
              }
              {(!data) && 
              "Envoyer"
              }
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
              {(data) && 
              "Demande prise en compte"
              }
              {(!data) && 
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
  email: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  changeField: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
};

// == Export
export default Password;
