const  express = require('express');
const router = express.Router();
const helloRoute = require('./Hello/hello.routes');
const paymentRoute = require('./payment/payment.route');

router.get('/',helloRoute);
router.get('/testing',helloRoute);
router.post('/payment',paymentRoute);
router.get('/getPayments',paymentRoute);
router.get('/getUserPayments',paymentRoute);



module.exports = router;
