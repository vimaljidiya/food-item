import React from 'react'
import "./Card.css";
import mainburger from '../Task/assets/images/banner-02.jpg';
const Card = () => {
  return (
   <>
   <div className="maincards">
    <img src={mainburger} alt="" />
    <h1 className="hh">Your Cart</h1>
   </div>
   </>
  )
}

export default Card