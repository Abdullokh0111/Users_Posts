const response = require("./response");

const errorHandler = (handler) => async (req, res, next) => {
  try {
    await handler(req, res, next);
  } catch (error) {
    response(res, 500, error.message);
  }
};

module.exports = errorHandler;
