import { combineReducers } from 'redux'
import { LOGIN_SUCCESS } from '../../../Actions/Types/Login'
import { REQUEST_LOGOUT } from '../../../Actions/Types/Logout'

const logined = (state = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return true
    case REQUEST_LOGOUT :
      return false
    default:
      return false
  }
}

export default combineReducers({
  logined,
})


/* ------------- Selector ------------- */
export const getLogined = (state) => state.logined
