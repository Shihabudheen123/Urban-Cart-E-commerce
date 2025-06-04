const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const  jwt = require('jsonwebtoken');
const userSignInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Please provide your email");
    }
    if (!password) {
      throw new Error("Please provide your passowrd");
    }

    //to check the user is available or not in the database

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found, please sign up");
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    console.log("checkPassword", checkPassword);

if(checkPassword){
    const tokenData = {
        _id: user._id,
        email: user.email,


    }
const token = await jwt.sign(
  tokenData,process.env.TOKEN_SECRET_KEY
 , { expiresIn: 60 * 60 * 8 });
const tokenOption = {
    httpOnly:true,
    secure:true
}
 res.cookie('token',token,tokenOption).json({
    message: "Login successful",
    data:tokenData,
    success: true,
    error: false,
 })

}else{
    throw new Error("Invalid password, please try again");
}


  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      sucess: false,
    });
  }
};

module.exports = userSignInController;
