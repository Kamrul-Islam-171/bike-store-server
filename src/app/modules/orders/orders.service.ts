import { Order } from "./orders.interface";
import { OrderModel } from "./orders.model";

const CreateOderIntoDB = async(order: Order) => {
    const result = await OrderModel.create(order);
    return result;
}


export const orderService = {
    CreateOderIntoDB
}