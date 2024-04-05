import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Subtotal = () => {
    let names =useSelector((state)=>state.cart);
    let dispatch=useDispatch();

      
      let pirce = names.reduce((def,item)=> def + item.pirce * item.quntity,0);
  return (
   <>
   <div style={{marginTop:'25px',marginLeft:'40px'}}>
   <h5>Subtotal:₹<b style={{fontSize:'28px'}}>{pirce}</b></h5>

   <div className="buton" style={{marginTop:'25px'}}>
    
    <button style={{marginLeft:'20px',padding:'1px',width:'175px',height:'30px',backgroundColor:'red',color:'white',fontWeight:'bold'}}>Continue Shopping</button>
   <button style={{marginLeft:'20px',padding:'1px',width:'175px',height:'30px',backgroundColor:'red',color:'white',fontWeight:'bold'}}>Procced to Checkout</button>
   </div>
   </div>
   </>
  )
}

export default Subtotal