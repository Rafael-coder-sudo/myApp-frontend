import types from "./types";
import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as User from '../../../api/Users'
import { notifyError, notifySuccess } from '../../../Components/utils/Notifications';
import actions from './actions'
export function* newUser(payload) {
  const { query } = payload


  try {
    const response = yield call(User.newUser, query)
    notifySuccess('User created successfully.')
    window.location.assign('/')
  } catch (msg) {
    notifyError(msg.response.data.errors[0])
  }
  
}

export function* login(payload) {
  try {
    const response = yield call(User.auth, payload.data)

    yield put(actions.setUser(response.data.user.name))

    localStorage.setItem('token', JSON.stringify(response.data.token));
    localStorage.setItem('user', JSON.stringify(response.data.user.name));
    

  } catch (msg) {
    notifyError(msg.response.data.error)
  }
}

export function* exit(){
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  document.location.reload(true);
}


export default function* wacthUser() {
  yield takeLatest(types.NEW_USER, newUser);
  yield takeLatest(types.AUTH, login);
  yield takeLatest(types.EXIT, exit)
}