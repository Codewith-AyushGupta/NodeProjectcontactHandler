const mongoose = require('mongoose');

const contactSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        require:false
    }
})
module.exports = mongoose.model('contact',contactSchema);