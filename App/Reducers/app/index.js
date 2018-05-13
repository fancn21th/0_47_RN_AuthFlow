import { combineReducers } from 'redux'
import navigation from './navigation'
import status, * as fromStatus from './status'
import auth from './auth'


export default combineReducers({
  navigation,
  status,
  auth,
})

/* ------------- Selector ------------- */
export const getLogined = (state) => fromStatus.getLogined(state.status)
