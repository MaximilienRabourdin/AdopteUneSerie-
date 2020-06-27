// Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// Import
import Header from 'src/containers/Header';
import AccountStyled from './AccountStyled';

// Composant
const Account = ({
  data,
  handleAccount,
}) => {
  // Récupération du token enregistré dans le session storage à la connexion
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    // console.log('components', token);
    // Renvoi du token au serveur pour récupérer les infos du user
    handleAccount(token);
  }, []);

  // console.log('components', data);
  return (
    <AccountStyled>
      <Header />
      <div className="myAccount">
        <h1 className="title">Mon compte</h1>
        <Table celled padded>
          <Table.Body>
            <Table.Row>
              <Table.Cell singleLine>Mon prénom</Table.Cell>
              <Table.Cell singleLine>{data.firstname}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell singleLine>Mon nom</Table.Cell>
              <Table.Cell singleLine>{data.lastname}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell singleLine>Mon email</Table.Cell>
              <Table.Cell singleLine>{data.email}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div className="links">
          <Link className="link" to="/modification-mot-de-passe">Modifier mon mot de passe</Link>
        </div>
      </div>
    </AccountStyled>
  );
};

Account.propTypes = {
  handleAccount: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

// Export
export default Account;
