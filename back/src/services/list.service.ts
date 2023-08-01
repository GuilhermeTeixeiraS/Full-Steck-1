import { AppDataSource } from "../data-source";
import { Task } from "../entities/task.entitie";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/AppError";
import { TTasksResponse } from "../interfaces/task.interfaces";
import { TaskSchemaResponse } from "../schemas/tasks.schema";

const ListTaskService = async (userId: number): Promise<TTasksResponse> => {
  const taskRepository = AppDataSource.getRepository(Task);
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new AppError("User not found.", 404);
  }
  const tasks = await taskRepository.find({
    where: {
      user: user,
    },
  });

  return TaskSchemaResponse.parse(tasks);
};
export { ListTaskService };
