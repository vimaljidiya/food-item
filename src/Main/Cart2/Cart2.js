import React, { useState } from 'react'
import './Cart2.css';
import  './Data';
import hamburgerImage from '../../../src/Task/assets/images/hamburger.png';
import pizzaImage from '../../../src/Task/assets/images/pizza.png';
import breadImage from '../../../src/Task/assets/images/bread.png';
import drinks from '../../Task/assets/images/drinks.png';
import Data from './Data';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../Stores/Cartslice';

const Cart2 = () => {
let names =useSelector((state)=> state.cart);
let dispatch = useDispatch();

let ADD =(item)=>{
  let  demo =  names.find((cartItem)=> cartItem.id === item.id);
  if(!demo){
    dispatch(add(item));
  }
}
   let [list,setList] = useState(Data);

  let FUNN =(names)=>{
    let update = Data.filter((rmvv)=>{
      return rmvv.category === names;
    });
    setList(update);
  };


  return (
   <>
   <div className="navbar2-main">
    <div className="minnavbar2">
      <div className="centernavbar2">
        <div className="allnav" onClick={()=> setList(Data)}>All</div>
        <div className="burger" onClick={()=> FUNN("Burger")}><img src={hamburgerImage}/><h6>Burger</h6></div>
        <div className="burger" onClick={()=> FUNN("Pizza")}><img src={pizzaImage}/><h6>Pizza</h6></div>
        <div className="burger" onClick={()=> FUNN("Bread")}><img src={breadImage}/><h6>Snacks</h6></div>
        <div className="burger" onClick={()=> FUNN("Drinks")}><img src={drinks}/><h6>Drinks</h6></div>
      </div>
    </div>
   </div>

    <div className="datamain">
      {
        list.map((item)=>{
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

export default Cart2