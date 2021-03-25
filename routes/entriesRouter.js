const express = require("express");

const {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
} = require("../utils/dbHelper.js");

const router = express.Router();

// get all entries
router.get("/", (req, res) => {
  getResource("entries", req, res);
});

// get entries by id
router.get("/:id", (req, res) => {
  const resourceId = req.params.id;
  getResourceById(resourceId, "entries", req, res);
});

// DELETE: delete entries
router.post("/:id", (req, res) => {
  const resourceId = req.params.id;
  deleteResource(resourceId, "entries", req, res);
});

// PUT: update entries
router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  const updatedentries = req.body;

  updateResource(resourceId, "entries", updatedentries, req, res);
});

// POST: create new entries
router.post("/", (req, res) => {
  console.log("new resource");
});

module.exports = router;
