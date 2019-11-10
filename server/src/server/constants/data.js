
const META_INFORMATION_ABOUT_THE_DATASET = "https://data.gov.ua/api/3/action/package_show?id=";
const RESOURCE_INFORMATION = "https://data.gov.ua/api/3/action/resource_show?id=";


const RESOURCE_NAME = {
    dataStanOfDeputies: "Дані про депутатів",
};

const RESOURCE_ID = new Map([
    [RESOURCE_NAME.dataStanOfDeputies, "1ed75809-cad4-44f6-ab37-3e6c7475eb5a"]
]);


const FIELDS_IN_DB = new Map([
    [
        RESOURCE_NAME.dataStanOfDeputies,
        {
            1: 'pip',
            2: 'description',
            3: 'constituency',
            4: 'faction',
            5: 'commission',
            6: 'link'
        }
    ]
]);


const TYPE_PARSE = {
    parseStanOfDeputies: "parseStanOfDeputies",
};

const TYPE_PARSE_RESOURCE = new Map([
    [RESOURCE_NAME.dataStanOfDeputies, TYPE_PARSE.parseStanOfDeputies]
]);


module.exports = {
    META_INFORMATION_ABOUT_THE_DATASET,
    RESOURCE_INFORMATION,

    RESOURCE_NAME,
    RESOURCE_ID,

    FIELDS_IN_DB,

    TYPE_PARSE,
    TYPE_PARSE_RESOURCE,
};