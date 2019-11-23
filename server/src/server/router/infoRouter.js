const router = require('express').Router();

const {
    API: {
        INFO:{
            STAN_OF_DEPUTIES,
            RADIATION,
            GRIVNA_RATES,
            DEPUTY_BY_NAME,
            ALL_DEPUTIES,
            DEPUTY_PHOTO_BY_ID
        }
    }
} = require('../constants');


const {
    getStanOfDeputies
} = require('../controllers/stanOfDeputiesController');

const {
    getRadiation
} = require('../controllers/radiationController');

const {
    getGrivnaRates
} = require('../controllers/grivnaRatesController');

const {
    getAllDeputies,
    getDeputyByName,
    getPhotoDeputyById
} = require('../controllers/deputiesController');


router.get(STAN_OF_DEPUTIES, getStanOfDeputies);

router.get(ALL_DEPUTIES, getAllDeputies);
router.get(DEPUTY_BY_NAME, getDeputyByName);
router.get(DEPUTY_PHOTO_BY_ID, getPhotoDeputyById);

router.get(RADIATION, getRadiation);

router.get(GRIVNA_RATES, getGrivnaRates);

module.exports = router;
