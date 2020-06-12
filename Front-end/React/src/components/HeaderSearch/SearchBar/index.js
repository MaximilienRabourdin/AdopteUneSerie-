// Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Dropdown } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// Import
import SearchBarStyled from './SearchBarStyled';

// Options Table
import options from 'src/data/options';
import optionsInput from 'src/data/optionsMerge';

// Composant
 const SearchBar = ({ inputValue, sendName, sendIds }) => {
// const SearchBar = () => (
  
  const handleChange = (evt) => {
    //evt.preventDefault();
    sendName(evt.target.value);
  };
  const handleChangeDropdown = (evt, {value}) => {
    //console.log(optionsSelected(value));
    var options = optionsSelected(value);
    var idGenres = [];
    var idNetwork = [];
    var idNote = [];
    var idTime = [];
    options.map((option) => {
      if (option[0].category === "with_genres"){
        idGenres.push(option[0].id)
      }
      if (option[0].category === "with_networks"){
        idNetwork.push(option[0].id)
      }
      if (option[0].category === "vote_average"){
        idNote.push(option[0].id)
      }
      if (option[0].category === "with_runtime.lte"){
        idTime.push(option[0].id)
      }
    })
    var idGenres = idGenres.toString();
    var idNetwork = idNetwork.toString();
    var idNote = idNote.toString();
    var idTime = idTime.toString();
    sendIds(idGenres, idNetwork, idNote, idTime);
  };

  const optionsSelected = (value) => {
    var options=[];
    value.map((input) =>{ 
      var option = optionsInput.filter((option) => option.name === input);
      //console.log(option);
      options.push(option);
    }) 
    return(options);
  };


  return (
    <SearchBarStyled >
      <MediaQuery maxWidth={1400}>
        <div id="mobile">
          <Input
            style={{ minWidth: '202px'}}
            className="searchBar"
            size="large"
            icon={{ name: 'search', circular: true, link: true }}
            placeholder="Recherchez une série" 
            value={inputValue}
            onChange={handleChange}
          />
          <Dropdown
            style={{ minWidth: '202px', minHeight: '38px' }}
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

      <MediaQuery minWidth={1401}>
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
  sendIds: PropTypes.func.isRequired,
};


// Export
export default SearchBar;
