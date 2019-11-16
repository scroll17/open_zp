const error = require("../errors");
const { StanOfDeputies, Deputies } = require('../models');

const { CREATED, getStatusText } = require('http-status-codes');

module.exports.createStanOfDeputies = async (req, res, next) => {
    const {
        DBData: {
            toDBInsert
        },
        toSend
    } = req.body;

    try{

        await StanOfDeputies.bulkCreate(toDBInsert);

        toSend.push("StanOfDeputies created!");

        res.status(CREATED).send(toSend);

    }catch (err) {
        next(new error.BadRequest(err.name))
    }
};


module.exports.createDeputies = async (req, res, next) => {
    const {
        collatedResources
    } = req.body;

    try{
        await Deputies.bulkCreate(collatedResources);

        delete req.body.collatedResources;
        req.body.toSend = ["Deputies created!"];

        next();

    }catch (err) {
        next(new error.BadRequest(err.name))
    }
};
