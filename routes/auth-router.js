var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../data/models/user-model.js");
const tokenService = require("../middleware/token.js");

router.post("/register", (req, res, next) => {
  Users.insert(req.body)
    .then(user => {
      res.status(200).json({ success: true });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/login", (req, res) => {
  // should I be checking correct credentials here?
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
