import DEPUTY_ACTION from '../../actions/actionsTypes/deputyTypes';

const initialState = {
    deputies: [],
    stanOfDeputies: [],
    selectedDeputy: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DEPUTY_ACTION.SET_DEPUTIES: {
            return {
                ...state,
                deputies: action.deputies,
            }
        }
        case DEPUTY_ACTION.SET_SELECTED_DEPUTY: {
            return {
                ...state,
                selectedDeputy: action.selectedDeputy
            }
        }
        case DEPUTY_ACTION.SET_STAN_0F_DEPUTIES: {
            return {
                ...state,
                stanOfDeputies: action.stanOfDeputies
            }
        }
        default: {
            return state;
        }
    }
}


