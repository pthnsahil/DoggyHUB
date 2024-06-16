const DogModel=require('../../models/dogs');

const editDog=async(req,res)=>{
    const {id,name,breed,gender,age,image,status}=req.body
    try{
     
     const data=await DogModel.updateOne({id:id}, {name:name,breed:breed,gender:gender,age:age,image:image,status:status})
       if(data)
        {            
           const data1=await DogModel.find()
           return  res.json(data1)
        }
        res.json({message:"not found"})
    }catch(error)
    {
       res.json({message:"server error"})
    }
}

module.exports=editDog