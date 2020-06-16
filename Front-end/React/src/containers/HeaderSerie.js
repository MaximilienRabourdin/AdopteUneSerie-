import { connect } from 'react-redux';

// Composant qui a besoin de data ou d'actions
import HeaderSerie from 'src/components/SerieInfo/HeaderSerie';

// Action Creators
import { addSerie, deleteSerie } from 'src/actions/favorite';

// Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  handleAdd: (id) => {
    dispatch(addSerie(id));
  },
  handleDelete: (id) => {
    dispatch(deleteSerie(id));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const HeaderSerieContainer = connect(null, mapDispatchToProps)(HeaderSerie);

export default HeaderSerieContainer;
