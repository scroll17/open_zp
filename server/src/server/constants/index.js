
const {
    META_INFORMATION_ABOUT_THE_DATASET,

    RESOURCE_INFORMATION,
    RESOURCE_ID,
    RESOURCE_NAME,

    FIELDS_IN_DB,

    TYPE_PARSE,
    TYPE_PARSE_RESOURCE,
} = require("./data");

const { API } = require("./api");

const PORT = process.env.PORT || 3000;


module.exports = {
    PORT,

    META_INFORMATION_ABOUT_THE_DATASET,
    FIELDS_IN_DB,

    RESOURCE_INFORMATION,
    RESOURCE_ID,
    RESOURCE_NAME,

    API,

    TYPE_PARSE,
    TYPE_PARSE_RESOURCE
};
