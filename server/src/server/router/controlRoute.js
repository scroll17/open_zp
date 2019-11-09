const express = require('express');
const router = express.Router();

const getDataOnIdentificationCodeSet = require("../middlewares/data/getDataOnІdentificationCodeSet");
const downloadResourceFile = require("../middlewares/data/downloadResourceFile");
const readXlSXFiles = require("../middlewares/data/readXlSXFiles");


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
        req.body = {
            identificationCodeSet: RESOURCE_ID.get(DataOnDeputies),
            resourceName: DataOnDeputies,
        };
        next();
    },
    getDataOnIdentificationCodeSet,
    downloadResourceFile,
    readXlSXFiles
);


module.exports = router;
