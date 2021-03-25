const express = require("express");

const {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
} = require("../utils/dbHelper.js");

const router = express.Router();

// get all course
router.get("/", (req, res) => {
  getResource("course", req, res);
});

// get course by id
router.get("/:id", (req, res) => {
  const resourceId = req.params.id;
  getResourceById(resourceId, "course", req, res);
});

// DELETE: delete course
router.post("/:id", (req, res) => {
  const resourceId = req.params.id;
  deleteResource(resourceId, "course", req, res);
});

// PUT: update course
router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  const updatedcourse = req.body;

  updateResource(resourceId, "course", updatedcourse, req, res);
});

// POST: create new course
router.post("/", (req, res) => {
  console.log("new resource");
});

module.exports = router;
