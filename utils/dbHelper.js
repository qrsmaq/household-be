const db = require("../config/dbConfig.js");
//
// REUSABLE FUNCTIONS
//

// GET:
// retrieve all data from a table
const getResource = (db_tableName, req, res) => {
  db.select("*")
    .from(db_tableName)
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(400)
        .json({ msg: `Something went wrong. ${route} not found.` });
    });
};

// GET: by ID
// retrieve data based on an id
const getResourceById = (resourceId, db_tableName, req, res) => {
  db.select("*")
    .from(db_tableName)
    .where("id", "=", resourceId)
    .then((resource) => {
      console.log(resource);
      res.status(200).json(resource);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(400)
        .json({ msg: `Something went wrong. ${resource} not found.` });
    });
};

// POST: deletes resource by id
const deleteResource = (resourceId, db_tableName, req, res) => {
  db(db_tableName)
    .where("id", "=", resourceId)
    .del()
    .then(() => {
      return res
        .status(201)
        .json({ msg: `${db_tableName} ${resourceId} deleted` });
    })
    .catch((err) => {
      res
        .status(404)
        .json({ msg: "Something went wrong. Member not deleted.", err });
    });
};

// PUT: updates resource by id
const updateResource = (resourceId, db_tableName, updatedMember, req, res) => {
  db(db_tableName)
    .where("id", "=", resourceId)
    .update(updatedMember)
    .then(() => {
      console.log(`${db_tableName} Updated`);
      return res
        .status(201)
        .json({ msg: `${db_tableName} ${resourceId} Updated` });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(404)
        .json({ msg: `Something went wrong. ${db_tableName} not updated.` });
    });
};

module.exports = {
  getResource,
  getResourceById,
  deleteResource,
  updateResource,
};
