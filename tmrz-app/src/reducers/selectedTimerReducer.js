import { SELECT_TIMER } from '../actions';

const selectedTimeReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_TIMER:
      return state = action.payload.index;

    default:
      return state;
  }
}

export default selectedTimeReducer;