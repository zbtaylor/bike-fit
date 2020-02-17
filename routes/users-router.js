const express = require("express");
const router = express.Router();
const Users = require("../models/user-model.js");

router.put("/", (req, res, next) => {
  Users.update(req.decodedToken.subject, req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      next(err);
    });
});

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
