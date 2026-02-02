import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  feedback: { type: String, required: true }
});

const failureScenarioSchema = new mongoose.Schema(
  {
    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true
    },

    domain: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    situation: {
      type: String,
      required: true
    },

    options: {
      type: [optionSchema],
      validate: v => v.length >= 2
    },

    learning: {
      type: [String],
      default: []
    },

    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model(
  "FailureScenario",
  failureScenarioSchema
);
