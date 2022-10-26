import {
    call, put, takeLatest
} from 'redux-saga/effects';
import AuthService from '../../service/authService';
import CookieService from '../../service/cookieService';
import { authActions } from './slice';
import { push } from "react-router-redux";
import { ISignInResponse } from './interface';

export function* signInGenerator({ payload }: any) {
    try {
        const result: ISignInResponse = yield call(AuthService.loginUser, payload.username, payload.password);

        console.log('sign in result', result);

        if (result) {
            CookieService.setCookie('authToken', result.token);
            yield put(authActions.signInSucceeded(result));
        } else {
            alert('Incorrect username/password combination');
        }
    } catch (error) {
        throw error
    }
}

export function* signOutGenerator({ payload }: any) {
    CookieService.removeCookie('authToken');
}

export function* authSaga() {
    yield takeLatest(authActions.signIn.type, signInGenerator);
    yield takeLatest(authActions.signOut.type, signOutGenerator);
}

export default authSaga;