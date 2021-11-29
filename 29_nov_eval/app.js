
const express = require("express");
const mongoose = require("mongoose");

const connect = () =>{

    return mongoose.connect("mongodb://127.0.0.1:27017/findJob");
};

// detail schemma

const jobSchema = new mongoose.Schema({
    
    job: {type:String, required:true},
    city: {type:String, required:true},
    company: {type:String, required:true},
    rating: {type:Number, required:true},
    work_from_home: {type:Number, required:true},
    notice_period: {type:Number, required:true},
},{
    versionKey:false,
    timeStamps:true,
});

const Jobs = mongoose.model("job", jobSchema);

// detail schemma ended

const app = express();
app.use(express.json());

// detail CRUD methods

app.post("/jobs", async (req, res) => {

    try{
        const job = await Jobs.create(req.body);

        return res.status(201).send(job);

    }catch(e){
        return res.status(500).json({message: e.message, status:"Failed"});
    }
});

app.get("/jobs", async(req, res) => {

    try{
        const job = await Jobs.find().lean().exec();

        return res.send({job});

    } catch(e){

        return res.status(500).json({message: e.message, status:"Failed"});
    }
});

app.get("/jobs/:city", async(req, res) => {

    try{
        const job = await Jobs.find({city:req.params.city}).lean().exec();

        return res.send(job);

    } catch(e){
        return res.status(500).json({message: e.message, status:"Failed"});
    }
});

app.get("/jobs/:work_from_home", async(req, res) => {

    try{
        const job = await Jobs.find({work_from_home:+(req.params.work_from_home)}).lean().exec();

        return res.send(job);

    } catch(e){
        return res.status(500).json({message: e.message, status:"Failed"});
    }
});


// detail CRUD ended



app.listen(2457, async function(){

    await connect();
    console.log("listening on Port 2457");
});
