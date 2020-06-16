// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SET_USER = 'SET_USER';
export const REGISTER = 'REGISTER';
export const SET_ERROR = 'SET_ERROR';

// Save user data in state
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

// Save user data in the server
export const register = () => ({
  type: REGISTER,
});

// Save user data and status in state
export const setUser = (status, data) => ({
  type: SET_USER,
  status,
  data,
});

// Save errors in state
export const setError = (error) => ({
  type: SET_ERROR,
  error,
});
