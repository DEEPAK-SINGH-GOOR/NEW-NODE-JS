const express = require('express');
const app =express();
const db = require('./db');
const user = require('./userSchema');
app.use(express.json());

app.listen(8090,()=>{
    console.log("Port 8090 Listening");
    db();
})
app.get("/",async(req,res)=>{
    let data = await user.find()
    res.send(data);
})
app.post("/",async(req,res)=>{
    let data = await user.create(req.body)
    res.send(data);
})
app.put("/:id",async(req,res) => {
    let data = await user.findByIdAndUpdate(req.params.id,req.body);
    res.send(data);
});
app.patch("/:id",async(req,res) => {
    let data = await user.findByIdAndUpdate(req.params.id,req.body);
    res.send(data);
});
app.delete("/:id",async(req,res) => {
    let data = await user.findByIdAndDelete(req.params.id);
    res.send({message:"User deleted SuccessFully !!",data:data});
});
