const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    grade: { type: Number, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    image: { type: String },
    tests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "test",
        required: false,
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("student", StudentSchema);
