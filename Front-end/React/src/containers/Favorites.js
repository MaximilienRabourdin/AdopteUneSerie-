import { connect } from 'react-redux';
// Du composant qui a besoin de data ou d'actions
import Favorites from 'src/components/Favorites';

// Action Creators

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => {
  console.log(state.favorite.seriesFavorites)
  return {
  series: state.favorite.seriesFavorites,
  }
};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = {};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const FavoritesContainer = connect(mapStateToProps, mapDispatchToProps)(Favorites);

export default FavoritesContainer;
