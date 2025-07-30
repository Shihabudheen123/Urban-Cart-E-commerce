

const  userLogout = (req,res) => {

    try {
        res.clearCookie('token');

        res.json({
            message: "User logged out successfully",
            success: true,
            error: false,
            data:[]
        })
    } catch (error) {
        res.josn({
            message:error.message || error,
            error:true,
            success:false
        })
    }
}

 module.exports = userLogout;