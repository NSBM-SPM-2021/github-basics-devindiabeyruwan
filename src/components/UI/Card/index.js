import React from 'react'
import'./style.css';
/**
* @author
* @function Card
**/

export const Card = (_props) => {
  return(
    <div className= "Card">
     {_props.children}
    </div>
   )

 }