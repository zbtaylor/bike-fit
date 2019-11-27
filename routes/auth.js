var express = require("express");
var router = express.Router();
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

module.exports = router;
