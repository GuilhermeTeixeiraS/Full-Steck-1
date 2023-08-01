import { Request, Response } from "express";
import { createTaskService } from "../services/createTask.service";
import { ListTaskService } from "../services/list.service";
import { updateTaskService } from "../services/updateTask.service";
import { DestroyTaskService } from "../services/destroyTask.service";

const CreateTaskController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const newTask = await createTaskService(req.body, userId);
  return res.status(201).json(newTask);
};
const ListTaskController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const tasks = await ListTaskService(userId);
  return res.json(tasks);
};
const UpdateTaskController = async (req: Request, res: Response) => {
  const updateTask = await updateTaskService(req.body, Number(req.params.id));
  return res.json(updateTask);
};
const DestroyTaskController = async (req: Request, res: Response) => {
  await DestroyTaskService(Number(req.params.id));
  return res.status(204).send();
};

export {
  CreateTaskController,
  ListTaskController,
  UpdateTaskController,
  DestroyTaskController,
};
