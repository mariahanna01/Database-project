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
            console.log(response.data)
      setBookings(response.data)
        
        }}).catch(error=>{
          console.log(error.response)
        })
     
    }
   
useEffect(()=>{
  
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
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}