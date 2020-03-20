
export const PASSWORD = 'PASSWORD';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SET_ERROR = 'SET_ERROR';

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const setUserPassword = (data) => ({
  type: SET_USER_PASSWORD,
  data,
});

export const setErrorPassword = (error) => ({
  type: SET_ERROR,
  error,
});

export const password = () => ({
  type: PASSWORD,
});
