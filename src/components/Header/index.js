import React from 'react';
import{NavLink} from 'react-router-dom';
import'./style.css';
/**
* @author
* @function Header 
**/

export const Header  = (_props) => {
 return(
    <header className="header">
        <nav className="headerMenu"> 
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        </nav>
        <div>
            Social Media Links
        </div>
        
         </header>
   )

 }