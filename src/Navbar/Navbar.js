import React from 'react'
import './Navbar.css';
import res from '../Task/assets/images/res-logo.png';
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, remove,removeAllItems } from '../Stores/Cartslice';

const Navbar = () => {
  let names =useSelector((state)=> state.cart);
  let dispatch =useDispatch();

  let pirce = names.reduce((def,item)=> def + item.pirce * item.quntity,0);
  let  Remove =(itemID)=>{
    dispatch(remove(itemID));
  }

  const handleRemoveAllItems = () => {
    dispatch(removeAllItems());
  };

  

  let INCR =(itemID)=>{
    dispatch(increment(itemID));
  }

  let DECR =(itemID)=>{
    dispatch(decrement(itemID));  
  }

  return (
   <>

   <div className="mainnav">
   <div className="minnav5">
    <div className="navimg5"><img src={res} /><h5 className='fb'>Fresh Bites</h5></div>
    <div className="centar">
      <ul>
    <Link to={'/'} style={{textDecoration:'none'}}><li><a href="#">Home</a></li></Link>
     <Link to={'/Foods'}  style={{textDecoration:'none'}}><li><a href="#">Food</a></li></Link>
      <Link to={'/Cards'}  style={{textDecoration:'none'}}><li><a href="#">Cart</a></li></Link>
     <Link to={'/Contacts'}  style={{textDecoration:'none'}}><li><a href="#">Contact</a></li></Link>
      </ul>
    </div>
    <div className="mainnavicon">
      <div className="sup">
    <CiShoppingCart className='icon3'data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"/><sub className='supp'>{names.length}</sub>
    </div>

    <CiUser className='icon3' /> 
    </div>
   </div>

   </div>
   <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

   {
    names.map((item)=>{
      let pirce = item.pirce * item.quntity;
      return(
        <>
        <div className="canvasmain">
        <img src={item.imgss} className='canvaimg'/>
        <div className="mincanva">
        <div className="canvatitle">{item.title}</div>
        <div className="mainspan">
        <span className='spancanva'>1x</span>
        <h5 className='canvaprice'>₹{""}{pirce}</h5>
        </div>
        <div className="can-child">
        <button className='plush' onClick={()=>INCR(item.id)}>+</button>
        <p className='canvaqunt'>{item.quntity}</p>
        <button className='plush' onClick={()=>DECR(item.id)}>-</button>
        </div>
        </div>
       <button id='chokadi' onClick={()=> Remove(item.id)} >X</button>
        </div>


      

        </>
      )
    })
   }
    
      
  
  </div>
  <div className="lastmin">
    <h5>Subtotal:₹<b style={{fontSize:'28px',color:'white'}}>{pirce}</b></h5>
    <button className='out' onClick={handleRemoveAllItems}>Checkout</button>
    </div> 
</div>
   </>
  )
}

export default Navbar
