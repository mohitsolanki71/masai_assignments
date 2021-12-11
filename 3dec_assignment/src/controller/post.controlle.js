const express = require('express');

const Post = require("../model/post.model");

const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post("/", authenticate, async (req, res) => {

    try{

        const user = req.user;

        const post = await Post.create({

            title:req.body.title,
            body: req.body.body,
            user: user.user._id,
        });

        return res.status(201).json({post});
    } catch(e){

        return res.status(500).json({status:"Failed", message:e.message})
    }
});

router.get("/", authenticate, async(req, res)=>{

    try{
        const post = await Post.find().lean().exec();

        return res.send({post});

    }catch(e){
        return res.status(500).json({status:"Failed", message:e.message})
    }
})


module.exports = router;