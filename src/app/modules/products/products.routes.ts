
import express from 'express';
import { productControler } from './products.controller';

const router = express.Router();


//route calls the controller function
router.post('/create-product', productControler.createProduct);

export const ProductRoutes = router;