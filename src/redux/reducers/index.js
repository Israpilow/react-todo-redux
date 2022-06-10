import { combineReducers } from 'redux';

import lists from './lists';
import colors from './colors';

const rootReducer = combineReducers({
  lists,
  colors,
});

export default rootReducer;
