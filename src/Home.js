import React from 'react';
import Common from './Common';
import web from '../src/images/banner1.jpg'

const Home = ()=> {
  return (
        <>
            <Common 
                name="Grow your Business with " 
                imgsrc={web} 
                visit="/service" 
                btname="Get Started "
             />
        </>
      
  );
};

export default Home;
