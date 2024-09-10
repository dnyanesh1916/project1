const express = require('express');
const router=express.Router();
const User=require('../models/User');
const {body,validationResult}=require('express-validator');
const bcrypt=require('bcryptjs');
 const jwt=require('jsonwebtoken');
 const jwtSecret='mynameisdnyaneshwargovindbukkewad';

router.post('/creatuser',[body('email').isEmail(),
body('password','ncorrect password').isLength({min:5})],
async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

        const salt=await bcrypt.genSalt(10);
        let secPassword=await bcrypt.hash(req.body.password,salt)
         const newUser=new User({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:/*req.body.password*/secPassword
        })

        newUser.save()
        .then(saved=>{
            console.log("user data saved",saved);
            res.json({success:true})
        }).catch(error=>{
        console.log(error);
        res.json({success:false})
    });
});

router.post('/loginuser',async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let emp=req.body;
    try{
        //console.log(emp);
        let userData=await User.findOne({email:emp.email})
        
        if(!userData){
            return res.status(400).json({ errors: 'try login with valid email credentials' });
        }
        const pascom=await bcrypt.compare(req.body.password,userData.password)
        if(/*req.body.password!==userData.password*/!pascom)
        {
            return res.status(400).json({ errors: 'try login with valid password credentials' });
        }
        
        const data={
            user:{
                id:userData.id
            }
        }
       const authToken=jwt.sign(data,jwtSecret);
        return res.json({success:true,authToken:authToken});   
        
    }catch(error){
        console.log(error);
        //console.log("hiii");
        res.json({success:false})
    };
});
module.exports=router;