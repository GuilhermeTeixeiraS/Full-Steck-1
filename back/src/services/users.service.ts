import {
  TUserResponse,
  TUser,
  TUserRequest,
} from "../interfaces/users.interfaces";
import { User } from "../entities/user.entitie";
import { AppDataSource } from "../data-source";
import { hash } from "bcryptjs";
import { AppError } from "../errors/AppError";
import { userSchemaResponse } from "../schemas/users.schema";
import { Repository } from "typeorm";

const createUserService = async (
    userData: TUserRequest
  ): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
    userData.password = await hash(userData.password, 10);
  
    const user: TUserResponse = userRepository.create(userData);
    await userRepository.save(user);
    const userParse = userSchemaResponse.parse(user);
    return userParse;
  };

export { createUserService };
