// importing express.js
const express = require('express');

// creating instance(object) of express to create express app
const app=express();

// Create router instance for routing form express 
const router=express.Router();

// enabling json data read
app.use(express.json());

// get api creation router.get(path,callback)
router.get('/:country/user/:state', function(req,res){

    // getting values from query params
    // const name=req.query.product;
    // const brand=req.query.brand;

    // getting query object

    // const data=req.query;

    // Destructring the query param
    // const{name,brand}=req.query;

    // accessing path param
    const countryName=req.params
    console.log(countryName)

    // accessing body req
    const user=req.body;
    console.log(user)
    

    res.send({status :'ok',message:{name:name,brand:brand,user:user}});
})

// global middleware for all api calling defined with router
app.use('/',router)

// code for server start  app.listen(port,callBack function)
app.listen(8001,function (){
    console.log('server started at port:',8001);
})