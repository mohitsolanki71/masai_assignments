const express = require('express');

const router = express.Router();

const Gallery = require('../model/gallery.model');

const upload = require("../middleware/upload");

router.post("/galary", upload.any('pictures') ,async(req, res)=>{

    const filePaths = req.files.map((file)=> file.path);

    try{
        const gallery = await Gallery.create({

            user_id:req.body.user_id,
            pictures : filePaths,
        });

        return res.status(201).send({gallery});

    }catch(e){

        return res.status(500).json({status: "Failed", message: e.message});
    }
});

router.get("/galary", async (req, res)=>{

    try{
        const gallery = await Gallery.find().lean().exec();

        return res.send({ gallery});
    } catch (e) {

        return res.status(500).json({status: "Failed", message: e.message});
    }
});

module.exports = router;