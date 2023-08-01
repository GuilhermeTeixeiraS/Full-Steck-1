import "reflect-metadata";
import "express-async-error";
import express from "express";
import userRoutes from "./routes/users.routes";
import cors from "cors";
import { handleErrors } from "./errors/AppError";
import { loginRoutes } from "./routes/login.routes";
import { taskRoutes } from "./routes/task.routes";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/login", loginRoutes);
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use(handleErrors);

export default app;
