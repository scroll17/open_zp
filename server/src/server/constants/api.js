
const API = {
    DEFAULT: {
        UPDATE: "/update",
        CREATE: "/create"
    },

    CONTROL:{
        DATA_ON_DEPUTIES: '/data-on-deputies',
        DATA_ON_RADIATION: '/data-on-radiation',
    },

    INFO: {
        STAN_OF_DEPUTIES: "/stan-of-deputies",

        ALL_DEPUTIES: "/all-deputies",
        DEPUTY_BY_NAME: '/deputy-by-name',
        DEPUTY_BY_ID: '/deputy/:id',
        DEPUTY_PHOTO_BY_ID: '/deputy-photo/:id',

        RADIATION: '/radiation',

        GRIVNA_RATES: '/grivna-rates',

    }
};

module.exports = {
    API
};