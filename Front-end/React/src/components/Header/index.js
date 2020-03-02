
// == Import npm
import React from 'react';

// == Import
import Home from 'src/components/Home';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import HeaderStyled from './HeaderStyled';
import SearchBar from './SearchBar';
import Toggle from './Toggle';

// == Composant
const Header = () => (
  <HeaderStyled>
    <Home />
    <SearchBar />
    <Toggle />
    <SignIn />
    <SignUp />
  </HeaderStyled>

);

// == Export
export default Header;
