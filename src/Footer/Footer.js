import React from 'react';
import fimg from '../Task/assets/images/res-logo.png';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <>
    <div className="mainfooter">
       <div className="footerchild">
        <div className="footerbox">
           <div className="footerimg"><img src={fimg} className='foimg' /><h6>Fresh Bites</h6></div> 
           <p className='foop'>welcome to fresh bites.your  ultimate</p>
           <p className='foop'>destiretion for collection and fresh  online food ordering!</p>
        </div>
        <div className="footerbox">
            <h5 className='time'>Delivery Time</h5>
            <h6 className='week'>Monday-Friday</h6>
            <span>10:00am-11:00pm</span>
            <h6 className='week2'>Saturday-Sunday</h6>
            <span>Full Day</span>
        </div>
        <div className="footerbox">
        <h5 className='time'>Contact</h5>
        <h6 className='week'>Location:Sola,Ahemdabad</h6>
        <h6 className='week'>Phone:8515967835</h6>
        <h6 className='week'>Email:divta235@gmail.com</h6>

        </div>
        <div className="footerbox">
        <h5 className='time'>Newsletter</h5>
        <span>subcribe our nerwsletter</span>
         <input type="text"  className='emial' placeholder='Enter your  email'/>
         <div className="end">
            <span className='follow'>Follow:</span>
            <FaFacebookF  className='iconend'/>
            <FaGithub   className='iconend'/>
           <CiYoutube   className='iconend'/>
            <CiLinkedin  className='iconend' />
            
         </div>
        </div>
        </div> 
    </div>
    </>
  )
}

export default Footer