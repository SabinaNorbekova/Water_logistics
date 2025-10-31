import { Router } from "express"
import { paymentController } from "../controllers/payment.controller.js"

const paymentRouter=Router()

paymentRouter.get("/", paymentController.getAll)
paymentRouter.get("/:id", paymentController.getOne)
paymentRouter.post("/", paymentController.create)
paymentRouter.put("/:id", paymentController.update)
paymentRouter.delete("/:id", paymentController.delete)

export default paymentRouter 