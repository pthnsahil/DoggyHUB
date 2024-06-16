const EnquiryModel=require('../../models/enquiry');

const addEnquiry= async(req,res)=>{
    try{
        const {id,fname,phone,reason,date} = await req.body;
        const data= new EnquiryModel({id,fname,phone,reason,date})
        data.save()     
        
        res.json({message:"saved successfully"})
   
       }
       catch(err)
       {
           res.json({message:"server error"})
       }
}

module.exports=addEnquiry;