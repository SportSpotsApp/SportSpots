import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { Actions as SearchSpotsActions } from '../ducks/search-spot';

export function* requestSearchSpots(action: any) {
    try {
        const { location, activities, radius } = action.payload;

        const headers = {
            lat: location.latitude,
            lng: location.longitude,
        };

        const paramsMerged = Object.assign({}, { activities }, { radius });

        const response = yield call(api.get, '/spots', {
            params: paramsMerged,
            headers,
        });

        yield put(SearchSpotsActions.requestSearchSpotsSuccess(response.data));
    } catch (err) {
        yield put(SearchSpotsActions.requestSearchSpotsFailure());
    }
}
