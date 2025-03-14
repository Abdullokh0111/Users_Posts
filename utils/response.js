const response = (res, statusCode, message) => {
  res.status(statusCode).json({ message: message, statusCode: statusCode });
};

module.exports = response;
