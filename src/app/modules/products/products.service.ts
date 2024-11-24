import { Product } from "./products.interface";
import { ProductModel } from "./products.model";


const createProductIntoDB = async(product : Product) => {
    const result = await ProductModel.create(product);
    return result;
}

const getAllBikesFromDB = async() => {
    const result = await ProductModel.find();
    return result;
}

export const productService = {
    createProductIntoDB, 
    getAllBikesFromDB
}