import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/AppError";

const emailExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const movieRepository: Repository<User> = AppDataSource.getRepository(User);
    const email: string = req.body.email;

    const emailExist = await movieRepository.exist({ where: { email: email } });

    if (emailExist) {
      throw new AppError("Email already exists", 409);
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default emailExistMiddleware;
