const ContactUsModel=require('../../models/contact')

const fetchContacts=async(req,res)=>{

    try{
        const data= await ContactUsModel.find()
        res.json(data)
    }catch(err)
    {
        res.json({message:"server error"})
    }

}

module.exports=fetchContacts;