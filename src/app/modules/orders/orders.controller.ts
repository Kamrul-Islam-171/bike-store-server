import { Request, Response } from 'express';
import orderValidationSchema from './orders.validation';
import { orderService } from './orders.service';

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const validatedOrder = orderValidationSchema.parse(order);

    const result = await orderService.CreateOderIntoDB(validatedOrder);
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      error,
    });
  }
};

const GetTheRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.GetRevenue();
    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Somethin went wrong',
      error,
    });
  }
};

export const orderController = {
  CreateOrder,
  GetTheRevenue,
};
