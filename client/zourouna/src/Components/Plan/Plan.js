import {React ,useState,useEffect}from 'react';
import {Card} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup'
import { Row, Col, Grid } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import RatingComponent from "../Rating/RatingComponent"
import Axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form'
import './Plan.css';
import{useNavigate} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
export default function Plan(props)  {
const [villageName,setVillageName] = useState(props.villageName);
const [planName,setPlanName] = useState(props.planName);
const [capacity,setCapacity] = useState(props.capacity);
const [age,setAge] = useState(props.age);
const [price,setPrice] = useState(props.price);
const [days,setDays] = useState(props.days);
const[date,setDate]=useState(props.date);
const [pictureurl,setPictureurl] = useState(props.pictureurl);
const [description,setDescription] = useState(props.description);
const[idtourguide,setIdTourGuide]=useState(props.idtourguide);
const [tourguideFirstName,setTourGuideFirstName]=useState('')
const [tourguideLastName,setTourGuideLastName]=useState('')
const[email,setEmail]=useState(props.email)
const[number,setNumber]=useState(props.number)
const navigate=useNavigate();

const today= new Date();
const[disabled, setDisabled]=useState();
const [buttonMessage,setButtonMessage]=useState('')
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    const getTourguide=()=>{
    
        Axios.post('http://localhost:3050/getTourguide',{
           idtourguide:idtourguide,
           email:email,
           number:number

          }).then((response)=>{
            if(response.data){
           setTourGuideFirstName(response.data[0].firstName)
           setTourGuideLastName(response.data[0].lastName)  
           setEmail(response.data[0].email)
           setNumber(response.data[0].number)

            }}).catch(error=>{
              console.log(error.response)
            })
         
        }
     
        useEffect(()=>{
            getTourguide()
            checkPlan()
        }
        
        )

const book=()=>{
if(localStorage.getItem('loggedIn')!='true'){
  navigate('/signin')
}

if(localStorage.getItem('loggedIn')=='true'){
  handleShow()
  const time=today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  Axios.post('http://localhost:3050/book',{
    planName:planName,
    user:localStorage.getItem('email'),
    time:time,
date:date
   }).then((response)=>{
     if(response.data){
   
     }}).catch(error=>{
       console.log(error.response)
     })
const points=localStorage.getItem('points')+1;
localStorage.setItem('points',localStorage.getItem('points')+1)
Axios.post('http://localhost:3050/updatePoints',{
  
  user:localStorage.getItem('email'),
 points:points
 }).then()






}
}


const checkPlan=()=>{
  Axios.post('http://localhost:3050/checkPlan',{
    planName:planName,
    

   }).then((response)=>{
    
     if(response.data[0].number===0){
  setDisabled(false)
  setButtonMessage('Book Now')
     }
     if(response.data[0].number>0){
       setDisabled(true)
       setButtonMessage('Booked')
     }
    }).catch(error=>{
       console.log(error.response)
     })


}

        return (
        
             <div className="MyPosts">
           
           <div className='post'>
                   
                   
                   <img className="postImg" 
                       src ={pictureurl}
                       alt=''
                   />
               <div className="postInfo" >   
                   
               
                 
                  
                       <span className="postTitle">{planName}
                       </span>
                       
                       <hr/>
                    
               </div> 
                       <div className="postDescription"> 
                       <p> Date: {date} </p>
                       <p>Capacity: {capacity}</p>
                       <p>Price: {price}</p>
                       <p>Tour Guide Name :{tourguideFirstName+" "+tourguideLastName}</p>
                       <p>Tour Guide Email:{email}</p>
                       <p>Tour Guide Contact Number: {number}</p>
                       </div>
 <hr/>
<p className='description'>
{description}
</p>
<hr/>
<div>
<Button type="submit" onClick={book} disabled={disabled} >{buttonMessage}</Button>
</div>
                       
            </div>


            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations {localStorage.getItem('name')} ! You have booked the plan: {planName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for your booking. {tourguideFirstName} {tourguideLastName} will contact you in the next few days for further assitance</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
            </div>
    )

 }
    
        
  