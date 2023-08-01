import { Response, Request } from "express";
import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users.service";

const createUserController = async (req: Request, res: Response) => {
  const user: TUserRequest = req.body;
  const newUser: TUserResponse = await createUserService(user);
  return res.status(201).json(newUser);
};

export { createUserController };
