import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import userModel from "../models/userModel.js";
import 'dotenv/config'

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

const signUp = async(req,res)=>{

    try{

        const {fullName, username, password, confirmPassword,gender} = req.body;
        let image_filename = `${req.file.filename}`

        if(password !== confirmPassword){
            return res.json({success:false, message:"Passwords do not match"})
        }

        const user = await userModel.findOne({username});

        if(user) return res.json({success:false,message:"User already exists"})
        
        
        const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            fullName,
            username,
            password:hashedPassword,
            gender,
            image:image_filename 
        })

        if(newUser){

            const token = createToken(newUser)
            await newUser.save()

            res.json({success:true,token});
        }
        else {
            res.json({success:false,message:"Invalid User Credentials"})
        }
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

const logIn = async (req,res) =>{

    try {
        const {username, password} = req.body;

        const user = await userModel.findOne({username});

        if(!user) return res.json({success:false,message:"User does not exist"})
        
        const passwordCorrect = await bcrypt.compare(password,user.password)


        if(!passwordCorrect){
            return res.json({success:false, message:"Invalid password"})
        }

        const token = createToken(user);

        res.json({success:true,token});
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}
const currentUser = async(req,res)=>{

    try {
        const token = req.headers.token;
        const user = jwt.decode(token,process.env.JWT_SECRET);

        res.json({success:true,user});

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }

}

export {signUp, logIn,currentUser}
