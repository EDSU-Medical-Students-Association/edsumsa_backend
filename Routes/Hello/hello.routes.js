const express = require('express');
const router = express.Router();
const {hello, test} = require('../../Controllers/Hello/hello');

router.get('/',hello);
router.get('/testing',test);

module.exports = router;
