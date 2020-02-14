var express = require("express");
var router = express.Router();
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const Users = require("../models/user-model.js");
const Confirmations = require("../models/confirmation-model.js");
const { generateToken } = require("../middleware/token.js");
const sendMail = require("../helpers/sendMail.js");
const templates = require("../helpers/emailTemplates.js");

router.post("/register", async (req, res, next) => {
  const newUser = req.body;
  if (newUser.email && newUser.password) {
    newUser.password = bcrypt.hashSync(newUser.password, 14);
    Users.insert(newUser)
      .then(user => {
        console.log("user created");
        const newConfirmation = {
          user_id: user.id,
          hash: crypto.randomBytes(20).toString("hex")
        };
        console.log(newConfirmation.hash);
        Confirmations.insert(newConfirmation).then(hash => {
          sendMail("zbtaylor1@gmail.com", templates.confirmation(hash));
        });
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

router.post("/confirm", (req, res, next) => {
  console.log();
  const hash = req.body.hash;
  Confirmations.getByHash(hash)
    .then(confirmation => {
      const user_id = confirmation.user_id;
      Users.getById(user_id).then(user => {
        if (user.active === false) {
          Users.update(user.id, { active: false });
          res.status(200).json({ message: "User confirmed successfully." });
        } else {
          res.status(200).json({ message: "User has already been confirmed." });
        }
      });
    })
    .catch(err => {
      res.status(404).json({ message: "That user does not exist." });
      // next(err);
    });
});

module.exports = router;
