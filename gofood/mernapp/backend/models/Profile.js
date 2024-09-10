const mongoose= require("mongoose")

const { Schema }=mongoose;

const ProfileSchema=new Schema({
    name:{
        type:String,
    },
    location:{
        type:String,
    },
    moNo:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    age:{
        type:String
    },
    photo:{
        type:String
    }
})

module.exports=mongoose.model('Profile',ProfileSchema)