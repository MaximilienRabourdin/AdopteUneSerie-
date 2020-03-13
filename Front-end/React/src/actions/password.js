// Types

export const PASSWORD= 'PASSWORD';

// Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const setUser = (logged, user) => ({
  type: SET_USER,
  logged,
  user,
});


export const PASSWORD = () => ({
  type: PASSWORD,
});
