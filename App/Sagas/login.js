import { call, put } from 'redux-saga/effects'
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../Actions/Types/Login'

export default function* login(api) {
  const response = yield call(api.login)
  if (response.ok) {
    yield put({ type: LOGIN_SUCCESS, payload: response.data })
  } else {
    yield put({ type: LOGIN_FAILURE })
  }
}
