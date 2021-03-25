const express = require("express");

const {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
} = require("../utils/dbHelper.js");

const router = express.Router();

// get all family
router.get("/", (req, res) => {
  getResource("family", req, res);
});

// get family by id
router.get("/:id", (req, res) => {
  const resourceId = req.params.id;
  getResourceById(resourceId, "family", req, res);
});

// DELETE: delete family
router.post("/:id", (req, res) => {
  const resourceId = req.params.id;
  deleteResource(resourceId, "family", req, res);
});

// PUT: update family
router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  const updatedfamily = req.body;

  updateResource(resourceId, "family", updatedfamily, req, res);
});

// POST: create new family
router.post("/", (req, res) => {
  console.log("new resource");
});

module.exports = router;
