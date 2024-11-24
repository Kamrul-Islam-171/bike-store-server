
import express from 'express';
import { productControler } from './products.controller';

const router = express.Router();


//route calls the controller function
router.post('/create-product', productControler.createProduct);
router.get('/', productControler.getAllBikes);
router.get('/:productId', productControler.getSingleBike);

export const ProductRoutes = router;