import { Router } from "express"


const paymentRouter=Router()

paymentRouter.get("/", getAllPayment)
paymentRouter.get("/:id", getOnePayment)
paymentRouter.post("/", createPayment)
paymentRouter.put("/:id", updatePayment)
paymentRouter.delete("/:id", removePayment)

export default paymentRouter 