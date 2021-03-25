const express = require("express");
const db = require("../config/dbConfig.js");

const {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
} = require("../utils/dbHelper.js");

const router = express.Router();

// get all members
router.get("/", (req, res) => {
  getResource("members", req, res);
});

// get member by id
router.get("/:id", (req, res) => {
  const resourceId = req.params.id;
  getResourceById(resourceId, "members", req, res);
});

// DELETE: delete member
router.post("/:id", (req, res) => {
  const resourceId = req.params.id;
  deleteResource(resourceId, "members", req, res);
});

// PUT: update member
router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  const updatedMember = req.body;

  updateResource(resourceId, "members", updatedMember, req, res);
});

// POST: create new member
router.post("/", (req, res) => {
  const {
    name,
    email,
    password,
    age,
    relationship,
    points,
    isadmin,
    family_id,
  } = req.body;

  db("members")
    .insert({
      name: name,
      email: email,
      password: password,
      age: age,
      relationship: relationship,
      points: points,
      isadmin: isadmin,
      family_id: family_id,
    })
    .then(() => {
      console.log("Member Added");
      return res.status(201).json({ msg: "Member Added" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "Something went wrong. Member not added." });
    });
});

module.exports = router;
