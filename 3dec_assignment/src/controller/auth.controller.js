require("dotenv").config();

const jwt = require("jsonwebtoken");

const User = require("../model/user.model");

const { check, body, validationResult } = require('express-validator');

const newToken = (user) => {

    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
}

const register = async(req, res)=>{

    await check("email").isEmail().run(req);
    await check("name").notEmpty().run(req);
    await check("password").notEmpty().run(req);

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    try{

        // check if the email address provided already exists
        let user = await User.findOne({email:req.body.email}).lean().exec();

        // if it already exists then throw an error
        if(user) return res.status(400).json({status: "Failed", message:"provide another email address"});

        // else we will create the user and hash the password as plain text password is harmful

        user = await User.create(req.body);
        // we will create the token
        const token = newToken(user);

        // return the user and the token
        return res.status(201).json({user, token});

    } catch(e){

        return res.status(500).json({status:"Failed", message:e.message});
    }
}

const login = async(req, res)=>{

    await check("email").isEmail().run(req);
    await check("password").notEmpty().run(req);

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }


    try{

        // check if the email already exists
        let user = await User.findOne({email:req.body.email});

        // if it does not exist then throw an error
        if(!user) return res.status(400).json({status:"email not found", message:"Provide another email address"})
        // else we match the password
        const match = await user.checkPassword(req.body.password);

        // if it does not matches then throw an error
        if(!match) return res.status(400).json({status:"failed", message:"password does not match"});

        // if it matches then create the tokens
        const token = newToken(user);
        // return user and token
        return res.status(201).json({user, token});
    } catch(e){

        return res.status(500).json({status:"Failed", message:e.message});
    }
}

module.exports = {register, login};