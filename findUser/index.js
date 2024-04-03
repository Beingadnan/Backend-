const express=require('express');
const app=express();
app.use(express.json());

const router=express.Router();

const users=[{name:"adnan",branch:"B.tech"},{name:"azmir",branch:"B.tech"},{name:"ashfak",branch:"B.tech"},{name:"paradip",branch:"B.tech"}]

router.get('/user',function(req,res){
    const {name}=req.body
    for(let i=0;i<users.length;i++){
        if(users[i].name==name){
            res.send(users[i])
            return;
    }
    }
    
    return res.send('user not found');
})
app.use('/',router)

app.listen(8000,function(){
    console.log("server stated at port",8000);
})