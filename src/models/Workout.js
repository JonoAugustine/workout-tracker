const { Schema, model } = require("mongoose");
const Exercise = require("./Exercise");

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: [Exercise.schema],
    default: []
  }
});

const WoModel = model("Workout", WorkoutSchema);

module.exports = { model: WoModel, schema: WorkoutSchema };
