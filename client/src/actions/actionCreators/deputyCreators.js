import DEPUTY_ACTION from '../actionsTypes/deputyTypes';

export const getAllDeputies = () => ({
    type: DEPUTY_ACTION.GET_ALL_DEPUTIES,
});
export const getDeputyByName = (name) => ({
    type: DEPUTY_ACTION.GET_DEPUTY_BY_NAME,
    name
});
export const getDeputyById = (id) => ({
    type: DEPUTY_ACTION.GET_DEPUTY_BY_ID,
    id
});
export const getStanOfDeputies = () => ({
    type: DEPUTY_ACTION.GET_STAN_OF_DEPUTIES,
});
