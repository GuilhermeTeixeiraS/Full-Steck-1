import { Router } from "express";
import {
  createClientController,
  getClientByIdController,
  listAllClientsController,
  updateClientController,
  deleteClientController,
  listClientsPDFController,
} from "../controllers/clients.controllers";
import verifyIdMiddleware from "../middlewares/verifyClientId.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { clientSchemaRequest } from "../schemas/client.schema";
import { authenticationMiddleware } from "../middlewares/authenticate.middleware";
import { verifyAdminMiddleware } from "../middlewares/verifyAdmin.middleware";

const clientsRoutes = Router();

clientsRoutes.get(
  "/pdf",
 listClientsPDFController
);
clientsRoutes.get("", authenticationMiddleware, listAllClientsController);
clientsRoutes.post(
  "",
  ensureDataIsValid(clientSchemaRequest),
  createClientController
);

clientsRoutes.patch(
  "/:id",
  verifyIdMiddleware,
  updateClientController
);
clientsRoutes.get(
  "/:id",
  verifyIdMiddleware,
  getClientByIdController
);
clientsRoutes.delete(
  "/:id",
  verifyIdMiddleware,
  deleteClientController
);

export { clientsRoutes };
