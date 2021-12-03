import {React, useState,useEffect} from 'react';
import Plan from '../Plan/Plan'
import './Plans.css'
import Axios from 'axios'
export default function PlansVillage5() {
const plansToGet=()=>{
    
    Axios.post('http://localhost:3050/planToGet',{
       villageName:'Bsharri'
      }).then((response)=>{
        if(response.data){
       setPlans(response.data)
        
        }}).catch(error=>{
          console.log(error.response)
        })
     
    }
 


const [plans,setPlans]=useState([]);
useEffect(()=>{
    plansToGet()
}

)
    return (
        
        <div className="main2karen">
         

         {plans.map((plan,key)=>{
 return (
    
   <Plan villageName={plan.villageName} planName={plan.planName} capacity={plan.capacity} age={plan.age} price={plan.price} days={plan.days} pictureurl={plan.pictureurl} description={plan.description} idtourguide={plan.idtourguide}/>
  

 )
          }

          )}
            
           
            
           
           
               
            

        </div>
        
    )
}
