import { combineReducers } from 'redux'
import { LOGIN_SUCCESS } from '../../../Actions/Types/Login'
import { REQUEST_LOGOUT } from '../../../Actions/Types/Logout'

const status = () => {
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

  return combineReducers({
    logined,
  })
}

export default status


/* ------------- Selector ------------- */
export const getLogined = (state) => state.logined
