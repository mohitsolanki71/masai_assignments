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

// for sorting
router.get("/sort/:value", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 3;
    const skip = (page - 1) * size;
    const totalPage = Math.ceil((await Student.find().countDocuments()) / size);

    if (req.params.value === "lowToHigh") {
      let student = await Student.find()
        .sort({ age: 1 })
        .skip(skip)
        .limit(size)
        .populate("tests")
        .lean()
        .exec();

      return res.send({ student, totalPage });
    } else if (req.params.value === "highToLow") {
      let student = await Student.find()
        .sort({ age: -1 })
        .skip(skip)
        .limit(size)
        .populate("tests")
        .lean()
        .exec();

      return res.send({ student, totalPage });
    }
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

// for filtering
router.get("/filter/:gender", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 3;
    const skip = (page - 1) * size;
    const student = await Student.find({ gender: req.params.gender })

      .skip(skip)
      .limit(size)
      .populate("tests")
      .lean()
      .exec();

    const totalPage = Math.ceil(
      (await Student.find({ gender: req.params.gender }).countDocuments()) /
        size
    );
    return res.send({ student, totalPage });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

// ---------single api for sorting and filtering-------------

router.get("/:filter/:sort", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 3;
    const skip = (page - 1) * size;
    const filter = req.params.filter;
    const sort = req.params.sort;

    if (filter == 0 && sort == 0) {
      let student = await Student.find()
        .populate("tests")
        .skip(skip)
        .limit(size)
        .lean()
        .exec();

      let totalPage = Math.ceil((await Student.find().countDocuments()) / size);

      return res.status(201).send({ student, totalPage });
    } else if (filter != 0 && sort == 0) {
      let student = await Student.find({ gender: filter })
        .skip(skip)
        .limit(size)
        .populate("tests")
        .lean()
        .exec();

      let totalPage = Math.ceil(
        (await Student.find({ gender: filter }).countDocuments()) / size
      );

      return res.status(201).send({ student, totalPage });
    } else if (filter == 0 && sort != 0) {
      let student = await Student.find()
        .sort({ age: +sort })
        .skip(skip)
        .limit(size)
        .populate("tests")
        .lean()
        .exec();

      let totalPage = Math.ceil(
        (await Student.find({ gender: filter }).countDocuments()) / size
      );

      return res.status(201).send({ student, totalPage });
    } else if (filter != 0 && sort != 0) {
      let student = await Student.find({ gender: filter })
        .sort({ age: +sort })
        .skip(skip)
        .limit(size)
        .populate("tests")
        .lean()
        .exec();

      let totalPage = Math.ceil(
        (await Student.find({ gender: filter }).countDocuments()) / size
      );

      return res.status(201).send({ student, totalPage });
    }
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
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
