import React ,{useState}from "react";
import { FaStar } from "react-icons/fa";
import './rating.css'
import Axios from 'axios';
const Rating = (props) => {
  const[rating,setRaiting]=useState(0);
  const[hover,setHover]=useState(null);
const [email,setEmail]=useState(props.email);
const [village,setVillage]=useState(props.village);

const addRating=()=>{

  Axios.post('http://localhost:3050/rating',{ email:email,
  
  village:village,
  rating:rating,
  }).then(
  console.log('hello')
  
  
  ).catch(function(err) {
    console.log('ERROR: ', err)
 })
  
  
 

}


  return (
      <div>
        {[...Array(5)].map((star,i,key)=> {
     const    ratingValue=i+1;
          return (<label>
            <input 
           
            type="radio" 
            name='rating' 
            value={ratingValue} 
           
            onClick={()=>{  setRaiting(ratingValue);addRating()}}
            onMouseOver={()=>{setHover(ratingValue)}}


            onMouseOut={()=>setHover(null)}

            />
           

            <FaStar 
            className="star"   
            color={(hover ||ratingValue)<= rating ? "#ffc107" :"#e4e5e9"} 
            size={30}
            onMouseEnter={()=>setHover(ratingValue)}
            onMouseLeave={()=>setHover(null)}/>                      { /*ratingValue is the final one*/}

          </label>

          );
        })}
       
      </div>
  );

};

export default Rating;