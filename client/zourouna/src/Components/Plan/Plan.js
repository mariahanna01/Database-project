import {React ,useState}from 'react';
import {Card} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup'
import { Row, Col, Grid } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Rating from "../Rating/Rating"
import Axios from 'axios';
import './Plan.css';

 
  const Plan = (props) => {
  const [imageUrl,setImageUrl]=useState(props.imageUrl);
  const [planTitle,setPlanTitle]=useState(props.planTitle);
  const [nbOfDays,setNbOfDays]=useState(props.nbOfDays);
  const [capacity,setCapacity]=useState(props.capacity);
  const [price,setPrice]=useState(props.price);
  const [routing,setRouting]=useState(props.routing);

  
        return (
            <>
          
            <div className="MyVillages">

                <div className="plan">
                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top"  src={imageUrl}/>
                   
                    <Card.Body>
                        <Card.Title>
                            <div className="nameplan">
                          Plan Title {planTitle}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            {nbOfDays}
                        </Card.Text>
                        <Card.Text>
                         {price}
                        </Card.Text>
                        <Card.Text>
                            {capacity}
                        </Card.Text>
                       
                        <Button variant="primary">
                            <div className="ViewMore">
                                View more
                            </div>
                        </Button>
                      
                        <div className='rating'>
                    <Rating/>
                    </div>
                    </Card.Body>
                    </Card>
                </div>
            
               

            </div> 
            </>
           
    )

    
        }
    export default Plan;

