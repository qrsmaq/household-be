const knex = require("knex");

const config = require("../knexfile.js");

const DB_ENV = process.env.DATABASE_ENV || "development";

const db = knex(config[DB_ENV]);

module.exports = db;
