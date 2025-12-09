import express from "express";

import {
  registerUser, loginUser, currentUser
} from "../controllers/UserController.js";

import { validateToken } from "../middleware/validateTokenHandler.js";

const router = express.Router();
router.get("/current", validateToken, currentUser)

router.route("/current").get(currentUser);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

export default router;