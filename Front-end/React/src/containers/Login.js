import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { login, changeField } from 'src/actions/auth';


//== Data / state
const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,

});


// == Actions / dispatch
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
