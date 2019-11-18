
const META_INFORMATION_ABOUT_THE_DATASET = "https://data.gov.ua/api/3/action/package_show?id=";
const RESOURCE_INFORMATION = "https://data.gov.ua/api/3/action/resource_show?id=";


const RESOURCE_NAME = {
    dataStanOfDeputies: "Дані про депутатів",
    dataOfRadiation: "Дані про радіацію",
};

const RESOURCE_ID = new Map([
    [RESOURCE_NAME.dataStanOfDeputies, "1ed75809-cad4-44f6-ab37-3e6c7475eb5a"],
    [RESOURCE_NAME.dataOfRadiation, "18c18c13-f6d7-4097-bcca-5ec4ba8481b9"],
]);


const TYPE_PARSE = {
    parseDataOfDeputies: "parseDataOfDeputies",
};

const TYPE_PARSE_RESOURCE = new Map([
    [RESOURCE_NAME.dataStanOfDeputies, TYPE_PARSE.parseDataOfDeputies]
]);

const DESIRED_FIELDS = {
    [TYPE_PARSE.parseDataOfDeputies]: ["громадянство", 'освіта', 'сімейний стан']
};


const FIELDS_IN_DB = new Map([
    [
        RESOURCE_NAME.dataStanOfDeputies,
        {
            1: 'fio',
            2: 'description',
            3: 'constituency',
            4: 'faction',
            5: 'commission',
            6: 'link',
            "publicationTime": "publicationTime",
        }
    ],
    [
        RESOURCE_NAME.dataOfRadiation,
        {
            0: "date",
            1: "time",
            2: "indicator",
        }
    ],
    [
        TYPE_PARSE.parseDataOfDeputies,
        {
            0: "fio",
            "info": "info",
            "img": "photo",
            "link": "link",
            "громадянство": "citizenship",
            "освіта": "education",
            "сімейний стан": "maritalStatus"
        }
    ],
]);


module.exports = {
    META_INFORMATION_ABOUT_THE_DATASET,
    RESOURCE_INFORMATION,

    RESOURCE_NAME,
    RESOURCE_ID,

    FIELDS_IN_DB,

    TYPE_PARSE,
    TYPE_PARSE_RESOURCE,

    DESIRED_FIELDS,
};