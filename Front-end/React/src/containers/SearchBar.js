import { connect } from 'react-redux';
// Du composant qui a besoin de data ou d'actions
import SearchBar from 'src/components/HeaderSearch/SearchBar';

// Action Creators
import { saveSerie, changeDropdown } from 'src/actions/name';
import { loadSerieInput, loadSerieDropdown} from 'src/actions/input';

// Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  inputValue: state.home.inputName,
});

// Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  sendName: (value) => {
    dispatch(loadSerieInput(value));
    dispatch(saveSerie(value));
  },
  sendIds: (idGenres, idNetwork, idNote, idTime) => {
    dispatch(loadSerieDropdown(idGenres, idNetwork, idNote, idTime));
    dispatch(changeDropdown(idGenres, idNetwork, idNote, idTime));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const SearchBarContainer = connect(
  mapStateToProps,
   mapDispatchToProps,
   )(SearchBar);

export default SearchBarContainer;
