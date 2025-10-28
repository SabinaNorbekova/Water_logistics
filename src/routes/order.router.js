import { Router } from "express"


const orderRouter=Router()

orderRouter.get("/", getAllAOrder)
orderRouter.get("/:id", getOneOrder)
orderRouter.post("/", createOrder)
orderRouter.put("/:id", updateOrder)
orderRouter.delete("/:id", removeOrder)

export default orderRouter 