var express = require("express");
var router = express.Router();
const Bikes = require("../data/models/bike-model.js");

// GET
router.get("/", (req, res) => {
  Bikes.get()
    .then(bikes => {
      res.status(200).json(bikes);
    })
    .catch(err => {
      // handle error
    });
});

// GET by id
router.get("/:id", (req, res) => {
  Bikes.getById(req.params.id)
    .then(bike => {
      // console.log(bike);
      res.status(200).json(bike);
    })
    .catch(err => {
      // handle error
    });
});

// POST
router.post("/", (req, res) => {
  Bikes.insert(req.body)
    .then(bike => {
      res.status(200).json(bike);
    })
    .catch(err => {
      // handle error
    });
});

// PUT
router.put("/:id", (req, res) => {
  Bikes.update(req.params.id, req.body)
    .then(bike => {
      res.status(200).json(bike);
    })
    .catch(err => {
      // handle error
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  Bikes.remove(req.params.id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(err => {
      // handle error
    });
});

module.exports = router;
