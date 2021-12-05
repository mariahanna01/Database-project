import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import './AddPlan.css';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal'
export default function AddPlan(){
const [village,setVillage]=useState('');
const [plan,setPlan]=useState('');
const [capacity,setCapacity]=useState();
const [age,setAge]=useState();
const [price,setPrice]=useState();
const [days,setDays]=useState();
const [description,setDes]=useState('');
const[pictureUrl,setPictureUrl]=useState('')
const [date,setDate]=useState()
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [show, setShow] = useState(false);
const addPlan=()=>{
  
    Axios.post('http://localhost:3050/addPlan',{villageName:village,
    planName:plan,
    date:date,
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
    
    
    

 
  }

return(
    <div className='main'>
<Form.Select aria-label="Village selection" className='input' onChange={(e)=>{setVillage(e.target.value) ;console.log(e.target.value)} }>
  <option>Select the village</option>
  <option value="Zahle">Zahle</option>
  <option value="Rashaya Al-Wadi">Rashaya-Al-Wadi</option>
  <option value="Maaser El Chouf">Maaser El Chouf</option>
  <option value="Ghadir">Ghadir</option>
  <option value="Bsharri">Bsharri</option>
  <option value="Ehden">Ehden</option>
</Form.Select>
<Form.Control type="text" placeholder="Plan Name"className='input'  onChange={(e)=>setPlan(e.target.value)}/>
<Form.Control type="date" placeholder="yy/mm/dd"className='input'  onChange={(e)=>setDate(e.target.value)}/>
<Form.Control type="text" placeholder="Capacity"className='input' onChange={(e)=>setCapacity(e.target.value)}/>
<Form.Control type="text" placeholder="Age"className='input' onChange={(e)=>setAge(e.target.value)} />
<Form.Control type="text" placeholder="Price/pers L.L"className='input' onChange={(e)=>setPrice(e.target.value)} /> 
<Form.Control type="text" placeholder="Amount of days"className='input'onChange={(e)=>setDays(e.target.value)} />
<Form.Control type="text" placeholder="Picture Url"className='input'onChange={(e)=>setPictureUrl(e.target.value)} />

  <Form.Control
      as="textarea"
      placeholder="Description"
      style={{ height: '100px' }}
      className="area"
      onChange={(e)=>setDes(e.target.value)}
    />
    <Button as="input" type="submit" value="Send for approval" className='input' onClick={addPlan}/>{' '}




    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you {localStorage.getItem('name')} for adding a new plan to the site! </Modal.Title>
        </Modal.Header>
        <Modal.Body>When the company approves your plan, you will get notified on your personal email.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </div>
)


}