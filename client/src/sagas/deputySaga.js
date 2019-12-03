import MAIN_ACTION from '../actions/actionsTypes/actionsTypes';
import DEPUTY_ACTION from '../actions/actionsTypes/deputyTypes';

import { put, call } from 'redux-saga/effects';

import {
    deputyById,
    deputyByName,
    getAllDeputies,
    getAllStanOfDeputies
} from '../api/rest/deputyController';


export function* getAllDeputiesSaga() {
    try {
        const { data } = yield call(getAllDeputies);
        yield put({type: DEPUTY_ACTION.SET_DEPUTIES, deputies: data});
    } catch (e) {
        yield put({type: MAIN_ACTION.USERS_ERROR, error: e})
    }
}

export function* getDeputyByNameSaga({name}) {
    try {
        const { data } = yield call(deputyByName, name);
        yield put({type: DEPUTY_ACTION.SET_DEPUTIES, deputies: data});
    } catch (e) {
        yield put({type: MAIN_ACTION.USERS_ERROR, error: e})
    }
}

export function* deputyByIdSaga({id}) {
    try {
        const { data } = yield call(deputyById, id);
        yield put({type: DEPUTY_ACTION.SET_SELECTED_DEPUTY, selectedDeputy: data});
    } catch (e) {
        yield put({type: MAIN_ACTION.USERS_ERROR, error: e})
    }
}

export function* getStanOfDeputiesSaga() {
    try {
        const { data } = yield call(getAllStanOfDeputies);
        yield put({type: DEPUTY_ACTION.SET_STAN_0F_DEPUTIES, stanOfDeputies: data});
    } catch (e) {
        yield put({type: MAIN_ACTION.USERS_ERROR, error: e})
    }
}