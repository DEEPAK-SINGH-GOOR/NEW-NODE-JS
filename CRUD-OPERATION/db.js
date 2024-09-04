const {connect}=require("mongoose");

const db=async()=>{
    await connect("mongodb://localhost:27017/Mydb");
    console.log("connect SuccessFully !!");   
}
module.exports=db
 
