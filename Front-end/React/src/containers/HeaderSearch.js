import { connect } from 'react-redux';
// Du composant qui a besoin de data ou d'actions
import HeaderSearch from 'src/components/HeaderSearch';

// Action Creators

// Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  status: state.login.status,
  data: state.login.data,
});

// Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = {};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const HeaderSearchContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);

export default HeaderSearchContainer;
