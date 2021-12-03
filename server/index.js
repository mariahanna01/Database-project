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
     multipleStatements: true
 },);
 
 
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

    
})






app.post("/addPlan",(req,res)=> {
    console.log(req.body);
const villageName=req.body.villageName;
const planName=req.body.planName;
const capacity=req.body.capacity;
const age=req.body.age;
const price=req.body.price;
const days=req.body.days;
const description=req.body.description;
const email=req.body.tourguidemail;
const pictureurl=req.body.pictureurl;


    db.query("INSERT INTO plan(villageName,planName,capacity,age,price,days,pictureurl,description,idtourguide) VALUES(?,?,?,?,?,?,?,?,(SELECT idtourguide FROM tourguide WHERE email=? ))",
    [villageName,planName,capacity,age,price,days,pictureurl,description,email],(err)=> {
       if(err){
          console.log(err)
       }else{
           console.log('succes')
       }
    }
    );
})
    
app.post("/additemfavorite",(req,res)=> {
    console.log(req.body);
const email=req.body.email;
const message=req.body.message;

    db.query("INSERT INTO favorite(idclients,description) VALUES( (SELECT idclients FROM clients WHERE email=?),?)",
    [email,message],(err)=> {
       if(err){
          console.log(err)
       }else{
           console.log('succes')
       }
    }
    );
})

app.post("/deleteitemfavorite",(req,res)=> {
    console.log(req.body);
const email=req.body.email;
const message=req.body.message;

    db.query("DELETE from favorite(idclients,description) VALUES( (SELECT idclients FROM clients WHERE email=?),?)",
    [email,message],(err)=> {
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

app.post("/planToGet",(req,res)=>{
    const villageName=req.body.villageName;
    

    db.query("SELECT * FROM plan WHERE villageName=? ",[villageName],(err,result)=>{
        if(err){
            res.send({err:err})
        }
            if(result){
                res.send(result)

              
                
            }else{
                res.send({message:"user not found"})
            }
            
        
    });
})

app.post("/getTourguide",(req,res)=>{
    const idtourguide=req.body.idtourguide;
    

    db.query("SELECT firstName,lastName,email,number FROM tourguide WHERE idtourguide=? ",[idtourguide],(err,result)=>{
        if(err){
            res.send({err:err})
        }
            if(result){
                res.send(result)

              
                
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

    db.query("SELECT firstName FROM clients WHERE email=? ",[email],(err,result)=>{
        if(err){
            console.log(err)
            res.send({err:err})
        }
            if(result){
                
                bcrypt.compare(password,result[0].password,(err,response)=>{
                    if(result){
                        
                        res.send(result)
                        console.log(result)
                    }
                    
                })
                
            }
            
        
    });
})

app.post("/getPlans",(req,res)=>{
    const email=req.body.email;
  

    db.query("SELECT * FROM plan WHERE idtourguide=(SELECT idtourguide FROM tourguide WHERE email=?) ",[email],(err,result)=>{
        if(err){
            res.send({err:err})
        }
            if(result){
                res.send(result)

              
                
            }
            
        
    });
})


app.post("/editPlan",(req,res)=>{
   const planName=req.body.planName
   const capacity=req.body.capacity
   const age=req.body.age
   const price=req.body.price
   const days=req.body.days
   const description=req.body.description
   const pictureurl=req.body.pictureurl
  

    db.query("UPDATE plan SET capacity=?, age=? ,price=?, days=? ,desciption=? ,pictureurl=? WHERE planName=?") ,[capacity,age,price,days,description,pictureurl,planName],(err,result)=>{
        if(err){
            res.send({err:err})
        }
            if(result){
                res.send(result)

              
                
            }
            
        
    };
})






app.post("/book",(req,res)=> {
    console.log(req.body);
const planName=req.body.planName;
const email=req.body.user;
const time=req.body.time;
const date=req.body.date

    db.query("INSERT INTO booking(idclient,idplanBooked,time,date) VALUES((SELECT idclients FROM clients WHERE email=?),(SELECT idplan FROM plan WHERE planName=?),?,?)",
    [email,planName,time,date],(err)=> {
       if(err){
          console.log(err)
       }else{
           console.log('succes')
       }
    }
    );
})
app.post("/checkPlan",(req,res)=>{
  const planName=req.body.planName

    db.query("SELECT COUNT(*) AS number FROM booking WHERE idplanBooked =(SELECT idplan FROM plan WHERE planName=?) ",[planName],(err,result)=>{
        if(err){
            res.send({err:err})
        }
            if(result){
                
                res.send(result)
                    }else{
                        }
                    
                })
                
            }
            
        
    );

    app.post("/getBookings",(req,res)=>{
        const email=req.body.email;
      
    
        db.query("SELECT * FROM clients JOIN booking JOIN plan ON (clients.idclients=booking.idclient  and plan.idplan=booking.idplanBooked)) ",[email],(err,result)=>{
            if(err){
                console.log(err)
                res.send({err:err})
            }
                if(result){
                    console.log(result)
                    res.send(result)
    
                  
                    
                }
                
            
        });
    })

    app.post("/avgRating",(req,res)=>{
        const villageName=req.body.villageName;
      
          db.query("SELECT AVG(ratingVillage) AS rating FROM clientvillagerating WHERE villageID =(SELECT idvillage FROM village WHERE villageName=?) ",[villageName],(err,result)=>{
              if(err){
                console.log(err)
                  res.send({err:err})
              }
                  if(result){
                   
                      res.send(result)
                          }else{
                              }
                          
                      })
                      
                  }
                  
              
          );  
          app.post("/sendRating",(req,res)=>{
            const villageName=req.body.villageName;
            const email=req.body.email;
          const rating=req.body.value
              db.query("INSERT into clientvillagerating(clientID,villageID,ratingVillage) VALUES((SELECT idclients FROM clients WHERE email=?),(SELECT idvillage FROM village WHERE villageName=?),?) ",[email,villageName,rating],(err,result)=>{
                  if(err){
                    console.log(err)
                      res.send({err:err})
                  }
                      if(result){
                       console.log('success')
                          res.send(result)
                              }else{
                                  }
                              
                          })
                          
                      }
                      
                  
              );  
    




 app.listen(3050,() =>{ 
     console.log("running ")
 }) ;
 