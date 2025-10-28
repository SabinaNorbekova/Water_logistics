import { Router } from "express"


const districtRouter=Router()

districtRouter.get("/", getAllADistrict)
districtRouter.get("/:id", getOneDistrict)
districtRouter.post("/", createDistrict)
districtRouter.put("/:id", updateDistrict)
districtRouter.delete("/:id", removeDistrict)

export default districtRouter 