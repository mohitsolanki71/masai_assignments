const express = require('express');
const Student = require("../models/student.model");

const router = express.Router();


// Student CRUD start

router.post("/students", async (req, res)=>{

    try{

        const students = await Student.create(req.body);
        return res.status(201).send(students);
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

router.get("/students", async (req, res) => {
    try {
      const students = await Student.find().lean().exec();
  
      return res.send({ students });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});
  

router.get("/students/:id", async (req, res)=>{

    try{

        const students = await Student.findById(req.params.id).lean().exec();

        return res.send(students);
    }catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

router.patch("/students/:id", async (req, res) => {
    try {
      const students = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      return res.status(201).send(students);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/students/:id", async (req, res) => {
    try {
      const students = await Student.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(students);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
// Student crud ended

// solutions 

// studet who gave a perticular evaluation
router.get("/Eval/:id", async (req, res) => {

    try{

        const student = await Student.find({evaluation:req.params.id}).lean().exec();

        return res.send(student);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
})

// student who scored heighest in a evaluation

router.get("/high/:id", async (req, res) => {
    try {
      const topper = await Student.find({evaluation:req.params.id}).sort({"marks":-1}).limit(1).lean().exec();
  
      return res.send({ topper });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

module.exports = router;