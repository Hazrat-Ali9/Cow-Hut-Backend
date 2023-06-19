import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OrderValidation } from './order.validation';
import { OrderController } from './order.controller';
const router = express.Router();

// router.get('/', CowController.getAllCows);
router.post(
  '/',
  validateRequest(OrderValidation.addOrderZodSchema),
  OrderController.cowOrder
);

router.get("/", OrderController.getAllOrders)

export const OrderRoutes = router;
