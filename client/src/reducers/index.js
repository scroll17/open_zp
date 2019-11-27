import { combineReducers } from 'redux';

import mainReducer from './main/mainReducer'

const appReducer = combineReducers({
    mainReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
