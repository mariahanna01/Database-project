import React from 'react';
import {Card} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup'
import { Row, Col, Grid } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Rating from "../Rating/Rating"

import './Plan.css';
export class Plan extends React.Component{
    render(){
        return (
            <>
          
            <div className="MyVillages">

                <div className="plan">
                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top"  src="https://www.lebanoninapicture.com/Prv/Images/Pages/Page_115409/batroun-lebanon-sea-water-old-house-snapshot-ph-6-5-2017-8-06-02-pm-l.jpg"/>
                   
                    <Card.Body>
                        <Card.Title>
                            <div className="nameplan">
                            Plan 1
                            </div>
                        </Card.Title>
                        <Card.Text>
                            2 full days + 1 night
                        </Card.Text>
                        <Card.Text>
                            price: 150$
                        </Card.Text>
                        <Card.Text>
                            capacity: 10 people
                        </Card.Text>
                        <Link to="/plan1Batroun"> 
                        <Button variant="primary">
                            <div className="ViewMore">
                                View more
                            </div>
                        </Button>
                        </Link>
                        <div className='rating'>
                    <Rating/>
                    </div>
                    </Card.Body>
                    </Card>
                </div>
            
                <div className="plan">
                <Card style={{ width:'23rem' }}>
                        <Card.Img variant="top"  src="https://www.lebanoninapicture.com/Prv/Images/Pages/Page_115409/batroun-lebanon-sea-water-old-house-snapshot-ph-6-5-2017-8-06-02-pm-l.jpg" />
                        <Card.Body>
                            <Card.Title>
                                <div className="nameplan">
                                    Plan 2
                                </div>
                            </Card.Title>
                            <Card.Text>
                            1 full day
                        </Card.Text>
                        <Card.Text>
                            price: 40$
                        </Card.Text>
                        <Card.Text>
                            capacity: groups of 15
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

                <div className="plan">
                <Card style={{ width: '23rem' }}>
                    
                        <Card.Img variant="top"  src="https://www.lebanoninapicture.com/Prv/Images/Pages/Page_115409/batroun-lebanon-sea-water-old-house-snapshot-ph-6-5-2017-8-06-02-pm-l.jpg"/>
                        <Card.Body>
                            <Card.Title>
                                <div className="nameplan">
                                    Plan 3
                                </div>
                            </Card.Title>
                            <Card.Text>
                            2 full days + 1 night
                        </Card.Text>
                        <Card.Text>
                            price: 150$
                        </Card.Text>
                        <Card.Text>
                            capacity: max of 50
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
}
