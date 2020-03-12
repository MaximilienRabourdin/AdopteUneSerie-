// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Dropdown } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// == Import
import SearchBarStyled from './SearchBarStyled';

// == Options Table
import options from 'src/data/options';
import optionsInput from 'src/data/optionsMerge';
console.log(optionsInput);
// == Composant
 const SearchBar = ({ inputValue, sendName }) => {
// const SearchBar = () => (

  const handleChange = (evt) => {
    evt.preventDefault();
   sendName(evt.target.value);
  };
  const handleChangeDropdown = (evt, {value}) => {
    console.log(optionsSelected(value));
  };

  const optionsSelected = (value) => {
    var tab=[];
    var i=0;
    value.map((input) =>{ 
      tab[i] = optionsInput.filter((option) => option.name === input);
      i=i+1;
    }) 
    return(tab);
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
            onChange={handleChangeDropdown}
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
            onChange={handleChangeDropdown}
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
};


// == Export
export default SearchBar;
