const ContactUsModel=require('../../models/contact')

const addContact=async(req,res)=>{

    try {
       
        const { fname, lname, email, city, pincode, comment } = await req.body;
        const data = new ContactUsModel({ fname, lname, email, city, pincode, comment });

        await data.save();

        res.json({ message: "resopnse saved successfully" })
    }
    catch (error) {

        res.json({ message: "server error" })
    }
}
module.exports=addContact;