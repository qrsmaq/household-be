const express = require("express");

const {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
} = require("../utils/dbHelper.js");

const router = express.Router();

// get all items
router.get("/", (req, res) => {
  getResource("items", req, res);
});

// get items by id
router.get("/:id", (req, res) => {
  const resourceId = req.params.id;
  getResourceById(resourceId, "items", req, res);
});

// DELETE: delete items
router.post("/:id", (req, res) => {
  const resourceId = req.params.id;
  deleteResource(resourceId, "items", req, res);
});

// PUT: update items
router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  const updateditems = req.body;

  updateResource(resourceId, "items", updateditems, req, res);
});

// POST: create new items
router.post("/", (req, res) => {
  console.log("new resource");
});

module.exports = router;
