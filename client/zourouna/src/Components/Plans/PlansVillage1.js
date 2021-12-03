import {React, useState,useEffect} from 'react';
import Plan from '../Plan/Plan'
import './Plans.css'
import Axios from 'axios'
import{useNavigate} from 'react-router-dom'
export default function PlansVillage1() {
  const navigate=useNavigate();
  const [day,setDay]=useState('');
  const [time,setTime]=useState('')
  const today= new Date();
  const[disabled, setDisabled]=useState(false);
  const [buttonMessage,setButtonMessage]=useState('Book Now') 
  



const plansToGet=()=>{
    
    Axios.post('http://localhost:3050/planToGet',{
       villageName:'Zahle'
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

              <Plan villageName={plan.villageName} planName={plan.planName} capacity={plan.capacity} age={plan.age} price={plan.price} days={plan.days} pictureurl={plan.pictureurl} description={plan.description} idtourguide={plan.idtourguide}
              
              />
             
           
            )
           }

          }

          )}
            
           
            
           
           
               
            

        </div>
        
    )
}
