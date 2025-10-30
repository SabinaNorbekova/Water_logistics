import paymentModel from '../models/payment.models.js';
import { ApiError } from '../helper/errorMessage.js';
import { createCRUDController } from './base.controller.js';

export const paymentController=createCRUDController(paymentModel)