import { combineReducers } from 'redux'
import { REDIRECTION } from '../../../Actions/Types/Navigation'

const lastScreen = (state = null, action) => {
  switch (action.type) {
    case REDIRECTION:
      return action.payload.screen
    default:
      return null
  }
}

export default combineReducers({
  lastScreen,
})
