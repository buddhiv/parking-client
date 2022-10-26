import { all, fork } from 'redux-saga/effects';
import authSaga from '../app/auth/saga';
import parkingSaga from '../app/parking/saga';

export function* rootSaga() {
    yield all(
        [
            fork(authSaga),
            fork(parkingSaga),
        ]
    );
}
