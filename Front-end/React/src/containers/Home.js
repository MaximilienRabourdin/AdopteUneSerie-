import { connect } from 'react-redux';

// Composant qui a besoin de data ou d'actions
import Home from 'src/components/Home';

// Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  seriesTrending: state.home.seriesTendance,
  seriesTopRated: state.home.seriesTopRated,
  seriesRecent: state.home.seriesRecent,
  name: state.home.inputName,
  idGenres: state.home.idGenres,
  idNetwork: state.home.idNetwork,
  idNote: state.home.idNote,
  idTime: state.home.idTime,
  serieInput: state.home.serieInput,
  loadTrending: state.home.loadTendance,
  loadTopRated: state.home.loadTopRated,
  loadRecent: state.home.loadRecent,
});

// Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = {};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
