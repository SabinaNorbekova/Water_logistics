import { Router } from "express"
import { waterProductController } from "../controllers/water_product.controller.js"

const water_productRouter=Router()

water_productRouter.get("/", waterProductController.getAll)
water_productRouter.get("/:id", waterProductController.getOne)
water_productRouter.post("/", waterProductController.create)
water_productRouter.put("/:id", waterProductController.update)
water_productRouter.delete("/:id", waterProductController.delete)

export default water_productRouter 