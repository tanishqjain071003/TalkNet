import userModel from '../models/userModel.js'
export const allUsers = async (req,res)=>{

    try {

        const loggedInUserId = req.user.id
        const filteredUsers = await userModel.find({_id:{$ne : loggedInUserId}}).select("-password")

        res.json({success:true, filteredUsers});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }


}