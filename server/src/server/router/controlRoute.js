const express = require('express');
const router = express.Router();

const getDataOnIdentificationCodeSet = require("../middlewares/data/getDataOnІdentificationCodeSet");
const downloadResourceFile = require("../middlewares/data/downloadResourceFile");
const readXlSXFiles = require("../middlewares/data/readXlSXFiles");
const parserHTMLPages = require('../middlewares/parser/parserHTMLPages');

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
        dataStanOfDeputies
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
            identificationCodeSet: RESOURCE_ID.get(dataStanOfDeputies),     // ---> id для запроса к OpenData API
            resourceName: dataStanOfDeputies,                               // ---> имя возращаемого ресурса ( для создания папки с файлами)
            fieldsInDB: FIELDS_IN_DB.get(dataStanOfDeputies),               // ---> поля роспарсеного файла которые будут сохраняться в бд
            typeParseLinks: TYPE_PARSE_RESOURCE.get(dataStanOfDeputies)     // ---> тип парсинга страниц по данным из файла
        };
        next();
    },
    //defaultMiddlewareForCreate,
    parserHTMLPages
);


module.exports = router;
