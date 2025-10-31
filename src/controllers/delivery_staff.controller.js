import deliveryStaffModel from '../models/deliveryStaff.model.js';
import { ApiError } from '../helper/errorMessage.js';
import { createCRUDController } from './base.controller.js';

export const deliveryStaffController=createCRUDController(deliveryStaffModel)