const UserModel=require('../../models/user');

const login = async(req,res)=>{
    const { email, password,role } = req.body;

    try {
        const user = await UserModel.findOne({ email, password,role });

        if (!user) {
            return res.status(500).json({ check: false, error: "Incorrect email or password" });
        }
        res.status(201).json({ check: true, message: "Login successful" });
    } catch (error) {

        res.status(500).json({ check: false, error: "Internal server error" });
    }
}

module.exports=login