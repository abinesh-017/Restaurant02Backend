const mongoose=require("mongoose")
const cartschema=mongoose.Schema({
    foodid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"newfoods",
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Customer",
    },
    count:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
    }
})

module.exports=mongoose.model("newcarts",cartschema)