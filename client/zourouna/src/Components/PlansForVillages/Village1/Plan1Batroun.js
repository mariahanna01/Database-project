import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ListGroup from 'react-bootstrap/ListGroup';
import TabContainer from 'react-bootstrap/TabContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import './Calendar.css';
import './Triall.css';

function Plan1Batroun() {
    
  const [value, onChange] = useState(new Date());
  return (
    <div className="All">

        <div className = "Calendar">
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>

        <div className="Planning"> 
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <div className="date">
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                        Saturday
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                        Sunday
                        </ListGroup.Item>
                    </ListGroup>
                    </div>

                    </Col>
                    <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                    <div className="timeline-container">
                            <div className="event">
                                <div className="event-date">9 am</div>
                                <h2>Planning Event</h2>
                                <div className="timeline-content">
                                    <p>hii</p>
                            </div>
                            </div>

                        <div className="event">
                            <div className="event-date">11 am</div>
                                <h2>Planning Event two</h2>
                                <div className="timeline-content">
                                <p>hiiiiiiiiiii</p>
                            </div>
                        </div>
                    </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                        <div className="timeline-container">
                            <div className="event">
                                <div className="event-date">9 am</div>
                                <h2>1st Destination</h2>
                                <div className="timeline-content">
                                    <p>hii</p>
                            </div>
                            </div>

                        <div className="event">
                            <div className="event-date">11 am</div>
                                <h2>2nd Destination</h2>
                                <div className="timeline-content">
                                <p>hiiiiiiiiiii</p>
                            </div>
                        </div>
                    </div>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>


        
    </div>

  );
}

export default Plan1Batroun;