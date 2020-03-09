// Types
export const SAVE_INPUT = 'SAVE_INPUT';
export const SEARCH = 'SEARCH';

// Creators
export const saveInput = (value) => ({
  //console.log(value);
  //return {
    type: SAVE_INPUT ,
    value,
 // }
});

export const search = () => ({
  type: SEARCH,
});
