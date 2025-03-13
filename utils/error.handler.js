const response = require("./response");

let errorHandler = (funk) => {
  return (req, res, next) => {
    funk(req, res, next).catch((err) => {
      console.log(err, "yerror");
      response(res, 404, "Xatolik sodir bo'ldi: ");
    });
  };
};

module.exports = errorHandler;
