// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SET_USER = 'SET_USER';
export const LOGIN = 'LOGIN';
export const SET_ERROR = 'SET_ERROR';

// Save data in store (temporarily)
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

// Load userdata from server and save it in the store
export const setUser = (status, data) => ({
  type: SET_USER,
  status,
  data,
});

// Load error from server and save it in the store
export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

// Transfert userdata to server for verification
export const login = () => ({
  type: LOGIN,
});





