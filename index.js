const express = require("express");
const cors = require("cors");
const knex = require("knex");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  },
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

// GET Fetch all members from the database
app.get("/", (req, res) => {
  db.select("*")
    .from("members")
    .then((member) => {
      console.log(member);
      res.status(201).json(member);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/", (req, res) => res.send("Home"));

app.listen(port, () => console.log(`Server running on port ${port}`));
