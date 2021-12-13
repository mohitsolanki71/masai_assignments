const express = require('express');
const Seat = require('../model/seat.model');

const router = express.Router();

// user CRUD

router.post("", async (req, res)=>{

    try{

        const seat = await Seat.create(req.body);
        return res.status(201).send(seat);
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

router.get("", async (req, res) => {
    try {
      const seat = await Seat.find().lean().exec();
  
      return res.send({ seat });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/:id", async (req, res) => {
    try {
    
      const seat = await Seat.find({ "show": req.params.id }).populate("show").lean().exec();
  
      return res.status(200).json({seat });
    } catch (e) {
      return res.status(500).json({ status: "Failed", message: e.message });
    }
  });


router.patch("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

router.delete("/:id", async (req, res) => {
    try {
      const seat = await Seat.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(seat);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

// user crud ended

module.exports = router;