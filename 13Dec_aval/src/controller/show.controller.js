const express = require('express');
const Show = require('../model/show.model');

const router = express.Router();

// user CRUD

router.post("", async (req, res)=>{

    try{

        const show = await Show.create(req.body);
        return res.status(201).send(show);
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

router.get("", async (req, res) => {
    try {
      const show = await Show.find().lean().exec();
  
      return res.send({ show });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/:id", async (req, res) => {
    try {
    
      const show = await Show.find({ "movie": req.params.id }).populate("movie").lean().exec();
  
      return res.status(200).json({show});
    } catch (e) {
      return res.status(500).json({ status: "Failed", message: e.message });
    }
  });

router.delete("/:id", async (req, res) => {
    try {
      const show = await Show.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(show);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

// user crud ended

module.exports = router;