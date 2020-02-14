var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../models/user-model.js");
const { generateToken } = require("../middleware/token.js");
const sendMail = require("../helpers/sendMail.js");
const templates = require("../helpers/emailTemplates.js");

router.post("/register", async (req, res, next) => {
  const newUser = req.body;
  if (newUser.email && newUser.password) {
    const hash = bcrypt.hashSync(newUser.password, 14);
    newUser.password = hash;
    Users.insert(req.body)
      .then(user => {
        const content = {
          subject: "New User", // Subject line
          text: `${user.email} signed up`, // plain text body
          html: `${user.email} signed up` // html body
        };
        sendMail("zbtaylor1@gmail.com", templates.confirmation(user.id));
      })
      .then(() => {
        res.status(200).json({ message: "Registration successful" });
      })
      .catch(err => {
        res
          .status(401)
          .json({ message: `${req.body.email} has already been registered.` });
        // next(err);
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

router.get("/confirm/:id", (req, res, next) => {
  const id = req.params.id;
});

module.exports = router;
