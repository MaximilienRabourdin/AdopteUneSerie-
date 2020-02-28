
// == Import npm
import React from 'react';

// == Import
import Home from 'src/components/Home';
import SearchBar from 'src/components/SearchBar';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = () => (
  <HeaderStyled>
    <Home />
    <SearchBar />
    <SignIn />
    <SignUp />
  </HeaderStyled>

);

// == Export
export default Header;
