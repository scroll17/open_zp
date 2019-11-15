const error = require("../errors");
const { StanOfDeputies, Deputies } = require('../models');

const { CREATED, getStatusText } = require('http-status-codes');
const { isEmpty } = require("lodash");

module.exports.createStanOfDeputies = async (req, res, next) => {
    const {
        DBData: {
            toDBInsert
        },
        collatedResources
    } = req.body;

    try{

        //return res.send(toDBInsert);

        await StanOfDeputies.bulkCreate(toDBInsert);

        // if(collatedResources){
        //
        //     delete req.body.DBData.tableHeaders;
        //     req.body.DBData.toDBInsert = collatedResources;
        //
        //     req.body.toSend = ["StanOfDeputies created!"];
        //     return next();
        //
        // }else{

            return res.status(CREATED).send("StanOfDeputies created!")
        //}

    }catch (err) {
        console.log("---- err ----", err);
        next(new error.BadRequest(err.name))
    }
};


module.exports.createDeputies = async (req, res, next) => {
    const {
        DBData: {
            toDBInsert
        },
        toSend
    } = req.body;

    try{
        await Deputies.bulkCreate(toDBInsert);

        toSend.push("StanOfDeputies created!");
        return res.status(CREATED).send(toSend);

    }catch (err) {
        next(new error.BadRequest(err.name))
    }
};
