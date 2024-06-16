const DogModel=require('../../models/dogs');

const addDog=async(req,res)=>{
    try{
        const { id, name, breed, gender, age,image,status }=req.body
        const check= await DogModel.findOne({id:id})
        if (check) {
           return res.json({ check:true,message: "Already exists" });
       }
   
       const newDog = new DogModel( { id, name, breed, gender, age,image,status });
       await newDog.save();
   
       res.json({check:false,message: "Added successfully" });
   
    
      }catch(error)
      {
          res.json({message:"server error"})
      }


}

module.exports=addDog;