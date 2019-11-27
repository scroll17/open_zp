const express = require('express');

const controlRoute = require("./controlRoute");
const infoRouter = require("./infoRouter");


const router = express.Router();

router.use('/control', controlRoute);
router.use('/info', infoRouter);


module.exports = router;

