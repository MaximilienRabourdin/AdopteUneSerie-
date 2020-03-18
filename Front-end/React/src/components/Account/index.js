// == Import npm
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

// == Import
import AccountStyled from './AccountStyled';
import Header from 'src/containers/Header';

// == Composant
const Account = ({data, handleAccount}) => {

  useEffect(() => {
  var token = sessionStorage.getItem('token');
    console.log('components', token);
    handleAccount(token);
  },[]);

  return (
    <AccountStyled>
      <Header/>
        coucou Account
    </AccountStyled>
  );
};

Account.propTypes = {
  handleAccount: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.object.isRequired 
  ).isRequired,
};

// == Export
export default Account;
