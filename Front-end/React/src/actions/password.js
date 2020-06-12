
export const PASSWORD = 'PASSWORD';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SET_ERROR = 'SET_ERROR';

// Save password in store (temporarily)
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

// Save password in server
export const password = () => ({
  type: PASSWORD,
});

// Save the validation's status of the password
export const setUserPassword = (data) => ({
  type: SET_USER_PASSWORD,
  data,
});

// Save errors
export const setErrorPassword = (error) => ({
  type: SET_ERROR,
  error,
});
