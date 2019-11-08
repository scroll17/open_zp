const express = require('express');

const errorHandlerDefault = require("./server/errorHandlers/errorHandlerDefault");


const router = require("./server/router/index");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(
    errorHandlerDefault,
);

module.exports = app;


// DEBUG=server:* npm start