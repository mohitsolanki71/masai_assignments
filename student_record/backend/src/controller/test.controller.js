const express = require("express");
const Test = require("../model/test.model");
const router = express.Router();

//-------Test CRUD------------------------

router.post("", async (req, res) => {
  try {
    let test = await Test.create(req.body);
    return res.send({ test });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    let test = await Test.find().lean().populate("student").exec();
    return res.send({ test });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let test = await Test.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send({ test });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

module.exports = router;
