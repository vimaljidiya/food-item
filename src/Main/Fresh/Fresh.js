import React from 'react';
import  location from '../../Task/assets/images/location.png';
import './Fresh.css';

const Fresh = () => {
  return (
  <>
  <div className="freshmain">
    <div className="freshmin">
       <div className="freshchild"><img src={location} className='location1'/></div> 
       <div className="freshchild">
        <h1 className='child1'>Why fresh Bites?</h1>
        <p className='child2'>At fresh bites Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime impedit iusto. Odit iure, obcaecati laboriosam necessitatibus ullam tenetur molestias atque, ex nam minima maiores optio beatae ut placeat error! Quaerat obcaecati at id quidem natus fuga cupiditate ullam nisi.</p>
        <h5 className='child3'>Fresh and tasty foods</h5>
        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur a, totam aliquam assumenda veniam excepturi libero eligendi ratione repellat illum odio adipisci. Debitis doloremque quod modi tempore similique amet quasi!</p>
        <h5 className='child3'>Quality support</h5>
        <p className='child20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta nulla nam tempore! Nisi accusantium culpa in dolorum totam reprehenderit?</p>
        <h5 className='child3'>Order from any location</h5>
        <p className='child20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perferendis tenetur consequatur fugit sequi praesentium.</p>
        </div> 
    </div>
  </div>
  </>
  )
}

export default Fresh