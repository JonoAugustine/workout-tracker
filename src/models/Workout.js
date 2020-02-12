const { Schema, model } = require("mongoose");

const WorkoutSchema = new Schema({});

const WoModel = model("Workout", WorkoutSchema);

module.exports = WoModel;
