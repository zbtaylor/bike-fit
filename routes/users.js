const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../data/models/user-model.js");
const tokenService = require("../middleware/token.js");

// Register
router.post("/register", (req, res) => {
  if (req.body.email && req.body.password) {
    Users.insert(req.body)
      .then(user => {
        res.status(200).json({ success: true });
      })
      .catch(err => {
        // handle error
      });
  } else {
    res.status(400).json({ message: "Invalid request body." });
  }
});

// Login
router.post("/login", (req, res) => {
  const credentials = req.body;
  if (credentials.email && credentials.password) {
    Users.getByEmail(credentials.email)
      .then(user => {
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          const token = tokenService.generateToken(user);
          res.status(200).json({ message: `Welcome, ${user.email}.`, token });
        } else {
          res.status(401).json({ message: "Invalid credentials." });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Something went wrong.", err });
      });
  } else {
    res.status(400).json({ message: "Invalid request body." });
  }
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
