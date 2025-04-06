const errorHanlder = (err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHanlder;
