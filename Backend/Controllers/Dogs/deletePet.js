const DogModel=require('../../models/dogs');
const deleteDog=async(req,res)=>{

    const {id} =req.body
    try{
         
      const data=await DogModel.deleteOne({id:id})
    if(data)
        {
            const data1=await DogModel.find()
            return res.json(data1)
        }
        res.json({message:"not found"})
    }
    catch(error)
    {
        res.json({message:"server error"})
    }
}

module.exports=deleteDog;