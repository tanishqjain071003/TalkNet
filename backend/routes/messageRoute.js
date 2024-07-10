import {getMessages ,sendMessage} from "../controllers/messageController.js";
import express from "express"
import protectRoute from "../middleware/protectRoute.js";

const messageRoute = express.Router()

messageRoute.get('/:id',protectRoute,getMessages);
messageRoute.post('/send/:id',protectRoute, sendMessage);


export default messageRoute