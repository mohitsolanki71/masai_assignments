const express = require('express');
const Screen = require('../model/screen.model');

const router = express.Router();

// user CRUD

router.post("", async (req, res)=>{

    try{

        const screen = await Screen.create(req.body);
        return res.status(201).send(screen);
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

router.get("", async (req, res) => {
    try {
      const screen = await Screen.find().lean().exec();
  
      return res.send({ screen });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
      const screen = await Screen.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(screen);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

// user crud ended

module.exports = router;