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
      .then((user) => {
        const newConfirmation = {
          user_id: user.id,
          hash: crypto.randomBytes(20).toString("hex"),
        };
        Confirmations.insert(newConfirmation).then((hash) => {
          sendMail(user.email, templates.confirmation(hash));
          res.status(200).json({
            message: `A confirmation email has been sent to ${user.email}`,
          });
        });
      })
      .catch((err) => {
        console.log(err);
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
      .then((user) => {
        if (
          user.active &&
          bcrypt.compareSync(credentials.password, user.password)
        ) {
          const token = generateToken(user);
          res.status(200).json({ message: `Welcome, ${user.email}`, token });
        } else if (user.active === false) {
          res.status(400).json({
            message: "Please confirm your email address before logging in.",
          });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({ message: "That user does not exist" });
        // next(err);
      });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

router.post("/confirm", (req, res, next) => {
  const hash = req.body.hash;
  Confirmations.getByHash(hash)
    .then((confirmation) => {
      const user_id = confirmation.user_id;
      Users.getById(user_id).then((user) => {
        if (user.active === false) {
          Users.update(user.id, { active: true }).then((updated) => {
            Confirmations.remove(user.id).then((removed) => {
              res.status(200).json({ message: "User confirmed successfully." });
            });
          });
        } else {
          res.status(200).json({ message: "User has already been confirmed." });
        }
      });
    })
    .catch((err) => {
      res.status(404).json({ message: "That link is invalid." });
      // next(err);
    });
});

router.post("/forgot", (req, res, next) => {
  const email = req.body.email;
  Users.getByEmail(email)
    .then((user) => {
      const newConfirmation = {
        user_id: user.id,
        hash: crypto.randomBytes(20).toString("hex"),
      };
      Confirmations.insert(newConfirmation)
        .then((hash) => {
          sendMail(user.email, templates.reset(hash));
        })
        .then(() => {
          res.status(200).json({
            message: `A password reset link has been sent to ${user.email}`,
          });
        });
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "A User with that email address does not exist." });
    });
});

router.post("/reset", (req, res, next) => {
  const hash = req.body.hash;
  Confirmations.getByHash(hash)
    .then((confirmation) => {
      const user_id = confirmation.user_id;
      const newPassword = bcrypt.hashSync(req.body.password, 14);
      Users.update(user_id, { password: newPassword })
        .then(() => {
          Confirmations.remove(user_id).then(() => {
            res.status(200).json({ message: "Your password has been reset." });
          });
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      res.status(404).json({ message: "That link is invalid." });
    });
});

module.exports = router;
