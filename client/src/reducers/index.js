import { combineReducers } from 'redux';

import mainReducer from './main/mainReducer'
import deputyReducer from "./deputy/deputyReducer";
import grivnaReducer from "./grivna/grivnaReducer";
import radiationReducer from "./radiation/radiationReducer";

const appReducer = combineReducers({
    mainReducer,
    deputyReducer,
    radiationReducer,
    grivnaReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
