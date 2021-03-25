const express = require("express");

const {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
} = require("../utils/dbHelper.js");

const router = express.Router();

// get all homework
router.get("/", (req, res) => {
  getResource("homework", req, res);
});

// get homework by id
router.get("/:id", (req, res) => {
  const resourceId = req.params.id;
  getResourceById(resourceId, "homework", req, res);
});

// DELETE: delete homework
router.post("/:id", (req, res) => {
  const resourceId = req.params.id;
  deleteResource(resourceId, "homework", req, res);
});

// PUT: update homework
router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  const updatedhomework = req.body;

  updateResource(resourceId, "homework", updatedhomework, req, res);
});

// POST: create new homework
router.post("/", (req, res) => {
  console.log("new resource");
});

module.exports = router;
