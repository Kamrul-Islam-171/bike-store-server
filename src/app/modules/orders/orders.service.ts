import mongoose from "mongoose";
import { ProductModel } from "../products/products.model";
import { Order } from "./orders.interface";
import { OrderModel } from "./orders.model";

const CreateOderIntoDB = async(order: Order) => {
    const result = await OrderModel.create(order);
    await ProductModel.findByIdAndUpdate({_id : new mongoose.Types.ObjectId(order.product)}, {
        $inc : {quantity : -order.quantity}
    });
    return result;
}


export const orderService = {
    CreateOderIntoDB
}