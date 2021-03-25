const express = require("express");
const cors = require("cors");

const server = express();

const membersRouter = require("../routes/membersRouter.js");
const calendarRouter = require("../routes/calendarRouter.js");
const categoryRouter = require("../routes/categoryRouter.js");
const courseRouter = require("../routes/courseRouter.js");
const entriesRouter = require("../routes/entriesRouter.js");
const familyRouter = require("../routes/familyRouter.js");
const groceryRouter = require("../routes/groceryRouter.js");
const homeworkRouter = require("../routes/homeworkRouter.js");
const itemsRouter = require("../routes/itemsRouter.js");
const rewardsRouter = require("../routes/rewardsRouter.js");
const tasksRouter = require("../routes/tasksRouter.js");

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());

server.use("/api/members", membersRouter);
server.use("/api/calendar", calendarRouter);
server.use("/api/category", categoryRouter);
server.use("/api/course", courseRouter);
server.use("/api/entries", entriesRouter);
server.use("/api/family", familyRouter);
server.use("/api/grocery", groceryRouter);
server.use("/api/homework", homeworkRouter);
server.use("/api/items", itemsRouter);
server.use("/api/rewards", rewardsRouter);
server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => res.send("Home"));

module.exports = server;
