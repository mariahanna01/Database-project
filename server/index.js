 const express=require ('express') 
 const app=express()

 app.get("/",(req,res)=> {
    res.send("hi chloe");
});

 app.listen(3002,() =>{
     console.log("ladida dida")
 }) ;
 