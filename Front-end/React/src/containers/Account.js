import { connect } from 'react-redux';

// Composant qui a besoin de data ou d'actions
import Account from 'src/components/Account';

// Action Creators
import { account } from 'src/actions/account';

// Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => {
  // console.log("state SerieInfo", state.serie.serie);
  return {
    data: state.account.data,
  };
};

// Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  handleAccount: (token) => {
    //console.log('containers', token);
    dispatch(account(token));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);

export default AccountContainer;
