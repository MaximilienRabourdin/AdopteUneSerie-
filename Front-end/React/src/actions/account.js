
export const ACCOUNT = 'ACCOUNT';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';

// Creators
export const account = (token) => ({
  type: ACCOUNT,
  token,
});
export const saveUserInfo = (data) => ({
  type: SAVE_USER_INFO,
  data
});