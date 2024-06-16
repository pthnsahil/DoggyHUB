const mongoose = require('mongoose')

const UserSchema =new mongoose.Schema(
{
  name: { 
    type:String
  },
  email: { 
    type:String
  },
  password: { 
    type:String
  },
  location: { 
    type:String
  },
  role:{ 
    type:String
  } 
})

const UserModel= mongoose.model("user", UserSchema)
module.exports= UserModel

