import { Router } from "express"
import { districtController } from "../controllers/district.controller.js"

const districtRouter=Router()

districtRouter.get("/", districtController.getAll)
districtRouter.get("/:id", districtController.getOne)
districtRouter.post("/", districtController.create)
districtRouter.put("/:id", districtController.update)
districtRouter.delete("/:id", districtController.delete)

export default districtRouter 