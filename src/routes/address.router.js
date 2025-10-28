import { Router } from "express"


const addressRouter=Router()

addressRouter.get("/", getAllAddreass)
addressRouter.get("/:id", getOneAddress)
addressRouter.post("/", createAddress)
addressRouter.put("/:id", updateAddress)
addressRouter.delete("/:id", removeAddress)

export default addressRouter 