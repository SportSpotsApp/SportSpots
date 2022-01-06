import { call, put } from 'redux-saga/effects';

import { Actions as LoginActions } from '../ducks/auth';
import { Actions as UserActions } from '../ducks/user';
import api from '../../services/api';

export function* login(action: any) {
    try {
        const login = yield call(api.post, `login_check`, action.payload);

        console.log("Pas de cathc ?");
        yield put(LoginActions.requestLoginSuccess(login.data));
    } catch (e) {
        console.log("Catch", e.response.data.message);
        yield put(LoginActions.requestLoginFailure(e.response.data));
    }
}

export function* logout(action: any) {
    try {
        yield call(api.post, `logout`);
    } catch (e) {}
}
