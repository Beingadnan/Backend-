const express=require('express');
const app=express();
app.use(express.json());

const router=express.Router();

const book=[
    {name:'two states',author:'chetan Bhagat',discription:'xyz'},
    {name:'Half GirlFriend ',author:'chetan Bhagat',discription:'xyz'},
    {name:'Atomic Habit',author:'James Clear',discription:'xyz'},
    {name:'Rich Dad and Poor Dad',author:'XYZ',discription:'xyz'},
]
// const movies=[
//     {name:"Tiger"}
// ]

router.get('/user?author',function(req,res){
   const {author}=req.query;

   for(let i=0;i<book.length;i++){
    if(users[i]==author){
       return res.send(book[i])
    }
   }
    
    return res.send('user not found');
})
app.use('/',router)

app.listen(8000,function(){
    console.log("server stated at port",8000);
})