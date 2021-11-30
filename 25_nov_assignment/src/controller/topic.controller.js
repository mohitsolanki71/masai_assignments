const express = require('express');
const Topic =require("../models/topic.model");

const router = express.Router();

// topic CRUD started

router.post("/topics", async (req, res)=>{

    try{

        const topics = await Topic.create(req.body);
        return res.status(201).send(topics);
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

router.get("/topics", async (req, res) => {
    try {
      const topics = await Topic.find().lean().exec();
  
      return res.send({ topics });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});
  

router.get("/topics/:id", async (req, res)=>{

    try{

        const topics = await Topic.findById(req.params.id).lean().exec();

        return res.send(topics);
    }catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

router.patch("/topics/:id", async (req, res) => {
    try {
      const topics = await Topic.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(201).send(topics);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/topics/:id", async (req, res) => {
    try {
      const topics = await Topic.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(topics);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  module.exports = router;