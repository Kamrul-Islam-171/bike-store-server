import { Request, Response } from 'express';
import { productService } from './products.service';
import productValidationSchema from './products.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    //validate the data using zod validation
    const validatedProduct = productValidationSchema.parse(product);

    const result = await productService.createProductIntoDB(validatedProduct);

    res.status(200).json({
      success: true,
      message: 'Bike created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getAllBikes = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllBikesFromDB();
    res.status(200).json({
      success: true,
      message: 'Bikes retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getSingleBike = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getSingleBikeFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Bikes retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const productControler = {
  createProduct,
  getAllBikes,
  getSingleBike
};
