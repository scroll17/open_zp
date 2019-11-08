const express = require('express');
const router = express.Router();

const getDataOnIdentificationCodeSet = require("../middlewares/data/getDataOnІdentificationCodeSet");

const {
    API: {
        CONTROL: {
            DATA_ON_DEPUTIES
        },
        DEFAULT: {
            CREATE
        }
    },
    RESOURCE_NAME:{
        DataOnDeputies
    },
    RESOURCE_ID
} = require("../constants");


router.get(`${CREATE}${DATA_ON_DEPUTIES}`,
    (req, res, next) => {
        req.identificationCodeSet = RESOURCE_ID.get(DataOnDeputies);
        next();
    },
    getDataOnIdentificationCodeSet
);


module.exports = router;
