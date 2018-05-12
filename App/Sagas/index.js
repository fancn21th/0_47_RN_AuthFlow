// import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

/* ------------- Sagas ------------- */
import todos from './todos'

/* ------------- API ------------- */

/* ------------- Root Sagas ------------- */
export default function* root() {
  yield all([
    todos(),
  ])
}
