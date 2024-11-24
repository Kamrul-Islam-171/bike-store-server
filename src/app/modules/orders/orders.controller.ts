import { Request, Response } from "express";
import orderValidationSchema from "./orders.validation";
import { orderService } from "./orders.service";


const CreateOrder = async(req:Request, res: Response) => {
    try {
        const order = req.body;
        const validatedOrder = orderValidationSchema.parse(order);

        const result = await orderService.CreateOderIntoDB(validatedOrder);
        res.status(200).json({
            success: true,
            message: 'Order created successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Validation failed',
            error,
          });
    }
}


export const orderController = {
    CreateOrder
}