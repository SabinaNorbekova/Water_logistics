import { Router } from "express"


const delivery_staffRouter=Router()

delivery_staffRouter.get("/", getAllStaff)
delivery_staffRouter.get("/:id", getOneStaff)
delivery_staffRouter.post("/", createStaff)
delivery_staffRouter.put("/:id", updateStaff)
delivery_staffRouter.delete("/:id", removeStaff)

export default delivery_staffRouter 