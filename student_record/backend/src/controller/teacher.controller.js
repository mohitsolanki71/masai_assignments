const express = require("express");

const Teacher = require("../model/teacher.model");

const router = express.Router();

// ---------TEACHER CRUD --------------------//

//.....Sign Up......

router.post("/", async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    return res.send({ teacher });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

// .... Login.....
router.post("/:email", async (req, res) => {
  try {
    let user = await Teacher.findOne({ email: req.params.email });
    // if user does not exist, then throw an error

    if (!user) {
      return res.status(400).json({
        status: "Failed",
        message: "Please provide correct email address and password.",
      });
    }

    // else we match the password

    const match = await user.checkPassword(req.body.password);
    // if it does not match then throw an error

    if (!match) {
      return res.status(400).json({
        status: "Failed",
        message: "Please provide correct email address and password.",
      });
    }

    return res.send({ user });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

module.exports = router;
