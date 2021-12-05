import {React,useState,useEffect} from "react";
import Axios from 'axios'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
export default function Rewards(){
const[rewards,setReward]=useState([])
const [points,setPoints]=useState()
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const[disabled, setDisabled]=useState();
const [buttonMessage,setButtonMessage]=useState('Claim')

const getPoints=()=>{

    Axios.post('http://localhost:3050/getPoints',{
email:localStorage.getItem('email')
}).then((response)=>{
    if(response.data){
  setPoints(response.data[0].points)

    }
 
 
   
    
 } ).catch((err)=>console.log(err))



}

useEffect(()=>{
    getPoints()
})
    return(
        <div>
           {points>5?<div><h3> Claim your first reward!</h3> <Button type="submit" onClick={()=>{handleShow();setButtonMessage('Claimed');setDisabled(true)}} disabled={disabled} >{buttonMessage} </Button></div>: <h3> You have no  first reward yet!</h3>}
           {points>10?<div><h3> Claim your second reward!</h3> <Button type="submit"  >Claim </Button></div>: <h3> You have no  second reward yet!</h3>}
       {points>15?<div><h3> Claim your third reward!</h3> <Button type="submit"  >Claim </Button></div>: <h3> You have no third reward yet!</h3>}


       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations {localStorage.getItem('name')} ! You have claimed a new reward! </Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for being a true client to our page. In this honor, the company would like to offer you a gift. Please check your email for further details.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
        </div>

    )
}