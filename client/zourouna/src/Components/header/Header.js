import React from 'react'
import "./header.css"
import Carousel from 'react-bootstrap/Carousel';


export default function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="header1">Zourouna</span>
                
                
        
                <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="images"
      src="https://pix10.agoda.net/geo/city/693911/bb3f939069060abca41824f4ff790946.jpg?s=1920x822"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Zahle</h3>
      <p>The captial and the largest city of the Beqaa Governate</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="images"
      src="https://admin.freetour.com/images/tours/24796/small-group-tour-to-qadisha-valley-bcharre-cedars-of-god-01.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Bsharri</h3>
      <p>In the heart of Qadisha valley</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="images"
      src="https://dhl6m8m6g2w2j.cloudfront.net/pois/Poi_54_247.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Byblos</h3>
      <p>Charming and laid back village</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
           
        </div>
    )
}