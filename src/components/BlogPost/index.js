import React from 'react';
import'./style.css';
import {Card} from '../UI/Card';

/**
* @author
* @function BlogPost
**/

export const BlogPost = (_props) => {
  return(
     <div className="blogPostContainer">
       <Card>
         <div className="blogHeaders">
         <span className="blogCategory">Featured</span>
         <h1 className="postTitle">Beautiful is always beautiful</h1>
         <span className="postedBy">Posted on July 21,2021 By Devindi Abeyruwan</span>
         </div>
         <div className="postImageContainer">
            <img  src={require('../../blogPostImages/Brandon-Woelfel-Fotograflari-13.jpg').default} alt =""/>

         </div>
         
       </Card>
     </div>
    
   )

 }