import waterProductModel from '../models/waterProducts.model.js';
import { ApiError } from '../helper/errorMessage.js';
import { createCRUDController } from './base.controller.js';

export const water_productController=createCRUDController(waterProductModel)