import { signUp, logIn, currentUser, addToFriend,removeFriend} from "../controllers/userController.js";
import express from "express"
import multer from 'multer'
import protectRoute from "../middleware/protectRoute.js";

const userRoute = express.Router()

const storage = multer.diskStorage({
    destination:'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

userRoute.post('/signup',upload.single('image'),signUp);
userRoute.post('/login',logIn);
userRoute.get('/thisUser',currentUser);
userRoute.get('/addToFriend/:id',protectRoute,addToFriend);
userRoute.get('/removeFriend/:id',protectRoute,removeFriend);

export default userRoute
