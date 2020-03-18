
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
export const SET_USER_PASSWORD_CHANGE = 'SET_USER_PASSWORD_CHANGE';
export const CHANGE_FIELD = 'CHANGE_FIELD';

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const setUserPasswordChange = (data) => ({
  type: SET_USER_PASSWORD_CHANGE,
  data,
});

export const passwordChange = (token) => ({
  type: PASSWORD_CHANGE,
  token,
});
