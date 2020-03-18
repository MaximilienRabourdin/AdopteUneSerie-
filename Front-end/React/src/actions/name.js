// Types
export const SAVE_SERIE = 'SAVE_SERIE';
export const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN';

// Creators
export const saveSerie = (value) => ({
    type: SAVE_SERIE ,
    value,
});

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
