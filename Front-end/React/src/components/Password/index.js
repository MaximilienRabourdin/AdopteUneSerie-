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
const Password = ({ email, status, error, changeField, handlePassword }) => {
  const handleSubmit= (evt) => {
    evt.preventDefault();
    handlePassword();
  };
  //console.log(error)

  var error409=0;
  if(error) {     
    if (error.status) {
      if (error.status===409) {
        error409 = 409;
        //console.log(error.status)
      }
    }
   }
 

  return (
    <PasswordStyled onSubmit={handleSubmit}>
    <Header />
      <MediaQuery minWidth={426}>
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
          <p style={{color:"green"}}>
              {(status>0) && 
              "Nouveau mot de passe envoyé"
              }
              {(error409===409) &&
              <p style={{color:"red"}}>Email incorrect</p>
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

      <MediaQuery maxWidth={425}>
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
            {(status>0) && 
            <p>Nouveau mot de passe envoyé</p>
            }
            {(error409===409) &&
            <p style={{color:"red"}}>Email incorrect</p>
            }
            <Button 
            className="ui blue button"
            type="submit"
            className="actions-button">
              Envoyer
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
  error: PropTypes.objectOf(
    PropTypes.object.isRequired
  ).isRequired,
  status: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
};

// == Export
export default Password;
