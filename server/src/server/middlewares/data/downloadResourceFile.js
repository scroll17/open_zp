const fs = require("fs");
const path = require("path");

const translit = require('translit-rus-eng');

const downloadFile = require("../../utils/downloadFile");

module.exports = async (req, res, next) => {

    const { resources, resourceName } = req.body;

    const folderName = translit(resourceName, 'slug');
    const folderPath = path.join(__dirname, "../../../../public/data", folderName);

    req.body.fsData = {
        folderPath,
        files: []
    };

    try{

        await fs.promises.mkdir(folderPath); // create folder

        await Promise.all(resources.map(  file => {

            const fileName = translit(`${file.name}.${file.qa.format}`, 'slug');
            const filePath = path.join(folderPath, fileName);

            req.body.fsData.files.push(fileName);

            return downloadFile(file.url, filePath)
        }));

        next()

    }catch (e) {
        next(e)
    }

};