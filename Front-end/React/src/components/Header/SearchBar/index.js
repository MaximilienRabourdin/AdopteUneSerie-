// == Import npm
import React from 'react';
import { Input, Dropdown } from 'semantic-ui-react';

// == Import
import SearchBarStyled from './SearchBarStyled';

// == Genre Table
const genreTab = [
  {
    key: 1,
    text: 'action',
    value: 'action',
  },
  {
    key: 2,
    text: 'animation',
    value: 'animation',
  },
];

const genreOptions = genreTab.map( state => ({
  key: state.key,
  text: state.text,
  value: state.value,
}));

// == Composant
const SearchBar = () => (
  <SearchBarStyled>
    <Input
      className="searchBar"
      size="large"
      icon={{ name: 'search', circular: true, link: true }}
      placeholder="Recherchez une série"
    />
    <Dropdown
      style={{ minWidth: '200px', minheight: '150px' }}
      className="dropdown"
      placeholder="Découvrez des séries"
      multiple
      search
      selection
      options={genreOptions}
    />
  </SearchBarStyled>
);


// == Export
export default SearchBar;
