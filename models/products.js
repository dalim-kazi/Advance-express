import mongoose from "mongoose";
const productsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    discretion: { type: String, required: true },
    price: { type: Number, required: true },
    price2:{type:Number,required:true}
})

const products = mongoose.model("products", productsSchema)
export default products