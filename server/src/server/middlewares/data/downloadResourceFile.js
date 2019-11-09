const fs = require("fs");
const path = require("path");

const axios = require('axios');
const translit = require('translit-rus-eng');

module.exports = async (req, res, next) => {

    const { resources, resourceName } = req.body;

    const folderName = translit(resourceName, 'slug');
    const folderPath = path.join(__dirname, "../../../../public/data", folderName);

    req.body.fsData = {
        folderPath,
        files: []
    };

    try{

        //await fs.promises.mkdir(folderPath); // create folder

        const files = resources.map( async file => {

            const fileName = translit(`${file.name}.${file.qa.format}`, 'slug');
            const filePath = path.join(folderPath, fileName);

            return req.body.fsData.files.push(fileName); // TODO

            // const { data } = await axios({
            //     method: 'get',
            //     url: file.url,
            //     responseType: 'stream'
            // });
            //
            // return await data.pipe(fs.createWriteStream(filePath));
        });


        await Promise.all(files);
        next()

    }catch (e) {
        next(e)
    }

};