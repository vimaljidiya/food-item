
import Data from '../Main/Cart2/Data';
import './Food.css';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Stores/Cartslice';
import { useState } from 'react';

const Foodcard = () => {
  const [searchTerm,setSearchTerm]=useState("");

let names =useSelector((state)=> state.cart);
let dispatch =useDispatch();

let ADD=(item)=>{
    let demo = names.find((cartItem)=> cartItem.id === item.id);
    if(!demo){
        dispatch(add(item));
    }
}
  const filteredFoods =Data.filter((food)=>food.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
 


  return (
   <>

  <div className="foods1">
    <input type="search" placeholder="I'm looking for..."
    value={searchTerm}
    className='input'
    onChange={(e)=>setSearchTerm(e.target.value)}
    />
     <select id='df'>
               <option value="Deafult" >Deafult</option>
            </select>
  </div>
   
   <div className="foodcardmain">
    {
        filteredFoods.map((item)=>{
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

export default Foodcard