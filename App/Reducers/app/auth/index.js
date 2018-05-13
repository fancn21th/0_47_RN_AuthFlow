import { combineReducers } from 'redux'
import { LOGIN_SUCCESS } from '../../../Actions/Types/Login'

const token = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload.token
    default:
      return state
  }
}

export default combineReducers({
  token,
})
