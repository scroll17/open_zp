import axios from "../axios/config";
import {infoURL, API} from "../baseURL";

export const getAllStanOfDeputies = () => axios.get(`${infoURL}${API.STAN_OF_DEPUTIES}`);

