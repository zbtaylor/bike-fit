var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../data/models/user-model.js");

// GET
// router.get("/", (req, res) => {
//   Users.get()
//     .then(Users => {
//       res.status(200).json(Users);
//     })
//     .catch(err => {
//       // handle error
//     });
// });

// // GET by id
// router.get("/:id", (req, res) => {
//   Users.getById(req.params.id)
//     .then(user => {
//       res.status(200).json(user);
//     })
//     .catch(err => {
//       // handle error
//     });
// });

// POST register
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

// POST login
router.post("/login", (req, res) => {
  const credentials = req.body;
  if (credentials.email && credentials.password) {
    Users.getByEmail(credentials.email)
      .then(user => {
        if (
          user !== undefined &&
          bcrypt.compareSync(credentials.password, user.password)
        ) {
          res.status(200).json({ success: true });
        } else {
          res.status(400).json({ message: "Invalid credentials." });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Something went wrong.", err });
      });
  } else {
    res.status(400).json({ message: "Invalid request body." });
  }
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
