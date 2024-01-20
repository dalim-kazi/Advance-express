import express from "express";
import connectWithDB from "./mongo.js";
import configure from "./Controllers/UserController.js";
import handleError from "./middleware/handleError.js";

const app = express()
const port = 3000
app.use(express.json())


// connect function
connectWithDB()
configure(app)
app.use(handleError)
app.listen(port, () => {
    console.log("server running "  + port)
})