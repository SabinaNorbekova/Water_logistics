import express from "express"
import mongoose from "mongoose"
import mainRouter from "./src/routes/index.js"

const app = express()
app.use(express.json())
const PORT = 4000

app.use("/", mainRouter)

async function bootstrap(params) {
    try {
        await mongoose.connect("mogodb://localhost:27017")
        console.log(`Mongodb connnected succesfully`)
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (err) {
        console.log(err);
    }
}

bootstrap()
