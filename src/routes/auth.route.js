import { Router } from "express";
import { userRegisterValidator } from "../validators/index.js";
import { registerUser } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);

export default router;
