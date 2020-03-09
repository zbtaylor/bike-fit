var express = require("express");
var router = express.Router();
const History = require("../models/history-model.js");

router.get("/:id", (req, res, next) => {
  History.getByBikeId(req.params.id, req.decodedToken.subject).then(history => {
    res.status(200).json(history);
  });
});

router.post("/", (req, res, next) => {
  History.insert(req.body, req.decodedToken.subject)
    .then(inserted => {
      res.status(200).json(inserted);
    })
    .catch(err => {
      next(err);
    });
});

router.put("/:id", (req, res, next) => {
  History.update(req.params.id, req.decodedToken.subject, req.body)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(err => {
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  History.remove(req.params.id, req.decodedToken.subject)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
