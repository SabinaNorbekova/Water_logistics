import { Schema, model } from "mongoose"

const adressSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    customer_id: {
        type: Schema.Types.ObjectId,
        ref: "customer",
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    district_id: {
        type: Schema.Types.ObjectId,
        ref: "district",
        required: true
    }
}, { versionKey: false, timestamps: true })

const adressModel = model("address", adressSchema)

export default adressModel