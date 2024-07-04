const express = require('express');
const router = express.Router();
const usersRouter = require('./user');
const productRouter = require('./product');
const webRouter = require('./web');
const adminRouter = require('./admin');

router.use('/api/admin', adminRouter);
router.use('/api/user', usersRouter);
router.use('/api/product', productRouter);
router.use('/', webRouter);

module.exports = router;
