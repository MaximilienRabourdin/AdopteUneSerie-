// Types
export const SEND_NEW_NAME_SERIE = 'SEND_NEW_NAME_SERIE';
export const SEARCH = 'SEARCH';

// Creators
export const sendNewNameSerie = (value) => {
  console.log(value);
  return {
    type: SEND_NEW_NAME_SERIE ,
    value,
  }
};

export const search = () => ({
  type: SEARCH,
});