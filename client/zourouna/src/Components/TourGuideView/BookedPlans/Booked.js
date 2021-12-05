import {React,useState,useEffect} from "react";
import Table from 'react-bootstrap/Table'
import Axios from 'axios'
export default function Booked(){
const[bookings,setBookings]=useState([]);

const getBookings=()=>{
    
    Axios.post('http://localhost:3050/getBookings',{
       email:localStorage.getItem('email')
      }).then((response)=>{
        if(response.data){
            
      setBookings(response.data)
        
        }}).catch(error=>{
          console.log(error.response)
        })
     
    }
   
useEffect(()=>{
getBookings()
})
    return(
        <div>
            <h3> The following table shows the detailed bookings for the plans you created</h3>
            <Table striped bordered hover>
  <thead>

    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Plan Name</th>
      <th>Date of booking</th>
    </tr>
  </thead>

  <tbody>

  {bookings.map((booking,key)=>{
          
            return (

             <tr>
               <td>{key+1} </td>
               <td>{booking.firstName}</td>
               <td>{booking.lastName}</td>
               <td>{booking.email}</td>
               <td>{booking.planName}</td>
               <td>{booking.date}</td>
               </tr>
             
           
            )
           

          }

          )}
  
  </tbody>
</Table>
        </div>
    )
}