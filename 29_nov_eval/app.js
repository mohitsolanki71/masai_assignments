
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

// company Schemma

const companySchema = new mongoose.Schema({
    
    company: {type:String, required:true},
    detail: {type:String, required:true},
    job_opening: {type:String, required:true},
},{
    versionKey:false,
    timeStamps:true,
});

const Company = mongoose.model("company", companySchema);

// company schemma ended
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

app.get("/work_from_home/:work_from_home", async(req, res) => {

    try{
        const job = await Jobs.find({work_from_home:req.params.work_from_home}).lean().exec();

        return res.send(job);

    } catch(e){
        return res.status(500).json({message: e.message, status:"Failed"});
    }
});

app.get("/notice_period/:notice_period", async(req, res) => {

    try{
        const job = await Jobs.find({notice_period:req.params.notice_period}).lean().exec();

        return res.send(job);

        // one is for yes 2 months and 0 is for not 2 month

    } catch(e){
        return res.status(500).json({message: e.message, status:"Failed"});
    }
});

app.get("/ByRating", async(req, res)=>{

    try{

        const job = await Jobs.find().sort({"rating":-1}).lean().exec();

        console.log("hello");
        return res.status(201).send({job});

    } catch(e){

        return res.status(500).json({message: e.message, status:"Failed"});
    }
});
// detail CRUD ended

// company CRUD 

app.post("/company", async(req, res)=>{

    try{

        const company = await Company.create(req.body);
        return res.status(201).send(company);

    }catch(e){

        return res.status(500).json({message: e.message, status:"Failed"});
    }
});

app.get("/company", async (req, res) => {

    try{

        const company = await Company.find().lean().exec();

        return res.send(company);
    } catch(e){

        return res.status(500).json({message: e.message, status:"Failed"});
    }
});

app.get("/company/:company", async(req, res) => {

    try{
        const company = await Company.findOne({company:req.params.company}).lean().exec();

        return res.send(company);

    } catch(e){
        return res.status(500).json({message: e.message, status:"Failed"});
    }
});

app.get("/max_opening", async (req, res) => {

    try{
        const company = await Company.findOne().sort({"job_opening":-1}).lean().exec();
        return res.send({company});
    }catch(e){

        return res.status(500).json({message: e.message, status:"Failed"});
    }
});

app.delete("/company/:id", async(req, res)=>{

    try{
        const company = await Company.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).send({company});
    } catch(e){

        return res.status(500).json({message: e.message, status:"Failed"});
    }
});



app.listen(2457, async function(){

    await connect();
    console.log("listening on Port 2457");
});
