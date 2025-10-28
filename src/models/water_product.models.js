import { Schema, model } from "mongoose"

const water_productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    volume_liters: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},{ versionKey: false, timestamps: true })

const water_productModel=model("water_product", water_productSchema)

export default water_productModel