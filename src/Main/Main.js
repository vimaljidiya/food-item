import React from 'react'
import Cart from './Cart'
import Cardtile from './Cardtitle/Cardtile'
import Cart2 from './Cart2/Cart2'
import Data, { Data1 } from './Cart2/Data'
import Fresh from './Fresh/Fresh'
import Cart3 from './Cart3/Cart3'
import Fresh2 from './Fresh2/Fresh2'

const Main = () => {
  return (
    <>
   <Cart/>
   <Cardtile  cardttlename={'Popular Foods'}/>
   <Cart2 value={Data}/>
   <Fresh/>
   <Cardtile  cardttlename={'Hot Pizza'}/>
    <Cart3 value={Data1}/>
    <Fresh2/>
   </>
  )
}

export default Main