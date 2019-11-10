const path = require("path");

const xlsx = require("node-xlsx");
const translit = require('translit-rus-eng');

const { omitBy, isEmpty, cloneDeep, isUndefined } = require("lodash");

module.exports = async (req, res, next) => {

    const {
        fsData: {
            folderPath,
            files
        },
        fieldsInDB,
        //typeParseLinks TODO
    } = req.body;


    try{

        const DBData = {
            tableHeaders: new Map(),
            toDBInsert: [],
        };

        req.body.DBData = DBData;
        req.body.linksToParse = [];

        files.forEach( file => {

            const filePath = path.join(folderPath, file);

            const [workSheet] = xlsx.parse(filePath);
            const dataFromFile = omitBy(workSheet.data, isEmpty);


            if (!DBData.tableHeaders.has("tableHeaders")) {
                DBData.tableHeaders.set("tableHeaders", dataFromFile['1']);
            }
            delete dataFromFile['1'];


            Object.keys(dataFromFile).forEach(key => {
                const dataField = dataFromFile[key];

                const data = {};
                dataField.forEach((value, index) => {
                    const dbField = fieldsInDB[index];

                    if (dbField === 'link') {

                        req.body.linksToParse.push(value);

                    } else if (!isUndefined(dbField)) {

                        data[dbField] = value
                    }
                });

                DBData.toDBInsert.push(data);
            });
        });


        res.send(req.body)

    }catch (e) {
        next(e)
    }

};