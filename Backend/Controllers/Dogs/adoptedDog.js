const DogModel=require('../../models/dogs');

const adoptedDogs=async(req,res)=>{

    try{
        const data= await DogModel.find({status:"unavailable"})
        res.json(data)
     }catch(error)
     {
       res.json('server error')
     }
  
}


module.exports=adoptedDogs;