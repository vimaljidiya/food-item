import React from 'react'
import './Cart3.css';

import { Data1 } from '../Cart2/Data';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../Stores/Cartslice';

const Cart3 = () => {
  let names =useSelector((state)=>state.cart);
  let dispatch =useDispatch();

  let ADD =(item)=>{
    let demo = names.find((CartItem)=>CartItem.id === item.id);
    if(!demo){
      dispatch(add(item));
    }
  }
  return (
   <>
   <div className="cart3main">
    {
       Data1.map((item)=>{
        return(
            <>
               
               <div className="card">
              <img src={item.imgss}  className='cardimge' />
              <div className="title">{item.title}</div>
              <div className="mincard">
                <div className="icon">
                 
                 <h5 className='pricee'>₹{""}{item.pirce}</h5>
                
                </div>
                
                <button className='add' onClick={()=>ADD(item)}>ADD to Cart</button>
              </div>
            </div>
            </>
        )
       })
    }
   </div>
   </>
  )
}

export default Cart3