import React from 'react'
import './Card.css';
import { useSelector,useDispatch } from 'react-redux';
import { remove } from '../Stores/Cartslice';

const Remove = () => {
    let names = useSelector((state)=> state.cart);
    let dispatch = useDispatch();

    let REMOVE =(itemID)=>{
        dispatch(remove(itemID));
    }
    
  return (
   <>
   <div className="removemain">
   <table className='tablee'>
   <tr>
     <th>Image</th>
    <th>Product Title</th>
     <th>Price</th>
     <th>Quntity</th>
     <th>Delete</th>
     </tr>

     {
        names.map((item)=>{
            return(
                <>
                
              
                 
                   <tr>
                    <td> <img src={item.imgss} className='removeimg'/></td>
                    <td><div className="removetitle">{item.title}</div></td>
                    <td><h5 className='priceeremove'>₹{""}{item.pirce}</h5></td>
                    <td><h6>1x</h6></td>
                    <td><button onClick={()=> REMOVE(item.id)} className='rv'>Delete</button></td>
                   </tr>
            
              
                </>
            )
        })
       
     }
 </table>
 </div>
   </>
  )
}

export default Remove