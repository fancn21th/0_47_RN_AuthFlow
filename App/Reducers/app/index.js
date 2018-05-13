import { combineReducers } from 'redux'
import navigationReducer from './navigation'
import statusReducer, * as fromStatus from './status'

export default combineReducers({
  navigation: navigationReducer,
  status: statusReducer,
})

/* ------------- Selector ------------- */
export const getLogined = (state) => fromStatus.getLogined(state.status)
