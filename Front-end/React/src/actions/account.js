
export const ACCOUNT = 'ACCOUNT';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';

// Creators
export const account = (token) => {
  console.log('action', token);
  return {
  type: ACCOUNT,
  token,
  }
};
export const saveUserInfo = (data) => ({
  type: SAVE_USER_INFO,
  data
});