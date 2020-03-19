import { connect } from 'react-redux';

import PasswordChange from 'src/components/PasswordChange';

import { passwordChange, changeField } from 'src/actions/passwordChange';


//== Data / state

const mapStateToProps = (state) => ({
  status: state.passwordChange.status,
  password: state.passwordChange.password,
  newPassword: state.passwordChange.newPassword,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handlePasswordChange: (token) => {
    dispatch(passwordChange(token));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const PasswordChangeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordChange);

export default PasswordChangeContainer;