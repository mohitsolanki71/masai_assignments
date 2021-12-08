const express = require("express");

const { body, validationResult } = require('express-validator');

const router = express.Router();

const User = require("../model/user.model");

router.post("/",body("first_name").notEmpty(), body("last_name").notEmpty(), body("email").isEmail(),body("pincode").isLength({min:6, max:6}),body("age").custom(value=>{
    if(value<1 || value > 100){
        throw new Error("age should be between 1 and 100");
    }
    return true;
}),async (req, res) => {

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    // console.log(body("first_name"));
    try{

        const user = await User.create(req.body);
        
        return res.send({user});

    }catch(e){

        return res.status(500).json({status: "Failed", message: e.message});
    }
});

router.get("/", async (req, res)=>{

    try{
        const user = await User.find().lean().exec();
        return res.send({user});

    }catch(e){

        return res.status(500).json({status: "Failed", message: e.message});
    }
})

module.exports = router;