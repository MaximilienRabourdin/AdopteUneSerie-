import { connect } from 'react-redux';

// Composant qui a besoin de data ou d'actions
import Password from 'src/components/Password';

// Action Creators
import { password, changeField } from 'src/actions/password';

// == Data / state
const mapStateToProps = (state) => ({
  email: state.password.email,
  status: state.password.status,
  error: state.password.error,
});

// Actions / dispatch
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
