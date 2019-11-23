const error = require("../errors");
const { GrivnaRates } = require('../models');

module.exports.getGrivnaRates = async (req, res, next) => {

    try{

        const arrayOutput = await GrivnaRates.findAll({
            raw: true,
        });


        res.send(arrayOutput);

    }catch (err) {
        next(new error.BadRequest(err.name))
    }
};


