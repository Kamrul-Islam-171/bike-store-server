import mongoose from 'mongoose';
import { ProductModel } from '../products/products.model';
import { Order } from './orders.interface';
import { OrderModel } from './orders.model';

const CreateOderIntoDB = async (order: Order) => {

  const product = await ProductModel.findById({_id: new mongoose.Types.ObjectId(order.product)});

  if(!product) {
    throw new Error("Product is not found");
  }
  if(product.quantity < order.quantity) {
    throw new Error("Insufficient stock to fulfill the order.");
  }
  const result = await OrderModel.create(order);

  await ProductModel.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(order.product) },
    {
      $inc: { quantity: -order.quantity },
    },
  );
  const productUpdate = await ProductModel.findById({_id: new mongoose.Types.ObjectId(order.product)});
  if(!productUpdate) {
    throw new Error("Product is not found");
  }
  if(productUpdate.quantity === 0) {
    await ProductModel.updateOne({_id: new mongoose.Types.ObjectId(order.product)}, {$set: {inStock: false}} )
  }
  return result;
};

const GetRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $project: {
        total: { $multiply: ['$totalPrice', '$quantity'] },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$total' },
      },
    },
    {
      $project: {
        _id:0,
        totalRevenue: 1,
      },
    },
  ]);

  return result;
};

export const orderService = {
  CreateOderIntoDB,
  GetRevenue,
};
