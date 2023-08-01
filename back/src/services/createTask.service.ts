import { AppDataSource } from "../data-source";
import { Task } from "../entities/task.entitie";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/AppError";
import { TTaskRequest, TTaskResponse } from "../interfaces/task.interfaces";
import { taskSchema } from "../schemas/tasks.schema";

const createTaskService = async (
  data: TTaskRequest,
  userId: number
): Promise<TTaskResponse> => {
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
  const task = taskRepository.create({
    ...data,
    user,
  });
  await taskRepository.save(task);
  return taskSchema.parse(task);
};

export { createTaskService };
