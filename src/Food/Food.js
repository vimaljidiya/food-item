import React from 'react'
import "./Food.css";
import mainburger from '../Task/assets/images/banner-02.jpg';

const Food = () => {
  return (
   <>
    <div className="mainfoods">
       
         <img src={mainburger}/> 
         <h1 className="opictyy">All Foods</h1>
      </div>

      <div className="minfoods">
      
      </div>
   </>
  )
}

export default Food