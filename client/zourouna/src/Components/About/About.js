import React from "react";
import "./About.css";
import { Link} from 'react-router-dom';

export class About extends React.Component{
    render(){
        return(
            <>
            <div class="about-section">
            <h1>About Us Page</h1>
            <p>Zourouna is a Lebanese organization aiming to enhance the tourism in Lebanon locally. Seeing the terrific
                crisis the country is going through, three lebanese girls have decided to start "Zourouna" to help
                the local tourism develop. We as lebanese need to stand by each other's side, because this land is ours.
            </p>
            <p></p>
            </div>

            <div className="forh2">
                <h2>The Team</h2>
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