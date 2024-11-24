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

const updateProductIntoDB = async(id : string, product : Product) => {
    // const result = await ProductModel.updateOne({_id : new mongoose.Types.ObjectId(id)}, {...product});

    //update the data and give you the details of updated data
    const result = await ProductModel.findByIdAndUpdate({_id : new mongoose.Types.ObjectId(id)}, product, { new : true});
    return result;

}

const deleteProductFromDB = async(id : string) => {
    const result = await ProductModel.deleteOne({_id : new mongoose.Types.ObjectId(id)});
    return result;
}

export const productService = {
    createProductIntoDB, 
    getAllBikesFromDB,
    getSingleBikeFromDB,
    updateProductIntoDB,
    deleteProductFromDB
}