import { Schema, model } from "mongoose";

const customerSchema=new Schema({
    name: {
        type:String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
},{versionKey: false, timestamps: true})

const customerModel=model("customer", customerSchema)

export default customerModel