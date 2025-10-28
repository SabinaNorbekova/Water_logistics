import { Router } from "express";

import addressRouter from "./address.router.js";
import customerRouter from "./customer.router.js";
import delivery_staffRouter from "./delivery_staff.router.js";
import districtRouter from "./district.router.js";
import order_itemRouter from "./order_item.router.js";
import orderRouter from "./order.router.js";
import paymentRouter from "./payment.router.js";
import water_productRouter from "./water_product.router.js";

const mainRouter=Router()

mainRouter.use("/address", addressRouter)
mainRouter.use("/custiomer", customerRouter)
mainRouter.use("delivery_staff", delivery_staffRouter)
mainRouter.use("district", districtRouter)
mainRouter.use("order_item", order_itemRouter)
mainRouter.use("order", orderRouter)
mainRouter.use("payment", paymentRouter)
mainRouter.use("water_product", water_productRouter)

export default mainRouter