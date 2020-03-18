import { connect } from 'react-redux';

import Password from 'src/components/Password';

import { password, changeField } from 'src/actions/password';


//== Data / state

const mapStateToProps = (state) => ({
  email: state.password.email,
  data: state.password.data,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handlePassword: () => {
    dispatch(password());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const PasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Password);

export default PasswordContainer;