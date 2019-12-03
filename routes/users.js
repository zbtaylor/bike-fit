const express = require("express");
const router = express.Router();
const Users = require("../data/models/user-model.js");

// Update User
router.put("/", (req, res, next) => {
  Users.update(req.decodedToken.subject, req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      next(err);
    });
});

// Delete User
router.delete("/:id", (req, res, next) => {
  Users.remove(req.params.id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
