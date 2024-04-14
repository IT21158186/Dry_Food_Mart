import express from 'express';

import { LoginValidator } from '../middlewares/LoggedIn.js';
import { createOrder, deleteOrder, getAllOrders, getallByUser, updateOrder } from '../controllers/OrderController.js';

const orderRouter = express.Router();

orderRouter.post('/', LoginValidator, createOrder );
orderRouter.get('/all', getAllOrders );
orderRouter.get('/', LoginValidator, getallByUser );
orderRouter.delete('/:id', deleteOrder );
orderRouter.put('/:id', updateOrder );

export default orderRouter;