import orderItemModel from '../models/orderItem.model.js';
export const orderItemController = {
  getAll: async (req, res, next) => {
    try {
      const model = orderItemModel;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const search = req.query.search || '';
      const skip = (page - 1) * limit;
      const fields = Object.keys(model.schema.paths).filter(
        (f) => !['_id', '__v', 'createdAt', 'updatedAt'].includes(f),
      );
      const query = search
        ? {
            $or: fields.map((field) => ({
              [field]: { $regex: search, $options: 'i' },
            })),
          }
        : {};
      const [data, total] = await Promise.all([
        model.find(query).populate('order').exec().skip(skip).limit(limit).sort({ createdAt: -1 }),
        model.countDocuments(query),
      ]);
      return res.status(200).json({
        success: true,
        message: `Retrived all data succesfully!`,
        data,
        total,
        limit,
        page,
      });
    } catch (error) {
      return next(error);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const model = orderItemModel;
      const { id } = req.params;
      const data = await model.findOne({ _id: id });
      if (!data) {
        return res.status(404).json({
          success: false,
          message: `Not found such an id!`,
          id,
        });
      }
      return res.status(200).json({
        success: true,
        message: `Retrived all data succesfully!`,
        data,
      });
    } catch (error) {
      return next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const model = orderItemModel;
      const body = req.validatedData;
      const data = await model.create(body);
      return res.status(201).json({
        success: true,
        message: `Created succesfully!`,
        data,
      });
    } catch (error) {
      return next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const model = orderItemModel;
      const { id } = req.params;
      const body = req.validatedData;
      const data = await model.findByIdAndUpdate(id, body, { new: true });
      if (!data) {
        return res.status(404).json({
          success: false,
          message: `Not found such an id!`,
          id,
        });
      }
      return res.status(200).json({
        success: true,
        message: `UPDATED SUCCESSFULLY!`,
        data,
      });
    } catch (error) {
      return next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const model = orderItemModel;
      const { id } = req.params;
      const data = await model.findByIdAndDelete({ _id: id });
      if (!data) {
        return res.status(404).json({
          success: false,
          message: `Not found such an id!`,
          id,
        });
      }
      return res.status(200).json({
        success: true,
        message: `Deleted succesfully!`,
        data,
      });
    } catch (error) {
      return next(error);
    }
  },
};