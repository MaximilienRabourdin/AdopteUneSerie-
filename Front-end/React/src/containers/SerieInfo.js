import { connect } from 'react-redux';
// Du composant qui a besoin de data ou d'actions
import SerieInfo from 'src/components/SerieInfo';
// Action Creators
import { loadSerieInfo } from 'src/actions/serieInfo';
import { loadCheck } from 'src/actions/favorite';

// Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state, ownProps) => {
  //console.log("state SerieInfo", state.serie.serie);
  return {
    serie: state.serie.serie,
    slug: ownProps.location.pathname,
    load: state.serie.load,
    status: state.favorite.status,
    statusAdd: state.favorite.statusAdd,
    statussDelete: state.favorite.statusDelete,
  };
};

// Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  sendSlug: (id) => {
    const action = loadSerieInfo(id);
    dispatch(action);
    const actionCheck = loadCheck(id);
    dispatch(actionCheck);
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const SerieInfoContainer = connect(mapStateToProps, mapDispatchToProps)(SerieInfo);

export default SerieInfoContainer;
