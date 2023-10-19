function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHadler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHadler,
};
