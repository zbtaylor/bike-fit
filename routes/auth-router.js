var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../models/user-model.js");
const { generateToken } = require("../middleware/token.js");
const nodemailer = require("nodemailer");

const sendMail = async user => {
  let transporter = nodemailer.createTransport({
    service: '"SendinBlue"', // no need to set host or port etc.
    auth: {
      user: "zbtaylor1@gmail.com",
      pass: "6JvFMzO0KS2TxgR5"
    }
  });

  let info = await transporter.sendMail({
    from: '"My Bike Fit Journal" <no-reply@mybikefitjournal.com>', // sender address
    to: "zbtaylor1@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: `${user} signed up`, // plain text body
    html: `${user} signed up` // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

router.post("/register", async (req, res, next) => {
  const newUser = req.body;
  if (newUser.email && newUser.password) {
    const hash = bcrypt.hashSync(newUser.password, 14);
    newUser.password = hash;
    Users.insert(req.body)
      .then(user => {
        sendMail(user.email);
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

module.exports = router;
