
const express=require ('express') ;
 const mysql =require("mysql");
 const app=express();
 const cors = require("cors");
app.use(express.json());
app.use(cors());
 const db= mysql.createConnection({
     user:"root",
     host:"localhost",
     password:"password",
     database:"zourouna",
 });
 
 
app.post("/register",(req,res)=> {

    const email=req.body.email;
    const password=req.body.password;

    db.query("INSERT INTO clients(email,password) VALUES(?,?)",
    [email,password],(err,result)=> {
        console.log(err);}
    );
});

 app.listen(3008,() =>{ 
     console.log("running server")
 }) ;
 