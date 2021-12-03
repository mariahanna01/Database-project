import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './TourGuide.css';
import{useNavigate} from 'react-router-dom'
export default function TourGuideView(){
    const navigate=useNavigate();
const addPlan=()=>{
navigate('/addPlan')
}
const editPlan=()=>{
  navigate('editplan')
}
const booked=()=>{
  navigate('/booked')
}

return(
<div className='big'>
<div className='createPlan'>
<Card className="text-center">
  <Card.Header className="headers">Create A New Plan </Card.Header>
  <Card.Body>
    <Card.Title>Click below to add a new plan </Card.Title>
    
    <Button variant="primary" onClick={addPlan} >Add Plan </Button>
  </Card.Body>

</Card>

</div>
<div className='editPlan'>
<Card className="text-center">
  <Card.Header className="headers">Edit Existing Plan  </Card.Header>
  <Card.Body>
    <Card.Title>Click below to edit a plan  </Card.Title>
    
    <Button variant="primary" onClick={editPlan}>Edit </Button>
  </Card.Body>

</Card>
</div>

<div className='booked'>
<Card className="text-center">
  <Card.Header className="headers">Booked Plans Details </Card.Header>
  <Card.Body>
    <Card.Title>Click below to check your booked plans </Card.Title>
    
    <Button variant="primary" onClick={booked}> Check </Button>
  </Card.Body>

</Card>
</div>

</div>



)





}