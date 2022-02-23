const mongoose= require('mongoose');
const JobSchma=new mongoose.Schema({
    company:{type:String, required: true},
    logo:{type:String},
    new:{type:Boolean, default: true},
    featured:{type:Boolean, default:true},
    position:{type:String},
    role:{type:String},
    level:{type:String},
    contract:{type:String},
    location:{type:String},
    languages:{type:Array},
    tools:{type:Array}
}, {timestamps:true})

module.exports=mongoose.model("Job", JobSchma)