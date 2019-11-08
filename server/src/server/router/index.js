const express = requier('express');

const controlRoute = requier("./controlRoute");

const router = express.Router();


router.use('/control', controlRoute);


module.exports = router;

