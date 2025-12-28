const express = require('express');
const router = express.Router();
const userData = require('../schema/userschema');
const checkUser = require('../middleware/checkuser')

router.post('/user' , checkUser , async(req , res) => {
    try{
        const {name , age , email} = req.body;

        const newUser = new userData({
            name , age , email 
        })

        await newUser.save();

        res.send(`user created successfully`)
    }
    catch(err){
        res.send(err.message)
    }
})

module.exports = router;