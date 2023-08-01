import { z } from "zod";
import {
  TaskSchemaRequest,
  TaskSchemaResponse,
  taskSchema,
} from "../schemas/tasks.schema";
import { DeepPartial } from "typeorm";

type TTaskRequest = z.infer<typeof TaskSchemaRequest>;
type TTask = z.infer<typeof taskSchema>;
type TTaskResponse = z.infer<typeof taskSchema>;
type TTasksResponse = z.infer<typeof TaskSchemaResponse>;
type TTaskUpdate = DeepPartial<TTaskRequest>;

export { TTaskRequest, TTask, TTaskResponse, TTaskUpdate, TTasksResponse };
