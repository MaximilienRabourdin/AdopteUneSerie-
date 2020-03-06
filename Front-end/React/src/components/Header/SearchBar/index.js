// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Dropdown } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

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
// const SearchBar = ({ inputValue, sendName, changeInputValue }) => {
  // const handleChange = (evt) => {
  //    changeInputValue(evt.target.value);
  // };

  // const handleSubmit = (evt) => {
  //  evt.preventDefault();
  //  console.log('Soumission du formulaire');
  // La prop venant du container (action qui sera dispatchée)
  //  sendName();
 // };
  const SearchBar = () => (

  // <SearchBarStyled onSubmit={handleSubmit}>
  <SearchBarStyled >
    <MediaQuery maxDeviceWidth={425}>
      <div id="mobile">
        <Input
          style={{ minWidth: '202px' }}
          className="searchBar"
          size="large"
          icon={{ name: 'search', circular: true, link: true }}
          placeholder="Recherchez une série"
          
        />
        <Dropdown
          style={{ minWidth: '202px', minheight: '38px' }}
          className="dropdown"
          placeholder="Découvrez des séries"
          multiple
          search
          selection
          options={genreOptions}
        />
      </div>
    </MediaQuery>

    <MediaQuery minDeviceWidth={426}>
      <div id="desktop">
        <Input
          style={{ minWidth: '302px' }}
          className="searchBar"
          size="large"
          icon={{ name: 'search', circular: true, link: true }}
          placeholder="Recherchez une série"
          type="text"
          // value={inputValue}
          // onChange={handleChange} 
          // onKeyPress={handleSubmit}
        />
        <Dropdown
          style={{ minWidth: '302px', minHeight: '38px' }}
          className="dropdown"
          placeholder="Découvrez des séries"
          multiple
          search
          selection
          options={genreOptions}
        />
      </div>
    </MediaQuery>
  </SearchBarStyled>
);
  // };
SearchBar.propTypes = {
  // inputValue: PropTypes.string.isRequired,
 // sendName: PropTypes.func.isRequired,
 // changeInputValue: PropTypes.func.isRequired,
};


// == Export
export default SearchBar;
