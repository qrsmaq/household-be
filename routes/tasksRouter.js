const express = require("express");

const {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
} = require("../utils/dbHelper.js");

const router = express.Router();

// get all tasks
router.get("/", (req, res) => {
  getResource("tasks", req, res);
});

// get tasks by id
router.get("/:id", (req, res) => {
  const resourceId = req.params.id;
  getResourceById(resourceId, "tasks", req, res);
});

// DELETE: delete tasks
router.post("/:id", (req, res) => {
  const resourceId = req.params.id;
  deleteResource(resourceId, "tasks", req, res);
});

// PUT: update tasks
router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  const updatedtasks = req.body;

  updateResource(resourceId, "tasks", updatedtasks, req, res);
});

// POST: create new tasks
router.post("/", (req, res) => {
  console.log("new resource");
});

module.exports = router;
