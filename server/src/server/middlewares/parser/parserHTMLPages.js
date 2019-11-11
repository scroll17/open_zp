
const parseDataOfDeputies = require("./parsers/parseDataOfDeputies");

const {
    TYPE_PARSE
} = require("../../constants");

module.exports = async (req, res, next) => {

    const { typeParseLinks, linksToParse } = req.body;

    const testParser = [
        "https://zp.gov.ua/uk/persons/item/41",
        "https://zp.gov.ua/uk/persons/item/65",
    ];


    try{

        let collatedResources;

        switch (typeParseLinks) {
            case TYPE_PARSE.parseDataOfDeputies: {
                collatedResources = await parseDataOfDeputies(testParser, typeParseLinks);
                break;
            }
            default:
                break;
        }


        req.body.collatedResources = collatedResources;

        res.send(collatedResources)

    }catch (e) {

        next(e);

    }

    //next()

};

