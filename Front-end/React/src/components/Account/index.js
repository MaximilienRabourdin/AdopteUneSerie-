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
        <MediaQuery minWidth={426}>
          <div className="divDesktop">
            <h1 className="titleDesktop">Mon compte</h1>
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
            <Link to="/modification-mot-de-passe" style={{marginLeft: "150px"}}>Modifier mon mot de passe</Link>
          </div>
        </MediaQuery>
  
        <MediaQuery maxWidth={425}>
          <div className="divMobile">
            <h1 className="titleMobile">Mon compte</h1>
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
            <Link to="/modification-mot-de-passe" style={{marginLeft: "50px"}}>Modifier mon mot de passe</Link>
          </div>
        </MediaQuery>
    </AccountStyled>
  );
};

Account.propTypes = {
  handleAccount: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

// Export
export default Account;
