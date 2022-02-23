const express = require('express');
const { verifyTokenAndAdmin } = require('./verifyToken');
const Jobs= require("../models/Jobs")
const router= express.Router();

//CREATE
router.post("/", async (req, res)=>{
    const newJob = new Jobs(req.body)
    try {
        const savedJob = await newJob.save();
        res.status(200).json(savedJob)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router;

