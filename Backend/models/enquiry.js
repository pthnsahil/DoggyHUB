const mongoose=require('mongoose')

const EnquirySchema=new mongoose.Schema(
{
  id:{ 
    type:String
  },
  fname:{ 
    type:String
  },
  phone:{ 
    type:String
  },
  reason:{ 
    type:String
  },
  date:{
    type:Date
  }
}

)

const EnquiryModel= mongoose.model("enquiry",EnquirySchema)
module.exports=EnquiryModel