"use strict";
exports.__esModule = true;
var knex_1 = require("knex");
var knexConfig = {
    client: "mssql",
    connection: {
        server: "192.168.0.6",
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME
    }
};
//const knexm = require("knex")(knexConfig);
var knexInstance = knex_1.knex(knexConfig);
exports["default"] = knexInstance;
