const express=require('express');
const router =express.Router();

const fetchEnquiries=require('../Controllers/Enquiry/fetchEnquiries.js');
const addEnquiry=require('../Controllers/Enquiry/addEnquiry.js');

router.post('/enquiry',addEnquiry);
router.post('/fetch_enquiries',fetchEnquiries);

module.exports=router;