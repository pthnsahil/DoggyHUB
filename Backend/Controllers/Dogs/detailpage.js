const DogModel=require('../../models/dogs');

const detailpage=async(req,res)=>{
    try{
        const {name}=req.body;
        const data =await DogModel.findOne({name})
      res.json(data)
     }catch(error)
     {
       res.json({message:"server error"})
     }
}

module.exports=detailpage