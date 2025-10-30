import OrderModel from '../models/order.model.js';
import { ApiError } from '../helper/errorMessage.js';
import { createCRUDController } from './base.controller.js';

export const orderControlller=createCRUDController(OrderModel)