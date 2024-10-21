const express= require('express');
const router= express.Router();

const users=[
    {id:1,name:'Ahmed',age:20},
    {id:2, name:'Aziz',age:22},
    {id:3,name:'Mohammed',age:21}
];


router.get('/users',(req,res)=>{
    res.send(users);
});

router.post('/users',(req,res)=>{
    const user=req.body;
    users.push(user);
    res.status(200).send("user added succefully");
   
})

router.delete('/users/:uid',(req,res)=>{
    let index = users.findIndex(user => user.id === parseInt(req.params.uid));
    console.log(parseInt(req.params.uid))
    if(index===-1){
        res.send('user doesnt exist');
    }
   

    users.splice(index,1);
        res.status(200).send('user deleted successfully');
        return
   

})

router.put('/users/:uid',(req,res)=>{
    let index = users.findIndex(user => user.id === parseInt(req.params.uid));
    
    if(index===-1){
        res.send('user doesnt exist');
    }
   

    users.splice(index,1);
    users.push(req.body);
        res.status(200).send('user updated successfully');
        return
   

})

module.exports = router;
