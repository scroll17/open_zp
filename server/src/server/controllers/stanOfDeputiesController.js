const error = require("../errors");
const { StanOfDeputies } = require('../models');

//const { CREATED, getStatusText } = require('http-status-codes'); TODO

module.exports.getStanOfDeputies = async (req, res, next) => {

    try{

        const arrayOutput = await StanOfDeputies.findAll({
            raw: true,
            order: ['fio']
        });


        res.send(arrayOutput);

    }catch (err) {
        next(new error.BadRequest(err.name))
    }
};


