const userModel = require("../models/userModel");

const userDetailsController = async  (req,res) =>{
    try {

        console.log("userId", req.userId);
        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data:user,
            error:false,
            success:true,                       
            success:true,
            message:"User Details Fetched Successfully"
        })
        
        
    } catch (error) {
        res.status(400).json({
            message:error.message || error,
            error:true,
            sucess:false
        })
    }}

    module.exports = userDetailsController;