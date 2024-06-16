const DogModel=require('../../models/dogs');

const allDogs=async(req,res)=>{

    try{
        const data= await DogModel.find()
        res.json(data)
 
     }catch(error)
     {
         res.json({message:"server error"})
 
     }


}


module.exports=allDogs