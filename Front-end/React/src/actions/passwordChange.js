
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
export const SET_USER_PASSWORD_CHANGE = 'SET_USER_PASSWORD_CHANGE';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SET_ERROR = 'SET_ERROR';

// Save new password in store (temporarily)
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

// Save new password in server
export const passwordChange = (token) => ({
  type: PASSWORD_CHANGE,
  token,
});

// Save the validation's status of the new password
export const setUserPasswordChange = (data) => ({
  type: SET_USER_PASSWORD_CHANGE,
  data,
});

// Save errors
export const setErrorPasswordChange = (error) => ({
  type: SET_ERROR,
  error,
});
