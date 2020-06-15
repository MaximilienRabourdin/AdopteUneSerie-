// Import npm
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import {Table} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

// Import
import AccountStyled from './AccountStyled';
import Header from 'src/containers/Header';

// Composant
const Account = ({data, handleAccount}) => {

  useEffect(() => {
  var token = sessionStorage.getItem('token');
    //console.log('components', token);
    handleAccount(token);
  },[]);

  //console.log('components', data);
  return (
    <AccountStyled>
      <Header />
      <div className="div">
        <h1 className="title">Mon compte</h1>
        <Table celled padded >
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
        <MediaQuery minWidth={426}> 
            <Link to="/modification-mot-de-passe" style={{marginLeft: "150px"}}>Modifier mon mot de passe</Link>
        </MediaQuery>
        <MediaQuery maxWidth={425}>
            <Link to="/modification-mot-de-passe" style={{marginLeft: "50px"}}>Modifier mon mot de passe</Link>
        </MediaQuery>
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
