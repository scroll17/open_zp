
const parseDataOfDeputies = require("./parsers/parseDataOfDeputies");

const {
    TYPE_PARSE
} = require("../../constants");

module.exports = async (req, res, next) => {

    const {
        typeParseLinks,
        linksToParse,
        fieldsInDB
    } = req.body;


    try{

        let collatedResources;

        switch (typeParseLinks) {
            case TYPE_PARSE.parseDataOfDeputies: {
                collatedResources = await parseDataOfDeputies(linksToParse, fieldsInDB);
                break;
            }
            default:
                break;
        }


        req.body.collatedResources = [];
        collatedResources.map( resource => {

            if(resource.status === "fulfilled"){

                if(resource.value.hasOwnProperty("undefined")){
                    delete resource.value["undefined"]
                }

                req.body.collatedResources.push(resource.value);

            }

        });

        delete req.body.linksToParse;
        next();

    }catch (e) {

        next(e);

    }
};

