const express = require('express');
const router = express.Router();
const {savePayment, getPayments, getPaymentsById} = require('../../Controllers/payment/paymentController');
const {verifyToken} = require('../../Middleware/fireBase/Auth');

router.post('/payment',verifyToken,savePayment);
router.get('/getPayments',getPayments);
router.get('/getUserPayments',verifyToken,getPaymentsById);

module.exports = router;