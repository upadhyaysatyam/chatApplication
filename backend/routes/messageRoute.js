import express from "express";

import { sendMessage, getMessage } from "../controllers/messageController";

const router = express.Router();

router.route("/send/:id").post(sendMessage);
router.route("/:id").get(getMessage);

export default router;



