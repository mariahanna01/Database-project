import React ,{useEffect, useState}from "react";
import { FaStar } from "react-icons/fa";
import Rating from '@mui/material/Rating';

import Axios from 'axios';
export default function RatingComponent(props)  {
const[value,setValue]=useState()

const [village,setVillage]=useState(props.village);

const sendRating=()=>{
console.log(value)
  Axios.post('http://localhost:3050/sendRating',{
    email:localStorage.getItem('email'),
    villageName:village,
    value:value
   }).then((response)=>{
     if(response.data){
         console.log(response.data)
  
     
     }}).catch(error=>{
       console.log(error.response)
     })

}
  
 useEffect(()=>{
   sendRating()
 })




  return (
      <div>
 <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
        console.log(village)
          setValue(newValue);
         
         sendRating()
        }}
      />
       
      </div>
  );

};

