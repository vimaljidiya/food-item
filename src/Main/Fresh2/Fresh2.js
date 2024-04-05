import React from 'react'
import './Fresh2.css';
import av1 from  "../../Task/assets/images/ava-1.jpg";
import av2 from  "../../Task/assets/images/ava-2.jpg";
import av3 from  "../../Task/assets/images/ava-3.jpg";
import  network from "../../Task/assets/images/network.png"

const Fresh2 = () => {
  return (
    <>
    <div className="fresh2main">
        <div className="fresh2min">
           <div className="fresh2-child">
            <h5  className='test'>Testimonial</h5>
            <h2 className='test2'>What our <b>customer</b> are saying</h2>
            <p className='childtest'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta corporis aut iusto iste explicabo quisquam in dolores officiis possimus facere optio eos saepe labore ut ea, voluptate, omnis exercitationem!</p>


            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"       aria-current="true" aria-label="Slide 1" ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">

    <div class="carousel-item active">

       <p className='childtest2'>AT a fresh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sequi, quas, nulla voluptate porro ipsum architecto sunt accusantium officiis itaque eaque! Eos ipsa tenetur ducimus omnis numquam amet minus expedita</p>
        <div id='namesss'>
      <img src={av1} class="d-block w-100" alt="..."/>
      <h5 className='sliderame'>Shoib malik</h5>
      </div>
    </div>


    <div class="carousel-item">

    <p className='childtest2'>AT a fresh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sequi, quas, nulla voluptate porro ipsum architecto sunt accusantium officiis itaque eaque! Eos ipsa tenetur ducimus omnis numquam amet minus expedita</p>
      <div id='namesss'>
      <img src={av2} class="d-block w-100" alt="..."/>
      <h5 className='sliderame'>Avina kumari</h5>
      </div>

    </div>

    <div class="carousel-item">

    <p className='childtest2'>AT a fresh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sequi, quas, nulla voluptate porro ipsum architecto sunt accusantium officiis itaque eaque! Eos ipsa tenetur ducimus omnis numquam amet minus expedita</p>
      <div id='namesss'>
      <img src={av3} class="d-block w-100" alt="..."/>
      <h5 className='sliderame'>Shah jai</h5>
      </div>
    </div>

  </div>
</div>
 </div> 


           <div className="fresh2-child2">
            <img src={network} className='network2' />
            </div> 
        </div>
    </div>
    </>
  )
}

export default Fresh2