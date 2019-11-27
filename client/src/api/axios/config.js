import axios from 'axios';

import ACTION from '../../actions/actionsTypes/actionsTypes';
import { STORE } from '../../constants';

const responseHandler = (response) => {
    STORE.dispatch({type: ACTION.USERS_RESPONSE});
    return response;
};

const requestHandler = (config) => {
    STORE.dispatch({type: ACTION.USERS_REQUEST});
    return config;
};


axios.interceptors.request.use(
    config => requestHandler(config),
    error => Promise.reject(error)
);


axios.interceptors.response.use(
    response => responseHandler(response),
    error => Promise.reject(error)
);

export default axios;
