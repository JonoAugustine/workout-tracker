const router = require("express").Router();
const { Workout } = require("../models");

router
  .get(async (req, res) => {
    // TODO get last workout
    let allWos;
    try {
      allWos = await Workout.find();
    } catch (error) {
      return res.status(500).end();
    }

    res.json(allWos.map(d => d.get()));
  })
  .put(async (req, res) => {
    // TODO add exercise
  })
  .post(async (req, res) => {
    // TODO create workout
  });

router.route("/range").get(async (req, res) => {
  // TODO get workouts in range
});

module.exports = router;
