import { Schema, model } from "mongoose"

const paymentSchema = new Schema({
    order_id: {
        type: Schema.Types.ObjectId,
        ref: "order",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    payment_date: {
        type: Date,
        default: Date.now()
    },
    method: {
        type: String,
        enum: ['cash', 'credit']
    }
}, { versionKey: false, timestamps: true })

const paymentModel = model("payment", paymentSchema)

export default paymentModel