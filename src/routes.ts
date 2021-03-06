import { Router } from "express";
import { MessagesController } from "./controllers/MessageController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UserController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


export { routes };

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa&filtro=algumacoisa
 * 
 * Body Params => Corpo da requisição
 * Body params = {
 * 
 * }
 */