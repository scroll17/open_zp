const HttpStatus = require('http-status-codes');

module.exports = (err,req,res, next) =>{

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(err);

    if(!err.status){
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    }
    else {
        res.status(err.status).send( { statusText: err.message } )
    }
};

