// == Import npm
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

// == Import
import AccountStyled from './AccountStyled';
import Header from 'src/containers/Header';

// == Composant
const Account = ({data, account}) => {

  useEffect(() => {
  var token = sessionStorage.getItem('token');
  //console.log(token);
   account(token);
  },[]);

  return (
    <AccountStyled>
      <Header/>
        coucou Account
    </AccountStyled>
  );
};

Account.propTypes = {
  account: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.object.isRequired 
  ).isRequired,
};

// == Export
export default Account;
