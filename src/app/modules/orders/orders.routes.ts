
import express from 'express';
import { orderController } from './orders.controller';

const router = express.Router();

router.post('/', orderController.CreateOrder);
router.get('/revenue', orderController.GetTheRevenue);



export const OrderRoutes = router;