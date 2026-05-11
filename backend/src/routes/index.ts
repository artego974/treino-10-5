import { Router } from "express";
import userRoutes from "./authRoutes"
import guestRoutes from "./guestRoutes"

const routes = Router()

routes.use("/user",userRoutes)
routes.use("/guest",guestRoutes)

export default routes