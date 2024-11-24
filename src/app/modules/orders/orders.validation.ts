import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email format.' })
    .min(1, { message: 'Email is required.' }),
  product: z.string().min(1, { message: 'Product name is required.' }),
  quantity: z
    .number()
    .int({ message: 'Quantity must be an integer.' })
    .positive({ message: 'Quantity must be greater than 0.' }),
  totalPrice: z
    .number()
    .positive({ message: 'Total price must be greater than 0.' }),
});


export default orderValidationSchema;