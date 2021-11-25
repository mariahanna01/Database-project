import React from "react";
import "./About.css";
import { Link} from 'react-router-dom';

export class About extends React.Component{
    render(){
        return(
            <>
            <div class="about-section">
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <div className="forh2">
                <h2>Our Team</h2>
            </div>

            <div class="row">
                <div class="column">
                    <div className="forh22">
                    <h1> . </h1>
                    </div>
                        <div class="card">   
                        <img src="https://www.lebanoninapicture.com/Prv/Images/Pages/Page_115409/batroun-lebanon-sea-water-old-house-snapshot-ph-6-5-2017-8-06-02-pm-l.jpg" alt="Chloe"/>         
            
                        <div class="container">
                            <h2>Chloe Boueri</h2>
                            <p class="title">CEO and Founder</p>
                            <p>3rd year Computer Engineering.</p>
                            <p>Chloe.boueiri@lau.edu</p>
                            <p>
                            <Link to="/contact1" style={{ textDecoration: 'none' ,color:'black'}}>
                                <button class="button">
                                Contact</button>
                            </Link>   
                            </p>
                        </div>
                    </div>
                </div>

            <div class="column">
                <div className="forh22">
                    <h1> . </h1>
                </div>
                        <div class="card"> 
                        <img src="https://www.lebanoninapicture.com/Prv/Images/Pages/Page_115409/batroun-lebanon-sea-water-old-house-snapshot-ph-6-5-2017-8-06-02-pm-l.jpg" alt="Chloe"/>           
                        <div class="container">
                            <h2>Maria Hanna</h2>
                            <p class="title">CEO and Founder</p>
                            <p>3rd year Computer Engineering.</p>
                            <p>Maria.Hanna@lau.edu</p>
                            <p>
                            <Link to="/contact1" style={{ textDecoration: 'none' ,color:'black'}}>
                                <button class="button">
                                Contact</button>
                            </Link>
                            </p>
                        </div>
                    </div>
                </div>
            

                <div class="column">
                <div className="forh22">
                    <h1> . </h1>
                </div>
                        <div class="card"> 
                        <img src="https://www.lebanoninapicture.com/Prv/Images/Pages/Page_115409/batroun-lebanon-sea-water-old-house-snapshot-ph-6-5-2017-8-06-02-pm-l.jpg" alt="Chloe"/>           
                        <div class="container">
                            <h2>Karen Estephan</h2>
                            <p class="title">CEO and Founder</p>
                            <p>3rd year Computer Engineering.</p>
                            <p>Karen.Estephan@lau.edu</p>
                            <p>
                            <Link to="/contact1" style={{ textDecoration: 'none' ,color:'black'}}>
                                <button class="button">
                                Contact</button>
                            </Link>
                            </p>
                        </div>
                    </div>
                </div>

               </div> 
            </>
        )
    }
}