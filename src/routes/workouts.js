const router = require("express").Router();
const { Workout } = require("../models");

router
  // get all workouts
  .get(async (_, res) => {
    let allWos;
    try {
      allWos = await Workout.model
        .find()
        .sort("date")
        .exec();
    } catch (error) {
      return res.status(500).end();
    }

    res.json(allWos.map(d => d.get()));
  })
  // Create workout
  .post(async (req, res) => {
    let wo;
    try {
      wo = await Workout.model.create({ exercises: req.body.exercises || [] });
    } catch (error) {
      return res.status(500).end();
    }

    return res.status(201).json(wo);
  })
  .put("/:workoutID", async (req, res) => {
    const { workoutID } = req.params;

    let workout;
    try {
      workout = await Workout.model.findById(workoutID);
    } catch (error) {
      return res.status(500).json(error);
    }

    if (!workout) {
      return res.status(404).end();
    }

    try {
      await workout.update(req.body);
    } catch (error) {
      return res.status(500).end();
    }

    res.json(workout);
  })
  .get("/range", async (req, res) => {
    // get workouts in range ?? What that mean tho
    let allWos;
    try {
      allWos = await Workout.model.find();
    } catch (error) {
      return res.status(500).end();
    }

    res.json(allWos);
  });

module.exports = router;
