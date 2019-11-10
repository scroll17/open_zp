const axios = require('axios');

const {
    META_INFORMATION_ABOUT_THE_DATASET
} = require("../../constants");

module.exports = async (req, res, next) => {

    const { identificationCodeSet } = req.body;
    const options = `${META_INFORMATION_ABOUT_THE_DATASET}${identificationCodeSet}`;

    try{

        const { data: { result } } = await axios.get(options);

        req.body.resources = result.resources.map( resource => {

            const resourceFormat = resource.format.toLowerCase();

            return {
                id: resource.id,
                size: resource.size,
                name: resource.name.replace(`.${resourceFormat}`, ""),
                url: resource.url,
                qa: {
                    format: resourceFormat,
                    created: resource.created
                }
            }
        });

        next();

    }catch (e) {
        next(e)
    }

};


// +
//  req.body.resources ---> массив обьектов с информаией про полученый файл от API ( utl, имя, формат, дата создания, ... )