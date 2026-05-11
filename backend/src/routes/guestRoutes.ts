import { Router } from "express";
import { GuestController } from "../controllers/GuestController";
import { roleMid } from "../middlewares/roleMiddleware";
import { authMid } from "../middlewares/authMiddleware";

const routes = Router()
const controller = new GuestController()

routes.get("/list",  controller.list.bind(controller))
routes.post("/create", controller.create.bind(controller))
routes.put("/update/:id", controller.update.bind(controller))
routes.delete("/delete/:id", controller.delete.bind(controller))
routes.get("/dashboard", controller.dashboard.bind(controller))
routes.patch("/checkin/:id",controller.checkIn.bind(controller))

export default routes