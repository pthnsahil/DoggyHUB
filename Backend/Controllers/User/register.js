const UserModel=require('../../models/user');
const register= async (req, res) => {
    try {
        const { name, email, password, location } = req.body;


        const check = await UserModel.findOne({ email });

        if (check) {
            return res.json({ check: false, error: "User already exists" });
        }

        const newUser = new UserModel({ name, email, password, location,role:"user" });
        await newUser.save();

        res.json({ check: true, message: "User registered successfully" });
    } catch (error) {

        console.error("Error registering user:", error);
        res.json({ check: false, error: "Internal server error" });
    }
}

module.exports=register