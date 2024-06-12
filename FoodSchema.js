const mongoose=require("mongoose")
var Foodschema= mongoose.Schema({
  foodname:{
    type:String,
    required:true
},
image:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
category:{
    type:String,
    required:true
},
amount:{
    type:Number,
},
});
const Food=mongoose.model('newfoods',Foodschema);
module.exports=Food
