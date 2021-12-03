const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

const sendMail = require("../utils/send.mail");

router.post("/", async (req, res) => {

    try{
        const user = await User.create(req.body);

        const admins = ["admin1@gmail.com", "admin2@gmail.com", "admin3@gmail.com", "admin4@gmail.com","admin5@gmail.com"];

        const to_string = admins.join(",");

        sendMail("sevice@gmail.com",`${req.body.email}`,`Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,` Hi ${req.body.first_name}, Please confirm your email address`,"<h1>message is sent</h1>");

        sendMail("sevice@gmail.com", to_string,`${req.body.first_name} ${req.body.last_name} has registerd with us`,`Please welcome${req.body.first_name} ${req.body.last_name}`,"<h1>message is sent</h1>");
        

        return res.status(201).json({user});

    }catch(e){

        return res.status(500).json({status: "Failed", message: e.message});
    }
})

router.get("/", async (req, res) => {

    try{

        const page = +req.query.page || 1;
        const size = +req.body.size || 2;

        const skip = (page - 1) * size;

        const user = await User.find().skip(skip).limit(size).lean().exec();

        const totalPages = Math.ceil(await User.find().countDocuments()/size);

        return res.status(201).json({user, totalPages});
    }catch(e){

        return res.status(500).json({status: "Failed", message: e.message});
    }
})

module.exports = router;