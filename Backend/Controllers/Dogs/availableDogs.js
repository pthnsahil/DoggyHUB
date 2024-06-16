const DogModel=require('../../models/dogs');

const availableDogs=async(req,res)=>{
    try {
        const data = await DogModel.find({status:"available"})
        res.json(data)
    }
    catch (error) {
        res.json({ message: "Not available" })
    }


}

module.exports=availableDogs;