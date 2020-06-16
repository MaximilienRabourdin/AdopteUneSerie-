import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Register from 'src/components/Register';

// Action Creators
import { register, changeField } from 'src/actions/register';

// == Data / state
const mapStateToProps = (state) => ({
  email: state.register.email,
  password: state.register.password,
  confirmPassword: state.register.confirmPassword,
  firstname: state.register.firstname,
  lastname: state.register.lastname,
  status: state.register.status,
  error: state.register.error,
});


// Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleRegister: () => {
    dispatch(register());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);

export default RegisterContainer;
