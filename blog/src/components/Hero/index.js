import React from 'react';

import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import { Card } from '../UI/Card';


/**
* @author
* @function 
**/

export const Hero  = (_props) => {
  return(
    <div>
        <Card>
          <div style = {{padding: '50px 0'}}>
          <Logo/>
          </div>
           <Navbar/>
           
            </Card>
      

    </div>
   )

 }