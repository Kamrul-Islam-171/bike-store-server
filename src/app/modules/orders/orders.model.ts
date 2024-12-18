import { model, Schema } from "mongoose";
import { Order } from "./orders.interface";

const orderSchema = new Schema<Order>({
    email : {type : String, required : true},
    product: {type : String, required : true},
    quantity: {type : Number, required : true},
    totalPrice: {type : Number, required : true},
}, {timestamps : true})


export const OrderModel = model<Order>('OrderModel', orderSchema);