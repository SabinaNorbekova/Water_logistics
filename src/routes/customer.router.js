import { Router } from "express"

const customerRouter=Router()

customerRouter.get("/", getAllCustomers)
customerRouter.get("/:id", getOneCustomer)
customerRouter.post("/", createCustomer)
customerRouter.put("/:id", updateCustomer)
customerRouter.delete("/:id", removeCustomer)

export default customerRouter