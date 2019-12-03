import axios from "../axios/config";
import {infoURL, API, SEARCH} from "../baseURL";

export const getAllDeputies = () =>  axios.get(`${infoURL}${API.ALL_DEPUTIES}`);
export const deputyByName = (name) => axios.get(`${infoURL}${API.DEPUTY_BY_NAME}${SEARCH.FIO}${name}`);
export const deputyById = (id) => axios.get(`${infoURL}${API.DEPUTY}/${id}`);

export const getAllStanOfDeputies = () => axios.get(`${infoURL}${API.STAN_OF_DEPUTIES}`);

