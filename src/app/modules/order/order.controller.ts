import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IOrder } from './order.interface';
import { OrderService } from './order.service';

const cowOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const cow: IOrder = req.body;

    const result = await OrderService.cowOrder(cow);

    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow Ordered successfully!',
      data: result,
    });
  }
);

const getAllOrders: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OrderService.getAllOrders();

    sendResponse<IOrder[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All Orders fetched successfully!',
      data: result,
    });

  }
);


export const OrderController = {
  cowOrder,
  getAllOrders,
};
