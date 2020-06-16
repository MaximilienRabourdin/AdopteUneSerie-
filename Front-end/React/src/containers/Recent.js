import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Recent from 'src/components/Recent';

// Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  series: state.home.seriesRecent,
  name: state.home.inputName,
  change: state.home.change,
  serieInput: state.home.serieInput,
});

// Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = {};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const RecentContainer = connect(mapStateToProps, mapDispatchToProps)(Recent);

export default RecentContainer;
