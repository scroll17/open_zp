
const {
    META_INFORMATION_ABOUT_THE_DATASET,
    RESOURCE_INFORMATION,
    RESOURCE_ID,
    RESOURCE_NAME
} = require("./data");

const { API } = require("./api");

const PORT = process.env.PORT || 3000;


module.exports = {
    PORT,

    META_INFORMATION_ABOUT_THE_DATASET,
    RESOURCE_INFORMATION,
    RESOURCE_ID,
    RESOURCE_NAME,

    API
};
