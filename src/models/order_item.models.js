import { Schema, model } from "mongoose"

const order_itemSchema = new Schema({
    order_id: {
        type: Schema.Types.ObjectId,
        ref: "order",
        required: true
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "water_product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        default: 0.00
    }
}, { versionKey: false, timestamps: true })

const order_itemModel=model("order_item", order_itemSchema)

export default order_itemModel