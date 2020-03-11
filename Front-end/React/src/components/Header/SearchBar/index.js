// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Dropdown, Menu } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// == Import
import SearchBarStyled from './SearchBarStyled';
import options from 'src/data/options';
// == Genre Table


// == Composant
 const SearchBar = ({ inputValue, sendName, handleSearch }) => {
// const SearchBar = () => (

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  };
  const handleChange = (evt) => {
    evt.preventDefault();
   sendName(evt.target.value);
  };

  return (
    <SearchBarStyled >
      <MediaQuery maxDeviceWidth={425}>
        <div id="mobile">
          <Input
            style={{ minWidth: '202px' }}
            className="searchBar"
            size="large"
            icon={{ name: 'search', circular: true, link: true }}
            placeholder="Recherchez une série" 
            value={inputValue}
            onChange={handleChange}
          />
          <Dropdown
            style={{ minWidth: '202px', minheight: '38px' }}
            className="dropdown"
            placeholder="Selectionnez vos critères"
            multiple
            search
            selection
            options={options}
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
            value={inputValue}
            onChange={handleChange}
          />
          <Dropdown
            style={{ minWidth: '302px', minHeight: '38px' }}
            className="dropdown"
            placeholder="Selectionnez vos critères"
            multiple
            search
            selection
            options={options}
          />
        </div>
      </MediaQuery>
    </SearchBarStyled>
  );
};

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  sendName: PropTypes.func.isRequired,
  handleSearch:  PropTypes.func.isRequired,
};


// == Export
export default SearchBar;
