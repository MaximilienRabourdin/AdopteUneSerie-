/* eslint-disable array-callback-return */
// Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Dropdown } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// Import

// Options Table
import options from 'src/data/options';
import optionsInput from 'src/data/optionsMerge';
import SearchBarStyled from './SearchBarStyled';

// Composant
const SearchBar = ({
  inputValue,
  sendName,
  sendIds,
}) => {
  // Envoie de l'input au serveur
  const handleChange = (evt) => {
    // evt.preventDefault();
    sendName(evt.target.value);
  };

  // On filtre les input du dropdown
  const optionsSelected = (value) => {
    const optionItems = [];
    value.map((input) => {
      const option = optionsInput.filter((item) => item.name === input);
      // console.log(option);
      optionItems.push(option);
    });
    return (optionItems);
  };

  // On trie les input filtrés du dropdown par genre networks... puis on envoie au serveur
  const handleChangeDropdown = (evt, { value }) => {
    // console.log(optionsSelected(value));
    const optionInput = optionsSelected(value);
    const idGenre = [];
    const idNetworks = [];
    const idNotes = [];
    const idTimes = [];
    optionInput.map((option) => {
      if (option[0].category === 'with_genres') {
        idGenre.push(option[0].id);
      }
      if (option[0].category === 'with_networks') {
        idNetworks.push(option[0].id);
      }
      if (option[0].category === 'vote_average') {
        idNotes.push(option[0].id);
      }
      if (option[0].category === 'with_runtime.lte') {
        idTimes.push(option[0].id);
      }
    });
    const idGenres = idGenre.toString();
    const idNetwork = idNetworks.toString();
    const idNote = idNotes.toString();
    const idTime = idTimes.toString();
    sendIds(idGenres, idNetwork, idNote, idTime);
  };

  return (
    <SearchBarStyled>
      <MediaQuery maxWidth={1400}>
        <div id="mobile">
          <Input
            style={{ minWidth: '202px' }}
            className="searchBar"
            size="large"
            icon={{
              name: 'search',
              circular: true,
              link: true,
            }}
            placeholder="Recherchez une série"
            value={inputValue}
            onChange={handleChange}
          />
          <Dropdown
            style={{
              minWidth: '202px',
              minHeight: '38px',
            }}
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
            icon={{
              name: 'search',
              circular: true,
              link: true,
            }}
            placeholder="Recherchez une série"
            value={inputValue}
            onChange={handleChange}
          />
          <Dropdown
            style={{
              minWidth: '302px',
              minHeight: '38px',
            }}
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
