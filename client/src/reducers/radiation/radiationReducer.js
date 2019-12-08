import RADIATION_ACTION from '../../actions/actionsTypes/radiationTypes';

const initialState = {
    statusOfRadiation: {},
    months: [],
    label: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RADIATION_ACTION.SET_STATUS_OF_RADIATION: {
            const { statusOfRadiation, months, label } = action;
            Object.keys(statusOfRadiation).forEach( months => {
                statusOfRadiation[months].labels.reverse();
                statusOfRadiation[months].data.reverse();
            });

            return {
                ...state,
                statusOfRadiation,
                months,
                label,
            }
        }
        default: {
            return state;
        }
    }
}


