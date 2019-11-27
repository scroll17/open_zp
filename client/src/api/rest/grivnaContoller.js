import axios from "../axios/config";
import {infoURL, API} from "../baseURL";

export const getGrivnaRates = () =>  axios.get(`${infoURL}${API.GRIVNA_RATES}`);
