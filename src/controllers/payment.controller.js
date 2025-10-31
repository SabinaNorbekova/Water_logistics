import paymentModel from '../models/payment.model.js';
import { ApiError } from '../helper/errorMessage.js';
import { createCRUDController } from './base.controller.js';

export const paymentController=createCRUDController(paymentModel)