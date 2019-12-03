const express = require("express");
const router = express.Router();

// Create User
router.post("/", (req, res) => {
  Users.insert(req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      // handle error
    });
});

// Update User
router.put("/:id", (req, res) => {
  Users.update(req.params.id, req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      // handle error
    });
});

// Delete User
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
