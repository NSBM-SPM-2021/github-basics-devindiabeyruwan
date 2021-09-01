import React from 'react'
import'./style.css';

/**
* @author
* @function 
**/

export const Navbar = (_props) => {
  return(
    <div className="navbar">
     <ul className="navebarMene">
         <li><a href="#">Home</a></li>
         <li><a href="#">About Us</a></li>
         <li><a href="#">Post</a></li>
         <li><a href="#">Contact Us</a></li>
     </ul>
     
    <div className="search">

    <input type="text" placeholder="Search"/>
    <img src={require('../../assest/icons/search.png')} alt="search"/> 
    </div>
    </div>
   )

 }