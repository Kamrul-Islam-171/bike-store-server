
import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/products.routes";

const app = express()

app.use(express.json());
app.use(cors());


//application routes
app.use('/api/products', ProductRoutes);
app.use('/api/products', ProductRoutes);

app.get('/', (req: Request , res : Response ) => {
  res.send('Hello World!')
})

export default app;