import { connect } from 'react-redux';

// Composant qui a besoin de data ou d'actions
import Login from 'src/components/Login';

// Action Creators
import { login, changeField } from 'src/actions/auth';

// Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
  status: state.login.status,
  error: state.login.error,
});


// Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    dispatch(login());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
