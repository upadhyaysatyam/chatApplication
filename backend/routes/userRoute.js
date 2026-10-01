import express from "express";
import {register, login, logOut ,getOtherUser} from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticatedUser.js";
const router = express.Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logOut);
router.route("/").get(isAuthenticated,getOtherUser);

export default router;