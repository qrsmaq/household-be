require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_URL,
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + "/db/migrations",
      tableName: "dbmigrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
      tableName: "dbseeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + "sslmode=require",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
};
