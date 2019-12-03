import MAIN_ACTION from '../actions/actionsTypes/actionsTypes';
import GRIVNA_ACTION from '../actions/actionsTypes/grivnaTypes';

import { put, call } from 'redux-saga/effects';

import {
    getGrivnaRates
} from '../api/rest/grivnaContoller';


export function* getGrivnaRatesSaga() {
    try {
        const { data } = yield call(getGrivnaRates);
        yield put({type: GRIVNA_ACTION.SET_GRIVNA_RATES, rates: data});
    } catch (e) {
        yield put({type: MAIN_ACTION.USERS_ERROR, error: e})
    }
}
