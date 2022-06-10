import axios from 'axios';

export const setColors = (colors) => ({
  type: 'SET_COLORS',
  payload: colors,
});

export const fetchColors = () => (dispatch) => {
  axios.get('http://localhost:3001/colors').then(({ data }) => {
    dispatch(setColors(data));
  });
};
