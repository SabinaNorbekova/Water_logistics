export const createCRUDController = (Model) => ({
  getAll: async (req, res, next) => {
    try {
      const page = Math.max(1, parseInt(req.query.page) || 1);
      const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
      const search = req.query.search?.trim() || '';
      const skip = (page - 1) * limit;

      const stringFields = Object.keys(Model.schema.paths)
        .filter((field) => {
          const instance = Model.schema.paths[field].instance;
          return instance === 'String' && !['__v', 'createdAt', 'updatedAt'].includes(field);
        });

      const query = { ...(search && {
        $or: stringFields.map((field) => ({
          [field]: { $regex: search, $options: 'i' }
        }))
      })};

      if (req.user.role !== 'admin') {
        query.customer_id = req.user.id;
      }

      const [data, total] = await Promise.all([
        Model.find(query)
          .select('-__v')
          .skip(skip)
          .limit(limit)
          .sort({ createdAt: -1 })
          .lean(),
        Model.countDocuments(query)
      ]);

      return res.status(200).json({
        success: true,
        message: 'Data retrieved successfully!',
        data,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit)
        }
      });
    } catch (error) {
      next(error);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const query = { _id: id };

      if (req.user.role !== 'admin') {
        query.customer_id = req.user.id;
      }

      const data = await Model.findOne(query).select('-__v').lean();
      if (!data) {
        return next(new ApiError(404, 'Not found such data'));
      }

      return res.status(200).json({
        success: true,
        message: 'Data retrieved successfully!',
        data
      });
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const body = { ...req.validatedData };

      if (req.user.role !== 'admin') {
        body.customer_id = req.user.id;
      }

      const data = await Model.create(body);

      return res.status(201).json({
        success: true,
        message: 'succesfully created',
        data
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.validatedData;

      const query = { _id: id };
      if (req.user.role !== 'admin') {
        query.customer_id = req.user.id;
      }

      const data = await Model.findOneAndUpdate(query, body, {
        new: true,
        runValidators: true
      }).select('-__v');

      if (!data) {
        return next(new ApiError(404, 'Not found such data'));
      }

      return res.status(200).json({
        success: true,
        message: 'updated succesfully',
        data
      });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const query = { _id: id };

      if (req.user.role !== 'admin') {
        query.customer_id = req.user.id;
      }

      const data = await Model.findOneAndDelete(query);

      if (!data) {
        return next(new ApiError(404, 'Not found such data'));
      }

      return res.status(200).json({
        success: true,
        message: 'succesfully deleted',
        data
      });
    } catch (error) {
      next(error);
    }
  }
});
