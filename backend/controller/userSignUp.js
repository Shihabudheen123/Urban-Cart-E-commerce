
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const userSignUpController = async(req, res) => {
    try {
        const {name,email,password} = req.body
        const user = await userModel.findOne({email})
        console.log("user", user);
        
if(user){
    throw new Error("User already exists")
}
        if(!name){
            throw new Error("Please provide your name")
        }
        if(!email){
            throw new Error("Please provide your email")
        }
        if(!password){
            throw new Error("Please provide your passowrd")
        }

          
        const salt = bcrypt.genSaltSync(10);
        const hashPassword =   bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Password hashing failed")
        }

        const payload= {
            ...req.body,
            password:hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await(userData.save())

        res.status(201).json({
            data:saveUser,
            success:true,
            error:false,
            message:"User created successfully"
        })
    } catch (error) {
        res.json({
            message:error.message || error,
            error:true,
            sucess:false
    
        })
    }
}

module.exports = userSignUpController