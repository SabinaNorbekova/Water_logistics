import { Router } from "express"
import { orderController } from "../controllers/order.controller.js"
const orderRouter=Router()

orderRouter.get("/", orderController.getAll)
orderRouter.get("/:id", orderController.getOne)
orderRouter.post("/", orderController.create)
orderRouter.put("/:id", orderController.update)
orderRouter.delete("/:id", orderController.delete)

export default orderRouter 