const express= require('express');
const mongoose= require('mongoose');
const app= express();
const dotenv= require('dotenv');
dotenv.config()


mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{console.log('Db connection Successful')})
    .catch((err)=>{console.log(err)})



app.get('/', (req, res)=>{
    res.send("Hello")
});


app.listen(process.env.PORT || 5000, ()=>{
    console.log('Server running on  http://localhost:5000')
});