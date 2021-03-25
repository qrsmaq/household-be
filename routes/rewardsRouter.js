const express = require("express");

const {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
} = require("../utils/dbHelper.js");

const router = express.Router();

// get all rewards
router.get("/", (req, res) => {
  getResource("rewards", req, res);
});

// get rewards by id
router.get("/:id", (req, res) => {
  const resourceId = req.params.id;
  getResourceById(resourceId, "rewards", req, res);
});

// DELETE: delete rewards
router.post("/:id", (req, res) => {
  const resourceId = req.params.id;
  deleteResource(resourceId, "rewards", req, res);
});

// PUT: update rewards
router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  const updatedrewards = req.body;

  updateResource(resourceId, "rewards", updatedrewards, req, res);
});

// POST: create new rewards
router.post("/", (req, res) => {
  console.log("new resource");
});

module.exports = router;
