import React from 'react'
import'./style.css';
/**
* @author
* @function Card
**/

export const Card = (_props) => {
  return(
    <div className= "Card" style={{width:_props.width ? _props.width:'100%'}}>
     {_props.children}
    </div>
   )

 }