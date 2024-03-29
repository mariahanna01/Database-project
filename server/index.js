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
const points=req.body.points;
bcrypt.hash(password,saltRounds,(err,hash)=>{
db.query("SELECT COUNT(*) AS number FROM clients WHERE email=?",[email],(err1,result1)=>{

    if(result1[0].number==0){
  db.query("INSERT INTO clients(firstName,lastName,email,password,points) VALUES(?,?,?,?,?)",
        [firstName,lastName,email,hash,points],(err)=> {
           if(err){
              res.send("error")
           }
        }
        )
    }



      

    
        
       
    }
)


   
})

    
})

app.post("/checkEmail",(req,res)=>{
    const email=req.body.email
    

    db.query("SELECT COUNT(*) AS number FROM clients WHERE email=? ",[email],(err,result)=>{
        if(err){
            res.send({err:err})
        }
            if(result){
                console.log(result)
                res.send(result)

              
                
            }else{
                res.send({message:"user not found"})
            }
            
        
    });
})





app.post("/addPlan",(req,res)=> {
    console.log(req.body);
const villageName=req.body.villageName;
const planName=req.body.planName;
const date=req.body.date;
const capacity=req.body.capacity;
const age=req.body.age;
const price=req.body.price;
const days=req.body.days;
const description=req.body.description;
const email=req.body.tourguidemail;
const pictureurl=req.body.pictureurl;
console.log(req.body)

    db.query("INSERT INTO plan(villageName,planName,date,capacity,age,price,days,pictureurl,description,idtourguide) VALUES(?,?,?,?,?,?,?,?,?,(SELECT idtourguide FROM tourguide WHERE email=? ))",
    [villageName,planName,date,capacity,age,price,days,pictureurl,description,email],(err)=> {
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
      }else{
          res.json({message:"wrong email or password"})
      }
    });
  });





app.post("/signInClientApp",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    db.query("SELECT firstName,password FROM clients WHERE email=?   ",email,(err,result)=>{
        if(err){
            console.log(err)
            res.send({err:err})
        }
            if(result){
                
                bcrypt.compare(password,result[0].password,(err,response)=>{
                    if(err){
                        
                        
                        console.log("error")
                    }
                    if(response){
res.send(result)
                    }else{
res.json({message:"not matching"})
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
   db.query("UPDATE plan SET capacity=?,age=?,price=?,days=?,description=?,pictureurl=?,accepted=? WHERE planName=?",[capacity,age,price,days,description,pictureurl,"false",planName],(err,result)=>{
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
      
    
        db.query(" SELECT clients.firstName AS firstName,clients.lastName AS lastName,clients.email AS email,plan.planName AS planName,booking.date AS date FROM clients JOIN booking ON clients.idclients=booking.idclient JOIN plan ON plan.idplan=booking.idplanBooked WHERE plan.idtourguide=(SELECT idtourguide FROM tourguide WHERE email=?)",[email],(err,result)=>{
            if(err){
                console.log(err)
                res.send({err:err})
            }
                if(result){
                   
                    res.send(result)
    
                  
                    
                }
                
            
        });
    })

    app.post("/avgRating",(req,res)=>{
        const villageName=req.body.villageName;
      
          db.query("SELECT AVG(ratingVillage) AS rating,villageID FROM clientvillagerating WHERE villageID =(SELECT idvillage FROM village WHERE villageName=?) ",[villageName],(err,result)=>{
              if(err){
                console.log(err)
                  res.send({err:err})
              }
                  if(result){
                   
                      res.send(result)
                   console.log(result[0])
                      db.query("UPDATE village SET rating_avg=? WHERE idVillage=? ",[result[0].rating,result[0].villageID],(error,result2)=>{
                          if(error){console.log(error)}
                      })

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
    

              app.post("/getpoints",(req,res)=>{
                const email=req.body.email;
              
            
                db.query("SELECT COUNT(*) AS points FROM booking WHERE idclient=(SELECT idclients FROM clients WHERE email=?)",[email],(err,result)=>{
                    if(err){
                        console.log(err)
                        res.send({err:err})
                    }
                        if(result){
                            console.log(result)
                           
                            res.send(result)
            
                          db.query("UPDATE clients SET points=? WHERE email=?",[result[0].points,email],(err2,resutl2)=>{
                              if(err2){
                                  console.log(err2)
                              }
                          }
                          )
                            
                        }
                        
                    
                });
            })

            app.post("/updatepoints",(req,res)=>{
                const email=req.body.user;
              const points=req.body.points;
            
                db.query("UPDATE clients SET points=? WHERE email=?",[points,email],(err,result)=>{
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

 app.listen(3050,() =>{ 
     console.log("running ")
 }) ;
 