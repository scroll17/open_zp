
module.exports = (req, res, next) => {

    const codeSet = req.identificationCodeSet;

    res.send(codeSet);

};