import { combineReducers } from 'redux'
import { REDIRECTION } from '../../../Actions/Types/Navigation'

const lastScreen = (state = 'Other', action) => {
  switch (action.type) {
    case REDIRECTION:
      return action.payload.screen
    default:
      return state
  }
}

export default combineReducers({
  lastScreen,
})

/* ------------- Selector ------------- */
export const getLastScreen = (state) => state.lastScreen
