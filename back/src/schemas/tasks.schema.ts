import { z } from "zod";
import { TaskStatus } from "../entities/task.entitie";

const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.nativeEnum(TaskStatus),
});

const TaskSchemaRequest = taskSchema.omit({
  id: true,
  status: true,
});

const TaskSchemaUpdate = taskSchema
  .omit({
    id: true,
  })
  .partial();
const TaskSchemaResponse = z.array(taskSchema);

export { taskSchema, TaskSchemaRequest, TaskSchemaResponse, TaskSchemaUpdate}
