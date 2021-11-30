const express = require("express");
const mongoose = require("mongoose");

const connect = ()=>{

    return mongoose.connect("mongodb://127.0.0.1:27017/library");
}

// user mongoose

const userSchema = new mongoose.Schema({

    first_name:{type:String, requried:true},
    last_name:{type:String, required:false},
    email:{type:String, required:true, unique:true},
    gender: {type:String, required:false, default:"Male"},
    age: {type:String, required:true}
}, {
    versionKey:false,
});

const User = mongoose.model("user", userSchema);

//user mongoose end

// section mongoose

const sectionSchema = new mongoose.Schema({

    section:{type:String, required:true},
},{

    versionKey:false,
    timestamps:false,
});

const Section = mongoose.model("section", sectionSchema);

//section mongoose ended

//books mongoose

const booksSchema = new mongoose.Schema({

    title: {type:String, required:true},
    body: {type:String, required:true},
    section: {type:mongoose.Schema.Types.ObjectId, ref:"section", required:false},
    author: [{type:mongoose.Schema.Types.ObjectId, 
    ref:"authors", 
    required:false}],
    checkedOut: {type:mongoose.Schema.Types.ObjectId, ref:"checkedOut", required:false}
},{
    versionKey:false,
    timestamps:false,
})

const Books = mongoose.model("books", booksSchema);

//books mongoose ended

// author mongoose

const authorSchema = new mongoose.Schema({

    first_name : {type:String, required:true},
    last_name: {type:String, required:true},
},{
    versionKey:false,
    timestamps: false,
});

const Authors = mongoose.model("authors", authorSchema);

// author mongoose ended

// checked out mongoose

const checkedOutSchema = new mongoose.Schema({

    book_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "books",
        required: true
    },

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        requried:true
    }
},{
    versionKey:false,
    timestamps:true
});

const CheckedOut = mongoose.model("checkedOut", checkedOutSchema);

// checked out mongoose ended

const app = express();
app.use(express.json());

// users crud

app.post("/users", async (req, res)=>{

    try{

        const user = await User.create(req.body);
        return res.status(201).send(user);
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

app.get("/users", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
  
      return res.send({ users });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});
  

app.get("/users/:id", async (req, res)=>{

    try{

        const user = await User.findById(req.params.id).lean().exec();

        return res.send(user);
    }catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

app.patch("/users/:id", async (req, res) => {
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
  
  app.delete("/users/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

// user crud ended

// author crud
app.post("/authors", async (req, res)=>{

    try{

        const user = await Authors.create(req.body);
        return res.status(201).send(user);
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

app.get("/authors", async (req, res) => {
    try {
      const users = await Authors.find().lean().exec();
  
      return res.send({ users });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});
  

app.get("/authors/:id", async (req, res)=>{

    try{

        const user = await Authors.findById(req.params.id).lean().exec();

        return res.send(user);
    }catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

app.patch("/authors/:id", async (req, res) => {
    try {
      const user = await Authors.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  app.delete("/authors/:id", async (req, res) => {
    try {
      const user = await Authors.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

// authors crud ended

// books crud

app.post("/books", async (req, res)=>{

    try{

        const user = await Books.create(req.body);
        return res.status(201).send(user);
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

app.get("/books", async (req, res) => {
    try {
      const books = await Books.find().populate("author").lean().exec();
  
      return res.send({ books });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});
  

app.get("/books/:id", async (req, res)=>{

    try{

        const user = await Books.findById(req.params.id).lean().exec();

        return res.send(user);
    }catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});



app.patch("/books/:id", async (req, res) => {
    try {
      const user = await Books.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  app.delete("/books/:id", async (req, res) => {
    try {
      const user = await Books.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  // books crud ended

  // section crud

  app.post("/sections", async (req, res)=>{

    try{

        const section = await Section.create(req.body);
        return res.status(201).send(section);
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

app.get("/sections", async (req, res) => {
    try {
      const section = await Section.find().lean().exec();
  
      return res.send({section });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});
  

app.get("/sections/:id", async (req, res)=>{

    try{

        const section = await Section.findById(req.params.id).lean().exec();

        return res.send(section);
    }catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

app.patch("/sections/:id", async (req, res) => {
    try {
      const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(201).send(section);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  app.delete("/sections/:id", async (req, res) => {
    try {
      const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(section);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  // section crud ended

  // checked out CRUD

  app.post("/checkedOut", async (req, res)=>{

    try{

        const checkedOut = await CheckedOut.create(req.body);
        return res.status(201).send({checkedOut});
    } catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

app.get("/checkedOut", async (req, res) => {
    try {
      const checkedOut = await CheckedOut.find().lean().exec();
  
      return res.send({ checkedOut });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
});
  

app.get("/checkedOut/:id", async (req, res)=>{

    try{

        const checkedOut = await CheckedOut.findById(req.params.id).lean().exec();

        return res.send({checkedOut});
    }catch(e){

        res.status(500).json({message:e.message, status:"failed"});
    }
});

app.patch("/checkedOut/:id", async (req, res) => {
    try {
      const checkedOut = await CheckedOut.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(201).send({checkedOut});
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  app.delete("/checkedOut/:id", async (req, res) => {
    try {
      const checkedOut = await CheckedOut.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(checkedOut);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  // checkout CRUD ended

  // solutions required

  // Get all books that are CheckedOut

app.get("/booksCheck", async (req, res) => {
  try {
    const books = await Books.find().lean().exec();
   let  bookArr = [];
   for(let i=0 ; i < books.length ; i++) {
    if(books[i].checkedOut) {
     bookArr.push(books[i]);    
    }   
  } 
  return res.status(200).send(bookArr);

  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


// Get all books written by an author

app.get("/books/author/:id", async (req, res) => {
  try {
    const books = await Books.find({ author: req.params.id })
      .populate("author")
      .lean()
      .exec();

    return res.status(200).send({ books });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


// Get all books in a section

app.get("/books/section/:id", async (req, res) => {
  try {
    const books = await Books.find({ section: req.params.id })
      .populate("author")
      .lean()
      .exec();

    return res.status(200).send({ books });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


// Get all books in a section that are not checkedOut 

app.get("/books/sectionNot/:id", async (req, res) => {
  try {
    const books = await Books.find({ section: req.params.id }).lean().exec();

    const checkout = await CheckedOut.find().lean().exec();

    var bookArr = [];
    for (var j = 0; j < books.length; j++) {
      let found = false;
      for (var i = 0; i < checkout.length; i++) {
        if (checkout[i].book_id.toString() === books[j]._id.toString()) {
          found = true;
          break;
        }
      }
      if (!found) {
        bookArr.push(books[j]);
      }
    }

    return res.status(200).send(bookArr);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});



// Get all books written by an author in a section

app.get("/books/:sec/:aut", async (req, res) => {
  try {
    const section = await Section.findById(req.params.sec);

    const author = await Authors.findById(req.params.aut);

    const books = await Books.find({"section":section._id,"author":author._id}).lean().exec();

    return res.status(200).send({ books });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


app.listen(2455 , async function(){

    await connect();
    console.log("listening on port 2455");
});