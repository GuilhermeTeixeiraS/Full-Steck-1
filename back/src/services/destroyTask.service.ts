import { AppDataSource } from "../data-source";
import { Task } from "../entities/task.entitie";
import { AppError } from "../errors/AppError";

const DestroyTaskService = async (taskId: number): Promise<void> => {
  const taskRepository = AppDataSource.getRepository(Task);
  const task = await taskRepository.findOneBy({ id: taskId });
  if (!task) {
    throw new AppError("Task not found.", 404);
  }
  await taskRepository.remove(task);
};

export { DestroyTaskService };
