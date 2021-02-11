import React from 'react';
import Card from './Card';
import { NavLink } from 'react-router-dom';
import Sdata from './Sdata';

const Service = ()=> {
  return (
    <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
             </div>    
        <div className="container-fluid mb-5">
                     <div className='row'>
                        <div className="col-10 mx-auto">
                            <div className="row gy-5">
                                 {/* <Card />    */}
                                 {Sdata.map((val, indx)=>{
                                    return <Card
                                        imgsrc={val.imgsrc}
                                        title= {val.title}
                                     /> 
                                 })}
                               
                            </div>
                        </div>
                     </div>
              </div>
    </>
  );
};

export default Service;