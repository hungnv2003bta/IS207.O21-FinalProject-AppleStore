import React, { useContext } from 'react'
import './CartItems.css'
import {ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/remove_icon.png'

const CarItems = () => {
  const {all_product,cartItems,removeFromCart} = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Sản phẩm</p>
        <p>Tiêu đề </p>
        <p>Giá </p>
        <p>Số lượng</p>
        <p>Tổng tiền</p>
        <p>Xoá </p>
      </div>
      <hr/>
      <div>
        {all_product.map((e)=>{
          if(cartItems[e.id]>0){
            return <div>
              <div className="cartitems-format">
                <img src={e.image} alt="" classname="carticon-product-icon"/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                {/* <img src={remove_icon} onClick={()=> {removeFromCart(e.id)}} alt="" /> */}
                <i class='bx bx-trash' onClick={()=> {removeFromCart(e.id)}}></i>
              </div>
            </div>
          }
        })}
        <hr/>
      </div>
    </div>
  )
}

export default CarItems
