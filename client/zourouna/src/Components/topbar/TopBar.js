
import React, { useState,useEffect } from'react'
import "./topbar.css"
import { Link} from 'react-router-dom'
import{useNavigate} from 'react-router-dom'
export default function TopBar (props){

 const [firstName,setFirstName]=useState('');
 const[loggedIn,setLoggedIn]=useState('');
 const navigate=useNavigate();
const signOut=()=>{
localStorage.clear();
navigate('/');
    window.location.reload(false);
}


    
    return(
        
        <div className= 'top'>
            <div className ="topIcon">
            <i className="fab fa-facebook-f"></i>
            </div>
            <div className="topIcon">
            <i className="fab fa-instagram"></i>
            </div>
            <div className="topIcon">
            <i className="fas fa-at"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    {props.user=='client'||  localStorage.getItem('name')===null ? <Link to="/villages" style={{ textDecoration: 'none' ,color:'black'}}>
                <li className="topListItem"> VILLAGES</li>
                </Link> : null}
                {props.user=='client' || localStorage.getItem('name')===null  ? <Link to="/about"style={{ textDecoration: 'none' ,color:'black'}}>
                    <li className="topListItem">ABOUT</li>
                    </Link>:null }
                {props.user=='client' || localStorage.getItem('name')===null  ?  <Link to="/contact" style={{ textDecoration: 'none' ,color:'black'}}>
                    <li className="topListItem">CONTACT</li>
                    </Link>:null}
                   
                    
                    {props.signIn=='true'&& props.user=='client'?<Link to="/rewards"style={{ textDecoration: 'none' ,color:'black'}}>
                    <li className="topListItem">REWARDS</li>
                    </Link>:null}
                    {props.signIn!='true'?  <Link to="/signin"style={{ textDecoration: 'none' ,color:'black'}}>
                    <li className="topListItem">SIGN IN</li>
                    </Link> :  <Link to="/" style={{ textDecoration: 'none' ,color:'black'}} onClick={signOut}>
                    <li className="topListItem">SIGN OUT</li>
                    </Link> }
                    

                </ul>
            </div>

            <div className="topRight">
                <img 
                className="topImg"
                src="http://www.lebanoninapicture.com/Prv/Images/Pages/Page_85264/deeply-traditional-lebanese-village-of-baskinta-2-13-2017-7-11-13-pm-l.jpg" 
                alt="" 
                />
                <i className="topSearchIcon fas fa-search-location"></i>
{props.name!=null ?<h2 className="welcome">Welcome, {props.name} </h2> : null }

            </div>

        </div>
       
    )
}
