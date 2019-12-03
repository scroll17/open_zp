import MAIN_ACTION from '../actions/actionsTypes/actionsTypes';
import RADIATION_ACTION from '../actions/actionsTypes/radiationTypes';

import { put, call } from 'redux-saga/effects';

import {
    getAllDataOfRadiation
} from '../api/rest/radiationController';


export function* getStatusOfRadiationSaga() {
    try {
        const { data } = yield call(getAllDataOfRadiation);
        yield put({type: RADIATION_ACTION.SET_STATUS_OF_RADIATION, statusOfRadiation: data});
    } catch (e) {
        yield put({type: MAIN_ACTION.USERS_ERROR, error: e})
    }
}
