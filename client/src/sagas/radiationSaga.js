import MAIN_ACTION from '../actions/actionsTypes/actionsTypes';
import RADIATION_ACTION from '../actions/actionsTypes/radiationTypes';

import { put, call } from 'redux-saga/effects';
import moment from 'moment-with-locales-es6';

import {
    getAllDataOfRadiation
} from '../api/rest/radiationController';

moment.locale('ru');

export function* getStatusOfRadiationSaga() {
    try {
        const { data: {comments, data} } = yield call(getAllDataOfRadiation);
        const { indicator, dateFormat } = comments;

        const months = [];
        const statusOfRadiation = {};
        data.forEach( day => {
            const { indicator, date } = day;
            const momentNow = moment(date, dateFormat);

            const month = momentNow.format('MMMM');
            const label = momentNow.format('DD');

            if(!months.includes(month)){
                months.push(month);
            }

            if(statusOfRadiation[month]){
                statusOfRadiation[month].labels.push(label);
                statusOfRadiation[month].data.push(indicator);
            }else{
                statusOfRadiation[month] = {
                    labels: [label],
                    data: [indicator]
                }
            }
        });

        yield put({
            type: RADIATION_ACTION.SET_STATUS_OF_RADIATION,
            statusOfRadiation,
            months,
            label: indicator,
        });
    } catch (e) {
        yield put({type: MAIN_ACTION.USERS_ERROR, error: e})
    }
}
