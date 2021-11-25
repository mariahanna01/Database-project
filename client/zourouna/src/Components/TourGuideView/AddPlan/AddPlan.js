import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import './AddPlan.css';
import Axios from 'axios';
export default function AddPlan(){
const [village,setVillage]=useState('');
const [plan,setPlan]=useState('');
const [capacity,setCapacity]=useState();
const [age,setAge]=useState();
const [price,setPrice]=useState();
const [days,setDays]=useState();
const [description,setDes]=useState('');


const addPlan=()=>{
    Axios.post('http://localhost:3040/addPlan',{villageName:village,
    planName:plan,
    capacity:capacity,
    age:age,
    price:price,
    days:days,
    description:description
}).then(
    
    alert('submitted')
    
    )
    
    
    

 
  }

return(
    <div className='main'>
<Form.Control type="text" placeholder="Village"className='input' onChange={(e)=>setVillage(e.target.value)} />
<Form.Control type="text" placeholder="Plan Name"className='input' onChange={(e)=>setPlan(e.target.value)}/>
<Form.Control type="text" placeholder="Capacity"className='input' onChange={(e)=>setCapacity(e.target.value)}/>
<Form.Control type="text" placeholder="Age"className='input' onChange={(e)=>setAge(e.target.value)} />
<Form.Control type="text" placeholder="Price"className='input' onChange={(e)=>setPrice(e.target.value)} />
<Form.Control type="text" placeholder="Amount of days"className='input'onChange={(e)=>setDays(e.target.value)} />
<Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Picture</Form.Label>
    <Form.Control type="file" className='input' />
  </Form.Group>

  <Form.Control
      as="textarea"
      placeholder="Description"
      style={{ height: '100px' }}
      className="area"
      onChange={(e)=>setDes(e.target.value)}
    />
    <Button as="input" type="submit" value="Submit" className='input' onClick={addPlan}/>{' '}
    </div>
)


}