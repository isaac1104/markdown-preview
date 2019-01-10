import { combineReducers } from 'redux';
import textReducer from './text_reducer';

const rootReducer = combineReducers({
  text: textReducer
});

export default rootReducer;
