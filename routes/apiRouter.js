const apiRouter = require('express').Router();
const managementRouter = require('./managementRouter');
const venueRouter = require('./venueRouter');
const productRouter = require('./productRouter');

apiRouter.use('/management', managementRouter);
apiRouter.use('/venue', venueRouter);
apiRouter.use('/product', productRouter);

module.exports = apiRouter;
