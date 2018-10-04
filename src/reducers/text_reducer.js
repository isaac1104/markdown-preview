import { UPDATE_TEXT_INPUT } from '../actions/types';

function textReducer(state = '', action) {
  switch (action.type) {
    case UPDATE_TEXT_INPUT:
      return action.payload;
    default:
      return state;
  }
};

export default textReducer;
