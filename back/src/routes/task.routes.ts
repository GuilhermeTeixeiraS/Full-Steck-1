import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValid } from "../middlewares/ensuteDetaIsValid.middleware";
import { TaskSchemaRequest, TaskSchemaResponse, TaskSchemaUpdate } from "../schemas/tasks.schema";
import {
  CreateTaskController,
  DestroyTaskController,
  ListTaskController,
  UpdateTaskController,
} from "../controllers/tasks.controller";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureOwner.middleware";

const taskRoutes = Router();
taskRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValid(TaskSchemaRequest),
  CreateTaskController
);
taskRoutes.get("", ensureAuthMiddleware, ListTaskController);
taskRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureDataIsValid(TaskSchemaUpdate),
  UpdateTaskController
);
taskRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  DestroyTaskController
);
export {taskRoutes}