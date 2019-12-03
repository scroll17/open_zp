import { takeLatest } from 'redux-saga/effects';

import DEPUTY_ACTION from '../actions/actionsTypes/deputyTypes';
import GRIVNA_ACTION from '../actions/actionsTypes/grivnaTypes';
import RADIATION_ACTION from '../actions/actionsTypes/radiationTypes';

import {
    deputyByIdSaga,
    getAllDeputiesSaga,
    getDeputyByNameSaga,
    getStanOfDeputiesSaga
} from './deputySaga';

import {
    getGrivnaRatesSaga
} from './grivnaSaga';

import {
    getStatusOfRadiationSaga
} from './radiationSaga';

function* rootSaga() {

    yield takeLatest(DEPUTY_ACTION.GET_ALL_DEPUTIES, getAllDeputiesSaga);
    yield takeLatest(DEPUTY_ACTION.GET_DEPUTY_BY_NAME, getDeputyByNameSaga);
    yield takeLatest(DEPUTY_ACTION.GET_DEPUTY_BY_ID, deputyByIdSaga);
    yield takeLatest(DEPUTY_ACTION.GET_STAN_OF_DEPUTIES, getStanOfDeputiesSaga);

    yield takeLatest(GRIVNA_ACTION.GET_GRIVNA_RATES, getGrivnaRatesSaga);

    yield takeLatest(RADIATION_ACTION.GET_STATUS_OF_RADIATION, getStatusOfRadiationSaga);
}

export default rootSaga;
