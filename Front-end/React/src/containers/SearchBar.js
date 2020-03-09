import { connect } from 'react-redux';
// Du composant qui a besoin de data ou d'actions
import SearchBar from 'src/components/Header/SearchBar';

// Action Creators
import { saveSerie, search } from 'src/actions/name';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  inputValue: state.home.inputName,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  sendName: (value) => {
    dispatch(saveSerie(value));
  },
  handleSearch: () => {
    dispatch(search());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const SearchBarContainer = connect(
  mapStateToProps,
   mapDispatchToProps,
   )(SearchBar);

export default SearchBarContainer;
