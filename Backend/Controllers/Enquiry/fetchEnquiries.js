const EnquiryModel=require('../../models/enquiry');

const fetchEnquiries=async(req,res)=>{

    try{
        const data= await EnquiryModel.find()
        res.json(data)

    }catch(err)
    {
        res.json({message:"server error"})
    }

}

module.exports=fetchEnquiries;