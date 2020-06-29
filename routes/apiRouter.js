const apiRouter = require('express').Router();
const managementRouter = require('./managementRouter');
const venueRouter = require('./venueRouter');

apiRouter.use('/management', managementRouter);
apiRouter.use('/venue', venueRouter);

module.exports = apiRouter;
