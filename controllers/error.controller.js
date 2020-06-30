exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ message: err.message });
  } else {
    next(err);
  }
};

exports.handlePSQLErrors = (err, req, res, next) => {
  const codes = {
    '22P02': { status: 400, message: 'Invalid Request' },
    '42703': { status: 400, message: 'Invalid Request' },
    '23502': { status: 400, message: 'Invalid Request' },
    '23503': { status: 404, message: 'Invalid Request' }
  };

  if (err.code in codes) {
    const { status, message } = codes[err.code];
    res.status(status).send({ message });
  } else next(err);
};

// eslint-disable-next-line no-unused-vars
exports.handleInternalErrors = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  res.status(500).send({ message: 'Internal Server Error' });
};
