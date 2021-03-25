const express = require("express");

const {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
} = require("../utils/dbHelper.js");

const router = express.Router();

// get all category
router.get("/", (req, res) => {
  getResource("category", req, res);
});

// get category by id
router.get("/:id", (req, res) => {
  const resourceId = req.params.id;
  getResourceById(resourceId, "category", req, res);
});

// DELETE: delete category
router.post("/:id", (req, res) => {
  const resourceId = req.params.id;
  deleteResource(resourceId, "category", req, res);
});

// PUT: update category
router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  const updatedCategory = req.body;

  updateResource(resourceId, "category", updatedCategory, req, res);
});

// POST: create new category
router.post("/", (req, res) => {
  console.log("new resource");
});

module.exports = router;
