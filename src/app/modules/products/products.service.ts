import mongoose from "mongoose";
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

const getSingleBikeFromDB = async(id : string) => {
    const result = await ProductModel.findById({_id: new mongoose.Types.ObjectId(id)});
    return result;
}

export const productService = {
    createProductIntoDB, 
    getAllBikesFromDB,
    getSingleBikeFromDB
}