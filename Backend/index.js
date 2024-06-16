const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")

const userRoutes=require('./Route/User.js');
const dogRoutes=require('./Route/Dogs.js');
const paymentRoute=require('./Route/Payment.js');
const contactRoutes=require('./Route/Contact.js');
const enquiryRoutes=require('./Route/Enquiry.js');

const port = process.env.PORT || 5001
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/Project")
        .then(() => { console.log(" DB Connected sucessfully ")})
        .catch(err => console.log(err))
 
app.use('/user',userRoutes);
app.use('/dog',dogRoutes);
app.use('/pay',paymentRoute);
app.use('/contact',contactRoutes);
app.use('/enquiry',enquiryRoutes);

app.listen(5001, () => {console.log('server is running on ', port)})