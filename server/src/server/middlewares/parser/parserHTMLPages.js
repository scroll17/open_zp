
const parseStanOfDeputies = require("./parsers/parseStanOfDeputies");

const {
    TYPE_PARSE
} = require("../../constants");

module.exports = async (req, res, next) => {

    const { typeParseLinks, linksToParse } = req.body;

    const testParser = [
        "https://zp.gov.ua/uk/persons/item/41"
    ];

    // https://zp.gov.ua/uk/persons/item/41


    let collatedResources;

    switch (typeParseLinks) {
        case TYPE_PARSE.parseStanOfDeputies: {
            collatedResources = await parseStanOfDeputies(testParser);
            break;
        }
        default:
            break;
    }


    req.body.collatedResources = collatedResources;

    res.send(collatedResources)

    //next()

};

