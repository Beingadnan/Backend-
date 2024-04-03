const express=require('express');
const router = express.Router();
const user=require('../controller/UserController')
router.get('/', user);
module.exports=router;