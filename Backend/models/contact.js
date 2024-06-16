const mongoose = require('mongoose')


const ContactUsSchema =new mongoose.Schema(
{
  fname:{ 
    type:String
  },
  lname:{ 
    type:String
  },
  email:{ 
    type:String
  },
  city:{ 
    type:String
  },
  pincode:{ 
    type:String
  },
  comment:{ 
    type:String
  }
 
})

const ContactUsModel= mongoose.model("contact", ContactUsSchema)
module.exports=ContactUsModel
