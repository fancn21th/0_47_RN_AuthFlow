import { combineReducers } from 'redux'
import { REDIRECTION } from '../../../Actions/Types/Navigation'

const navigation = () => {
  const lastScreen = (state = null, action) => {
    switch (action.type) {
      case REDIRECTION:
        return action.payload.screen
    }
  }

  return combineReducers({
    lastScreen,
  })
}

export default navigation
