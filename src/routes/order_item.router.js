import { Router } from "express"
import { orderItemController } from "../controllers/order_item.controller.js"

const order_itemRouter=Router()

order_itemRouter.get("/", orderItemController.getAll)
order_itemRouter.get("/:id", orderItemController.getOne)
order_itemRouter.post("/", orderItemController.create)
order_itemRouter.put("/:id", orderItemController.update)
order_itemRouter.delete("/:id", orderItemController.delete)

export default order_itemRouter 