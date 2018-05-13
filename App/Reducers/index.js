import { combineReducers } from 'redux'
import app, * as fromApp from './app'

/* ------------- Root Reducers ------------- */
export default combineReducers({
  app,
})

/* ------------- Root Selector ------------- */
export const getLogined = (state) => fromApp.getLogined(state.app)
