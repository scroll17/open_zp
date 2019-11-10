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
        dataOnDeputies
    },
    FIELDS_IN_DB,
    RESOURCE_ID,
    TYPE_PARSE_RESOURCE
} = require("../constants");


const defaultMiddlewareForCreate = [
    getDataOnIdentificationCodeSet,
    downloadResourceFile,
    readXlSXFiles
];

router.get(`${CREATE}${DATA_ON_DEPUTIES}`,
    (req, res, next) => {
        req.body = {
            identificationCodeSet: RESOURCE_ID.get(dataOnDeputies),
            resourceName: dataOnDeputies,
            fieldsInDB: FIELDS_IN_DB.get(dataOnDeputies),
            typeParseLinks: TYPE_PARSE_RESOURCE.get(dataOnDeputies)
        };
        next();
    },
    defaultMiddlewareForCreate
);


module.exports = router;
