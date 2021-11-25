import React ,{useState}from "react";
import { FaStar } from "react-icons/fa";
import './rating.css'
import Axios from 'axios';
const Rating = (props) => {
  const[ratingValue,setRaiting]=useState(null);
  const[hover,setHover]=useState(null);
const [email,setEmail]=useState(props.email);
const [village,setVillage]=useState(props.village);

const addRating=()=>{
  setRaiting(ratingValue)
  Axios.post('http://localhost:3050/rating',{email:email,
  
  village:village,
  rating:ratingValue,
  }).then(
  console.log('hello')
  
  
  ).catch()
  
  
 

}

  return (
      <div>
        {[...Array(5)].map((star,i,key)=> {
          const ratingValue=i+1;
          return (<label>
            <input 
           
            type="radio" 
            name='rating' 
            value={key} 
           
            onClick={addRating}


            />
           

            <FaStar 
            className="star"   
            color={ratingValue<=(hover ||ratingValue) ? "#ffc107" :"#e4e5e9"} 
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