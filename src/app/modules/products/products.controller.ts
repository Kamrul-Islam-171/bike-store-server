import { Request, Response } from 'express';
import { productService } from './products.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await productService.createProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: 'Bike created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: 'Something went wrong',
        error
    })
  }
};

export const productControler = {
    createProduct
}