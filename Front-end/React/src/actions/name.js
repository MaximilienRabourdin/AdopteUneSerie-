// Types
export const SAVE_SERIE = 'SAVE_SERIE';
export const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN';

// Save serie name input in store
export const saveSerie = (value) => ({
    type: SAVE_SERIE ,
    value,
});

// Save serie dropdown data input in store
export const changeDropdown = (idGenres, idNetwork, idNote, idTime) => ({
  //console.log(value);
  //return {
    type: CHANGE_DROPDOWN ,
    idGenres,
    idNetwork,
    idNote,
    idTime,
 // }
});
