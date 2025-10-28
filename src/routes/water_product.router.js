import { Router } from "express"


const water_productRouter=Router()

water_productRouter.get("/", getAllWater_product)
water_productRouter.get("/:id", getOneWater_product)
water_productRouter.post("/", createWater_product)
water_productRouter.put("/:id", updateWater_product)
water_productRouter.delete("/:id", removeWater_product)

export default water_productRouter 