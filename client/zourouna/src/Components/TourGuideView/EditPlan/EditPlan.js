import {React,useState,useEffect}  from 'react';
import Axios from 'axios'
import Plan from '../../Plan/Plan';
import './EditPlan.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Form } from "react-bootstrap";

export default function EditPlan(){
const [plans,setPlans]=useState([]);
const [email,setEmail]=useState(localStorage.getItem('email'))
const [village,setVillage]=useState('');
const [plan,setPlan]=useState('');
const [capacity,setCapacity]=useState();
const [age,setAge]=useState();
const [price,setPrice]=useState();
const [days,setDays]=useState();
const [description,setDes]=useState('');
const[pictureUrl,setPictureUrl]=useState('')
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [show, setShow] = useState(false);

const getPlans=()=>{
    Axios.post('http://localhost:3050/getPlans',{
        email:email,
       
      }).then((response)=>{
        if(response.data){
            setPlans(response.data)
       
        }}).catch(error=>{
          console.log(error.response)
        })
     
    }

useEffect(()=>{
  getPlans()
})


    return(
        <div >
       
            <h1> Which plan you would like to edit? </h1>
         
            <br/>
          
  <br/>
  <br/>
  <div className="mainplan">
            {plans.map((plan,key)=>{
 return (
     <div className="eachPlan" >
    <p className="planName" >{plan.planName}</p> 
    <Form.Control type="text" placeholder="Plan Name"className='input' value={plan.planName}  onChange={(e)=>setPlan(e.target.value)}/>
    
<Form.Control type="text" placeholder="Capacity"className='input' defaultValue={plan.capacity} onChange={(e)=>{setCapacity(e.target.value) }} onMouseMoveCapture={(e)=>{setCapacity(e.target.value) }} />
<Form.Control type="text" placeholder="Age"className='input' defaultValue={plan.age} onChange={(e)=>setAge(e.target.value)} onMouseMoveCapture={(e)=>setAge(e.target.value)} />
<Form.Control type="text" placeholder="Price/pers L.L"className='input' defaultValue ={plan.price} onChange={(e)=>setPrice(e.target.value)} onMouseOverCapture={(e)=>setPrice(e.target.value)} /> 
<Form.Control type="text" placeholder="Amount of days"className='input' defaultValue={plan.days} onChange={(e)=>setDays(e.target.value)}  onMouseOverCapture={(e)=>setDays(e.target.value)}/>
<Form.Control type="text" placeholder="Picture Url"className='input'defaultValue={plan.pictureUrl} onChange={(e)=>setPictureUrl(e.target.value)} onMouseOverCapture={(e)=>setPictureUrl(e.target.value)} />

  <Form.Control
      as="textarea"
      placeholder="Description"
      style={{ height: '100px' }}
      className="area"
      onChange={(e)=>setDes(e.target.value)}
      defaultValue={plan.description}
      onMouseOverCapture={(e)=>setDes(e.target.value)}
    />
    <Button as="input" type="submit" value="Edit" className='input'
    onClick={
()=>{
  console.log(capacity)
  Axios.post('http://localhost:3050/editPlan',{
  planName:plan.planName,
  capacity:capacity,
  age:age,
  price:price,
  days:days,
  description:description,
  tourguidemail:localStorage.getItem('email'),
  pictureurl:pictureUrl
}).then(
  handleShow()
  
 
  
  ).catch((err)=>console.log(err))
  
  
  


}} />

    
    <br/>
    <br/>
    
</div>
 )

          }

          )}
          </div>
          
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Plan edited! </Modal.Title>
        </Modal.Header>
        <Modal.Body>The team will check your edits and will add the edited plan to the website</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
        </div>
    )


}