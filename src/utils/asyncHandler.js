const asyncHandler = (func) => {
  return (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch((err) => next(err));
  };
};

/*
const asyncHandler = (func) => {
  async (req, res, next) => {
    try {
      await func(req,res, next);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};
*/

export { asyncHandler };
