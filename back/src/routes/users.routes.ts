import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import emailExistMiddleware from "../middlewares/ensureEmailExists.middleware";

const userRoutes = Router();

userRoutes.post("", emailExistMiddleware,createUserController);

export default userRoutes;
