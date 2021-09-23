const mongoose = require('mongoose');
const msgSchema = new mongoose.Schema({
    roomId : {
        type : String,
        required : true
    },
    text:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    bidPrice:{
        type:Number,
        required:true
    },
    msgDateTime:{
        type:String,
        required:true
    }
})
const Msg = mongoose.model('msg',msgSchema);
module.exports = Msg;