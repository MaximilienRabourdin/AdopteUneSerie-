// Types
export const SAVE_SERIE = 'SAVE_SERIE';
export const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN';

// Creators
export const saveSerie = (value) => ({
  //console.log(value);
  //return {
    type: SAVE_SERIE ,
    value,
 // }
});

export const changeDropdown = (change) => ({
  //console.log(value);
  //return {
    type: CHANGE_DROPDOWN ,
    change,
 // }
});