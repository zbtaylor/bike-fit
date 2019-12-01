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
      res
        .status(500)
        .json({ message: "Could not add new change.", error: err });
    });
});

// PUT
router.put("/:id", (req, res) => {
  Changes.update(req.params.id, req.body)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not update change.", error: err });
    });
});

router.delete("/:id", (req, res) => {
  Changes.remove(req.params.id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not remove change.", error: err });
    });
});

module.exports = router;
