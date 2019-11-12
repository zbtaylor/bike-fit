var express = require("express");
var router = express.Router();
const Users = require("../data/models/user-model.js");

// GET
router.get("/", (req, res) => {
  Users.get()
    .then(Users => {
      res.status(200).json(Users);
    })
    .catch(err => {
      // handle error
    });
});

// GET by id
router.get("/:id", (req, res) => {
  Users.getById(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      // handle error
    });
});

// POST
router.post("/", (req, res) => {
  Users.insert(req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      // handle error
    });
});

// PUT
router.put("/:id", (req, res) => {
  Users.update(req.params.id, req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      // handle error
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  Users.remove(req.params.id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(err => {
      // handle error
    });
});

module.exports = router;
