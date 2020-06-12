
export const ACCOUNT = 'ACCOUNT';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';

// Transfert token to server
export const account = (token) => {
  console.log('action', token);
  return {
  type: ACCOUNT,
  token,
  }
};
// Save user infos to store if token is valid
export const saveUserInfo = (data) => ({
  type: SAVE_USER_INFO,
  data
});
