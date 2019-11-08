
const META_INFORMATION_ABOUT_THE_DATASET = "https://data.gov.ua/api/3/action/package_show?id=";
const RESOURCE_INFORMATION = "https://data.gov.ua/api/3/action/resource_show?id=";


const RESOURCE_NAME = {
    DataOnDeputies: "Дані про депутатів",
};

const RESOURCE_ID = new Map([
    [RESOURCE_NAME.DataOnDeputies, "1ed75809-cad4-44f6-ab37-3e6c7475eb5a"]
]);


module.exports = {
    META_INFORMATION_ABOUT_THE_DATASET,
    RESOURCE_INFORMATION,

    RESOURCE_NAME,
    RESOURCE_ID
};