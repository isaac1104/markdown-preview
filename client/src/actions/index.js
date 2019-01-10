import { UPDATE_TEXT_INPUT } from './types';

export const updateTextInput = text => ({
  type: UPDATE_TEXT_INPUT,
  payload: text
});
