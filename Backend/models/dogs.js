const mongoose = require('mongoose')

const DogSchema =new mongoose.Schema(
{
  name:{ 
    type:String
  },
  id:{
    type:String
  },
  image:{
    type:Array
  },
  breed:{
    type:String
  },
  gender:{
    type:String
  },
  age:{  
    type:String
  },
  status:{
    type:String
  }
})

const DogModel=  mongoose.model("dog", DogSchema)
module.exports= DogModel 
