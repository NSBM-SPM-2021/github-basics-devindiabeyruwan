import React, {useState} from 'react';
import{NavLink} from 'react-router-dom';
import'./style.css';

/**
* @author
* @function 
**/

export const Navbar = (_props) => {
  const[search,setSearch]=useState(false);

  const submitSearch =(e)=>{
    e.preventDefault();
    alert('Searched');
  }

   const openSearch=()=>{
      setSearch(true);
   }

   const searchClass =search?'searchInput active':'searchInput';
  
  return(
    <div className="navbar">
     <ul className="navebarMene">
         <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/about-us">About Us</NavLink></li>
         <li><NavLink to="/Post">Post</NavLink></li>
         <li><NavLink to="/contact-us">Contact Us</NavLink></li>
     </ul>
    <div className="search">
      <form onSubmit={submitSearch}>
        <input type="text" className={searchClass}  placeholder="Search"/>
        <img onClick={openSearch} className ="searchIcon"src={require('../../assest/icons/search1.png').default} alt="Search"/>
      </form>
     
    </div>
    </div>
   )

 }