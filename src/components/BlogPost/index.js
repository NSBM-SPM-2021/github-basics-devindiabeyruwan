
import'./style.css';
import {Card} from '../UI/Card';
import React, { useEffect, useState } from 'react';
import blogPost from '../../data/blog.json';
import { data } from 'browserslist';

/**
* @author
* @function BlogPost
**/

export const BlogPost = (_props) => {
   const[post,setPost] =useState({
    
    id: "" ,
    blogCategory: "" ,
    blogTitle : "" ,
    slug: "" ,
    postedOn: "" ,
    author: "" ,
    blogImage: "" ,
    blogText: ""
  });
     const [,setPostId] =useState('');
   
    
    useEffect(()=>{
    const postId = _props.match.params.postId;
    console.log(data);
    // eslint-disable-next-line
    const post=blogPost.data.find(post=>post.id == postId);
    setPost(post);
    setPostId(postId)
  }, [post, _props.match.params.postId]);
      // eslint-disable-next-line
      if(post.blogImage == "") return null;

 return(
     <div className="blogPostContainer">
       <Card>
         <div className="blogHeaders">
         <span className="blogCategory">{post.blogCategory}</span>
         <h1 className="postTitle">{post.blogTitle}</h1>
         <span className="postedBy">Posted on {post.postedOn} By {post.author}</span>
         </div>
         <div className="postImageContainer">
            <img src={require('../../blogPostImages/'+ post.blogImage).default} alt =""/>

         </div> 

         <div className="postContent">
           <h3>{post.blogTitle}</h3>
           <p>{post.blogText}</p>
         </div>
         
       </Card>
     </div>
    
   )

 }