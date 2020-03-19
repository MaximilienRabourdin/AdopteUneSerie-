// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SET_USER = 'SET_USER';
export const REGISTER = 'REGISTER';
export const SET_ERROR = 'SET_ERROR';

// Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const setUser = (status, data) => ({
  type: SET_USER,
  status,
  data,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

export const register = () => ({
  type: REGISTER,
});





