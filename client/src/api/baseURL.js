const IP = "10.2.1.61";
const localhost = "localhost:3000";
export const baseURL = `http://${localhost}`;

export const createURL = `${baseURL}/create`;
export const infoURL = `${baseURL}/info`;

export const  API = {
  ALL_DEPUTIES: '/all-deputies',
  DEPUTY_BY_NAME: '/deputy-by-name',
  DEPUTY_PHOTO: '/deputy-photo',

  STAN_OF_DEPUTIES: '/stan-of-deputies',

  RADIATION: '/radiation',

  GRIVNA_RATES: '/grivna-rates',
};

export const URL = {
  HOME: '/',
  NOT_FOUND: "/not-found",
};

export const SEARCH = {
  FIO: '?fio=',
};
