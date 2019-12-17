var express = require("express");
var router = express.Router();
const Changes = require("../data/models/change-model.js");

router.post("/", (req, res, next) => {
  Changes.insert(req.body, req.decodedToken.subject)
    .then(change => {
      res.status(200).json(change);
    })
    .catch(err => {
      next(err);
    });
});

router.put("/:id", (req, res, next) => {
  Changes.update(req.params.id, req.decodedToken.subject, req.body)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(err => {
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  Changes.remove(req.params.id, req.decodedToken.subject)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
