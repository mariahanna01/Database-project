//npm run start-server
const express=require ('express') ;
 const mysql =require("mysql");
 const app=express();
 const cors=require('cors')
 const bcrypt=require('bcrypt')
 const saltRounds=10
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

bcrypt.hash(password,saltRounds,(err,hash)=>{

    db.query("INSERT INTO clients(firstName,lastName,email,password) VALUES(?,?,?,?)",
    [firstName,lastName,email,hash],(err)=> {
       if(err){
           alert('Fill in ')
       }
    }
    );
})
app.post("/rating",(req,res)=> {
    console.log(req.body);
const email=req.body.email;
const village=req.body.village;
const rating=req.body.rating;
const idclients=0;
const idvillage=0;
db.query("SELECT idclients FROM clients WHERE email=? ",[email],(err,result)=>{
    if(result){
idclients=result;
console.log(result)
    }
})
db.query("SELECT idvillage FROM village WHERE villageName=? ",[village],(err,result)=>{
    if(result){
idvillage=result;
    }
})

    db.query("INSERT INTO clientvillagerating(idclients,idVillage,rating) VALUES(?,?,?)",
    [idclients,idvillage,rating],(err)=> {
      if(err){
          alert('there is an error')
      }
       }
    
    );
})
    
});
app.post("/addPlan",(req,res)=> {
    console.log(req.body);
const villageName=req.body.villageName;
const planName=req.body.planName;
const capacity=req.body.capacity;
const age=req.body.age;
const price=req.body.price;
const days=req.body.days;
const description=req.body.description;



    db.query("INSERT INTO plan(planName,villageName,capacity,age,days,description,price) VALUES(?,?,?,?,?,?,?)",
    [1,planName,villageName,capacity,age,days,description,price],(err)=> {
       if(err){
          console.log(err)
       }else{
           console.log('succes')
       }
    }
    );
})
    


app.post("/signInClient",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    db.query("SELECT firstName FROM clients WHERE email=? AND password=? ",[email,password],(err,result)=>{
        if(err){
            res.send({err:err})
        }
            if(result){
                res.send(result)
console.log(result)
              
                
            }else{
                res.send({message:"user not found"})
            }
            
        
    });
})
app.post("/signInTourGuide", (req, res) => {
    const email=req.body.email;
    const password=req.body.password;
    db.query("SELECT firstName FROM tourguide WHERE email=? AND password=?",[email,password] ,(err, result) => {
      if (err) {
        console.log(err);
      } if(result) {
        res.send(result);
        console.log(result)
      }
    });
  });





app.post("/signInClientApp",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    db.query("SELECT firstName FROM clients WHERE email=? ",email,(err,result)=>{
        if(err){
            res.send({err:err})
        }
            if(result){
                bcrypt.compare(password,result[0].password,(err,response)=>{
                    if(response){
                        res.send(result)
                        console.log(result)
                    }else{
                        alert('there is no such user')}
                    
                })
                
            }
            
        
    });
})








 app.listen(3050,() =>{ 
     console.log("running ")
 }) ;
 