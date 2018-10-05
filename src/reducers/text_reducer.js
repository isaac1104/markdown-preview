import { UPDATE_TEXT_INPUT } from '../actions/types';

const INITIAL_STATE = `
# Welcome to Live Markdown Preview!
---
## Start by editing the text!
### And see how your markdown will look like
---
# Examples
# h1
## h2
### h3
#### h4
##### h5
###### h6
_italic_
*emphasis*
**strong**
> blockquote
`

function textReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_TEXT_INPUT:
      return action.payload;
    default:
      return state;
  }
};

export default textReducer;
