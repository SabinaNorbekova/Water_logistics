import { Router } from "express"


const order_itemRouter=Router()

order_itemRouter.get("/", getAllOrder_item)
order_itemRouter.get("/:id", getOnOrder_item)
order_itemRouter.post("/", creatOrder_item)
order_itemRouter.put("/:id", updatOrder_item)
order_itemRouter.delete("/:id", removOrder_item)

export default order_itemRouter 