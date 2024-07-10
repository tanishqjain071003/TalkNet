import { signUp , logIn,currentUser} from "../controllers/userController.js";
import express from "express"

const userRoute = express.Router()

userRoute.post('/signup',signUp);
userRoute.post('/login',logIn);
userRoute.get('/thisUser',currentUser);

export default userRoute