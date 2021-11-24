
const express = require ("express");
const mongoose = require("mongoose");

const connect = ()=>{

    return mongoose.connect("mongodb://127.0.0.1:27017/entertainment");
}

const userSchema = new mongoose.Schema({

    movie_name: {type:String, required:true, unique:true},
    movie_gener: {type:String, required:true},
    production_year: {type:Number, required: true},
    budget: {type:Number, required:false, default: 10000},

},{
    versionKey: false,
});

const Movie = mongoose.model("movie", userSchema);

const app = express();

app.use(express.json());

app.post("/movies", async (req, res)=>{


    try{
        const movie = await Movie.create(req.body);

        res.status(201).send({movie});
    } catch(e){
        res.status(500).json({ message: e.message, status: "Failed" });

    }
    
});

app.get("/movies", async (req, res) => {
    try {
      const movies = await Movie.find().lean().exec();
  
      res.send({ movies });

    } catch (e) {
      res.status(500).json({ message: e.message, status: "Failed" });
    }
  });


app.get("/movies/:id", async (req, res)=>{

    try{
        const movie = await Movie.findById(req.params.id).lean().exec();
        res.send({movie});

    }catch(e){
        res.status(500).json({ message: e.message, status: "Failed" });
    }
    
});

app.patch("/movies/:id", async (req, res)=>{

    try{
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.status(201).send(movie);
    }catch(e){

        res.status(500).json({ message: e.message, status: "Failed" });
    }
});

app.delete("/movies/:id", async(req, res)=>{

    
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).send(movie);
    }catch(e){
        
        res.status(500).json({ message: e.message, status: "Failed" });
    }
})


app.listen(2233, async function(){

    await connect();
    console.log("listening on 2233");
})