import React from "react";
import smallLogo from "../images/react-icon-small.png"
//import '../style.css'
 
export default function Navbar(){
    return(
        <nav className="container">
            <img className='smallLogo' src={smallLogo} alt='logo'/>
            <h3 className="logoText">ReactFacts</h3>
            <h4 className="course">React Course - Project 1</h4>
        </nav>
    )
}