import RADIATION_ACTION from '../../actions/actionsTypes/radiationTypes';

const initialState = {
    statusOfRadiation: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RADIATION_ACTION.SET_STATUS_OF_RADIATION: {
            return {
                ...state,
                statusOfRadiation: action.statusOfRadiation,
            }
        }
        default: {
            return state;
        }
    }
}


