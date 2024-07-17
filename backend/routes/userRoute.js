import { signUp , logIn,currentUser} from "../controllers/userController.js";
import express from "express"
import multer from 'multer'

const userRoute = express.Router()

const storage = multer.diskStorage({
    destination: '../../uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

userRoute.post('/signup',upload.single('image'),signUp);
userRoute.post('/login',logIn);
userRoute.get('/thisUser',currentUser);

export default userRoute
