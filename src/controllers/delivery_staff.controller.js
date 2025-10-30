import deliveryStaffModel from '../models/deliveryStaff.model.js';
import { ApiError } from '../helper/errorMessage.js';
import { createCRUDController } from './base.controller.js';

export const delivery_staffController=createCRUDController(deliveryStaffModel)