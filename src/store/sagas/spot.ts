import { call, put } from 'redux-saga/effects';

import { Actions as SpotActions } from '../ducks/spot';
import api from '../../services/api';

export function* fetchSpot(action: any) {
    try {
        const { id } = action.payload;
        const response = yield call(api.get, `/spot/${id}`);
        yield put(SpotActions.requestSpotDetailSuccess(response.data));
    } catch (err) {
        yield put(SpotActions.requestSpotDetailFailure());
    }
}
