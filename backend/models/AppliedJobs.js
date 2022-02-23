const mongoose= require('mongoose');

const AppliedJobsSchema=new mongoose.Schema({
    userId:{type:String, required: true},
    jobs:[
        {
            jobId:{type:String},
        }
    ],
}, {timestamps:true});

module.exports=mongoose.model("AppliedJobs", AppliedJobsSchema);