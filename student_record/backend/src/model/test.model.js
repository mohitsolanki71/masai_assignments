const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subject: { type: String, required: true },
    marks: { type: Number, required: true },
    date: { type: String, required: true },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("test", TestSchema);
