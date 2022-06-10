const initialState = {
  colors: [],
};

const colors = (state = initialState, action) => {
  if (action.type === 'SET_COLORS') {
    return {
      ...state,
      colors: action.payload,
    };
  }
  return state;
};

export default colors;
