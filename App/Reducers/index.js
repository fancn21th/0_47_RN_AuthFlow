import { combineReducers } from 'redux'
import appReducer, * as fromApp from './app'

/* ------------- Root Reducers ------------- */
export default combineReducers({
  app: appReducer,
})

/* ------------- Root Selector ------------- */
export const getLogined = (state) => fromApp.getLogined(state.app)
