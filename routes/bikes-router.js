var express = require("express");
var router = express.Router();
const Bikes = require("../data/models/bike-model.js");

router.get("/", (req, res, next) => {
  Bikes.get(req.decodedToken.subject)
    .then(bikes => {
      res.status(200).json(bikes);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/:id", (req, res, next) => {
  Bikes.getById(req.params.id, req.decodedToken.subject)
    .then(bike => {
      res.status(200).json(bike);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  Bikes.insert(req.body, req.decodedToken.subject)
    .then(bike => {
      res.status(200).json(bike);
    })
    .catch(err => {
      next(err);
    });
});

router.put("/:id", (req, res, next) => {
  Bikes.update(req.params.id, req.decodedToken.subject, req.body)
    .then(rows_updated => {
      res.status(200).json(rows_updated);
    })
    .catch(err => {
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  Bikes.remove(req.params.id, req.decodedToken.subject)
    .then(rows_removed => {
      res.status(200).json(rows_removed);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
