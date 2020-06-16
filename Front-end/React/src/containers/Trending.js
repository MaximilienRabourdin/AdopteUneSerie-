import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Trending from 'src/components/Trending';

// Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  series: state.home.seriesTendance,
});

// Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = {};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const TrendingContainer = connect(mapStateToProps, mapDispatchToProps)(Trending);

export default TrendingContainer;
