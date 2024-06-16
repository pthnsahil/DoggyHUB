const express=require('express');
const router =express.Router();

const register=require('../Controllers/User/register.js');
const login=require('../Controllers/User/login.js');

router.post('/register',register);
router.post('/login',login);

module.exports=router;
