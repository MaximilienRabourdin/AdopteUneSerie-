// Types
export const SAVE_SERIE = 'SAVE_SERIE';
export const SEARCH = 'SEARCH';

// Creators
export const saveSerie = (value) => ({
  //console.log(value);
  //return {
    type: SAVE_SERIE ,
    value,
 // }
});

export const search = () => ({
  type: SEARCH,
});
