const mongoose=require("mongoose")
const Staffschema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
})
const StaffRegister=mongoose.model("newstaffs",Staffschema);

module.exports=StaffRegister