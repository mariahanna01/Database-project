import {React, useState,useEffect} from 'react';
import Plan from '../Plan/Plan'
import './Plans.css'
import Axios from 'axios'
export default function PlansVillage3() {
const plansToGet=()=>{
    
    Axios.post('http://localhost:3050/planToGet',{
       villageName:'Maaser Al Chouf'
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
           if(plan.accepted=='true'){
            return (

              <Plan villageName={plan.villageName} planName={plan.planName} date={plan.date} capacity={plan.capacity} age={plan.age} price={plan.price} days={plan.days} pictureurl={plan.pictureurl} description={plan.description} idtourguide={plan.idtourguide}
              
              />
             
           
            )
           }

          }

          )}
            
           
            
           
           
               
            

        </div>
        
    )
}
