import React from 'react'
import Food from './Food'
import Data from '../Main/Cart2/Data'
import Foodcard from './Foodcard'

const Foods = () => {
  return (
   <>
   <Food/>
  <Foodcard value={Data}/>
   </>
  )
}

export default Foods




{/* <div className="mainremove">
<div className="minremove">
    <img src={item.imgss} className='removeimg'/>
    <div className="removetitle">{item.title}</div>
    <h5 className='priceeremove'>{item.pirce}</h5>
    <button onClick={()=> REMOVE(item.id)} className='rv'>Remove</button>
    </div>
</div> */}