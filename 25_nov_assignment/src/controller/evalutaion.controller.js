const express = require('express');
const Evaluation = require("../models/evaluation.model");

const router = express.Router();

// evalutaion CRUD started

router.post("/evaluation", async (req, res)=>{

    try{

        const evaluation = await Evaluation.create(req.body);
        return res.status(201).send(evaluation);
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

router.get("/evaluation", async (req, res) => {
    try {
      const evaluation = await Evaluation.find().lean().exec();
  
      return res.send({ evaluation });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});
  

router.get("/evaluation/:id", async (req, res)=>{

    try{

        const evaluation = await Evaluation.findById(req.params.id).lean().exec();

        return res.send(evaluation);
    }catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

router.patch("/evaluation/:id", async (req, res) => {
    try {
      const evaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(201).send(evaluation);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/evaluation/:id", async (req, res) => {
    try {
      const evaluation = await Evaluation.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(evaluation);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
// Evaluation CRUD ended

module.exports = router;