import GRIVNA_ACTION from '../../actions/actionsTypes/grivnaTypes';

const initialState = {
    rates: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GRIVNA_ACTION.SET_GRIVNA_RATES: {
            return {
                ...state,
                rates: action.rates,
            }
        }
        default: {
            return state;
        }
    }
}


