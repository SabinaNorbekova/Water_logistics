import { Router } from "express"
import { addressController } from "../controllers/adress.controller.js"

const addressRouter=Router()

addressRouter.get("/", addressController.getAll)
addressRouter.get("/:id", addressController.getOne)
addressRouter.post("/", addressController.create)
addressRouter.put("/:id", addressController.update)
addressRouter.delete("/:id", addressController.delete)

export default addressRouter 