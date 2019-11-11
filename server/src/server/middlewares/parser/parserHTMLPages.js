
const parseDataOfDeputies = require("./parsers/parseDataOfDeputies");

const {
    TYPE_PARSE
} = require("../../constants");

module.exports = async (req, res, next) => {

    //const { typeParseLinks, linksToParse } = req.body;

    const testParser = [
        "https://zp.gov.ua/uk/persons/item/41",
        // "https://zp.gov.ua/uk/persons/item/56",
        // "https://zp.gov.ua/uk/persons/item/65",
        // "https://zp.gov.ua/uk/persons/item/66",
        // "https://zp.gov.ua/uk/persons/item/73",
        // "https://zp.gov.ua/uk/persons/item/75",
        // "https://zp.gov.ua/uk/persons/item/78",
        // "https://zp.gov.ua/uk/persons/item/81",
        // "https://zp.gov.ua/uk/persons/item/83",
        // "https://zp.gov.ua/uk/persons/item/85",
        // "https://zp.gov.ua/uk/persons/item/87",
        // "https://zp.gov.ua/uk/persons/item/90",
        // "https://zp.gov.ua/uk/persons/item/91",
        // "https://zp.gov.ua/uk/persons/item/93",
        // "https://zp.gov.ua/uk/persons/item/95",
        // "https://zp.gov.ua/uk/persons/item/97",
        // "https://zp.gov.ua/uk/persons/item/100",
        // "https://zp.gov.ua/uk/persons/item/101",
        // "https://zp.gov.ua/uk/persons/item/103",
        // "https://zp.gov.ua/uk/persons/item/105",
        // "https://zp.gov.ua/uk/persons/item/106",
        // "https://zp.gov.ua/uk/persons/item/108",
        // "https://zp.gov.ua/uk/persons/item/111",
        // "https://zp.gov.ua/uk/persons/item/113",
        // "https://zp.gov.ua/uk/persons/item/115",
        // "https://zp.gov.ua/uk/persons/item/117",
        // "https://zp.gov.ua/uk/persons/item/127",
        // "https://zp.gov.ua/uk/persons/item/128",
        // "https://zp.gov.ua/uk/persons/item/131",
        // "https://zp.gov.ua/uk/persons/item/67",
        // "https://zp.gov.ua/uk/persons/item/71",
        // "https://zp.gov.ua/uk/persons/item/77",
        // "https://zp.gov.ua/uk/persons/item/80",
        // "https://zp.gov.ua/uk/persons/item/82",
        // "https://zp.gov.ua/uk/persons/item/84",
        // "https://zp.gov.ua/uk/persons/item/86",
        // "https://zp.gov.ua/uk/persons/item/88",
        // "https://zp.gov.ua/uk/persons/item/89",
        // "https://zp.gov.ua/uk/persons/item/92",
        // "https://zp.gov.ua/uk/persons/item/94",
        // "https://zp.gov.ua/uk/persons/item/96",
        // "https://zp.gov.ua/uk/persons/item/98",
        // "https://zp.gov.ua/uk/persons/item/99",
        // "https://zp.gov.ua/uk/persons/item/102",
        // "https://zp.gov.ua/uk/persons/item/104",
        // "https://zp.gov.ua/uk/persons/item/107",
        // "https://zp.gov.ua/uk/persons/item/110",
        // "https://zp.gov.ua/uk/persons/item/114",
        // "https://zp.gov.ua/uk/persons/item/116",
        // "https://zp.gov.ua/uk/persons/item/118",
        // "https://zp.gov.ua/uk/persons/item/119",
        // "https://zp.gov.ua/uk/persons/item/120",
        // "https://zp.gov.ua/uk/persons/item/122",
        // "https://zp.gov.ua/uk/persons/item/123",
        // "https://zp.gov.ua/uk/persons/item/124",
        // "https://zp.gov.ua/uk/persons/item/125",
        // "https://zp.gov.ua/uk/persons/item/126",
        // "https://zp.gov.ua/uk/persons/item/129",
        // "https://zp.gov.ua/uk/persons/item/130",
        // "https://zp.gov.ua/uk/persons/item/133",
        // "https://zp.gov.ua/uk/persons/item/134",
        // "https://zp.gov.ua/uk/persons/item/136",
        // "https://zp.gov.ua/uk/persons/item/135",
        // "https://zp.gov.ua/uk/persons/item/132",
        // "https://zp.gov.ua/uk/persons/item/241"
    ];


    try{

        await parseDataOfDeputies(testParser)//, typeParseLinks);

        //
        // let collatedResources;
        //
        // switch (typeParseLinks) {
        //     case TYPE_PARSE.parseDataOfDeputies: {
        //         collatedResources = await parseDataOfDeputies(testParser, typeParseLinks);
        //         break;
        //     }
        //     default:
        //         break;
        // }
        //
        //
        // req.body.collatedResources = collatedResources;
        // //delete req.body.linksToParse;
        //
        // res.send(req.body)

    }catch (e) {

        next(e);

    }

    //next()

};

