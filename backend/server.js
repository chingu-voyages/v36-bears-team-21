const express= require('express');
const mongoose= require('mongoose');
const app= express();
const dotenv= require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const jobsRoute = require('./routes/jobs')
dotenv.config();


mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{console.log('Db connection Successful')})
    .catch((err)=>{console.log(err)})


app.use(express.json())
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/jobs", jobsRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log('Server running on  http://localhost:5000')
});