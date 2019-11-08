const express = require('express');

const controlRoute = require("./controlRoute");

const router = express.Router();


router.use('/control', controlRoute);


module.exports = router;

