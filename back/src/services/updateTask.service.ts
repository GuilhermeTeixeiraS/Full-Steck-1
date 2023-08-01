import { AppDataSource } from "../data-source";
import { Task } from "../entities/task.entitie";
import { AppError } from "../errors/AppError";
import { TTaskResponse, TTaskUpdate } from "../interfaces/task.interfaces";
import { taskSchema } from "../schemas/tasks.schema";

const updateTaskService = async (
  data: TTaskUpdate,
  taskId: number
): Promise<TTaskResponse> => {
  const taskRepository = AppDataSource.getRepository(Task);
  const oldTask = await taskRepository.findOneBy({ id: taskId });
  if (!oldTask) {
    throw new AppError("Task not found.", 404);
  }
  const newTaskData = taskRepository.create({
    ...oldTask,
    ...data,
  });
  await taskRepository.save(newTaskData);
  return taskSchema.parse(newTaskData);
};
export{updateTaskService}