const express = require('express');
const router= express.Router();
const {verifyTokenAndAuthorization, verifyTokenAndAdmin}=require("./verifyToken");
const CryptoJS= require("crypto-js");
const User= require("../models/User")


//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res)=>{
   if (req.body.password) {
    req.body.password= CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
   }
   try {
       const updatedUser=  await User.findByIdAndUpdate(req.params.id, {
           $set: req.body
       }, {new: true});
       const{password, ...updatedDetails}=updatedUser._doc
       res.status(200).json(updatedDetails)
       
   } catch (error) {
       res.status(500).json(error)
   }
})

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        
    } catch (error) {
        res.status(500).json(error)
    }
    
})
module.exports=router

