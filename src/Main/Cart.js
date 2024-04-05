import React from 'react'
import './Cart.css';
import { FaCar } from "react-icons/fa";
import her from '../Task/assets/images/hero.png';
import cat from '../Task/assets/images/category-01.png';
import cat2 from '../Task/assets/images/category-02.png';
import cat3 from '../Task/assets/images/category-03.png';
import cat4 from '../Task/assets/images/category-04.png';
import service from '../Task/assets/images/service-01.png';
import service2 from '../Task/assets/images/service-02.png';
import service3 from '../Task/assets/images/service-03.png';

import { RiSecurePaymentLine } from "react-icons/ri";

const Cart = () => {
  return (
    <>
    <div className="maincart">
        <div className="minartchild">
        <div className="boxcart1">
           <p className='ey'>Easy way to make to order</p>
           <h1><b>HUNGRY? Just Wait</b> <br />Food at <b>your door</b></h1>
           <p className='lo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, dolore delectus. Atque veritatis expedita recusandae similique. </p>
           <div className="mainbtn">
            <button className='now'>Order now</button>
            <button className='see'>See all Foods</button>
           </div>
           <div className="shoping">
            <div className="shop">
            <FaCar className='shop1'/>
              <p>No shoping charge</p>  
            </div>
            <div className="shop">
             <RiSecurePaymentLine className='shop1'/>
             <p>100% secure checkout</p>
            </div>
           </div>
        </div>
        <div className="boxcart2">
          <img src={her} alt="" />
        </div>
        </div>
    </div>

    <div className="maincart2">
      <div className="mincart2">
        <div className="minbox"><div className="minbox2"><img src={cat} alt="" /><p className='ff'>FastFood</p></div></div>
        <div className="minbox"><div className="minbox2"><img src={cat2} alt="" /><p className='ff'>Pizza</p></div></div>
        <div className="minbox"><div className="minbox2"><img src={cat3} alt="" /><p className='ff'>Asian food</p></div></div>
        <div className="minbox"><div className="minbox2"><img src={cat4} alt="" /><p className='ff'>Cold Drink</p></div></div>
      </div>
    </div>


    <div className="maincart3">
      <div className="mincart3">
        <p className='mip1'>What we serve</p>
        <h2 className='minh1'>Just sit back at home we wil <b>take care</b></h2>
        <p className='minchild1'>At fresh Bites, we serve a delected arry of dishes crafted with care and made with the freshest ingredis.from wholessome salads to savory entrees and delightful desserts,there's something to satify every carving</p>
      </div>

    </div>


    <div className="maicart4">
      <div className="mincart4">
        <div className="minbox4"><img src={service} alt="" /><h3 className='quck'>Quick Delivery</h3><p className='quckp'>
          Exprerice lightnig-fast delivery with fresh bites,ensureing your meal arrive swifty to your doostrap.
          </p></div>
        <div className="minbox4"><img src={service2} alt="" /><h3 className='quck'>Super Dine In</h3>
        <p className='quckp'>
          Exprerice lightnig-fast delivery with fresh bites,ensureing your meal arrive swifty to your doostrap
          fresher in the write.
          </p>
        </div>
        <div className="minbox4"><img src={service3} alt="" /><h3 className='quck'>Easy pick Up</h3>
        <p className='quckp'>
          Exprerice lightnig-fast delivery with fresh bites,ensureing your meal arrive swifty to your doostrap
          fire in the write.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart