import { Router } from "express"
import { getAll,getOne,create,update,delete } from "../controllers/order.controller"

const orderRouter=Router()

orderRouter.get("/", getAll)
orderRouter.get("/:id", getOne)
orderRouter.post("/", create)
orderRouter.put("/:id", update)
orderRouter.delete("/:id", delete)

export default orderRouter 