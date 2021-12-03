import React from "react";
import Rating from '@mui/material/Rating';
import { useState,useEffect } from 'react';
import Axios from 'axios';
export default function RatingReadOnly(props){
const [value,setValue]=useState(3)
const[villageName,setVillageName]=useState(props.village);

const getAvg=()=>{

    Axios.post('http://localhost:3050/avgRating',{
        villageName:villageName
       }).then((response)=>{
         if(response.data){
             
    setValue(response.data[0].rating)
         
         }}).catch(error=>{
           console.log(error.response)
         })
      
     }
 useEffect(()=>{
     getAvg()
 })

    return(

        <div>


<Rating name="read-only" value={value} readOnly />
        </div>
    )

    
}