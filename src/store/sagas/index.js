import { fork } from 'redux-saga/effects';
import wacthUser from '../ducks/user/sagas'

export default function* startForman() {
  yield fork(wacthUser)
}
