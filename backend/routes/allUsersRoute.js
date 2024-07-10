import { allUsers } from "../controllers/allUsers.js";
import express from "express"
import protectRoute from "../middleware/protectRoute.js";

const allUsersRoute = express.Router()

allUsersRoute.get('/',protectRoute,allUsers);

export default allUsersRoute