const { default: mongoose } = require("mongoose");

// }
mongoose.connect('mongodb://127.0.0.1:27017/Resturant')
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function name() {
    console.log("connetion successfully")
})

module.exports=db