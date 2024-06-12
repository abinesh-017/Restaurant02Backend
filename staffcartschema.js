const mongoose = require("mongoose");

const staffcartschema = mongoose.Schema({
    foodid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "addmenus",
    },
    staffid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "newstaffs",
    },
    count: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
    }
});

module.exports= mongoose.model("Staffvieworder", staffcartschema);



