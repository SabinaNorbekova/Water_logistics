import { Router } from "express"
import { customerController } from "../controllers/customer.controller.js"
const customerRouter=Router()

customerRouter.get("/", customerController.getAll)
customerRouter.get("/:id", customerController.getOne)
customerRouter.post("/", customerController.create)
customerRouter.put("/:id", customerController.update)
customerRouter.delete("/:id", customerController.delete)

export default customerRouter