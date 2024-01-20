import { NotFound } from "../Utils/error.js"
import models from "../models/index.js"


export const getAllProducts = async() => {
    const product =models.products
    const model = await product.find()
    if (model) {
        return model
    }
    throw new NotFound('Not found')
}

export const postProducts = async(product) => {
    const model =await new models.products(product)
    if (model) {
        const saveProduct = model.save()
        return saveProduct
    }
    throw new NotFound("Not found")
}

export const updateProducts =async (product) => {
    const id = product.id 
    const products =models.products
    const query = { _id: id }
    const model = await products.findOne(query)
    if (model) {
        const result = await products.updateOne(product)
        return result
    }
    throw new NotFound("Not found")
}

export const deleteById = async(id) => {
    const products = models.products 
    const model = await products.findOne(id)
    if (model) {
        const result = await products.deleteOne(id)
        return result
    }
    throw new NotFound('Not found')
}