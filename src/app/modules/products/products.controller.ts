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
    res.status(404).json({
      success: false,
      message: 'Validation failed',
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
    res.status(404).json({
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
      message: 'Bike retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const updateProduct = async(req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updatedProduct = req.body;
    const result = await productService.updateProductIntoDB(productId,updatedProduct);
    res.status(200).json({
      success: true,
      message: 'Bike updated successfully',
      data: result,
    });
  } catch(error) {
    res.status(404).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
}

const deleteProduct = async(req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    
    const result = await productService.deleteProductFromDB(productId);
    if(result.deletedCount) {

      res.status(200).json({
        success: true,
        message: 'Bike deleted successfully',
        data: {},
      });
    }
    else {
      res.status(200).json({
        success: true,
        message: 'Bike already deleted ',
        data: {},
      });
    }
  } catch(error) {
    res.status(404).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
}

export const productControler = {
  createProduct,
  getAllBikes,
  getSingleBike,
  updateProduct,
  deleteProduct
};
