import { Knex, knex } from "knex";

const knexConfig: Knex.Config = {
  client: "mssql",
  connection: {
    server: "192.168.0.6",
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
  },
};

//const knexm = require("knex")(knexConfig);
const knexInstance = knex(knexConfig);

export default knexInstance;
