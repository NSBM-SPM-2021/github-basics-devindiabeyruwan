import React from 'react';
import'./style.css';

import { BlogPost } from '../../components/BlogPost';
import { Sidebar } from '../../components/Sidebar';

/**
* @author
* @function Post
**/

export const Post = (_props) => {

   console.log(_props);
  return(
    <section className="container">
      <BlogPost {..._props}/>
      <Sidebar {..._props}/>

    </section>
    
   )

 }