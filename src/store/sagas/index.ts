import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from '../ducks/auth';
import { Types as UserTypes } from '../ducks/user';
import { Types as SpotTypes } from '../ducks/spot';
import { Types as SearchSpotTypes } from '../ducks/search-spot';

import { fetchUser } from './user';
import { requestSearchSpots } from './search-spots';
import { fetchSpot } from './spot';
import {login, logout} from "./auth";

export default function* rootSaga() {
    return yield all([
        takeLatest(AuthTypes.LOGIN_REQUEST, login),
        takeLatest(AuthTypes.LOGOUT, logout),
        takeLatest(UserTypes.GET_DETAIL_REQUEST, fetchUser),
        takeLatest(SpotTypes.GET_DETAIL_REQUEST, fetchSpot),
        takeLatest(SearchSpotTypes.SEARCH_SPOTS_REQUEST, requestSearchSpots),
    ]);
}
