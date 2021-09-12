import React from 'react'
import'./style.css';
import {Card } from'../UI/Card';
/**
* @author
* @function Sidebar
**/

export const Sidebar = (_props) => {
  return(
    <div className="sidebarContainer">

    <Card style={{marginBottom:'20px', padding:'20px',boxSizing:"border-box"}} >
      <div className="cardHeader">
        <span>About Us</span>
      </div>

      <div className="profileImageContainer">
         <img src={require('../../blogPostImages/IMG-20210406-WA0001~2.jpg').default} alt=""/>
      </div>


      <div className="cardBody">
        <p className="personalBio">I am Devindi Abeyruwan. Undergraduate student in NSBM Green University. I following BSc Management Information Systems(special) as my degree.Now a days I'm working as a Trainee Quality Assurance Engineer. </p>

      </div>
    </Card> 
   
     

     <Card style={{marginBottom:'20px', padding:'20px',boxSizing:"border-box"}} >
      <div className="cardHeader">
        <span>Social Networks</span>

      </div>
      </Card> 

      <Card style={{marginBottom:'20px', padding:'20px',boxSizing:"border-box"}} >
        <div className="cardHeader">
          <span>Recent Post</span>
        </div>

       <div className="recentPosts">
         <div className="recentPost">
           <h3>Post Title</h3>
           <span>July 21,2021</span>

         </div>

       </div>

      </Card>

    </div>
   )

 }