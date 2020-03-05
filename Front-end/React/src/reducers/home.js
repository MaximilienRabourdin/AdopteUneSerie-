// Import
import note from 'src/images/note.jpg';
import tendance from 'src/images/tendance.jpg';
import news from 'src/images/new.jpg';

// Initial State
const initialState = {
  series: [
    {
      picture: note,
      title: 'Séries les mieux notées ',
    },
    {
      picture: tendance,
      title: 'Tendances',
    },
    {
      picture: news,
      title: 'Sortie récentes',
    },
  ],
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
