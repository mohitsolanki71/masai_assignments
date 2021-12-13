const express = require("express");

const Movie = require("../model/movies.model");

const upload = require("../middleware/upload");

const authenticate = require("../middleware/authenticate")

const router = express.Router();

router.post("/",authenticate , upload.single("poster_url") ,async (req, res) => {
   try {
     const user = req.user;

     const movie = await Movie.create({
      name: req.body.name,
      actors: req.body.actors,
      languages: req.body.languages,
      directors: req.body.directors,
      poster_url: req.file.path,
      user: user.user._id,
    });

    return res.status(201).json({movie});
  } catch (e) {
    return res.status(500).json({ status: "Its failed", message: e.message });
  }
});

router.get("/:name", async (req, res) => {
    try {
       const movie = await Movie.find({"actors": req.params.name}).lean().exec();
   
       return res.status(200).json({movie});
    }catch (e) {
       return res.status(500).json({ status: "Failed", message: e.message });
     }
});

module.exports = router;