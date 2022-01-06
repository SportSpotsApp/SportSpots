import { call, put } from 'redux-saga/effects';

import { Actions as UserActions } from '../ducks/user';
import api from '../../services/api';

export function* fetchUser(action: any) {
    try {
        const { id } = action;
        const user = yield call(api.get, `user/${id}`);
        yield put(UserActions.requestUserDetailSuccess(user.data));
    } catch (e) {
        yield put(UserActions.requestUserDetailFailure());
    }
}
