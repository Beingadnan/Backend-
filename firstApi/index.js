// importing express.js
const express = require('express');

// creating instance(object) of express to create express app
const app=express();

// Create router instance for routing form express 
const router=express.Router();
// get api creation router.get(path,callback)
router.get('/hello', function(req,res){

    // getting values from query params
    const name=req.query.product;
    const brand=req.query.brand;

    // getting query object
    const data=req.query;

    // console.log(brand)
    res.send({status :'ok',message:data});
})

// global middleware for all api calling defined with router
app.use('/',router)

// code for server start  app.listen(port,callBack function)
app.listen(8000,function (){
    console.log('server started at port:',8000);
})