const express=require('express');
const app=express();
const router=express.Router();
router.get('/',function(req,res){
    res.send("I aM ADnan");
})
app.use('/',router);
app.listen(8000,function(){
    console.log('server starte at port',8000);
})