import { takeLatest, all } from 'redux-saga/effects'
import MockAPI from '../Services/MockApi'

/* ------------- Types ------------- */
import { REQUEST_LOGIN } from '../Actions/Types/Login'

/* ------------- Sagas ------------- */
import login from './login'

/* ------------- API ------------- */
const api = MockAPI

/* ------------- Root Sagas ------------- */
export default function* root() {
  yield all([
    takeLatest(REQUEST_LOGIN, login, api),
  ])
}
