import { Router } from "express"
import { deliveryStaffController } from "../controllers/delivery_staff.controller.js"

const delivery_staffRouter=Router()

delivery_staffRouter.get("/", deliveryStaffController.getAll)
delivery_staffRouter.get("/:id", deliveryStaffController.getOne)
delivery_staffRouter.post("/", deliveryStaffController.create)
delivery_staffRouter.put("/:id", deliveryStaffController.update)
delivery_staffRouter.delete("/:id", deliveryStaffController.delete)

export default delivery_staffRouter 