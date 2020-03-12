// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SET_USER = 'SET_USER';
export const LOGIN = 'LOGIN';


// Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const setUser = (logged, user) => ({
  type: SET_USER,
  logged,
  user,
});

export const login = () => ({
  type: LOGIN,
});





