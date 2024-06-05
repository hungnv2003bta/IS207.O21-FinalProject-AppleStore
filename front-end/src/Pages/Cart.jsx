import React from 'react'
import CartItems from '../Components/CartItems/CartItems.jsx'
import Navbar from '../Components/Navbar/Navbar'

const Cart = () => {
  return(
    <>
    <Navbar/>
      <div className='cart'>
        <CartItems />
      </div>
    )
    </>
  );
}

export default Cart

