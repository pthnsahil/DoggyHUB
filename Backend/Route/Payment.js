const express=require('express');
const router =express.Router();

const pay=require('../Controllers/Payment/pay.js')

router.post('/pay',pay);

module.exports=router;