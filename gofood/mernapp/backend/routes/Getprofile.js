const express = require('express');
const router=express.Router();
const Profile=require('../models/Profile');

router.post('/getProfile',(req,res)=>{
    const newUser=new Profile({
        name:req.body.name,
        location:req.body.location,
        email:req.body.email,
        password:/*req.body.password*/req.body.password,
        age:req.body.age,
        photo:req.body.photo,
        moNo:req.body.moNo
    })

    newUser.save()
    .then(saved=>{
        console.log("profile data saved",saved);
        res.json({success:true})
    }).catch(error=>{
    console.log(error);
    res.json({success:false})
});
})

module.exports=router;