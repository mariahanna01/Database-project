
import React from'react'
import "./topbar.css"


export default function TopBar(){
    return(
        <div className= 'top'>
            <div className ="topIcon">
            <i className="fab fa-facebook-f"></i>
            </div>
            <div className="topIcon">
            <i className="fab fa-instagram"></i>
            </div>
            <div className="topIcon">
            <i className="fas fa-at"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                <li className="topListItem">VILLAGES</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">SIGN IN</li>
                    

                </ul>
            </div>

            <div className="topRight">
                <img 
                className="topImg"
                src="http://www.lebanoninapicture.com/Prv/Images/Pages/Page_85264/deeply-traditional-lebanese-village-of-baskinta-2-13-2017-7-11-13-pm-l.jpg" 
                alt="" 
                />
                <i className="topSearchIcon fas fa-search-location"></i>

                
            </div>

        </div>

    )
}