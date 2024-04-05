import React from 'react'
import './Cardtitle.css';

const Cardtile = ({cardttlename}) => {
  return (
    <>
        <div className="cardttle">
            <div className="cradtitle-chile">
                <a href="#" className='cardname'>{cardttlename}</a>
            </div>
        </div>
    </>
  )
}

export default Cardtile