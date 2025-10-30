import customerModel from '../models/customer.models.js';
import { ApiError } from '../helper/errorMessage.js';
import { createCRUDController } from './base.controller.js';

export const addressController = createCRUDController(addressModel);