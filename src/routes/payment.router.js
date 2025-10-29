import { Router } from "express"
import { getAll,getOne,create,update,delete } from "../controllers/payment.controller"

const paymentRouter=Router()

paymentRouter.get("/", getAll)
paymentRouter.get("/:id", getOne)
paymentRouter.post("/", create)
paymentRouter.put("/:id", update)
paymentRouter.delete("/:id", delete)

export default paymentRouter 