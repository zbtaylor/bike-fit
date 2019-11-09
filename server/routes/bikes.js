var express = require("express");
var router = express.Router();
const bikes = [
  {
    id: 0,
    nickname: "Rocket",
    brand: "Specialized",
    model: "Allez Sprint",
    weight: "19",
    type: "Road",
    geometry: {
      reach: "395mm",
      stack: "554mm",
      wheelbase: "984mm"
    }
  },
  {
    id: 1,
    nickname: "Blackbird",
    brand: "Cannondale",
    model: "SuperSix Evo",
    weight: "17",
    type: "Road",
    geometry: {
      reach: "390mm",
      stack: "574mm",
      wheelbase: "992mm"
    }
  },
  {
    id: 2,
    nickname: "Abominable",
    brand: "Yeti",
    model: "SB150",
    weight: "22",
    type: "Mountain",
    geometry: {
      reach: "480.2mm",
      stack: "624.8mm",
      wheelbase: "1248mm"
    }
  }
];

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.status(200).json(bikes);
});

module.exports = router;
