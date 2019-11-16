const path = require("path");

const xlsx = require("node-xlsx");

const { omitBy, isEmpty, isUndefined } = require("lodash");

module.exports = async (req, res, next) => {

    const {
        fsData: {
            folderPath,
            files
        },
        resources,
        fieldsInDB,
    } = req.body;


    try{

        const DBData = {
            tableHeaders: [],
            toDBInsert: [],
        };

        req.body.DBData = DBData;
        req.body.linksToParse = [];

        await Promise.all(files.map( async (file, index) => {

            const filePath = path.join(folderPath, file);

            const [workSheet] = await xlsx.parse(filePath);
            const dataFromFile = await omitBy(workSheet.data, isEmpty);


            if (isEmpty(DBData.tableHeaders)) {
                DBData.tableHeaders.push(...dataFromFile['1']);
            }
            delete dataFromFile['1'];


            Object.keys(dataFromFile).forEach( key => {
                const dataField = dataFromFile[key];

                const data = {};
                data["maintainer"] = resources[index].maintainer;
                data["publicationTime"] = resources[index].qa.created;

                dataField.forEach((value, index) => {
                    const dbField = fieldsInDB[index];

                    if (dbField === 'link') {

                        data[dbField] = value;
                        req.body.linksToParse.push(value);

                    } else if (!isUndefined(dbField)) {

                        data[dbField] = value
                    }
                });

                DBData.toDBInsert.push(data);
            });

            return Promise.resolve();
        }));

        res.send(req.body);

        next()

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