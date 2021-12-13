require("dotenv").config();

const jwt = require("jsonwebtoken");

const User = require("../model/user.model");

const newToken = (user) => {

    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
}

const register = async(req, res) => {

    try{

        // check if email adress provided already exists
        let user = await User.findOne({email: req.body.email}).lean().exec();

        // if it already exists then throm an error
        if(user) return res.status(400).json({status:"Failer", message:"please provide a diffrent email"});

        // else we will create the user ,we will hash the password as plain text password is harmful
        user = await User.create(req.body);

        // we will create the token
        const token = newToken(user);

        // return the user and the token
        return res.status(201).json({user, token});

    } catch(e){

        return res.status(500).json({status:"Failer", message:e.message});
    }
};

const login = async (req, res) => {

    try{
    //check if the email address provided already exists
    let user = await User.findOne({email: req.body.email});

    // it it does not exists then trom an error
    if(!user) return res.status(400).json({status:"failed", message: "please provide a differnet email address"});

    // else we match the password
    const match = await user.checkPassword(req.body.password);
    // if it does not match then we throm an error
    if(!match) return res.status(400).json({status:"failed", message: "please provide a correct email and password"});


    // if it matches then create the token 
    const token = newToken(user);
    // return the user and the token

    res.status(201).json({user, token});

    }catch(e){

        return res.status(500).json({status:"Failer", message:e.message});
    }

}



module.exports = {register, login, newToken};

