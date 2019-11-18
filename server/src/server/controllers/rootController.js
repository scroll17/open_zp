const error = require("../errors");
const { StanOfDeputies, Deputies } = require('../models');

const { CREATED, getStatusText } = require('http-status-codes');

module.exports.createStanOfDeputies = async (req, res, next) => {
    const {
        DBData: {
            toDBInsert
        },
        collatedResources,
    } = req.body;

    try{

        await StanOfDeputies.bulkCreate(toDBInsert);

        if(collatedResources){

            req.body.DBData.toDBInsert = collatedResources;
            delete req.body.collatedResources;

            req.body.toSend = ["StanOfDeputies created!"];
            return next();

        }else{

            res.status(CREATED).send("StanOfDeputies created!");

        }

    }catch (err) {
        next(new error.BadRequest(err.name))
    }
};


module.exports.createDeputies = async (req, res, next) => {
    const {
        toSend,
        DBData: {
            toDBInsert
        },
    } = req.body;

    try{
        await Deputies.bulkCreate(toDBInsert);

        toSend.push("Deputies created!");

        res.status(CREATED).send(toSend);

    }catch (err) {
        next(new error.BadRequest(err.name))
    }
};
