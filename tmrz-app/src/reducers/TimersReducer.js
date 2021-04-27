import { NEW_TIMER, TOGGLE_TIMER } from '../actions';
import Timer from '../Timer';

const timersReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_TIMER:
      // adds a new timer and returns copy of state
      const name = action.payload.name ? action.payload.name : `Timer ${state.length}`
      return [...state, new Timer(name)]
    
    case TOGGLE_TIMER:
      // inverts the isRunning property
      const newState = state.map((timer, index) => {
        if (action.payload.index === index) {
          return {...timer, isRunning: !timer.isRunning}
        }
        return timer
      })
      return newState

    default:
      return state;
  }
}

export default timersReducer;