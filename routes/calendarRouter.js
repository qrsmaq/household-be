const express = require("express");

const {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
} = require("../utils/dbHelper.js");

const router = express.Router();

// get all calendar
router.get("/", (req, res) => {
  getResource("calendar", req, res);
});

// get calendar by id
router.get("/:id", (req, res) => {
  const resourceId = req.params.id;
  getResourceById(resourceId, "calendar", req, res);
});

// DELETE: delete calendar
router.post("/:id", (req, res) => {
  const resourceId = req.params.id;
  deleteResource(resourceId, "calendar", req, res);
});

// PUT: update calendar
router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  const updatedCalendar = req.body;

  updateResource(resourceId, "calendar", updatedCalendar, req, res);
});

// POST: create new calendar
router.post("/", (req, res) => {
  console.log("new resource");
});

module.exports = router;
