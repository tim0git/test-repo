const express = require('express');

const app = express();

const apiRouter = require('./routes/apiRouter.js');

const {
  handleInternalErrors,
  handleCustomErrors,
  handlePSQLErrors
} = require('./controllers/error.controller');

app.use(express.json());

app.use('/api', apiRouter);

app.use(handlePSQLErrors);
app.use(handleCustomErrors);
app.use(handleInternalErrors);

module.exports = app;
