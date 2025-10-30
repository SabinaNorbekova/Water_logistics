import orderItemModel from '../models/orderItem.model.js';
import { ApiError } from '../helper/errorMessage.js';
import { createCRUDController } from './base.controller.js';

export const order_itemController=createCRUDController(orderItemModel)
