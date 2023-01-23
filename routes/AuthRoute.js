import { Router } from "express";
import { signIn, signUp } from "../controllers/Auth.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { loginSchema, userSchema } from "../model/AuthSchema.js";

const authRouter = Router()

authRouter.post("/",validateSchema(loginSchema),signIn)
authRouter.post("/cadastro",validateSchema(userSchema),signUp)

export default authRouter