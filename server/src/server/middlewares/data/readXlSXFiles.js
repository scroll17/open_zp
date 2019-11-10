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
            tableHeaders: [],
            toDBInsert: [],
        };

        req.body.DBData = DBData;
        req.body.linksToParse = [];

        await Promise.all(files.map( async file => {

            const filePath = path.join(folderPath, file);

            const [workSheet] = await xlsx.parse(filePath);
            const dataFromFile = await omitBy(workSheet.data, isEmpty);


            if (isEmpty(DBData.tableHeaders)) {
                DBData.tableHeaders.push(...dataFromFile['1']);
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

            return Promise.resolve();
        }));

        res.send(req.body)

    }catch (e) {
        next(e)
    }

};

// +
//  req.body
//      DBData
//          tableHeaders    ---> заголовки прочитаной таблицы
//          toDBInsert      ---> массив обьектов для сохранения в БД
//
//      linksToParse        ---> массив ссылок, из которых нужно распарсить страницу и получить данные