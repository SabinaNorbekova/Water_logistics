import districtModel from '../models/district.model.js';
import { ApiError } from '../helper/errorMessage.js';
import { createCRUDController } from './base.controller.js';

export const districtController=createCRUDController(districtModel)

