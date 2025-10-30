import addressModel from '../models/address.model.js';
import { ApiError } from '../helper/errorMessage.js';
import { createCRUDController } from './base.controller.js';

export const addressController = createCRUDController(addressModel);