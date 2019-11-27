var express = require("express");
var router = express.Router();
const Changes = require("../data/models/change-model.js");

// POST
router.post("/", (req, res) => {
  Changes.insert(req.body)
    .then(change => {
      res.status(200).json(change);
    })
    .catch(err => {
      // handle error
    });
});

module.exports = router;
