const express = require("express");

const {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
} = require("../utils/dbHelper.js");

const router = express.Router();

// get all grocery
router.get("/", (req, res) => {
  getResource("grocery", req, res);
});

// get grocery by id
router.get("/:id", (req, res) => {
  const resourceId = req.params.id;
  getResourceById(resourceId, "grocery", req, res);
});

// DELETE: delete grocery
router.post("/:id", (req, res) => {
  const resourceId = req.params.id;
  deleteResource(resourceId, "grocery", req, res);
});

// PUT: update grocery
router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  const updatedgrocery = req.body;

  updateResource(resourceId, "grocery", updatedgrocery, req, res);
});

// POST: create new grocery
router.post("/", (req, res) => {
  console.log("new resource");
});

module.exports = router;
