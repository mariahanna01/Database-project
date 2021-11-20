
const express=require ('express') ;
 const mysql =require("mysql");
 const app=express();
 const cors=require('cors')
app.use(express.json());
app.use(cors());
 const db= mysql.createConnection({
     user:"maria",
     host:"localhost",
     password:"Paradise2001mh.",
     database:"zourounadatabase",
     
 });
 
 
app.post("/create",(req,res)=> {
    console.log(req.body);
const firstName=req.body.firstName;
const lastName=req.body.lastName;
const email=req.body.email;
const password=req.body.password;
    db.query("INSERT INTO clients(firstName,lastName,email,password) VALUES(?,?,?,?)",
    [firstName,lastName,email,password],(err)=> {
        console.log(err);}
    );
});

 app.listen(3007,() =>{ 
     console.log("running server")
 }) ;
 