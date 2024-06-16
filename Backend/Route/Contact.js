const express=require('express');
const router =express.Router();

const addContact=require('../Controllers/Contact/addContact.js')
const fetchContacts=require('../Controllers/Contact/fetchContacts.js')

router.post('/contact',addContact);
router.post('/fetch_contacts',fetchContacts);

module.exports=router;