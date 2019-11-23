const error = require("../errors");
const { Radiation } = require('../models');

const moment = require('moment');

//const { CREATED, getStatusText } = require('http-status-codes'); TODO

module.exports.getRadiation = async (req, res, next) => {

    try{

        const arrayOutput = await Radiation.findAll({
            raw: true,
            order: [["date", "DESC"]],
        });

        const dataToSend = arrayOutput.map((dayWithData => {
            const { date, time, indicator, id } = dayWithData;

            const day = moment(date).format("YYYY-MM-DD");
            return {
                id,
                indicator,
                date: `${day} ${time}`
            }
        }));


        res.send({
            data: dataToSend,
            comments: {
                indicator: "мкР/год",
                dateFormat: "YYYY-MM-DD HH.MM"
            }
        });

    }catch (err) {
        next(new error.BadRequest(err.name))
    }
};


