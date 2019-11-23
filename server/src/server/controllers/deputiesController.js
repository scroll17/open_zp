const error = require("../errors");
const { Deputies } = require('../models');

module.exports.getAllDeputies = async (req, res, next) => {

    try{

        const arrayOutput = await Deputies.findAll({
            attributes: ['id', 'fio', 'photo'],
            raw: true,
            order: ['id']
        });


        res.send(arrayOutput);

    }catch (err) {
        next(new error.BadRequest(err.name))
    }
};

module.exports.getDeputyByName = async (req, res, next) => {
    const { fio } = req.query;

    try{

        const deputy = await Deputies.findOne({
            where:{
                fio: {
                    $iLike: `%${fio}%`
                }
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        });


        res.send(deputy);

    }catch (err) {
        next(new error.BadRequest(err.name))
    }
};


module.exports.getPhotoDeputyById = async (req, res, next) => {
    const { id } = req.params;

    try{

        const deputy = await Deputies.findByPk(id, {
            attributes: ['photo']
        });

        res.send(deputy);

    }catch (err) {
        next(new error.BadRequest(err.name))
    }
};
