import React from "react";
import Posts from "../posts/Posts";
import './Villages'
import './villages.css'
import {Link} from 'react-router-dom';
export default function Villages (){
    
        return(
            <div className='posts'>
                <Link to="/village1" style={{ textDecoration: 'none' ,color:'black'}}>
               <Posts/>  
               </Link>
               <Posts/>
               <Posts/> 
               <Posts/> 
               <Posts/> 
               <Posts/>             
            </div>
        )
    
}