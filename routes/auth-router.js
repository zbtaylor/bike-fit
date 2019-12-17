var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../models/user-model.js");
const { generateToken } = require("../middleware/token.js");

router.post("/register", (req, res, next) => {
  const newUser = req.body;
  if (newUser.email && newUser.password) {
    const hash = bcrypt.hashSync(newUser.password, 14);
    newUser.password = hash;
    Users.insert(req.body)
      .then(user => {
        res.status(200).json({ message: "Registration successful" });
      })
      .catch(err => {
        next(err);
      });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

router.post("/login", (req, res, next) => {
  const credentials = req.body;
  if (credentials.email && credentials.password) {
    Users.getByEmail(credentials.email)
      .then(user => {
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({ message: `Welcome, ${user.email}`, token });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch(err => {
        next(err);
      });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
