const express = require("express");
const Student = require("../model/student.mode");

const router = express.Router();

// ---------Student CRUD---------

router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    return res.send({ student });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 3;
    const skip = (page - 1) * size;
    const student = await Student.find()
      .populate("tests")
      .skip(skip)
      .limit(size)
      .lean()
      .exec();

    const totalPage = Math.ceil((await Student.find().countDocuments()) / size);
    return res.send({ student, totalPage });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate("tests")
      .lean()
      .exec();

    return res.send({ student });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.send({ student });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

module.exports = router;
