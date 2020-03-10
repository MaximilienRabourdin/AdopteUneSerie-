import { connect } from 'react-redux';
// Du composant qui a besoin de data ou d'actions
import SerieInfo from 'src/components/SerieInfo';
// Action Creators

import { loadSerieInfo } from 'src/actions/serieInfo';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => {
  //console.log(state.serie.serie);
  return {
    serie: state.serie.serie,
  };
};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch, ownProps) => {
  //console.log(ownProps);
  return {
    name: () =>  dispatch(loadSerieInfo(ownProps.match.url))
  };
};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const SerieInfoContainer = connect(mapStateToProps, mapDispatchToProps)(SerieInfo);

export default SerieInfoContainer;
