import { Request, NextFunction, Response } from "express";
import { AppDataSource } from "../data-source";
import { Task } from "../entities/task.entitie";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const taskRepository = AppDataSource.getRepository(Task);
  const taskId = req.params.id;
  const userId = res.locals.userId;
  const tasks = await taskRepository.findOne({
    where: {
      id: Number(taskId),
    },
    relations: {
      user: true,
    },
  });
  if (!tasks) {
    return res.status(404).json({
      message: "task not found.",
    });
  }
  if (tasks.user.id != userId) {
    return res.status(403).json({
      message: "You dont't have permissions",
    });
  }

  return next()
};

export { ensureIsOwnerMiddleware };
