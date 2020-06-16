import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import SerieCard from 'src/components/Home/SerieCard';

// Action Creators
import { loadSerieInfo } from 'src/actions/serieInfo';

// Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant

// Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
    click: (value) => { 
      dispatch(loadSerieInfo(value))
    },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const SerieCardContainer = connect(null, mapDispatchToProps)(SerieCard);

export default SerieCardContainer;
