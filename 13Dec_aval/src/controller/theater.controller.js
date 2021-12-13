const express = require('express');
const Theater = require('../model/theater.model');

const router = express.Router();

// user CRUD

router.post("", async (req, res)=>{

    try{

        const theater = await Theater.create(req.body);
        return res.status(201).send(theater);
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

router.get("", async (req, res) => {
    try {
      const theater = await Theater.find().lean().exec();
  
      return res.send({ theater });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

// user crud ended

module.exports = router;