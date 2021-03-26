const knex = require("knex");

const config_file = require("../knexfile.js");

const DB_ENV = process.env.DATABASE_ENV || "development";

const db = knex(config_file[DB_ENV]);

module.exports = db;
