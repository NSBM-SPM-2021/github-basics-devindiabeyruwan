import React,{useState,useEffect} from 'react'
import'./style.css';
import {Card } from'../UI/Card';
import blogPost from'../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

export const Sidebar = (_props) => {

  const[posts,setPosts] =useState([]);
    
  useEffect(()=>{
    
    const posts = blogPost.data;
    setPosts(posts);
  },posts);

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
         {
           posts.map(post =>{
             return(
               <NavLink to={'/post/${post.id}'} >
                  <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
   
            </div>

               </NavLink>
              
             );

           })

           
         }
         


       </div>

      </Card>

    </div>
   )

 }