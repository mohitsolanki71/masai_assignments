const express = require("express");
const router = express.Router();

// var fs = require("fs");

const User = require("../model/user.model");

const upload = require("../middleware/upload");

router.post("/", upload.single("userImage") ,async(req, res)=>{

    try{
        const user = await User.create({

            first_name:req.body.first_name,
            last_name:req.body.last_name,
            image_url : req.file.path,
        });

        return res.status(201).send({user});

    }catch(e){

        return res.status(500).json({status: "Failed", message: e.message});
    }
});

router.get("/", async (req, res)=>{

    try{
        const user = await User.find().lean().exec();

        return res.send({user});
    } catch (e) {

        return res.status(500).json({status: "Failed", message: e.message});
    }
});

router.delete("/:id", async (req, res) => {

    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();

        // fs.unlink("1638632680458-347394773-IMG_20210319_131555-removebg-preview.jpg", function (err) {
        //     if (err) {return err;}
        //     console.log('File deleted!');
        //   });

        return res.send({user});
    }catch(e){

        return res.status(500).json({status: "Failed", message: e.message});
    }

})

module.exports = router;