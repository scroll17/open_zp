import axios from "../axios/config";
import {infoURL, API} from "../baseURL";

export const getAllDataOfRadiation = () => axios.get(`${infoURL}${API.RADIATION}`);
