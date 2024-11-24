
import express from 'express';
import { orderController } from './orders.controller';

const router = express.Router();

router.post('/create-order', orderController.CreateOrder);



export const OrderRoutes = router;